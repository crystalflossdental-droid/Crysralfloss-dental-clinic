import React from 'react';
import Button from './common/Button';
import { Users, Award, CheckCircle, Stethoscope } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary-600 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Meet Our Specialist
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Dedicated to providing exceptional dental care
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center" data-aos="fade-up">
            {/* Left: Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  Dr. Millan Singhal
                </h3>
                <p className="text-xl text-primary-600 font-semibold mb-4">
                  BDS, Certified Implantologist
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Former Japanese Consultant with a focus on precise, patient-friendly, confidence-building dental care.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Registration</h4>
                    <p className="text-gray-600">Regn. No: HN - 009846</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experience</h4>
                    <p className="text-gray-600">Former Japanese Consultant</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                    Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Dental Implants',
                      'Cosmetic Dentistry',
                      'Smile Design',
                      'Restorative Care',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-primary-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-primary-100" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/images/doctor1.png"
                  alt="Dr. Millan Singhal"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <p className="text-white text-lg font-medium">
                    "Your smile is our priority"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
