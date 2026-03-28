export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To deliver reliable, pain-free, and patient-focused dental care
            using modern techniques and strict hygiene standards.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the most trusted dental care provider known for quality
            treatment, transparency, and compassionate service.
          </p>
        </div>
      </div>
    </section>
  );
}