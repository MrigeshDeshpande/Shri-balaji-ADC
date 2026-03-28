"use client";

export default function Lightbox({ images, index, onClose, setIndex }) {
  if (index === null) return null;

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-5 right-5 text-white">
        ✕
      </button>

      <button onClick={prev} className="absolute left-5 text-white text-2xl">
        ‹
      </button>

      <img
        src={images[index].src}
        className="max-h-[80vh] rounded"
      />

      <button onClick={next} className="absolute right-5 text-white text-2xl">
        ›
      </button>
    </div>
  );
}