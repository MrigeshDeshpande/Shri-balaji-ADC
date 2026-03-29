"use client";

import Link from 'next/link';
import { ChevronRight, AlertCircle } from 'lucide-react';

const services = [
  {
    title: "Tooth Pain",
    desc: "Immediate relief for sensitivity or severe pain",
    message: "Hi, I am experiencing tooth pain. Can I get consultation?",
    urgent: true,
  },
  {
    title: "Teeth Cleaning",
    desc: "Professional cleaning for a healthier smile",
    message: "Hi, I want to know about teeth cleaning.",
  },
  {
    title: "Braces & Alignment",
    desc: "Straighten your teeth with modern solutions",
    message: "Hi, I want to know about braces or alignment.",
  },
  {
    title: "Dental Implants",
    desc: "Permanent solution for missing teeth",
    message: "Hi, I want to know about dental implants.",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with whitening and veneers",
    message: "Hi, I want to know about cosmetic dentistry options.",
  },
  {
    title: "General Consultation",
    desc: "Routine check-up and expert guidance",
    message: "Hi, I would like a general dental consultation.",
  },
];

function ServiceCard({ item, index }) {
  const isUrgent = item.urgent;
  const num = String(index + 1).padStart(2, '0');

  return (
    <a
      href={`https://wa.me/9111594782?text=${encodeURIComponent(item.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1.625rem 1.75rem',
        borderRadius: '1rem',
        border: isUrgent ? '1px solid #c0e8d4' : '1px solid #f0ede8',
        backgroundColor: isUrgent ? '#f0faf5' : '#ffffff',
        textDecoration: 'none',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#c0e8d4';
        e.currentTarget.style.backgroundColor = isUrgent ? '#e4f5ed' : '#f0faf5';
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.querySelector('.arrow').style.opacity = '1';
        e.currentTarget.querySelector('.arrow').style.transform = 'translateX(3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = isUrgent ? '#c0e8d4' : '#f0ede8';
        e.currentTarget.style.backgroundColor = isUrgent ? '#f0faf5' : '#ffffff';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.querySelector('.arrow').style.opacity = '0.35';
        e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)';
      }}
    >
      {/* Ghost number */}
      <span aria-hidden="true" style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800,
        fontSize: '72px',
        color: isUrgent ? 'rgba(20,120,80,0.06)' : 'rgba(20,120,80,0.04)',
        position: 'absolute',
        top: '-0.75rem',
        right: '1rem',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {num}
      </span>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>

        {/* Urgent badge */}
        {isUrgent && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            backgroundColor: 'rgba(20,120,80,0.1)',
            border: '1px solid rgba(20,120,80,0.2)',
            borderRadius: '9999px',
            padding: '0.15rem 0.6rem',
            marginBottom: '0.625rem',
          }}>
            <AlertCircle size={10} color="#147850" strokeWidth={2.5} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#147850',
            }}>
              Immediate attention
            </span>
          </div>
        )}

        <h3 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: '1.0625rem',
          letterSpacing: '-0.02em',
          color: '#1C1C1C',
          margin: '0 0 0.375rem',
          lineHeight: 1.25,
        }}>
          {item.title}
        </h3>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '0.8125rem',
          lineHeight: 1.65,
          color: '#888',
          margin: 0,
        }}>
          {item.desc}
        </p>

        {/* WhatsApp cue */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: '11px',
          color: '#147850',
          margin: '0.75rem 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#147850">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </p>
      </div>

      {/* Arrow */}
      <div
        className="arrow"
        style={{
          opacity: 0.35,
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          flexShrink: 0,
          marginTop: '0.25rem',
        }}
      >
        <ChevronRight size={18} color="#147850" strokeWidth={2} />
      </div>
    </a>
  );
}

export default function ServicesPreview() {
  return (
    <section
      style={{
        backgroundColor: '#FAFAF8',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1.5px', backgroundColor: '#147850' }} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#147850',
            }}>
              How Can We Help
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              letterSpacing: '-0.02em',
              color: '#1C1C1C',
              lineHeight: 1.15,
              margin: 0,
              maxWidth: '28rem',
            }}>
              Tell us your{' '}
              <span style={{ color: '#147850' }}>concern</span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '0.875rem',
              color: '#888',
              margin: 0,
              maxWidth: '22rem',
              lineHeight: 1.65,
            }}>
              Select your concern and speak directly with our team on WhatsApp.
            </p>
          </div>
        </div>

        {/* 2-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 28rem), 1fr))',
          gap: '0.875rem',
          marginBottom: '2.5rem',
        }}>
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Footer link */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.875rem',
              color: '#147850',
              textDecoration: 'none',
              borderBottom: '1px solid #c0e8d4',
              paddingBottom: '2px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#147850'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#c0e8d4'}
          >
            View All Services
            <ChevronRight size={14} strokeWidth={2} />
          </Link>
        </div>

      </div>
    </section>
  );
}