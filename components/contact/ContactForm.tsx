'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    grade: '',
    quantity: '',
    port: '',
    message: '',
    source: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  }

  const fieldClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FDFAF4] text-[#1A2E1A] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/30 focus:border-[#2E7D32] transition-all duration-200';

  return (
    <div ref={cardRef} className="reveal reveal-delay-1 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-[#1A2E1A]">Message Sent!</h3>
          <p className="text-[#6B7280] mt-3 leading-relaxed">
            Thank you for reaching out to ScraPack Solutions. We will review your enquiry and get back to you within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/12019142222"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-sm"
            >
              💬 WhatsApp Us Directly
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="border-2 border-[#1B5E20] text-[#1B5E20] font-bold px-6 py-3 rounded-full text-sm cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <p className="text-[#E8820C] text-xs font-bold tracking-widest uppercase">QUOTE REQUEST FORM</p>
            <h2 className="text-3xl font-black text-[#1A2E1A] mt-2">Request a Quote</h2>
            <p className="text-[#6B7280] text-sm mt-2">
              Fill in your details below and we will respond within 24 hours with a competitive offer.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Row 1 — Name + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={fieldClass}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company or business"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Row 2 — Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={fieldClass}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (xxx) xxx-xxxx"
                  className={fieldClass}
                  required
                />
              </div>
            </div>

            {/* Row 3 — Role + Grade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">I am a... *</label>
                <select name="role" value={form.role} onChange={handleChange} className={fieldClass} required>
                  <option value="">Select your role</option>
                  <option value="us-supplier">US OCC Recycler / Exporter</option>
                  <option value="indian-buyer">Indian Paper Mill / Trader</option>
                  <option value="broker">Broker / Agent</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">OCC Grade Required</label>
                <select name="grade" value={form.grade} onChange={handleChange} className={fieldClass}>
                  <option value="">Select OCC grade</option>
                  <option value="grade-11">OCC Grade 11</option>
                  <option value="grade-12">OCC Grade 12</option>
                  <option value="both">Both Grade 11 &amp; 12</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* Row 4 — Quantity + Port */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">Quantity Required (MT/month)</label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 100 MT per month"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1A2E1A]">Port of Discharge</label>
                <input
                  type="text"
                  name="port"
                  value={form.port}
                  onChange={handleChange}
                  placeholder="e.g. Nhava Sheva, Mundra"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Row 5 — Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1A2E1A]">Message / Additional Details</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us more about your requirements, preferred payment terms, or any questions you have..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            {/* Row 6 — Source */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1A2E1A]">How did you hear about us?</label>
              <select name="source" value={form.source} onChange={handleChange} className={fieldClass}>
                <option value="">How did you find us?</option>
                <option value="google">Google Search</option>
                <option value="referral">Referral / Word of mouth</option>
                <option value="linkedin">LinkedIn</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-[#E8820C] hover:bg-[#C96B00] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#E8820C]/25 hover:shadow-xl hover:shadow-[#E8820C]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Quote Request →'
              )}
            </button>

            <p className="text-xs text-[#6B7280] text-center mt-3">
              🔒 Your information is confidential and will never be shared with third parties.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
