"use client";

import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [openLinks, setOpenLinks] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <footer className="mt-20 bg-white border-t border-gray-100 pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="font-heading text-2xl font-bold text-primary">
                Shri Balaji
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Advanced Dental Care
              </span>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Providing world-class dental healthcare with a focus on precision,
              comfort, and long-term oral wellness.
            </p>

            <p className="text-sm text-gray-600 font-medium">
              Need help? Call us directly for quick assistance.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <SocialIcon url="https://instagram.com/" style={{ height: 36, width: 36 }} />
              <SocialIcon url="https://facebook.com/" style={{ height: 36, width: 36 }} />
              <SocialIcon url="https://youtube.com/" style={{ height: 36, width: 36 }} />
            </div>
          </div>

          {/* Contact (Always visible) */}
          <div>
            <h4 className="font-heading text-lg mb-6">Get in Touch</h4>

            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="hover:text-primary"
                >
                  123, Civil Lines, Agra, UP 282002
                </a>
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:care@shribalajidental.com" className="hover:text-primary">
                  care@shribalajidental.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links (Collapsible on mobile) */}
          <div>
            <button
              onClick={() => setOpenLinks(!openLinks)}
              className="w-full flex justify-between items-center font-heading text-lg mb-4 md:mb-6"
            >
              Quick Links
              <span className="md:hidden">{openLinks ? "-" : "+"}</span>
            </button>

            <ul
              className={`space-y-4 text-sm font-medium text-gray-500 ${
                openLinks ? "block" : "hidden md:block"
              }`}
            >
              <li><Link href="/about">About Our Clinic</Link></li>
              <li><Link href="/services">Dental Services</Link></li>
              <li><Link href="/gallery">Clinic Gallery</Link></li>
              <li><Link href="/contact">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services (Collapsible on mobile) */}
          <div>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="w-full flex justify-between items-center font-heading text-lg mb-4 md:mb-6"
            >
              Popular Services
              <span className="md:hidden">{openServices ? "-" : "+"}</span>
            </button>

            <ul
              className={`space-y-4 text-sm font-medium text-gray-500 ${
                openServices ? "block" : "hidden md:block"
              }`}
            >
              <li><Link href="/services#root-canal">Root Canal Therapy</Link></li>
              <li><Link href="/services#implants">Dental Implants</Link></li>
              <li><Link href="/services#whitening">Teeth Whitening</Link></li>
              <li><Link href="/services#braces">Invisalign & Braces</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 text-center md:text-left">
            © {currentYear} Shri Balaji Advanced Dental Care. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageSquare size={24} fill="white" />
      </a>
    </footer>
  );
}