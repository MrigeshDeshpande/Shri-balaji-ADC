import { values } from "../data/values";

export default function ValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Our Values
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {values.map((val, i) => (
          <div key={i} className="p-6 border rounded-lg text-center">
            <h3 className="font-semibold">{val.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}