"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

/* ── Design tokens ───────────────────────────────── */
const font = {
  heading: "'Bricolage Grotesque', sans-serif",
  body: "'Plus Jakarta Sans', sans-serif",
};

const color = {
  primary: '#147850',
  primaryTint: '#f0faf5',
  primaryBorder: '#c0e8d4',
  border: '#f0ede8',
  bg: '#FAFAF8',
  heading: '#1C1C1C',
  body: '#555',
  muted: '#888',
  hint: '#aaa',
  error: '#c0392b',
  errorTint: '#fdf2f2',
  errorBorder: '#f5c6c6',
};

/* ── Input style helpers ─────────────────────────── */
function inputStyle(hasError = false) {
  return {
    width: '100%',
    backgroundColor: color.bg,
    border: `1px solid ${hasError ? color.errorBorder : color.border}`,
    borderRadius: '0.75rem',
    padding: '0.8125rem 1rem',
    fontFamily: font.body,
    fontWeight: 400,
    fontSize: '0.875rem',
    color: color.heading,
    outline: 'none',
    transition: 'border-color 0.15s ease',
    boxSizing: 'border-box',
  };
}

function labelStyle() {
  return {
    fontFamily: font.body,
    fontWeight: 500,
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: color.muted,
    marginBottom: '0.375rem',
    display: 'block',
  };
}

/* ── Field wrapper ───────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={labelStyle()}>{label}</label>
      {children}
      {error && (
        <p style={{
          fontFamily: font.body,
          fontWeight: 400,
          fontSize: '0.75rem',
          color: color.error,
          marginTop: '0.3rem',
        }}>
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Chevron for selects ─────────────────────────── */
function Chevron() {
  return (
    <span style={{
      position: 'absolute',
      right: '0.875rem',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: color.hint,
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}

/* ── Main component ──────────────────────────────── */
export default function ContactForm() {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success'
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);

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
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    setTimeout(() => { setStatus("success"); form.reset(); }, 1500);
  };

  const clear = (field) => setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });

  const focusStyle = (name, hasError) => ({
    ...inputStyle(hasError),
    borderColor: hasError
      ? color.errorBorder
      : focused === name
        ? color.primary
        : color.border,
    boxShadow: focused === name && !hasError
      ? `0 0 0 3px rgba(20,120,80,0.08)`
      : 'none',
  });

  /* Success state */
  if (status === "success") {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        border: `1px solid ${color.border}`,
        borderRadius: '1.25rem',
        padding: '4rem 2.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '540px',
      }}>
        {/* Icon */}
        <div style={{
          width: '3.5rem', height: '3.5rem',
          borderRadius: '9999px',
          backgroundColor: color.primaryTint,
          border: `1px solid ${color.primaryBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <CheckCircle size={22} color={color.primary} strokeWidth={1.75} />
        </div>

        <h3 style={{
          fontFamily: font.heading,
          fontWeight: 800,
          fontSize: '1.75rem',
          letterSpacing: '-0.02em',
          color: color.heading,
          marginBottom: '0.75rem',
        }}>
          Request <span style={{ color: color.primary }}>Received!</span>
        </h3>

        <p style={{
          fontFamily: font.body,
          fontWeight: 300,
          fontSize: '0.875rem',
          lineHeight: 1.75,
          color: color.body,
          maxWidth: '20rem',
          marginBottom: '2.5rem',
        }}>
          Thank you for choosing Shri Balaji. Our coordinator will call you within 2 hours to confirm your slot.
        </p>

        <button
          onClick={() => setStatus(null)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
            fontFamily: font.body, fontWeight: 500, fontSize: '0.8125rem',
            color: color.primary, background: 'none', border: 'none',
            cursor: 'pointer', borderBottom: `1px solid ${color.primaryBorder}`,
            paddingBottom: '2px',
          }}
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: `1px solid ${color.border}`,
      borderRadius: '1.25rem',
      padding: '2.5rem',
    }}>
      {/* Form header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
          <span style={{ display: 'block', width: '2rem', height: '1.5px', backgroundColor: color.primary }} />
          <span style={{
            fontFamily: font.body, fontWeight: 500, fontSize: '11px',
            letterSpacing: '0.1em', textTransform: 'uppercase', color: color.primary,
          }}>
            Appointment Request
          </span>
        </div>
        <h3 style={{
          fontFamily: font.heading, fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          letterSpacing: '-0.02em', color: color.heading,
          margin: '0 0 0.375rem',
        }}>
          Book an <span style={{ color: color.primary }}>Appointment</span>
        </h3>
        <p style={{
          fontFamily: font.body, fontWeight: 300,
          fontSize: '0.8125rem', color: color.hint,
        }}>
          Fields marked <span style={{ color: color.error }}>*</span> are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>

        {/* 2-column grid — responsive */}
        <div className="form-grid" style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>

          <Field label="Full Name *" error={errors.fullName}>
            <input
              name="fullName" type="text" placeholder="Rahul Sharma"
              onChange={() => clear("fullName")}
              onFocus={() => setFocused("fullName")}
              onBlur={() => setFocused(null)}
              style={focusStyle("fullName", !!errors.fullName)}
            />
          </Field>

          <Field label="Phone Number *" error={errors.phone}>
            <input
              name="phone" type="tel" placeholder="+91 98765 43210"
              onChange={() => clear("phone")}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
              style={focusStyle("phone", !!errors.phone)}
            />
          </Field>

          <Field label="Email Address">
            <input
              name="email" type="email" placeholder="rahul@example.com"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              style={focusStyle("email", false)}
            />
          </Field>

          <Field label="Service Required">
            <div style={{ position: 'relative' }}>
              <select
                name="service"
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused(null)}
                style={{ ...focusStyle("service", false), appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}
              >
                {SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>
              <Chevron />
            </div>
          </Field>

          <Field label="Preferred Date *" error={errors.date}>
            <input
              name="date" type="date"
              min={new Date().toISOString().split("T")[0]}
              onChange={() => clear("date")}
              onFocus={() => setFocused("date")}
              onBlur={() => setFocused(null)}
              style={focusStyle("date", !!errors.date)}
            />
          </Field>

          <Field label="Preferred Time *" error={errors.timeSlot}>
            <div style={{ position: 'relative' }}>
              <select
                name="timeSlot" defaultValue=""
                onChange={() => clear("timeSlot")}
                onFocus={() => setFocused("timeSlot")}
                onBlur={() => setFocused(null)}
                style={{ ...focusStyle("timeSlot", !!errors.timeSlot), appearance: 'none', paddingRight: '2.5rem', cursor: 'pointer' }}
              >
                <option value="" disabled>Select a slot</option>
                {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
              </select>
              <Chevron />
            </div>
          </Field>

        </div>

        {/* Message — full width */}
        <div style={{ marginBottom: '1rem' }}>
          <Field label="Message (optional)">
            <textarea
              name="message" rows={3}
              placeholder="Tell us about your concern..."
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              style={{ ...focusStyle("message", false), resize: 'none', fontFamily: font.body }}
            />
          </Field>
        </div>

        {/* Hairline divider */}
        <div style={{ height: '1px', backgroundColor: color.border, margin: '0.5rem 0 1rem' }} />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem',
            backgroundColor: status === "loading" ? '#a8d8c0' : color.primary,
            color: '#ffffff',
            fontFamily: font.body, fontWeight: 500, fontSize: '0.9375rem',
            padding: '1rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: status === "loading" ? 'not-allowed' : 'pointer',
            letterSpacing: '0.01em',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.backgroundColor = '#0f6040'; }}
          onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.backgroundColor = color.primary; }}
        >
          {status === "loading" ? (
            <>
              <span style={{
                width: '16px', height: '16px',
                border: '2px solid rgba(255,255,255,0.4)',
                borderTopColor: '#ffffff',
                borderRadius: '9999px',
                animation: 'spin 0.7s linear infinite',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              Booking...
            </>
          ) : (
            <>
              Request Appointment
              <Send size={15} strokeWidth={2} />
            </>
          )}
        </button>

      </form>

      {/* Spinner keyframe */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } .form-grid { grid-template-columns: 1fr; } @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }`}</style>
    </div>
  );
}