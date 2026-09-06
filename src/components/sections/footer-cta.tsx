import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#3AAFF8]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#1787D3]/15 to-transparent blur-3xl" />
        
        <div className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-[#3AAFF8] pulse-dot" />
        <div className="absolute top-[30%] right-[10%] w-3 h-3 rounded-full bg-[#1787D3] pulse-dot" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-[#3AAFF8] pulse-dot" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[40%] right-[20%] w-2.5 h-2.5 rounded-full bg-[#1787D3] pulse-dot" style={{ animationDelay: '1.5s' }} />
        
        <div className="absolute top-[15%] right-[15%] opacity-20">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[15%] left-[10%] opacity-20">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white" />
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[14px] font-semibold text-white/90">Available 24/7</span>
          </div>

          <h2 className="text-[44px] lg:text-[60px] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6">
            Begin Your Journey With{' '}
            <span className="bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] bg-clip-text text-transparent">
              Hillside Taxi Tours
            </span>
          </h2>

          <p className="text-[18px] lg:text-[20px] text-white/70 leading-[1.7] mb-12 max-w-xl mx-auto">
            Book your ride today and enjoy safe, comfortable travel at the best price. We're just a message away!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://api.whatsapp.com/send/?phone=918471966233"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[18px] font-bold text-white shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:shadow-[0_25px_60px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="tel:+918471966233"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-[18px] font-bold text-white hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +91 847 196 6233
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="text-center">
              <p className="text-[32px] font-extrabold text-white">10K+</p>
              <p className="text-[14px] text-white/60">Happy Travelers</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-[32px] font-extrabold text-white">4.9</p>
              <p className="text-[14px] text-white/60">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-[32px] font-extrabold text-white">24/7</p>
              <p className="text-[14px] text-white/60">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;