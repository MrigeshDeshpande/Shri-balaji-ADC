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
        
        {/* Logo Section */}
        <Link href="/" className="flex flex-col group">
          <span className="font-heading text-2xl font-extrabold text-primary leading-none">
            Shri Balaji
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-accent transition-colors">
            Advanced Dental Care
          </span>
        </Link>

        {/* Desktop Links */}
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
          
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all"
          >
            <Phone size={16} />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
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
            <Link 
              href="/contact"
              className="w-full bg-primary text-white text-center py-4 rounded-xl font-bold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}