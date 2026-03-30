import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/shared/components/Navbar';
import Footer from '@/shared/components/Footer';

const headingFont = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata = {
  title: {
    template: '%s | Shri Balaji Dental',
    default: 'Shri Balaji Dental | Advanced & Painless Dentistry',
  },
  description: 'Experience world-class dental treatments with advanced painless technology at Shri Balaji Dental Clinic.',
  openGraph: {
    title: 'Shri Balaji Dental | Advanced & Painless Dentistry',
    description: 'Experience world-class dental treatments with advanced painless technology at Shri Balaji Dental Clinic.',
    url: 'https://shribalajidental.com',
    siteName: 'Shri Balaji Dental',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Shri Balaji Dental",
  "image": "https://shribalajidental.com/logo.png",
  "@id": "https://shribalajidental.com",
  "url": "https://shribalajidental.com",
  "telephone": "+910000000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "postalCode": "000000",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.0,
    "longitude": 77.0
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-[#FAFAF8] text-[#1C1C1C] antialiased min-h-screen flex flex-col">
        
        {/* The Navbar stays at the top of every page */}
        <Navbar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />

        {/* The "children" is where your page.js content (Home, About, etc.) is injected */}
        <main className="flex-grow">
          {children}
        </main>

        {/* The Footer stays at the bottom of every page */}
        <Footer />
        
      </body>
    </html>
  );
}