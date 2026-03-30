import Hero from '@/features/home/sections/Hero';
import TrustBar from '@/features/home/sections/TrustBar';
import ServicesPreview from '@/features/home/sections/ServicesPreview';
import Features from '@/features/home/sections/Features';
import CTA from '@/features/home/sections/CTA';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Shri Balaji Dental Clinic. We provide advanced, painless, and world-class dental treatments.',
  openGraph: {
    title: 'Home | Shri Balaji Dental',
    url: 'https://shribalajidental.com/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shri Balaji Dental",
  "url": "https://shribalajidental.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://shribalajidental.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <Features />
      <CTA />
    </main>
  );
}