import React from 'react';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Rahul Sharma',
    location: 'Guwahati',
    rating: 5,
    quote: 'Amazing service! The rental process was super fast, and the car was in excellent condition. The driver was punctual and professional.',
    avatar: 'RS'
  },
  {
    name: 'Priya Dutta',
    location: 'Shillong',
    rating: 5,
    quote: 'Best taxi service in the region! Booked for a family trip to Cherrapunji and the entire experience was wonderful. Highly recommended!',
    avatar: 'PD'
  },
  {
    name: 'Amit Kumar',
    location: 'Delhi',
    rating: 5,
    quote: 'The car provided was clean and comfortable. The staff was very helpful throughout the rental process. Will definitely use again!',
    avatar: 'AK'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f8fbff] to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-gradient-to-br from-[#3AAFF8]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-gradient-to-bl from-[#1787D3]/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-6">
            <span className="text-[14px] font-semibold text-[#1787D3]">Testimonials</span>
          </div>
          <h2 className="text-[44px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
            What Travelers <span className="gradient-text">Say About Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-[#e5e5e5]/60 rounded-3xl p-8 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3AAFF8]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#3AAFF8]/10 to-[#1787D3]/5 flex items-center justify-center">
                <Quote className="w-5 h-5 text-[#3AAFF8]" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3AAFF8] to-[#1787D3] flex items-center justify-center text-white text-[20px] font-bold shadow-lg shadow-[#3AAFF8]/25">
                  {testimonial.avatar}
                </div>
                
                <div>
                  <h3 className="text-[20px] font-bold text-[#0a0a0a]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[14px] text-[#666]">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[16px] leading-[1.7] text-[#555]">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-8 mt-16">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {['RS', 'PD', 'AK', 'SK'].map((initials, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3AAFF8] to-[#1787D3] border-2 border-white flex items-center justify-center text-white text-[12px] font-bold">
                  {initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border-2 border-white flex items-center justify-center text-white text-[11px] font-bold">
                +2K
              </div>
            </div>
            <p className="text-[15px] text-[#555]">
              <span className="font-bold text-[#0a0a0a]">2,847+</span> Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;