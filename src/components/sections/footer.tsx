import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'Trips', href: '/trips' },
    { name: 'How It Works', href: '/#steps' },
    { name: 'Contact', href: '/#contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/people/Hils-side-Taxi-Tours/61583371721724/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/protapbhandari/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
      {
        name: 'WhatsApp',
        href: 'https://api.whatsapp.com/send/?phone=918471966233',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )
      },
      {
        name: 'Phone',
        href: 'tel:+918471966233',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        )
      },
    ];

  return (
    <footer className="bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="/" className="block mb-6">
                <Image 
                  src="/logo.svg" 
                  alt="Hillside Taxi Tours Logo" 
                  width={140}
                  height={52}
                  className="object-contain"
                />
            </a>
            <p className="text-[15px] text-[#666] leading-[1.7] mb-6">
              Your trusted travel partner for safe, comfortable, and affordable journeys across Northeast India.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center text-[#666] hover:text-[#3AAFF8] hover:border-[#3AAFF8]/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[16px] font-bold text-[#0a0a0a] mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] text-[#666] hover:text-[#3AAFF8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[16px] font-bold text-[#0a0a0a] mb-6">Services</h4>
            <nav className="flex flex-col gap-3">
              {['Airport Transfer', 'City Tours', 'Outstation Trips', 'Corporate Travel'].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="text-[15px] text-[#666] hover:text-[#3AAFF8] transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[16px] font-bold text-[#0a0a0a] mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+918471966233" className="flex items-center gap-3 text-[15px] text-[#666] hover:text-[#3AAFF8] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3AAFF8]/10 to-[#1787D3]/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#3AAFF8]" />
                </div>
                +91 847 196 6233
              </a>
              <a href="mailto:info@hillsidetaxitours.com" className="flex items-center gap-3 text-[15px] text-[#666] hover:text-[#3AAFF8] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3AAFF8]/10 to-[#1787D3]/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#3AAFF8]" />
                </div>
                info@hillsidetaxitours.com
              </a>
              <div className="flex items-start gap-3 text-[15px] text-[#666]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3AAFF8]/10 to-[#1787D3]/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#3AAFF8]" />
                </div>
                <span>Shillong, Meghalaya, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#888]">
            © {new Date().getFullYear()} Hillside Taxi Tours. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[14px] text-[#888] hover:text-[#3AAFF8] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[14px] text-[#888] hover:text-[#3AAFF8] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;