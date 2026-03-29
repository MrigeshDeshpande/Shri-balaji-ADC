// components/TrustBar.tsx
import Link from "next/link";

const RATING = 4.9;
const TOTAL_REVIEWS = 214; // update this number from your GMB page

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
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`w-4 h-4 ${n <= Math.round(rating) ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-white border-y py-5">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="text-sm text-gray-600">📍 Listed on Google Maps</span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-800">
              <Stars rating={RATING} />
              {RATING}
              <span className="font-normal text-gray-500">
                ({TOTAL_REVIEWS.toLocaleString()} reviews)
              </span>
            </span>
          </div>
          <Link
            href="https://share.google/EW2KAd8hU7djUwKcT"
            target="_blank"
            className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent transition"
          >
            View on Google Maps →
          </Link>
        </div>

        {/* Scrollable review cards */}
        <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-68 border rounded-xl p-3 bg-gray-50 text-sm"
            >
              <div className="flex items-start justify-between mb-1.5 gap-2">
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">{r.author}</p>
                  <p className="text-gray-400 text-xs">{r.time}</p>
                </div>
                <Stars rating={r.stars} />
              </div>
              <p className="text-gray-600 line-clamp-3">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}