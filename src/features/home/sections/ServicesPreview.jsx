const services = [
  {
    title: "Tooth Pain",
    desc: "Immediate relief for sensitivity or severe pain",
    message: "Hi, I am experiencing tooth pain. Can I get consultation?"
  },
  {
    title: "Teeth Cleaning",
    desc: "Professional cleaning for a healthier smile",
    message: "Hi, I want to know about teeth cleaning."
  },
  {
    title: "Braces & Alignment",
    desc: "Straighten your teeth with modern solutions",
    message: "Hi, I want to know about braces or alignment."
  },
  {
    title: "Dental Implants",
    desc: "Permanent solution for missing teeth",
    message: "Hi, I want to know about dental implants."
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with whitening and veneers",
    message: "Hi, I want to know about cosmetic dentistry options."
  },
  {
    title: "General Consultation",
    desc: "Routine check-up and expert guidance",
    message: "Hi, I would like a general dental consultation."
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Tell us your concern
          </h2>
          <p className="text-gray-500">
            Select your concern and speak directly with our team.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* {services.map((item, i) => (
            <a
              key={i}
              href={`https://wa.me/9111594782?text=${encodeURIComponent(item.message)}`}
              target="_blank"
              className="group border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>

                <span className="text-primary opacity-40 group-hover:opacity-100 transition">
                  →
                </span>

              </div>
            </a>
          ))} */}

          {services.map((item, i) => {
            const isPriority = item.title === "Tooth Pain";

            return (
              <a
                key={i}
                href={`https://wa.me/9111594782?text=${encodeURIComponent(item.message)}`}
                target="_blank"
                className={`group border rounded-2xl p-6 transition-all ${isPriority
                    ? "border-primary/20 bg-primary/[0.03] shadow-sm"
                    : "border-gray-100 hover:shadow-md"
                  }`}
              >
                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>

                    {/* subtle urgency cue */}
                    {isPriority && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        Immediate attention recommended
                      </p>
                    )}
                  </div>

                  <span className="text-primary opacity-40 group-hover:opacity-100 transition">
                    →
                  </span>

                </div>
              </a>
            );
          })}

        </div>

        {/* Secondary */}
        <div className="mt-10 text-center">
          <a
            href="/services"
            className="text-primary font-semibold underline underline-offset-4"
          >
            View All Services →
          </a>
        </div>

      </div>
    </section>
  );
}