"use client";

import { useState } from "react";
import { images, categories } from "../data/images";
import Lightbox from "../components/Lightbox";

export default function GalleryGridSection() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState(null);

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border ${
              active === cat ? "bg-black text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {filtered.map((img, i) => (
          <img
            key={i}
            src={img.src}
            onClick={() => setIndex(i)}
            className="w-full h-60 object-cover rounded cursor-pointer"
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filtered}
        index={index}
        setIndex={setIndex}
        onClose={() => setIndex(null)}
      />
    </section>
  );
}