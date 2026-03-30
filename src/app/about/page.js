import AboutHeroSection from "@/features/about/sections/AboutHeroSection";
import StorySection from "@/features/about/sections/StorySection";
import MissionVisionSection from "@/features/about/sections/MissionVisionSection";
import TeamSection from "@/features/about/sections/TeamSection";
import StatsSection from "@/features/about/sections/StatsSection";
import CertificationsSection from "@/features/about/sections/CertificationsSection";
import ValuesSection from "@/features/about/sections/ValuesSection";

export const metadata = {
  title: 'About Us',
  description: 'Learn about our journey, our team of expert dentists, and our mission to provide world-class dental care.',
  openGraph: {
    title: 'About Us | Shri Balaji Dental',
    url: 'https://shribalajidental.com/about',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Shri Balaji Dental",
  "url": "https://shribalajidental.com/about",
  "description": "Information about Shri Balaji Dental clinic, our team, and our mission.",
  "publisher": {
    "@type": "Dentist",
    "name": "Shri Balaji Dental"
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHeroSection />
      <StorySection />
      <MissionVisionSection />
      <TeamSection />
      <StatsSection />
      <CertificationsSection />
      <ValuesSection />
    </>
  );
}

