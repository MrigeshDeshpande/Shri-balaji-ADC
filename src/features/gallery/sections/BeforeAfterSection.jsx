"use client";

import { useState } from "react";

const cases = [
  {
    before: "https://picsum.photos/800/500?random=1",
    after: "https://picsum.photos/800/500?random=2",
    title: "Teeth Whitening",
  },
  {
    before: "https://picsum.photos/800/500?random=3",
    after: "https://picsum.photos/800/500?random=4",
    title: "Smile Correction",
  },
];

function Comparison({ before, after, title }) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="w-full">
      <h3 className="text-center mb-4 font-semibold">{title}</h3>

      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
        {/* After image */}
        <img
          src={after}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <img
            src={before}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white"
          style={{ left: `${slider}%` }}
        />

        {/* Range input */}
        <input
          type="range"
          min="0"
          max="100"
          value={slider}
          onChange={(e) => setSlider(e.target.value)}
          className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Before & After Results
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {cases.map((item, i) => (
          <Comparison key={i} {...item} />
        ))}
      </div>
    </section>
  );
}