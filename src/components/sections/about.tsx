import React from 'react';
import { Car, Users, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '10K+', label: 'Happy Travelers', icon: Users },
    { value: '500+', label: 'Trips Completed', icon: MapPin },
    { value: '50+', label: 'Premium Cars', icon: Car },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#3AAFF8]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1787D3]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-6">
            <span className="text-[14px] font-semibold text-[#1787D3]">About Us</span>
          </div>
          <h2 className="text-[44px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
            Your Trusted Travel{' '}
            <span className="gradient-text">Partner</span>
          </h2>
          <p className="text-[18px] leading-[1.8] text-[#555] max-w-2xl mx-auto">
            We are a trusted taxi and tour service dedicated to making your journeys safe, comfortable, and worry-free. 
            With well-maintained vehicles and friendly local drivers, every ride feels smooth and personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-[#f8fbff] border border-[#e5e5e5]/60 rounded-3xl p-8 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3AAFF8]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3AAFF8] to-[#1787D3] flex items-center justify-center mb-6 shadow-lg shadow-[#3AAFF8]/25 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-[48px] font-extrabold gradient-text mb-2">{stat.value}</p>
                <p className="text-[17px] font-medium text-[#555]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[
            { title: 'Always On Time', desc: 'Punctuality is our promise' },
            { title: 'Competitive Prices', desc: 'Best rates guaranteed' },
            { title: 'Safe Journey', desc: 'Your safety is priority' },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#e5e5e5] rounded-2xl p-6 flex items-center gap-5 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3AAFF8]/10 to-[#1787D3]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#3AAFF8] group-hover:to-[#1787D3] transition-all duration-300">
                <svg className="w-6 h-6 text-[#1787D3] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] mb-1">{item.title}</h3>
                <p className="text-[15px] text-[#666]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;