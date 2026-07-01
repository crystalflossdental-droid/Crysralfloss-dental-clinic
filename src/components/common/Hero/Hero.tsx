import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSettings } from './sliderSettings';
import HeroSlide from './HeroSlide';
import type { HeroSlide as HeroSlideType } from '../../../data/heroSlides';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  slides: HeroSlideType[];
}

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-md hover:shadow-xl border border-slate-100/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:text-primary-700"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  );
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-md hover:shadow-xl border border-slate-100/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:text-primary-700"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  );
};

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const settings = {
    ...sliderSettings,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section id="home" className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
