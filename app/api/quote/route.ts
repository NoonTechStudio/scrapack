import { Resend } from "resend";
import {
  COUNTRY_LABELS,
  FREQUENCY_LABELS,
  GRADE_LABELS,
  PAYMENT_LABELS,
  PORT_LABELS,
  QUANTITY_LABELS,
  QuotePayload,
  ROLE_LABELS,
  SOURCE_LABELS,
  TIMELINE_LABELS,
  labelFor,
} from "@/lib/quote";

// Tolerate stray surrounding quotes / whitespace that can sneak in when an env
// var is pasted into a dashboard (e.g. Vercel takes the value literally).
const cleanEnv = (v: string | undefined) =>
  (v || "").trim().replace(/^["']|["']$/g, "").trim();

const TO_EMAIL = cleanEnv(process.env.QUOTE_TO_EMAIL) || "admin@scrapacksolutions.com";
// Fallback sender only works before the domain is verified in Resend, and only
// delivers to the Resend account owner. Once scrapacksolutions.com is verified,
// set QUOTE_FROM_EMAIL to an address on that domain.
const FROM_EMAIL =
  cleanEnv(process.env.QUOTE_FROM_EMAIL) ||
  "ScraPack Solutions Website <onboarding@resend.dev>";

const REQUIRED_FIELDS: (keyof QuotePayload)[] = [
  "fullName",
  "email",
  "phone",
  "role",
  "grade",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });

function buildRows(data: QuotePayload) {
  return [
    ["Name", data.fullName],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone],
    ["Country", labelFor(COUNTRY_LABELS, data.country)],
    ["Role", labelFor(ROLE_LABELS, data.role)],
    ["Material & Grade", labelFor(GRADE_LABELS, data.grade)],
    ["Monthly Volume", labelFor(QUANTITY_LABELS, data.quantity)],
    ["Shipment Frequency", labelFor(FREQUENCY_LABELS, data.frequency)],
    ["Preferred Timeline", labelFor(TIMELINE_LABELS, data.timeline)],
    ["Port of Discharge", labelFor(PORT_LABELS, data.port)],
    ["Payment Terms", labelFor(PAYMENT_LABELS, data.paymentTerms)],
    ["Heard About Us", labelFor(SOURCE_LABELS, data.source)],
  ].filter(([, v]) => v && String(v).trim().length > 0) as [string, string][];
}

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data: QuotePayload = {
    fullName: (body.fullName || "").trim(),
    company: (body.company || "").trim(),
    email: (body.email || "").trim(),
    phone: (body.phone || "").trim(),
    country: (body.country || "").trim(),
    role: (body.role || "").trim(),
    grade: (body.grade || "").trim(),
    quantity: (body.quantity || "").trim(),
    frequency: (body.frequency || "").trim(),
    port: (body.port || "").trim(),
    paymentTerms: (body.paymentTerms || "").trim(),
    timeline: (body.timeline || "").trim(),
    message: (body.message || "").trim(),
    source: (body.source || "").trim(),
  };

  const missing = REQUIRED_FIELDS.filter((f) => !data[f]);
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(data.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (data.message.length > 5000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[quote] RESEND_API_KEY is not set");
    return Response.json(
      { error: "Email service is not configured yet. Please contact us on WhatsApp." },
      { status: 500 },
    );
  }

  const rows = buildRows(data);
  const rowsHtml = rows
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:8px 14px;background:#F2F9F5;font-weight:600;color:#16281F;white-space:nowrap;vertical-align:top">${esc(k)}</td>
          <td style="padding:8px 14px;color:#16281F">${esc(v)}</td>
        </tr>`,
    )
    .join("");

  const messageHtml = data.message
    ? `<h3 style="margin:24px 0 8px;color:#16281F;font-size:15px">Message / Additional Requirements</h3>
       <p style="white-space:pre-wrap;color:#16281F;line-height:1.6;margin:0">${esc(data.message)}</p>`
    : "";

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;color:#16281F">
    <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8A6224;font-weight:700;margin:0 0 4px">New Export Quote Request</p>
    <h2 style="margin:0 0 16px;font-size:20px">${esc(data.fullName)}${data.company ? ` &mdash; ${esc(data.company)}` : ""}</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px;border:1px solid #E5EAE7;border-radius:8px;overflow:hidden">
      ${rowsHtml}
    </table>
    ${messageHtml}
    <p style="margin:24px 0 0;font-size:12px;color:#6C7A73">Sent from the scrapacksolutions.com quote form. Reply directly to reach ${esc(data.fullName.split(" ")[0] || "the sender")}.</p>
  </div>`;

  const text = [
    "New Export Quote Request",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    data.message ? `Message:\n${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data: sent, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `Quote request — ${data.fullName}${data.company ? ` (${data.company})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("[quote] Resend error:", { from: FROM_EMAIL, to: TO_EMAIL, error });
      return Response.json(
        {
          error:
            "We couldn't send your request right now. Please try WhatsApp or email us directly.",
          detail: error.name || error.message || null,
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, id: sent?.id ?? null });
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again or contact us on WhatsApp." },
      { status: 500 },
    );
  }
}

// Lightweight config check — no secrets, safe to hit in a browser.
// Visit /api/quote on the deployment to confirm the env vars are wired.
export async function GET() {
  const from = FROM_EMAIL;
  return Response.json({
    resendKeyPresent: !!cleanEnv(process.env.RESEND_API_KEY),
    to: TO_EMAIL,
    from,
    fromLooksValid: /^[^<>]*<[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+>$|^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(
      from,
    ),
  });
}
