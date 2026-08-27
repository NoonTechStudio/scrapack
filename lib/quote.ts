// Shared shape + human-readable labels for the "Request a Quote" form.
// Imported by both the client form and the /api/quote route handler so the
// two never drift apart.

export type QuotePayload = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  grade: string;
  quantity: string;
  frequency: string;
  port: string;
  paymentTerms: string;
  timeline: string;
  message: string;
  source: string;
};

export const ROLE_LABELS: Record<string, string> = {
  "us-supplier": "US Recycler / Collector / Exporter",
  "indian-buyer": "Paper Mill / Rubber Processor / Trader",
  broker: "Broker / Agent",
  other: "Other",
};

export const GRADE_LABELS: Record<string, string> = {
  "grade-11": "OCC Grade 11 — Double-Sorted",
  "grade-12": "OCC Grade 12 — Regular",
  both: "OCC Grade 11 & 12",
  "tires-pcr": "Passenger Car (PCR) Tire Bales",
  "tires-mixed": "Mixed Tire Bales (PCR / LTR / SUV)",
  "tires-truck": "Truck Tire Bales",
  "tires-whole": "Whole Scrap Tires (unbaled)",
  "not-sure": "Not sure yet",
};

export const QUANTITY_LABELS: Record<string, string> = {
  "1-container": "1 Container (~20–26 MT)",
  "2-5-containers": "2–5 Containers / month",
  "5-10-containers": "5–10 Containers / month",
  "10plus-containers": "10+ Containers / month",
  custom: "Custom — specified in message",
};

export const FREQUENCY_LABELS: Record<string, string> = {
  "one-time": "One-time shipment",
  monthly: "Monthly — regular supply",
  "bi-monthly": "Every 2 months",
  quarterly: "Quarterly",
  "as-needed": "As needed / spot",
};

export const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP — ready now",
  "1-month": "Within 1 month",
  "1-3-months": "1–3 months",
  "3-6-months": "3–6 months",
  exploring: "Just exploring / planning",
};

export const PORT_LABELS: Record<string, string> = {
  "nhava-sheva": "Nhava Sheva (JNPT), Mumbai",
  mundra: "Mundra, Gujarat",
  chennai: "Chennai",
  kolkata: "Kolkata",
  vizag: "Visakhapatnam (Vizag)",
  pipavav: "Pipavav, Gujarat",
  other: "Other — specified in message",
};

export const PAYMENT_LABELS: Record<string, string> = {
  "tt-advance": "100% TT Advance",
  "lc-at-sight": "LC at Sight",
  "tt-bl": "TT against B/L copy",
  open: "Open to discussion",
};

export const COUNTRY_LABELS: Record<string, string> = {
  usa: "United States",
  india: "India",
  other: "Other",
};

export const SOURCE_LABELS: Record<string, string> = {
  google: "Google Search",
  referral: "Referral / Word of mouth",
  linkedin: "LinkedIn",
  whatsapp: "WhatsApp",
  other: "Other",
};

export const labelFor = (map: Record<string, string>, value: string) =>
  value ? map[value] ?? value : "";
