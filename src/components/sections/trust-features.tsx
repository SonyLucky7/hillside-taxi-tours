import React from 'react';
import Image from 'next/image';
import { Sparkles, Clock, HeadphonesIcon } from 'lucide-react';

const TrustFeatures: React.FC = () => {
  const features = [
    {
      title: "Clean Cars. Happy Rides.",
      description: "Clean, comfortable, and regularly serviced — your safety and comfort always come first",
      icon: Sparkles,
      color: 'from-[#3AAFF8] to-[#1787D3]',
    },
    {
      title: "Travel Your Way",
      description: "Simple booking, quick response, and rides that fit your schedule perfectly",
      icon: Clock,
      color: 'from-[#22c55e] to-[#16a34a]',
    },
    {
      title: "Support That Never Sleeps",
      description: "Day or night, our team is always ready to help you reach your destination safely",
      icon: HeadphonesIcon,
      color: 'from-[#8b5cf6] to-[#6d28d9]',
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f8fbff] to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#3AAFF8]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-[#1787D3]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-6">
            <span className="text-[14px] font-semibold text-[#1787D3]">Why Choose Us</span>
          </div>
          <h2 className="text-[44px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
            Trusted By <span className="gradient-text">Thousands</span> Of Happy Travelers
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3AAFF8]/20 via-[#1787D3]/10 to-transparent rounded-[40px] blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-[32px] p-3 shadow-2xl">
              <div className="relative rounded-[24px] overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ff98295-1b36-4c14-a7b8-42774c112f3d-hillsidetaxitours-com/assets/images/cc290fcd55655a8ff7f70fe9267a4e269639bd38-1.png"
                  alt="Happy travelers in a car"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <p className="text-[24px] font-bold text-[#0a0a0a]">4.9/5</p>
                      <p className="text-[14px] text-[#666]">Average Rating</p>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-6 h-6 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 hidden lg:block">
              <div className="grid grid-cols-4 gap-2 opacity-40">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#3AAFF8]" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 hidden lg:block">
              <div className="grid grid-cols-3 gap-2 opacity-40">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#1787D3]" />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white border border-[#e5e5e5]/60 rounded-2xl p-6 card-hover relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex gap-5 items-start">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-2 group-hover:text-[#1787D3] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] text-[#555] leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <a 
              href="https://api.whatsapp.com/send/?phone=918471966233"
              className="mt-4 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl btn-gradient text-[18px] font-bold text-white shadow-[0_20px_50px_rgba(58,175,248,0.3)] w-full sm:w-auto"
            >
              Experience The Difference
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;