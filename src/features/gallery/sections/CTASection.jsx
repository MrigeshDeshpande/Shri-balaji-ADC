export default function CTASection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-semibold">
        Come See Us in Person
      </h2>

      <p className="text-gray-600 mt-2">
        We'd love to show you around our clinic.
      </p>

      <a
        href="https://maps.google.com"
        target="_blank"
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded"
      >
        View on Map
      </a>
    </section>
  );
}