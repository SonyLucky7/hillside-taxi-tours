'use client';
import React from 'react';
import { Phone, Shield, Clock, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: Shield, label: 'Safe & Secure' },
    { icon: Clock, label: 'Always On Time' },
    { icon: Sparkles, label: 'Best Rates' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#e8f4ff] pt-[88px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#3AAFF8]/20 via-[#1787D3]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#3AAFF8]/15 to-transparent blur-3xl" />
        
        <div className="absolute top-[20%] left-[8%] w-3 h-3 rounded-full bg-[#3AAFF8] animate-pulse" />
        <div className="absolute top-[35%] right-[15%] w-2 h-2 rounded-full bg-[#1787D3] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#3AAFF8] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="absolute top-[25%] right-[8%] opacity-40">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3AAFF8]" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[5%] opacity-30">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#1787D3]" />
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-88px)] py-12 lg:py-0 px-4">
        <div className="max-w-[600px] w-full lg:w-1/2 hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[14px] font-semibold text-[#1787D3]">Trusted by 10,000+ travelers</span>
          </div>

          <h1 className="text-[42px] lg:text-[58px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] mb-6">
            We Take You{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] bg-clip-text text-transparent">Safely</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#3AAFF8" />
                    <stop offset="1" stopColor="#1787D3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            , Where Your{' '}
            <span className="bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] bg-clip-text text-transparent">Heart</span>{' '}
            Wants To Go
          </h1>
          
          <p className="text-[17px] lg:text-[19px] text-[#4a4a4a] leading-[1.7] mb-10 max-w-[500px]">
            Hillside Taxi Tours — Reliable & affordable Guwahati ⇄ Shillong taxi service. 
            Door-to-door pickups, 24/7 support, trusted local drivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="https://api.whatsapp.com/send/?phone=918471966233"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] text-[17px] font-bold text-white shadow-[0_20px_50px_rgba(58,175,248,0.35)] hover:shadow-[0_25px_60px_rgba(58,175,248,0.45)] transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Start Your Journey
            </a>
            <a 
              href="#fleet"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-white border-2 border-[#e5e5e5] text-[17px] font-bold text-[#1a1a1a] hover:border-[#3AAFF8] hover:text-[#1787D3] transition-all duration-300"
            >
              View Our Fleet
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#e5e5e5]/50 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3AAFF8]/20 to-[#1787D3]/10 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-[#1787D3]" />
                </div>
                <span className="text-[14px] font-semibold text-[#1a1a1a]">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-[45%] mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] lg:max-w-[460px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3AAFF8]/15 to-[#1787D3]/15 rounded-[40px] blur-2xl" />
            
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3AAFF8" />
                    <stop offset="100%" stopColor="#1787D3" />
                  </linearGradient>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3AAFF8" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#3AAFF8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1787D3" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                <path 
                  d="M60,320 Q120,280 160,260 T260,220 T320,160 T340,100" 
                  fill="none" 
                  stroke="url(#roadGradient)" 
                  strokeWidth="32" 
                  strokeLinecap="round"
                  opacity="0.5"
                />
                
                <path 
                  d="M60,320 Q120,280 160,260 T260,220 T320,160 T340,100" 
                  fill="none" 
                  stroke="url(#routeGradient)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeDasharray="10,6"
                  className="route-dash"
                />

                <g className="car-animation">
                  <circle r="18" fill="white" className="drop-shadow-lg" />
                  <circle r="14" fill="url(#routeGradient)" />
                  <path 
                    d="M-6,-3 L-6,3 L6,3 L6,-3 L3,-6 L-3,-6 Z" 
                    fill="white" 
                    transform="rotate(45)"
                  />
                </g>

                <g transform="translate(60,320)">
                  <circle r="10" fill="url(#routeGradient)" className="animate-pulse" />
                  <circle r="18" fill="none" stroke="#3AAFF8" strokeWidth="2" opacity="0.3" className="ping-circle" />
                </g>
                
                <g transform="translate(340,100)">
                  <circle r="10" fill="url(#routeGradient)" className="animate-pulse" />
                  <circle r="18" fill="none" stroke="#1787D3" strokeWidth="2" opacity="0.3" className="ping-circle" style={{ animationDelay: '0.5s' }} />
                </g>

                <g transform="translate(50,345)">
                  <rect x="-40" y="-16" width="80" height="32" rx="8" fill="white" className="drop-shadow-md" />
                  <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a1a1a">Guwahati</text>
                </g>
                
                <g transform="translate(350,80)">
                  <rect x="-35" y="-16" width="70" height="32" rx="8" fill="white" className="drop-shadow-md" />
                  <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a1a1a">Shillong</text>
                </g>

                <g transform="translate(200,245)">
                  <g className="float-animation">
                    <rect x="-48" y="-22" width="96" height="44" rx="10" fill="white" className="drop-shadow-lg" />
                    <text x="0" y="-5" textAnchor="middle" fontSize="10" fill="#666">Distance</text>
                    <text x="0" y="12" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1787D3">~100 km</text>
                  </g>
                </g>

                <g transform="translate(290,280)">
                  <g className="float-animation-delayed">
                    <rect x="-45" y="-22" width="90" height="44" rx="10" fill="white" className="drop-shadow-lg" />
                    <text x="0" y="-5" textAnchor="middle" fontSize="10" fill="#666">Duration</text>
                    <text x="0" y="12" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1787D3">~3 hours</text>
                  </g>
                </g>

                <circle cx="160" cy="260" r="5" fill="#3AAFF8" opacity="0.6" className="animate-pulse" />
                <circle cx="260" cy="220" r="4" fill="#1787D3" opacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <circle cx="320" cy="160" r="3" fill="#3AAFF8" opacity="0.4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              </svg>
            </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-4 bg-white rounded-xl p-3 shadow-lg border border-[#e5e5e5]/50 slide-in-right z-20">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#666]">Response Time</p>
                    <p className="text-[15px] font-bold text-[#1a1a1a]">&lt; 5 mins</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white rounded-xl p-3 shadow-lg border border-[#e5e5e5]/50 slide-in-left z-20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3AAFF8] to-[#1787D3] border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">
                      {['A','B','C'][i-1]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1a1a1a]">4.9★</p>
                  <p className="text-[10px] text-[#666]">2,847 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-content {
          animation: slideUp 0.8s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .route-dash {
          animation: dash 15s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: -80; }
        }
        .car-animation {
          animation: moveCar 6s ease-in-out infinite;
        }
        @keyframes moveCar {
          0% { transform: translate(60px, 320px) rotate(-25deg); }
          25% { transform: translate(160px, 260px) rotate(-20deg); }
          50% { transform: translate(260px, 220px) rotate(-30deg); }
          75% { transform: translate(320px, 160px) rotate(-40deg); }
          100% { transform: translate(340px, 100px) rotate(-45deg); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .float-animation-delayed {
          animation: float 3s ease-in-out infinite 1s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .ping-circle {
          animation: ping 2s ease-in-out infinite;
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .slide-in-right {
          animation: slideInRight 0.6s ease-out 0.3s both;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out 0.5s both;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;