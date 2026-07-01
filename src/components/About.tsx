import React from 'react';
import { Award, CheckCircle, Stethoscope } from 'lucide-react';

import Button from './common/Button';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clinic Overview */}
        <div className="max-w-3xl mx-auto text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4 tracking-tight">
            Welcome to CrystalFloss Dental Clinic
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl font-normal leading-relaxed">
            Your trusted partner in premium, confidence-boosting dental care
          </p>
        </div>

        {/* Dr. Millan's Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center" data-aos="fade-up">
            {/* Left: Details */}
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-3 tracking-tight">
                  Dr. Millan Singhal
                </h3>
                <span className="inline-block text-base text-primary-700 font-semibold mb-6 bg-primary-100/60 border border-primary-200/50 px-4 py-1.5 rounded-full shadow-sm">
                  BDS, Certified Implantologist
                </span>
                <p className="text-slate-600 text-lg leading-relaxed font-normal">
                  Former Japanese Consultant with a focus on precise, patient-friendly, confidence-building dental care.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Registration</h4>
                    <p className="text-slate-500 text-sm mt-0.5">Regn. No: HN - 009846</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 flex-shrink-0">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Experience</h4>
                    <p className="text-slate-500 text-sm mt-0.5">Former Japanese Consultant</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold font-heading text-slate-900 text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Dental Implants',
                    'Cosmetic Dentistry',
                    'Smile Design',
                    'Restorative Care',
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

            {/* Right: Photo */}
            <div className="relative" data-aos="fade-left">
              <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50/50 shadow-sm" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border-4 border-white">
                <img
                  src="/assets/images/doctor1.png"
                  alt="Dr. Millan Singhal"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
