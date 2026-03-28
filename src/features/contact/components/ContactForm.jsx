"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const SERVICES = [
  "General Checkup",
  "Root Canal Therapy",
  "Teeth Whitening",
  "Dental Implants",
  "Invisalign / Braces",
  "Tooth Extraction",
  "Crowns & Bridges",
  "Pediatric Dentistry",
  "Gum Treatment",
  "Smile Makeover",
];

const TIME_SLOTS = [
  "Morning  (10 AM – 1 PM)",
  "Afternoon (1 PM – 5 PM)",
  "Evening  (5 PM – 8 PM)",
];

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = (form) => {
    const errs = {};
    const name = form.elements.namedItem("fullName").value.trim();
    const phone = form.elements.namedItem("phone").value.trim();
    const date = form.elements.namedItem("date").value;
    const slot = form.elements.namedItem("timeSlot").value;

    if (!name) errs.fullName = "Name is required";
    if (!phone) errs.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-]{8,}$/.test(phone)) errs.phone = "Enter a valid phone number";
    if (!date) errs.date = "Please select a date";
    if (!slot) errs.timeSlot = "Please select a time slot";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 1500);
  };

  const clear = (field) => {
    setErrors((prev) => {
      const n = { ...prev };
      delete n[field];
      return n;
    });
  };

  if (status === "success") {
    return (
      <div className="bg-white p-12 rounded-[40px] border border-gray-100 text-center flex flex-col items-center justify-center min-h-[540px]">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 text-2xl border border-green-100">✓</div>
        <h3 className="text-3xl font-heading mb-3">Request Received!</h3>
        <p className="text-gray-500 max-w-xs leading-relaxed mb-8">
          Thank you for choosing Shri Balaji. Our coordinator will call you within 2 hours to confirm your slot.
        </p>
        <button
          onClick={() => setStatus(null)}
          className="text-primary font-bold underline underline-offset-4 hover:opacity-70 transition-opacity text-sm"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100">
      <h3 className="text-3xl font-heading mb-1">Book an Appointment</h3>
      <p className="text-xs text-gray-400 mb-8">
        Fields marked <span className="text-red-400">*</span> are required.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Full Name" error={errors.fullName}>
            <input
              name="fullName"
              type="text"
              placeholder="Rahul Sharma"
              required
              onChange={() => clear("fullName")}
              className={inputCls(errors.fullName)}
            />
          </Field>

          <Field label="Phone Number" error={errors.phone} required>
            <input
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              onChange={() => clear("phone")}
              className={inputCls(errors.phone)}
            />
          </Field>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Email Address">
            <input
              name="email"
              type="email"
              placeholder="rahul@example.com"
              className={inputCls()}
            />
          </Field>

          <Field label="Service Required">
            <div className="relative">
              <select name="service" className={selectCls()}>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <Chevron />
            </div>
          </Field>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Preferred Date" error={errors.date} required>
            <input
              name="date"
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              onChange={() => clear("date")}
              className={inputCls(errors.date)}
            />
          </Field>

          <Field label="Preferred Time" error={errors.timeSlot} required>
            <div className="relative">
              <select
                name="timeSlot"
                defaultValue=""
                onChange={() => clear("timeSlot")}
                className={selectCls(errors.timeSlot)}
              >
                <option value="" disabled>
                  Select a slot
                </option>
                {TIME_SLOTS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <Chevron />
            </div>
          </Field>
        </div>

        {/* Message */}
        <Field label="Message (optional)">
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your concern..."
            className={`${inputCls()} resize-none`}
          />
        </Field>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary text-white py-4 rounded-full font-bold text-base hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {status === "loading" ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Booking...
            </>
          ) : (
            <>
              Request Appointment <Send size={16} />
            </>
          )}
        </button>

      </form>
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────── */

const base =
  "w-full bg-[#FAFAF8] rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition-all";

const inputCls = (err) =>
  `${base} border ${
    err
      ? "border-red-300 focus:ring-2 focus:ring-red-100"
      : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
  }`;

const selectCls = (err) =>
  `${inputCls(err)} appearance-none pr-10 cursor-pointer`;

function Field({ label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
        {label}{" "}
        {required && (
          <span className="text-red-400 normal-case tracking-normal">*</span>
        )}
      </label>
      {children}
      {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
    </div>
  );
}

function Chevron() {
  return (
    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}