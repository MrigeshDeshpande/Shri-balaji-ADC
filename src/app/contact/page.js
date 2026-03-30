import ContactSection from "@/features/contact/sections/ContactSection";

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Shri Balaji Dental Clinic to book an appointment or inquire about our dental services.',
  openGraph: {
    title: 'Contact Us | Shri Balaji Dental',
    url: 'https://shribalajidental.com/contact',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Shri Balaji Dental",
  "url": "https://shribalajidental.com/contact",
  "description": "Contact information and location for Shri Balaji Dental Clinic."
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactSection />
    </>
  );
}