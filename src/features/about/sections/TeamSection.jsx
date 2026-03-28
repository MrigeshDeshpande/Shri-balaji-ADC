import { team } from "../data/team";

export default function TeamSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Meet the Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {team.map((doc, i) => (
          <div key={i} className="text-center border p-6 rounded-lg">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-semibold">{doc.name}</h3>
            <p className="text-sm text-gray-500">{doc.degree}</p>
            <p className="text-sm">{doc.specialization}</p>
            <p className="text-sm">{doc.experience}</p>
            <p className="text-sm mt-2 text-gray-600">{doc.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}