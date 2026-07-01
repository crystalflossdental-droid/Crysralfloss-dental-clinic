import React from 'react';
import HeroContent from './HeroContent';
import type { HeroSlide as HeroSlideType } from '../../../data/heroSlides';

interface HeroSlideProps {
  slide: HeroSlideType;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ slide }) => {
  return (
    <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/45" />
      </div>
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center">
        <HeroContent
          title={slide.title}
          subtitle={slide.subtitle}
          buttonText={slide.buttonText}
          buttonLink={slide.buttonLink}
        />
      </div>
    </div>
  );
};

export default HeroSlide;
