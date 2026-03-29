"use client";

import Link from "next/link";

const RATING = 4.9;
const TOTAL_REVIEWS = 214;

const REVIEWS = [
  {
    author: "Priya Sharma",
    time: "2 weeks ago",
    stars: 5,
    text: "Excellent experience! The doctor was very thorough and the staff was warm and welcoming. Highly recommend.",
  },
  {
    author: "Rahul Verma",
    time: "1 month ago",
    stars: 5,
    text: "Best clinic in Bhilai. Clean, professional, and no long wait times. Will definitely visit again.",
  },
  {
    author: "Sunita Gupta",
    time: "1 month ago",
    stars: 5,
    text: "Very satisfied with the consultation. The doctor explained everything clearly and was very patient.",
  },
  {
    author: "Amit Joshi",
    time: "2 months ago",
    stars: 5,
    text: "Great service and very affordable. The clinic is easy to find and the team is professional.",
  },
];

function Stars({ rating }) {
  return (
    <span style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="13"
          height="13"
          viewBox="0 0 20 20"
          fill={n <= Math.round(rating) ? '#147850' : '#e8e4de'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: '17rem',
        backgroundColor: '#ffffff',
        border: '1px solid #f0ede8',
        borderRadius: '1rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.625rem',
        transition: 'border-color 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#c0e8d4'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#f0ede8'}
    >
      {/* Author row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div>
          {/* Avatar initial */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <div style={{
              width: '1.75rem',
              height: '1.75rem',
              borderRadius: '9999px',
              backgroundColor: '#f0faf5',
              border: '1px solid #c0e8d4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: '10px',
                color: '#147850',
              }}>
                {review.author.charAt(0)}
              </span>
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.8125rem',
              color: '#1C1C1C',
              margin: 0,
              lineHeight: 1.2,
            }}>
              {review.author}
            </p>
          </div>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: '11px',
            color: '#aaa',
            margin: 0,
            paddingLeft: '2.25rem',
          }}>
            {review.time}
          </p>
        </div>
        <Stars rating={review.stars} />
      </div>

      {/* Review text */}
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 300,
        fontSize: '0.8125rem',
        lineHeight: 1.65,
        color: '#555',
        margin: 0,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        "{review.text}"
      </p>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section style={{
      backgroundColor: '#f8f5f0',
      borderTop: '1px solid #f0ede8',
      borderBottom: '1px solid #f0ede8',
      paddingTop: '2rem',
      paddingBottom: '2rem',
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* Top row — rating summary + link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.25rem',
        }}>

          {/* Left: rating block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>

            {/* Location pill */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#888',
              backgroundColor: '#fff',
              border: '1px solid #f0ede8',
              borderRadius: '9999px',
              padding: '0.25rem 0.75rem',
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#147850" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Listed on Google Maps
            </span>

            {/* Divider */}
            <span style={{ width: '1px', height: '16px', backgroundColor: '#e8e4de' }} />

            {/* Stars + score */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Stars rating={RATING} />
              <span style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: '1rem',
                color: '#147850',
                letterSpacing: '-0.02em',
              }}>
                {RATING}
              </span>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: '#888',
              }}>
                ({TOTAL_REVIEWS.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          {/* Right: GMB link */}
          <Link
            href="https://share.google/EW2KAd8hU7djUwKcT"
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.8125rem',
              color: '#147850',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            View on Google Maps
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>

        {/* Scrollable review cards */}
        <div style={{
          display: 'flex',
          gap: '0.875rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
          // Hide scrollbar cross-browser
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
          className="scrollbar-hide"
        >
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}

          {/* "See all" card */}
          <Link
            href="https://share.google/EW2KAd8hU7djUwKcT"
            target="_blank"
            style={{
              flexShrink: 0,
              width: '10rem',
              backgroundColor: '#f0faf5',
              border: '1px solid #c0e8d4',
              borderRadius: '1rem',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e4f5ed'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f0faf5'}
          >
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(20,120,80,0.1)',
              border: '1px solid rgba(20,120,80,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#147850" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.75rem',
              color: '#147850',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.4,
            }}>
              See all {TOTAL_REVIEWS} reviews
            </p>
          </Link>
        </div>

      </div>
    </section>
  );
}