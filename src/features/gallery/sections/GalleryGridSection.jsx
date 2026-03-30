"use client";

import { useState } from "react";
import Image from "next/image";
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
          <div key={i} className="relative w-full h-60 cursor-pointer" onClick={() => setIndex(i)}>
            <Image
              src={img.src}
              alt={`Gallery image of ${img.category} dental procedure`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover rounded"
            />
          </div>
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