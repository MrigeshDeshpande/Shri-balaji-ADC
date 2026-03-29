"use client";

import { 
  Zap, 
  Activity, 
  Sparkles, 
  Smile, 
  Baby, 
  ShieldCheck,
  ChevronRight 
} from 'lucide-react';

const servicesData = [
  {
    title: "Root Canal Therapy",
    desc: "A painless, laser-assisted procedure to save your natural tooth from infection and decay.",
    features: ["Laser-assisted cleaning", "Single-sitting options", "Bio-compatible filling"],
    icon: Zap
  },
  {
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements designed for strength and long-term comfort.",
    features: ["Swiss-grade implants", "3D guided surgery", "Lifetime warranty"],
    icon: Activity
  },
  {
    title: "Teeth Whitening",
    desc: "Professional brightening that removes deep stains safely in a single session.",
    features: ["Enamel-safe gels", "Instant results", "Custom kits"],
    icon: Sparkles
  },
  {
    title: "Smile Makeover",
    desc: "A combination of advanced techniques to enhance aesthetics and restore confidence.",
    features: ["Digital Smile Design", "Porcelain veneers", "Face mapping"],
    icon: Smile
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle care tailored to children for a stress-free dental experience.",
    features: ["Kid-friendly care", "Preventive sealants", "Habit correction"],
    icon: Baby
  },
  {
    title: "Preventive Care",
    desc: "Routine checkups and early detection to maintain long-term oral health.",
    features: ["Scaling", "Fluoride treatment", "Oral screening"],
    icon: ShieldCheck
  }
];

export default function ServiceGrid() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#1a2e22' }}
    >
      {/* Grid texture overlay — 48×48px lines at ~3% opacity with radial mask fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Section header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1.5px', backgroundColor: '#6ecf9a' }} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6ecf9a',
            }}>
              What We Offer
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            lineHeight: 1.15,
            maxWidth: '30rem',
          }}>
            Care built around{' '}
            <span style={{ color: '#6ecf9a' }}>your smile</span>
          </h2>
        </div>

        {/* Card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 17rem), 1fr))',
          gap: '1.25rem',
        }}>
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(110,207,154,0.28)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Ghost deco number */}
                <span style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: '72px',
                  color: 'rgba(255,255,255,0.03)',
                  position: 'absolute',
                  top: '-0.25rem',
                  right: '0.75rem',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Top-right accent line */}
                <span style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '3rem',
                  height: '1.5px',
                  backgroundColor: 'rgba(110,207,154,0.25)',
                }} />

                {/* Icon badge — dark variant */}
                <div style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(110,207,154,0.1)',
                  border: '1px solid rgba(110,207,154,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="#6ecf9a" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.8125rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '1.125rem',
                  flexGrow: 1,
                }}>
                  {service.desc}
                </p>

                {/* Pills — dark variant */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: '11px',
                        color: '#6ecf9a',
                        backgroundColor: 'rgba(110,207,154,0.08)',
                        border: '1px solid rgba(110,207,154,0.18)',
                        borderRadius: '9999px',
                        padding: '0.2rem 0.6rem',
                        lineHeight: 1.6,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#6ecf9a',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    letterSpacing: '0.01em',
                    transition: 'gap 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.5rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.3rem'}
                >
                  View Details
                  <ChevronRight size={13} strokeWidth={2} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}