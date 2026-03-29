"use client";

import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      style={{
        backgroundColor: '#FAFAF8',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost watermark */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(6rem, 16vw, 14rem)',
          color: 'rgba(20,120,80,0.03)',
          position: 'absolute',
          bottom: '-1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        BOOK NOW
      </span>

      {/* Dot grids — left & right */}
      {[{ top: '2rem', left: '3rem' }, { top: '2rem', right: '3rem' }].map((pos, idx) => (
        <div
          key={idx}
          aria-hidden="true"
          style={{
            position: 'absolute',
            ...pos,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} style={{
              width: '3px', height: '3px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(20,120,80,0.18)',
            }} />
          ))}
        </div>
      ))}

      <div style={{ maxWidth: '40rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          <span style={{ display: 'block', width: '1.5rem', height: '1.5px', backgroundColor: '#147850' }} />
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#147850',
          }}>
            Book Your Visit Today
          </span>
          <span style={{ display: 'block', width: '1.5rem', height: '1.5px', backgroundColor: '#147850' }} />
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          letterSpacing: '-0.03em',
          color: '#1C1C1C',
          lineHeight: 1.1,
          margin: '0 auto 1.25rem',
        }}>
          Get the Care Your{' '}
          <span style={{ color: '#147850' }}>Smile</span>{' '}
          Deserves
        </h2>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          color: '#888',
          margin: '0 auto 2.5rem',
        }}>
          From routine checkups to advanced treatments — here to help you feel confident and comfortable every step of the way.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.875rem',
          marginBottom: '2rem',
        }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#147850',
              color: '#ffffff',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.875rem',
              padding: '0.9rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#0f6040';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#147850';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Your Appointment
            <ChevronRight size={15} strokeWidth={2.5} />
          </Link>

          <a
            href="tel:+919876543210"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'transparent',
              color: '#147850',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.875rem',
              padding: '0.9rem 1.75rem',
              borderRadius: '9999px',
              border: '1px solid #c0e8d4',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#147850';
              e.currentTarget.style.borderColor = '#147850';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#c0e8d4';
              e.currentTarget.style.color = '#147850';
            }}
          >
            <Phone size={14} strokeWidth={2} />
            Call Now
          </a>
        </div>

        {/* Trust line */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.75rem', color: '#aaa' }}>
            Free consultation for first-time patients
          </span>
          <span style={{ width: '3px', height: '3px', borderRadius: '9999px', backgroundColor: 'rgba(20,120,80,0.3)', display: 'inline-block' }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.75rem', color: '#aaa' }}>
            Open daily
          </span>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.75rem', color: '#ccc' }}>
            (T&C apply)
          </span>
        </div>

      </div>
    </section>
  );
}