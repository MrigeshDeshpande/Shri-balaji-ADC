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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-[#FAFAF8] text-[#1C1C1C] antialiased min-h-screen flex flex-col">
        
        {/* The Navbar stays at the top of every page */}
        <Navbar />

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