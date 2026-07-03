import React, { useState, useRef } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

import Button from './common/Button';

const clinicImages = [
  '/assets/images/1.jpg',
  '/assets/images/2.jpg',
  '/assets/images/3.jpg',
  '/assets/images/4.jpg',
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);
  };

  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clinic Overview */}
        <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
            Welcome to CrystalFloss Dental Clinic
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed mb-12">
            At CrystalFloss Dental Clinic, we believe every great smile begins with trust, knowledge, and prevention. Before recommending any treatment, we ensure you fully understand your dental condition, the available treatment options, and why a procedure is needed, so you can make informed decisions with confidence. We recommend only the treatments that are genuinely necessary and focus on long-lasting solutions rather than temporary fixes.
          </p>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed mb-12">
            Our philosophy is centered on preventive dentistry, helping you maintain healthy teeth and gums for life through expert guidance, personalized oral care advice, and professional preventive treatments. We are committed to providing ethical, high-quality dental care that protects your smile for years to come.
          </p>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed mb-16">
            From young children to seniors, our compassionate team is dedicated to making every visit comfortable, stress-free, and welcoming. At CrystalFloss Dental Clinic, we don't just treat teeth—we care for people, building lifelong relationships as your trusted family dentist.
          </p>
          
          {/* Clinic Photos Slider */}
          <div className="relative max-w-6xl mx-auto" data-aos="fade-up">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {clinicImages.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <img
                      src={image}
                      alt={`CrystalFloss Dental Clinic ${index + 1}`}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '16/9' }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Dr. Millan's Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center" data-aos="fade-up">
            {/* Left: Photo */}
            <div className="relative" data-aos="fade-right">
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50/50 shadow-sm" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border-4 border-white">
                <img
                  src="/assets/images/doctor1.png"
                  alt="Dr. Millan Singhal"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-8" data-aos="fade-left">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-3 tracking-tight">
                  Dr. Millan Singhal
                </h3>
                <span className="inline-block text-base text-primary-700 font-semibold mb-6 bg-primary-100/60 border border-primary-200/50 px-4 py-1.5 rounded-full shadow-sm">
                  BDS, Certified Implantologist
                </span>
                <p className="text-slate-600 text-lg leading-relaxed font-normal mb-4">
                  Dr. Millan Singhal, BDS completed her Bachelor's in Dental Surgery (BDS) in 2019 and brings 7+ years of clinical experience in providing advanced, patient-focused dental care.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed font-normal mb-4">
                  She has practiced across reputed dental clinics in the NCR region and has successfully treated 5,000+ patients, including 1,500+ Japanese patients, earning their trust through her precision, gentle approach, and commitment to excellence.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed font-normal">
                  Certified in Dental Implantology since 2022, Dr. Singhal has extensive experience in dental implants and has also completed advanced certifications in Root Canal Treatment (RCT) and other modern dental procedures.
                </p>
              </div>

             

              <div className="space-y-4">
                <h4 className="font-bold font-heading text-slate-900 text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Pediatric Dentistry',
                    'Root Canal Treatment',
                    'Dental Implants',
                    'Tooth Extractions',
                    'Preventive Dentistry',
                    'Comprehensive Family Dental Care',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white border border-slate-200/60 shadow-sm px-4 py-2.5 rounded-xl text-slate-700 font-semibold text-sm transition-all duration-300 hover:border-primary-300 hover:bg-primary-50/30 hover:-translate-y-0.5 cursor-default"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                  className="shadow-lg shadow-primary-500/10"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
