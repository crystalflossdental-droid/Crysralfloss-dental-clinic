import React, { useState } from 'react';
import Button from './common/Button';
import image from "../../public/assets/images/teeth-whitening.jpeg"
import CrownsAndBridges from "../../public/assets/images/crown-ad-bridge.jpeg"
import dentalImplant from "../../public/assets/images/dental-implant.jpeg"
import rootCanalTreatment from "../../public/assets/images/root-canal-treatment.jpeg"
import gumTreatment from "../../public/assets/images/gun-treatment.jpeg"
import bracesAligners from "../../public/assets/images/teeth-brsces.jpeg"
import smileMakeover from "../../public/assets/images/smileMakeover.jpeg"
import dentures from "../../public/assets/images/dentures.jpeg"
import dentalVeneers from "../../public/assets/images/dental-veneers.jpeg"


interface Treatment {
  id: number;
  title: string;
  description: string;
  image: string;
}

const treatments: Treatment[] = [
  {
    id: 1,
    title: "Dental Implants",
    description: "Permanent solution for missing teeth using titanium roots and natural-looking crowns.",
    image: dentalImplant
  },
  {
    id: 2,
    title: "Smile Makeover",
    description: "Veneers, whitening, and aligners to create your perfect smile.",
    image: smileMakeover
  },

  {
    id: 3,
    title: "Dental Veneers",
    description: "Thin shells to fix chips, stains, or slight misalignment.",
    image: dentalVeneers
  },
  {
    id: 4,
    title: "Teeth Whitening",
    description: "Brighten your smile in one safe, professional session.",
    image: image
  },
  {
    id: 5,
    title: "Crowns and Bridges",
    description: "Restore damaged or missing teeth with natural-looking solutions.",
    image: CrownsAndBridges
  },
  {
    id: 6,
    title: "Root Canal Treatment",
    description: "Painless way to treat infection and save your natural tooth.",
    image: rootCanalTreatment
  },
  {
    id: 7,
    title: "Braces & Aligners",
    description: "Modern orthodontic options like metal braces and Invisalign.",
    image: bracesAligners
  },
  {
    id: 8,
    title: "Gum Treatment",
    description: "Deep cleaning to treat gum disease and protect your teeth.",
    image: gumTreatment
  },
  {
    id: 9,
    title: "Dentures",
    description: "Custom partial or full removable teeth replacements.",
    image: dentures
  }
];

const TreatmentCard = ({ treatment }: { treatment: Treatment }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1.5 group">
      <div className="h-56 overflow-hidden rounded-t-2xl">
        <img 
          src={treatment.image}
          alt={treatment.title}
          draggable="false"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{treatment.title}</h3>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed flex-grow">{treatment.description}</p>
      </div>
    </div>
  );
};

const Treatments = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  
  const showMore = () => {
    setVisibleCount(treatments.length);
  };

  const showLess = () => {
    setVisibleCount(6);
    // Scroll back to treatments section
    const element = document.getElementById('treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4 tracking-tight">
            Treatments We Offer
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl font-normal leading-relaxed">
            Advanced dental solutions with the latest technology and materials
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.slice(0, visibleCount).map((treatment, index) => (
            <div key={treatment.id} data-aos="fade-up" data-aos-delay={index * 50} className="h-full">
              <TreatmentCard treatment={treatment} />
            </div>
          ))}
        </div>

        {visibleCount < treatments.length ? (
          <div className="mt-16 text-center animate-fade-in" data-aos="fade-up">
            <Button onClick={showMore} center size="lg" className="shadow-lg shadow-primary-500/10">
              Show More Treatments
            </Button>
          </div>
        ) : treatments.length > 6 ? (
          <div className="mt-16 text-center animate-fade-in" data-aos="fade-up">
            <Button onClick={showLess} variant="outline" center size="lg">
              Show Less
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Treatments;