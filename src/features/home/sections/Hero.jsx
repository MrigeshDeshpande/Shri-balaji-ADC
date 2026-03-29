"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight, Shield } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years of Care' },
  { value: '500+', label: 'Happy Patients' },
  { value: '4.9★', label: 'Google Rating' },
];

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: '#FAFAF8',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Subtle dot-grid decoration — top right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '4rem',
          right: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '10px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} style={{
            width: '3px', height: '3px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(20,120,80,0.18)',
          }} />
        ))}
      </div>

      {/* Large ghost text decoration */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(8rem, 18vw, 16rem)',
          color: 'rgba(20,120,80,0.03)',
          position: 'absolute',
          bottom: '-2rem',
          right: '-1rem',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        SMILE
      </span>

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        width: '100%',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Eyebrow badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            backgroundColor: '#f0faf5',
            border: '1px solid #c0e8d4',
            borderRadius: '9999px',
            padding: '0.35rem 0.875rem',
            marginBottom: '2rem',
          }}>
            <Shield size={13} color="#147850" strokeWidth={2} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0f6e56',
            }}>
              Bhilai's #1 Rated Dental Clinic
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            color: '#1C1C1C',
            marginBottom: '1.75rem',
          }}>
            Your Smile<br />
            <span style={{
              color: '#147850',
              fontStyle: 'italic',
              fontWeight: 800,
            }}>Deserves</span><br />
            Expert Care.
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.75,
            color: '#555',
            marginBottom: '1.5rem',
            maxWidth: '30rem',
          }}>
            Advanced dental care with modern technology and a gentle approach — so you feel confident at every step.
          </p>

          {/* Free consult callout */}
          <div style={{
            borderLeft: '3px solid #147850',
            paddingLeft: '1rem',
            marginBottom: '2.25rem',
            backgroundColor: '#f0faf5',
            borderRadius: '0 0.75rem 0.75rem 0',
            padding: '0.875rem 1rem',
          }}>
            <p style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: '0.9375rem',
              color: '#147850',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Free Consultation for First-Time Patients
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '0.8125rem',
              color: '#888',
              margin: '0.25rem 0 0',
            }}>
              Available daily · 7 PM – 9 PM
            </p>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <a
              href="https://wa.me/9111594782?text=Hi%2C%20I%20found%20your%20clinic%20online.%20I%E2%80%99d%20like%20to%20know%20more%20about%20treatment%20and%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#147850',
                color: '#ffffff',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.875rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0f6040'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#147850'}
            >
              {/* WhatsApp icon inline */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Talk to Doctor on WhatsApp
            </a>

            <a
              href="tel:+9111594782"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'transparent',
                color: '#147850',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.875rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '9999px',
                border: '1px solid #c0e8d4',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#147850';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = '#147850';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#147850';
                e.currentTarget.style.borderColor = '#c0e8d4';
              }}
            >
              <Phone size={15} strokeWidth={2} />
              Call Now
            </a>
          </div>

          {/* Micro trust + explore link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              color: '#aaa',
              margin: 0,
            }}>
              Instant reply on WhatsApp
            </p>
            <span style={{ width: '1px', height: '12px', backgroundColor: '#e0e0e0' }} />
            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.8125rem',
                color: '#147850',
                textDecoration: 'none',
              }}
            >
              Explore Services
              <ChevronRight size={13} strokeWidth={2} />
            </Link>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #f0ede8',
            flexWrap: 'wrap',
          }}>
            {stats.map((s, i) => (
              <div key={i}>
                <p style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.02em',
                  color: '#147850',
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#888',
                  margin: '0.25rem 0 0',
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT COLUMN — Image ── */}
        <div style={{ position: 'relative' }}>

          {/* Main image frame */}
          <div style={{
            position: 'relative',
            height: '560px',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            border: '1px solid #f0ede8',
          }}>
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070"
              alt="Modern Dental Operatory at Shri Balaji"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle green overlay at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(26,46,34,0.5), transparent)',
            }} />
          </div>

          {/* Floating review card */}
          <div style={{
            position: 'absolute',
            bottom: '-1.5rem',
            left: '-1.5rem',
            backgroundColor: '#ffffff',
            border: '1px solid #f0ede8',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            maxWidth: '15rem',
            display: 'none', // shown via CSS on md+
          }}
            className="hidden md:block"
          >
            <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: '#147850', fontSize: '0.875rem' }}>★</span>
              ))}
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '0.8125rem',
              lineHeight: 1.6,
              color: '#555',
              fontStyle: 'italic',
              margin: '0 0 0.75rem',
            }}>
              "The most painless root canal I've ever had. Highly recommend!"
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#aaa',
              margin: 0,
            }}>
              — Rahul Sharma
            </p>
          </div>

          {/* Floating stat badge — top right of image */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '-1rem',
            backgroundColor: '#1a2e22',
            borderRadius: '0.875rem',
            padding: '0.875rem 1.25rem',
            border: '1px solid rgba(110,207,154,0.2)',
          }}>
            <p style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: '1.25rem',
              color: '#6ecf9a',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>
              4.9★
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              margin: '0.25rem 0 0',
              whiteSpace: 'nowrap',
            }}>
              Google Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}