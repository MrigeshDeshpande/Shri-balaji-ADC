"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="font-heading text-2xl font-extrabold text-primary leading-none">
            Shri Balaji
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-accent transition-colors">
            Advanced Dental Care
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Group */}
          <div className="flex items-center gap-5">

            {/* Call (secondary) */}
            <a
              href="tel:+9111594782"
              className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              <Phone size={16} />
              <span>+91 91115 94782</span>
            </a>

            {/* WhatsApp (primary) */}
            <a
              href="https://wa.me/9111594782?text=Hi%2C%20I%20found%20your%20clinic%20online.%20I%E2%80%99d%20like%20to%20know%20more%20about%20treatment%20and%20consultation."
              target="_blank"
              className="bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              WhatsApp
            </a>

          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          
          <div className="flex flex-col gap-5">
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3 mt-4">

              <a 
                href="https://wa.me/9111594782?text=Hi%2C%20I%20found%20your%20clinic%20online.%20I%E2%80%99d%20like%20to%20know%20more%20about%20treatment%20and%20consultation."
                target="_blank"
                className="w-full bg-green-500 text-white text-center py-4 rounded-xl font-bold"
              >
                💬 WhatsApp
              </a>

              <a 
                href="tel:+9111594782"
                className="w-full bg-primary text-white text-center py-4 rounded-xl font-bold"
              >
                📞 Call Now
              </a>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
}