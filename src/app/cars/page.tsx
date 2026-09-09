'use client';
import React from 'react';
import Image from 'next/image';
import { Users, Phone } from 'lucide-react';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const CarCard = ({ 
  name, 
  image, 
  route,
  rateFormula,
  seats,
  featured
}: { 
  name: string; 
  image: string; 
  route: string;
  rateFormula: string;
  seats: number;
  featured?: boolean;
}) => {
  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden border ${featured ? 'border-[#3AAFF8]/30 ring-2 ring-[#3AAFF8]/20' : 'border-[#e5e5e5]'}`}>
      {featured && (
        <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] text-white text-[11px] font-bold uppercase tracking-wider">
          Popular
        </div>
      )}
      
      <div className="relative h-[200px] bg-gradient-to-br from-[#f8f8f8] to-[#eee] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[18px] font-bold text-[#0a0a0a] italic">{name}</h3>
          <div className="flex items-center gap-1 text-[13px] text-[#666]">
            <Users className="w-4 h-4 text-[#3AAFF8]" />
            <span>{seats} Seats</span>
          </div>
        </div>
        
        <p className="text-[13px] font-semibold text-[#1787D3] uppercase mb-1">{route}</p>
        <p className="text-[15px] font-bold text-[#0a0a0a] mb-3">{rateFormula}</p>
        
        <p className="text-[13px] text-[#666] mb-4">Parking And Toll As Per Actuals</p>

        <div className="flex items-center gap-3">
          <a 
            href="https://api.whatsapp.com/send/?phone=918471966233"
            className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] text-white text-[13px] font-semibold text-center hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=918471966233"
            className="flex-1 py-2.5 rounded-lg border-2 border-[#3AAFF8] text-[#1787D3] text-[13px] font-semibold text-center hover:bg-[#3AAFF8]/10 transition-colors"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default function CarsPage() {
  const cars = [
    {
      name: 'Swift Dzire',
      image: '/images/cars/swift-dzire.jpg',
      route: 'DZIRE MEGHALAYA RATE',
      rateFormula: '₹4,000/- × 4 Days = ₹16,000/-',
      seats: 4,
      featured: true,
    },
    {
      name: 'Ertiga',
      image: '/images/cars/ertiga.jpg',
      route: 'ERTIGA GUWAHATI LOCAL',
      rateFormula: '₹4,000/- per day',
      seats: 7,
    },
    {
      name: 'Innova',
      image: '/images/cars/innova.jpg',
      route: 'INNOVA GUWAHATI LOCAL',
      rateFormula: '₹4,500/- per day',
      seats: 7,
    },
    {
      name: 'Swift Dzire',
      image: '/images/cars/swift-dzire.jpg',
      route: 'GUWAHATI LOCAL RATE',
      rateFormula: '₹3,000/- per day',
      seats: 4,
    },
    {
      name: 'Innova Crysta',
      image: '/images/cars/innova.jpg',
      route: 'INNOVA CRYSTA KAZIRANGA & TAWANG & MEGHALAYA',
      rateFormula: '₹6,000/- × 11 Days = ₹66,000/-',
      seats: 7,
    },
    {
      name: 'Ertiga',
      image: '/images/cars/ertiga.jpg',
      route: 'ERTIGA KAZIRANGA & TAWANG',
      rateFormula: '₹5,000/- × 7 Days = ₹35,000/-',
      seats: 7,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-b from-white to-[#f8fbff] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#3AAFF8]/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-6">
              <span className="text-[14px] font-semibold text-[#1787D3]">Our Fleet</span>
            </div>
            <h1 className="text-[40px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
              Car Rental <span className="gradient-text">Prices</span>
            </h1>
            <p className="text-[18px] text-[#555] max-w-xl mx-auto">
              Choose from our well-maintained fleet of vehicles. All rates include driver charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cars.map((car, index) => (
              <CarCard
                key={index}
                name={car.name}
                image={car.image}
                route={car.route}
                rateFormula={car.rateFormula}
                seats={car.seats}
                featured={car.featured}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#08012d] to-[#1a1a4e] rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-[16px] text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us for special packages, group bookings, or custom tour plans. We'll create the perfect itinerary for you.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=918471966233"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] text-white text-[16px] font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
