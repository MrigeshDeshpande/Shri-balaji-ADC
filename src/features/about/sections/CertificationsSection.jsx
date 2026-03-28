const certifications = [
  "Indian Dental Association (IDA) Member",
  "Certified in Advanced Root Canal Treatments",
  "Modern Dental Equipment & Technology",
  "Strict Sterilization Standards Followed",
];

export default function CertificationsSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Certifications & Affiliations
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {certifications.map((item, i) => (
          <div key={i} className="border p-4 rounded-lg text-center">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}