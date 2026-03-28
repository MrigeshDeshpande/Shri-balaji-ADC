import ContactForm from "../components/ContactForm";

export default function ContactSection() {
    return (
        <section className="py-16 max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* Form */}
                <ContactForm />

                {/* Map */}
                <div className="w-full h-[500px] rounded-[40px] overflow-hidden border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0660666887115!2d81.3104867!3d21.189534300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d3460eb26fd%3A0xa3e78c1d687a0511!2sShri%20Balaji%20Advanced%20Dental%20Care%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1774676833783!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
        </section>
    );
}