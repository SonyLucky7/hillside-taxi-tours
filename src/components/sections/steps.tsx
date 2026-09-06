import React from 'react';
import { Car, FileText, Rocket } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Ride',
      description: 'Pick the perfect cab that fits your comfort and travel style.',
      icon: Car,
      color: 'from-[#3AAFF8] to-[#1787D3]',
    },
    {
      number: 2,
      title: 'Share Your Details',
      description: 'Quick booking with simple forms — no hassle, no waiting.',
      icon: FileText,
      color: 'from-[#22c55e] to-[#16a34a]',
    },
    {
      number: 3,
      title: 'Enjoy Your Journey',
      description: 'Relax and enjoy the ride while we take care of everything.',
      icon: Rocket,
      color: 'from-[#f59e0b] to-[#d97706]',
    },
  ];

  return (
    <section id="steps" className="py-24 bg-gradient-to-b from-[#f8fbff] to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#3AAFF8]/5 via-[#1787D3]/10 to-[#3AAFF8]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-6">
            <span className="text-[14px] font-semibold text-[#1787D3]">How It Works</span>
          </div>
          <h2 className="text-[44px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
            Book Your Ride in <span className="gradient-text">3 Easy Steps</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[#3AAFF8] via-[#22c55e] to-[#f59e0b] rounded-full opacity-30" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-3 h-3 rounded-full bg-[#22c55e] shadow-lg shadow-[#22c55e]/50" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f59e0b] shadow-lg shadow-[#f59e0b]/50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 border border-[#e5e5e5]/60 card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#3AAFF8]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-9 h-9 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-white shadow-lg flex items-center justify-center">
                      <span className="text-[14px] font-bold gradient-text">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-[24px] font-bold text-[#0a0a0a] mb-4 group-hover:text-[#1787D3] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-[#555] leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="https://api.whatsapp.com/send/?phone=918471966233"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl btn-gradient text-[18px] font-bold text-white shadow-[0_20px_50px_rgba(58,175,248,0.35)]"
          >
            Start Booking Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;