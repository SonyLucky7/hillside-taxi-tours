'use client';
import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Clock, Phone, CheckCircle2, XCircle, Info, ChevronRight, Star } from 'lucide-react';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function TripsPage() {
  const meghalayaTour = {
    title: '5 Days Meghalaya Exploration',
    subtitle: 'Discover the Abode of Clouds: Waterfalls, Root Bridges & Cleanest Villages',
    duration: '5 Days / 4 Nights',
    location: 'Meghalaya, India',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1548263514-0738f73e7208?w=1200&h=600&fit=crop',
    days: [
      {
        day: 1,
        title: 'Arrival in Guwahati & Journey to Shillong',
        description: 'Your journey begins as we pick you up from Guwahati Airport. We\'ll drive towards Shillong, making a scenic stop at Umiam Lake.',
        places: [
          'Umiam Lake (Barapani)',
          'Wards Lake',
          'Don Bosco Museum',
          'Police Bazar'
        ]
      },
      {
        day: 2,
        title: 'Shillong to the Mystical Waterfalls of Mawlynnong',
        description: 'Explore the hidden gems of Jaintia Hills before heading to Asia\'s cleanest village.',
        places: [
          'Phe Phe Falls',
          'Krang Suri Waterfall',
          'Dawki Boating Point (Crystal Clear Water)',
          'Mawlynnong - Asia\'s Cleanest Village',
          'Single Decker Root Bridge'
        ]
      },
      {
        day: 3,
        title: 'Mawlynnong to the Rainiest Place: Cherrapunji',
        description: 'Drive through breathtaking landscapes to reach Cherrapunji, known for its dramatic cliffs and caves.',
        places: [
          'Garden of Caves',
          'Arwa Cave',
          'Nohkalikai Waterfall',
          'Wah Kaba Waterfall'
        ]
      },
      {
        day: 4,
        title: 'Cherrapunji Sightseeing & Local Wonders',
        description: 'A full day dedicated to the natural wonders surrounding Cherrapunji.',
        places: [
          'Kynrem Falls',
          'Seven Sisters Waterfall',
          'Eco Park',
          'Mawsmai Cave',
          'Nohsngithiang Falls'
        ]
      },
      {
        day: 5,
        title: 'Farewell Meghalaya: Cherrapunji to Guwahati',
        description: 'After a final morning soak in the beauty of Cherrapunji, we head back to Guwahati for your departure.',
        places: [
          'Scenic drive back',
          'Guwahati Airport Drop by 6:30 PM'
        ]
      }
    ],
    inclusions: [
      'Private vehicle for all transfers & sightseeing',
      'Fuel, Toll, Parking & Driver Allowance',
      'Pickup & Drop from Guwahati Airport/Station',
      '24/7 On-call support during the trip',
      'Driver with local knowledge'
    ],
    exclusions: [
      'Entry fees to monuments/parks',
      'Personal expenses (tips, laundry, etc)',
      'Boating charges at Dawki/Umiam',
      'Food & Beverages (unless specified)',
      'Anything not mentioned in inclusions'
    ]
  };

  const otherTours = [
    {
      title: 'Kaziranga & Tawang Adventure',
      duration: '7 Days',
      price: 'Starts at ₹24,999',
      highlights: ['Kaziranga National Park', 'Tawang Monastery', 'Sela Pass'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      title: 'Ultimate Northeast Grand Tour',
      duration: '11 Days',
      price: 'Starts at ₹38,999',
      highlights: ['Assam, Arunachal & Meghalaya', 'Tribal Culture', 'Majuli Island'],
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop'
    },
    {
      title: 'Guwahati Cultural Experience',
      duration: '2 Days',
      price: 'Starts at ₹5,999',
      highlights: ['Kamakhya Temple', 'Brahmaputra Cruise', 'Local Crafts'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[85vh] flex items-end overflow-hidden bg-gradient-to-br from-[#08012d] via-[#0a1628] to-[#1a1a4e]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233AAFF8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3AAFF8]/10 rounded-full blur-[150px] -mr-96 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3AAFF8]/5 rounded-full blur-[120px] -ml-64 -mb-32" />
        
        <div className="container mx-auto px-4 relative z-10 pb-16 lg:pb-24">
          <div className="text-center text-white max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-[14px] font-semibold">{meghalayaTour.rating} ({meghalayaTour.reviews} Reviews)</span>
            </div>
            <h1 className="text-[36px] lg:text-[56px] font-bold mb-4 tracking-tight leading-[1.1]">
              {meghalayaTour.title}
            </h1>
            <p className="text-[17px] lg:text-[20px] text-white/80 font-medium mb-8">
              {meghalayaTour.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md">
                <Clock className="w-5 h-5 text-[#3AAFF8]" />
                <span className="text-[14px] font-medium">{meghalayaTour.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-[#3AAFF8]" />
                <span className="text-[14px] font-medium">{meghalayaTour.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column: Itinerary */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
                  <h2 className="text-[28px] font-bold text-[#0a0a0a]">Trip Itinerary</h2>
                  <div className="flex items-center gap-2 text-[#555]">
                    <Clock className="w-5 h-5 text-[#3AAFF8]" />
                    <span className="font-medium">{meghalayaTour.duration}</span>
                  </div>
                </div>

                <div className="space-y-12">
                  {meghalayaTour.days.map((day, index) => (
                    <div key={day.day} className="relative pl-12">
                      {/* Timeline Line */}
                      {index !== meghalayaTour.days.length - 1 && (
                        <div className="absolute left-[20px] top-[40px] bottom-[-48px] w-[2px] bg-gradient-to-b from-[#3AAFF8] to-gray-200" />
                      )}
                      
                      {/* Day Circle */}
                      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#3AAFF8] flex items-center justify-center text-white font-bold shadow-lg shadow-[#3AAFF8]/30 z-10">
                        {day.day}
                      </div>

                      <div className="mb-4">
                        <span className="text-[14px] font-bold text-[#3AAFF8] uppercase tracking-wider mb-1 block">Day {day.day}</span>
                        <h3 className="text-[22px] font-bold text-[#0a0a0a] mb-3">{day.title}</h3>
                        <p className="text-[#555] leading-relaxed mb-6">
                          {day.description}
                        </p>
                      </div>

                      <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
                        <h4 className="text-[14px] font-bold text-[#0a0a0a] uppercase tracking-wider mb-4 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#3AAFF8]" />
                          Places You'll Visit
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {day.places.map((place, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-[15px] text-[#444]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#3AAFF8]" />
                              {place}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {meghalayaTour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] text-[#555]">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-6 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-500" />
                    Exclusions
                  </h3>
                  <ul className="space-y-4">
                    {meghalayaTour.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] text-[#555]">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-gray-100">
                  <div className="mb-6">
                    <p className="text-[14px] font-medium text-[#555] mb-1">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[32px] font-bold text-[#0a0a0a]">₹18,500</span>
                      <span className="text-[16px] text-[#555]">/ person</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#3AAFF8]" />
                        <span className="text-[15px] font-medium">Duration</span>
                      </div>
                      <span className="text-[15px] font-bold">5 Days</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#3AAFF8]" />
                        <span className="text-[15px] font-medium">Location</span>
                      </div>
                      <span className="text-[15px] font-bold">Meghalaya</span>
                    </div>
                  </div>

                  <a
                    href="https://api.whatsapp.com/send/?phone=918471966233"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-[#3AAFF8] to-[#1787D3] text-white text-[16px] font-bold hover:opacity-95 transition-all shadow-lg shadow-[#3AAFF8]/20"
                  >
                    <Phone className="w-5 h-5" />
                    Book via WhatsApp
                  </a>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-[#555]">
                    <Info className="w-4 h-4" />
                    <span>Instant confirmation & 24/7 support</span>
                  </div>
                </div>

                {/* Why Book With Us */}
                <div className="bg-gradient-to-br from-[#08012d] to-[#1a1a4e] rounded-3xl p-8 text-white">
                  <h4 className="text-[18px] font-bold mb-6">Why Choose Us?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#3AAFF8]" />
                      </div>
                      <div>
                        <p className="font-bold text-[14px]">Expert Drivers</p>
                        <p className="text-white/60 text-[12px]">Local knowledge of hilly terrains</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#3AAFF8]" />
                      </div>
                      <div>
                        <p className="font-bold text-[14px]">Flexible Plans</p>
                        <p className="text-white/60 text-[12px]">Customize your trip as you go</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#3AAFF8]" />
                      </div>
                      <div>
                        <p className="font-bold text-[14px]">Best Pricing</p>
                        <p className="text-white/60 text-[12px]">No hidden charges, transparent bills</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-[32px] lg:text-[40px] font-bold text-[#0a0a0a] mb-4">
                More <span className="gradient-text">Adventures</span>
              </h2>
              <p className="text-[17px] text-[#555] max-w-xl">
                Didn't find what you're looking for? Explore our other popular tour packages in the Northeast.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[#3AAFF8] font-bold text-[16px] hover:gap-3 transition-all">
              View All Packages <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherTours.map((tour, index) => (
              <div key={index} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md">
                    <span className="text-[13px] font-bold text-[#1787D3]">{tour.duration}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-4 group-hover:text-[#3AAFF8] transition-colors">{tour.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-[#F8F9FA] text-[12px] text-[#555] border border-gray-100">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-[14px] font-bold text-[#3AAFF8] uppercase">{tour.price}</span>
                    <a
                      href="https://api.whatsapp.com/send/?phone=918471966233"
                      className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0a0a0a] hover:bg-[#3AAFF8] hover:text-white transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-[#08012d] to-[#1a1a4e] rounded-[3rem] p-10 lg:p-20 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3AAFF8]/10 rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3AAFF8]/10 rounded-full blur-[100px] -ml-64 -mb-64" />
            
            <div className="relative z-10">
              <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-[18px] text-white/70 mb-10 max-w-2xl mx-auto">
                Our travel experts are ready to help you plan the perfect trip. Get a free quote and custom itinerary today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=918471966233"
                  className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#08012d] text-[18px] font-bold hover:scale-105 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+918471966233"
                  className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[18px] font-bold hover:bg-white/20 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
