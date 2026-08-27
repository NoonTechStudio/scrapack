'use client';

import { useState, useRef, useEffect } from 'react';
import { LockIcon } from '@/components/icons';
import {
  GRADE_LABELS,
  QUANTITY_LABELS,
  ROLE_LABELS,
  TIMELINE_LABELS,
  PORT_LABELS,
  labelFor,
  type QuotePayload,
} from '@/lib/quote';

const STEPS = ['Your Info', 'Trade Details', 'Requirements'];

const INITIAL_FORM: QuotePayload = {
  fullName: '', company: '', email: '', phone: '', country: '',
  role: '', grade: '', quantity: '', frequency: '',
  port: '', paymentTerms: '', timeline: '', message: '', source: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<QuotePayload>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function goToStep(next: number) {
    setError(null);
    setStep(next);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(payload?.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setStep(0);
    setForm(INITIAL_FORM);
    setError(null);
  }

  const fieldClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBF8F2] text-[#16281F] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#217344]/30 focus:border-[#217344] hover:border-gray-300 transition-all duration-200';
  const selectClass = `${fieldClass} appearance-none bg-no-repeat pr-10 cursor-pointer`;
  const labelClass = 'text-sm font-semibold text-[#16281F]';
  // Inline chevron so every <select> matches regardless of OS styling.
  const chevronStyle: React.CSSProperties = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236C7A73' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '1.1rem',
  };

  const emailValid = !form.email || EMAIL_RE.test(form.email);
  const isStep0Valid = !!(form.fullName && form.email && EMAIL_RE.test(form.email) && form.phone && form.role);
  const isStep1Valid = !!form.grade;

  return (
    <div ref={cardRef} className="reveal reveal-delay-1 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-28">

      {submitted ? (
        /* ── SUCCESS SCREEN ── */
        <div className="p-8 md:p-10 text-center py-10">
          <div className="w-24 h-24 bg-[#E6F2EA] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#217344]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#E6F2EA] text-[#175434] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Quote Request Received
          </div>
          <h3 className="text-3xl font-black text-[#16281F]">
            Thank You{form.fullName ? `, ${form.fullName.split(' ')[0]}` : ''}!
          </h3>
          <p className="text-[#6C7A73] mt-3 leading-relaxed max-w-sm mx-auto">
            We have received your quote request and will get back to you within{' '}
            <strong className="text-[#16281F]">24 business hours</strong> with a competitive offer.
          </p>

          <div className="mt-8 bg-[#FBF8F2] rounded-2xl p-5 text-left max-w-sm mx-auto border border-gray-100">
            <p className="text-xs font-bold tracking-widest uppercase text-[#8A6224] mb-3">Your Request Summary</p>
            <div className="space-y-2 text-sm">
              {form.company && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#6C7A73]">Company</span>
                  <span className="font-semibold text-[#16281F] text-right">{form.company}</span>
                </div>
              )}
              {form.role && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#6C7A73]">Role</span>
                  <span className="font-semibold text-[#16281F] text-right">{labelFor(ROLE_LABELS, form.role)}</span>
                </div>
              )}
              {form.grade && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#6C7A73]">Grade</span>
                  <span className="font-semibold text-[#16281F] text-right">{labelFor(GRADE_LABELS, form.grade)}</span>
                </div>
              )}
              {form.quantity && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#6C7A73]">Volume</span>
                  <span className="font-semibold text-[#16281F] text-right">{labelFor(QUANTITY_LABELS, form.quantity)}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/12019142222"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE59] transition-colors text-white font-bold px-6 py-3 rounded-full text-sm flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Directly
            </a>
            <button
              onClick={handleReset}
              className="border-2 border-[#175434] text-[#175434] hover:bg-[#175434] hover:text-white transition-colors font-bold px-6 py-3 rounded-full text-sm cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        /* ── MULTI-STEP FORM ── */
        <>
          {/* Header banner */}
          <div className="bg-gradient-to-r from-[#175434] to-[#217344] px-8 md:px-10 pt-6 pb-7">
            <p className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#E8BA74' }}>Export Quote Request</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-1">Request a Quote</h2>
            <p className="text-white/70 text-sm mt-1">We respond within 24 hours with a competitive offer.</p>

            {/* Step indicator */}
            <div className="flex items-start gap-0 mt-6">
              {STEPS.map((label, i) => (
                <div key={i} className="flex items-start flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                      i < step ? 'bg-[#E8BA74] text-[#16281F]' : i === step ? 'bg-white text-[#175434] ring-4 ring-white/25' : 'bg-white/15 text-white/50'
                    }`}>
                      {i < step ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (i + 1)}
                    </div>
                    <span className={`text-[10px] font-semibold whitespace-nowrap transition-colors ${i <= step ? 'text-white' : 'text-white/45'}`}>{label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-0.5 mx-2 mt-4 bg-white/15 overflow-hidden rounded-full">
                      <div className={`h-full bg-[#E8BA74] transition-all duration-500 ${i < step ? 'w-full' : 'w-0'}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-8 md:px-10 py-8 space-y-5">

            {/* ── STEP 0: Your Info ── */}
            {step === 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
                      placeholder="Your full name" className={fieldClass} required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company or business" className={fieldClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={`${fieldClass} ${!emailValid ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                      required />
                    {!emailValid && <span className="text-xs text-red-500">Enter a valid email address.</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>WhatsApp / Phone <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 (xxx) xxx-xxxx" className={fieldClass} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>I am a... <span className="text-red-500">*</span></label>
                    <select name="role" value={form.role} onChange={handleChange} className={selectClass} style={chevronStyle} required>
                      <option value="">Select your role</option>
                      <option value="us-supplier">US Recycler / Collector / Exporter</option>
                      <option value="indian-buyer">Paper Mill / Rubber Processor / Trader</option>
                      <option value="broker">Broker / Agent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Country</label>
                    <select name="country" value={form.country} onChange={handleChange} className={selectClass} style={chevronStyle}>
                      <option value="">Select country</option>
                      <option value="usa">United States</option>
                      <option value="india">India</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>How did you hear about us?</label>
                  <select name="source" value={form.source} onChange={handleChange} className={selectClass} style={chevronStyle}>
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Referral / Word of mouth</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="button"
                  disabled={!isStep0Valid}
                  onClick={() => goToStep(1)}
                  className="w-full btn btn-gold py-4 rounded-xl text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next: Trade Details →
                </button>
                {!isStep0Valid && (
                  <p className="text-xs text-[#6C7A73] text-center">Add your name, a valid email, phone and role to continue.</p>
                )}
              </>
            )}

            {/* ── STEP 1: Trade Details ── */}
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Material &amp; Grade Required <span className="text-red-500">*</span></label>
                    <select name="grade" value={form.grade} onChange={handleChange} className={selectClass} style={chevronStyle} required>
                      <option value="">Select material / grade</option>
                      <optgroup label="OCC — Corrugated Cardboard">
                        <option value="grade-11">OCC Grade 11 — Double-Sorted</option>
                        <option value="grade-12">OCC Grade 12 — Regular</option>
                        <option value="both">Both Grade 11 &amp; 12</option>
                      </optgroup>
                      <optgroup label="Scrap Tires">
                        <option value="tires-pcr">Passenger Car (PCR) Tire Bales</option>
                        <option value="tires-mixed">Mixed Tire Bales (PCR / LTR / SUV)</option>
                        <option value="tires-truck">Truck Tire Bales</option>
                        <option value="tires-whole">Whole Scrap Tires (unbaled)</option>
                      </optgroup>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Monthly Volume (MT)</label>
                    <select name="quantity" value={form.quantity} onChange={handleChange} className={selectClass} style={chevronStyle}>
                      <option value="">Select volume</option>
                      <option value="1-container">1 Container (~20–26 MT)</option>
                      <option value="2-5-containers">2–5 Containers / month</option>
                      <option value="5-10-containers">5–10 Containers / month</option>
                      <option value="10plus-containers">10+ Containers / month</option>
                      <option value="custom">Custom — specify in message</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Shipment Frequency</label>
                    <select name="frequency" value={form.frequency} onChange={handleChange} className={selectClass} style={chevronStyle}>
                      <option value="">Select frequency</option>
                      <option value="one-time">One-time shipment</option>
                      <option value="monthly">Monthly — regular supply</option>
                      <option value="bi-monthly">Every 2 months</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="as-needed">As needed / spot</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Preferred Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange} className={selectClass} style={chevronStyle}>
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP — ready now</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1–3 months</option>
                      <option value="3-6-months">3–6 months</option>
                      <option value="exploring">Just exploring / planning</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Port of Discharge</label>
                    <select name="port" value={form.port} onChange={handleChange} className={selectClass} style={chevronStyle}>
                      <option value="">Select port</option>
                      <optgroup label="India">
                        <option value="nhava-sheva">Nhava Sheva (JNPT), Mumbai</option>
                        <option value="mundra">Mundra, Gujarat</option>
                        <option value="chennai">Chennai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="vizag">Visakhapatnam (Vizag)</option>
                        <option value="pipavav">Pipavav, Gujarat</option>
                      </optgroup>
                      <option value="other">Other — specify in message</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Preferred Payment Terms</label>
                    <select name="paymentTerms" value={form.paymentTerms} onChange={handleChange} className={selectClass} style={chevronStyle}>
                      <option value="">Select payment terms</option>
                      <option value="tt-advance">100% TT Advance</option>
                      <option value="lc-at-sight">LC at Sight</option>
                      <option value="tt-bl">TT against B/L copy</option>
                      <option value="open">Open to discussion</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => goToStep(0)}
                    className="flex-1 border-2 border-gray-200 text-[#6C7A73] font-bold py-4 rounded-xl text-sm hover:border-gray-300 transition-all cursor-pointer">
                    ← Back
                  </button>
                  <button type="button" disabled={!isStep1Valid} onClick={() => goToStep(2)}
                    className="flex-[3] btn btn-gold py-4 rounded-xl text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                    Next: Your Requirements →
                  </button>
                </div>
                {!isStep1Valid && (
                  <p className="text-xs text-[#6C7A73] text-center">Choose a material &amp; grade to continue.</p>
                )}
              </>
            )}

            {/* ── STEP 2: Requirements ── */}
            {step === 2 && (
              <>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Message / Additional Requirements</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Tell us more about your requirements — moisture tolerance, bale size preferences, loading port, certifications needed, or any other questions..."
                    className={`${fieldClass} resize-none`} />
                </div>

                {/* Summary card */}
                <div className="bg-[#F2F9F5] rounded-2xl p-5 border border-[#217344]/15">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#217344] mb-3">Your Request Summary</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <div><span className="text-[#6C7A73]">Name: </span><span className="font-semibold text-[#16281F]">{form.fullName}</span></div>
                    {form.company && <div><span className="text-[#6C7A73]">Company: </span><span className="font-semibold text-[#16281F]">{form.company}</span></div>}
                    <div className="break-all"><span className="text-[#6C7A73]">Email: </span><span className="font-semibold text-[#16281F]">{form.email}</span></div>
                    <div><span className="text-[#6C7A73]">Phone: </span><span className="font-semibold text-[#16281F]">{form.phone}</span></div>
                    {form.grade && <div><span className="text-[#6C7A73]">Grade: </span><span className="font-semibold text-[#16281F]">{labelFor(GRADE_LABELS, form.grade)}</span></div>}
                    {form.quantity && <div><span className="text-[#6C7A73]">Volume: </span><span className="font-semibold text-[#16281F]">{labelFor(QUANTITY_LABELS, form.quantity)}</span></div>}
                    {form.port && <div><span className="text-[#6C7A73]">Port: </span><span className="font-semibold text-[#16281F]">{labelFor(PORT_LABELS, form.port)}</span></div>}
                    {form.timeline && <div><span className="text-[#6C7A73]">Timeline: </span><span className="font-semibold text-[#16281F]">{labelFor(TIMELINE_LABELS, form.timeline)}</span></div>}
                  </div>
                </div>

                {error && (
                  <div role="alert" className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                <div className="flex gap-3">
                  <button type="button" onClick={() => goToStep(1)} disabled={loading}
                    className="flex-1 border-2 border-gray-200 text-[#6C7A73] font-bold py-4 rounded-xl text-sm hover:border-gray-300 transition-all cursor-pointer disabled:opacity-50">
                    ← Back
                  </button>
                  <button type="submit" disabled={loading}
                    className="flex-[3] btn btn-gold py-4 rounded-xl text-base disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Submit Quote Request →'}
                  </button>
                </div>

                <p className="text-xs text-[#6C7A73] text-center flex items-center justify-center gap-1.5">
                  <LockIcon size={13} />
                  Your information is confidential and will never be shared with third parties.
                </p>
              </>
            )}
          </form>
        </>
      )}
    </div>
  );
}
