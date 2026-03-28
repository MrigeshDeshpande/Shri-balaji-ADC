import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Tagline */}
        <span className="text-accent font-semibold uppercase tracking-widest text-xs mb-4 block">
          Book your visit today
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-heading text-primary leading-tight">
          Get the Care Your Smile Deserves
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          From routine checkups to advanced treatments, we’re here to help you
          feel confident and comfortable every step of the way.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-primary/20 transition"
          >
            Book Your Appointment
          </Link>

          <a
            href="tel:+919876543210"
            className="text-primary font-semibold text-sm underline underline-offset-4"
          >
            Call Now
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-gray-500 text-xs md:text-sm">
          Free consultation for first-time patients • Open daily{" "}
          <span className="text-gray-400">(T&C apply)</span>
        </p>

      </div>
    </section>
  );
}