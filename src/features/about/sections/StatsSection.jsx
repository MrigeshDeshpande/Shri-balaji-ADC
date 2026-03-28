const stats = [
  { label: "Happy Patients", value: "5000+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Sterilization Protocol", value: "100%" },
  { label: "Patient Satisfaction", value: "98%" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center px-4">
        {stats.map((item, i) => (
          <div key={i}>
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}