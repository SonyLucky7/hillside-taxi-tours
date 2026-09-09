'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Users } from 'lucide-react';

const CarCard = ({ 
  name, 
  image, 
  route,
  rate,
  rateFormula,
  seats,
  featured
}: { 
  name: string; 
  image: string; 
  route: string;
  rate: string;
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
      
      <div className="relative h-[180px] bg-gradient-to-br from-[#f8f8f8] to-[#eee] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[18px] font-bold text-[#0a0a0a] italic">{name}</h3>
          <div className="flex items-center gap-1 text-[13px] text-[#666]">
            <Users className="w-4 h-4 text-[#3AAFF8]" />
            <span>{seats}</span>
          </div>
        </div>
        
        <p className="text-[13px] font-semibold text-[#1787D3] uppercase mb-1">{route}</p>
        <p className="text-[13px] text-[#555] mb-3">{rateFormula}</p>
        
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

const CarFleet = () => {
  const cars = [
    {
      name: 'Swift Dzire',
      image: '/images/cars/swift-dzire.jpg',
      route: 'DZIRE MEGHALAYA RATE',
      rate: '16000',
      rateFormula: '4000/-×4=16000/-',
      seats: 4,
      featured: true,
    },
    {
      name: 'Ertiga',
      image: '/images/cars/ertiga.jpg',
      route: 'ERTIGA GUWAHATI LOCAL',
      rate: '14000',
      rateFormula: '4000/-×14000/-',
      seats: 7,
    },
    {
      name: 'Innova',
      image: '/images/cars/innova.jpg',
      route: 'INNOVA GUWAHATI LOCAL',
      rate: '4500',
      rateFormula: 'RATE 4500/-×4500×1=4500/-',
      seats: 7,
    },
    {
      name: 'Swift Dzire',
      image: '/images/cars/swift-dzire.jpg',
      route: 'GUWAHATI LOCAL RATE',
      rate: '3000',
      rateFormula: '3000/-×3000×1=3000/-',
      seats: 4,
    },
    {
      name: 'Innova Crysta',
      image: '/images/cars/innova.jpg',
      route: 'INNOVA CRISTA KAZIRANGA & TAWANG & MEGHALAYA',
      rate: '66000',
      rateFormula: 'RATE 6000/-×6000×11=66000/-',
      seats: 7,
    },
    {
      name: 'Ertiga',
      image: '/images/cars/ertiga.jpg',
      route: 'ERTIGA KAZIRANGA & TAWANG',
      rate: '35000',
      rateFormula: 'RATE 5000/-×5000×7= 35000/-',
      seats: 7,
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-white to-[#f8fbff] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#3AAFF8]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3AAFF8]/10 border border-[#3AAFF8]/20 mb-6">
            <span className="text-[14px] font-semibold text-[#1787D3]">Our Fleet</span>
          </div>
          <h2 className="text-[44px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
            5 DAYS MEGHALAYA <span className="gradient-text">TOUR PLAN</span>
          </h2>
          <p className="text-[18px] text-[#555] max-w-xl mx-auto">
            Whether it's a solo ride, family trip, or hill tour — travel your way, in comfort and style.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cars.map((car, index) => (
              <CarCard
                key={index}
                name={car.name}
                image={car.image}
                route={car.route}
                rate={car.rate}
                rateFormula={car.rateFormula}
                seats={car.seats}
                featured={car.featured}
              />
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-[28px] lg:text-[36px] font-bold text-[#0a0a0a] text-center mb-10">
              5 DAYS MEGHALAYA TOUR PLAN
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#f5f5f5] rounded-2xl p-6">
                <h4 className="text-[20px] font-bold text-[#0a0a0a] mb-1">Day 1</h4>
                <p className="text-[15px] font-semibold text-[#333] mb-4">Guwahati Airport To Shillong...</p>
                <ul className="space-y-1 text-[14px] text-[#555]">
                  <li>1-Umiam Lake</li>
                  <li>2-Words Lake</li>
                  <li>3-Donbosco Musium</li>
                  <li>4-Police Bazar</li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] rounded-2xl p-6">
                <h4 className="text-[20px] font-bold text-[#0a0a0a] mb-1">Day 3</h4>
                <p className="text-[15px] font-semibold text-[#333] mb-4">Mawlynnong To Cherapunji</p>
                <ul className="space-y-1 text-[14px] text-[#555]">
                  <li>1-Garden Of Cavs</li>
                  <li>2-Aura Cavs</li>
                  <li>3-Na Khalika Water Falls.</li>
                  <li>4-Wa Khaba Water Falls</li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] rounded-2xl p-6">
                <h4 className="text-[20px] font-bold text-[#0a0a0a] mb-1">Day 2</h4>
                <p className="text-[15px] font-semibold text-[#333] mb-4">Shillong To Mawlynnong</p>
                <ul className="space-y-1 text-[14px] text-[#555]">
                  <li>1-Phe Phe Falls</li>
                  <li>2-Karangsuri Water Falls</li>
                  <li>3-Dawki Boting Point India Bangaladesh Boder.</li>
                  <li>4-Mawlynnong Asia Clines Village.</li>
                  <li>5-Singale Trecker Root Bridge</li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] rounded-2xl p-6">
                <h4 className="text-[20px] font-bold text-[#0a0a0a] mb-1">Day 4</h4>
                <p className="text-[15px] font-semibold text-[#333] mb-4">&nbsp;</p>
                <ul className="space-y-1 text-[14px] text-[#555]">
                  <li>1-Kenrim Falls</li>
                  <li>2-7sister Water Falls</li>
                  <li>3-Eco Park</li>
                  <li>4-Mowsmai Cavs Others Side Seen.</li>
                </ul>
              </div>

              <div className="bg-[#f5f5f5] rounded-2xl p-6 md:col-span-2 md:max-w-md md:mx-auto">
                <h4 className="text-[20px] font-bold text-[#0a0a0a] mb-1">Day 5</h4>
                <p className="text-[15px] font-semibold text-[#333] mb-2">Cherapunji To Guwahati Airport.</p>
                <p className="text-[14px] text-[#555]">Cherapunji To Guwahati Airport - 6:30 Pm</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border-2 border-[#e5e5e5] text-[16px] font-bold text-[#1a1a1a] hover:border-[#3AAFF8] hover:text-[#1787D3] transition-all duration-300 shadow-sm"
            >
              View All Vehicles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default CarFleet;