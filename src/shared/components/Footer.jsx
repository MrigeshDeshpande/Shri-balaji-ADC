import Link from 'next/link';
import { Share2, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="font-heading text-2xl font-bold text-primary">Shri Balaji</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Advanced Dental Care</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Providing world-class dental healthcare with a focus on precision, comfort, and long-term oral wellness.
            </p>
            <div className="flex gap-4 text-primary">
              <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Share2 size={20} /></Link>
              <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Share2 size={20} /></Link>
              <Link href="#" aria-label="YouTube" className="hover:text-accent transition-colors"><Share2 size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Our Clinic</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Dental Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Clinic Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading text-lg mb-6">Popular Services</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/services#root-canal" className="hover:text-primary transition-colors">Root Canal Therapy</Link></li>
              <li><Link href="/services#implants" className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link href="/services#whitening" className="hover:text-primary transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services#braces" className="hover:text-primary transition-colors">Invisalign & Braces</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="font-heading text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li className="flex gap-3 capitalize">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>123, Civil Lines, Agra, UP 282002</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>care@shribalajidental.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
            © {currentYear} Shri Balaji Advanced Dental Care. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link 
        href="https://wa.me/09111594782" 
        target="_blank"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageSquare size={24} fill="white" />
      </Link>
    </footer>
  );
}