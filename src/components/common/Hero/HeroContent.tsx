import React from 'react';
import Button from '../../common/Button';
import { ArrowRight } from 'lucide-react';

interface HeroContentProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  const scrollToSection = (link: string) => {
    const sectionId = link.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-5xl lg:text-7.5xl font-extrabold font-heading leading-tight tracking-tight mb-4 sm:mb-6 drop-shadow-md">
        {title}
      </h1>
      <p className="text-base sm:text-lg lg:text-2xl text-slate-100 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-sans font-normal opacity-95">
        {subtitle}
      </p>
      <Button
        type="button"
        onClick={() => scrollToSection(buttonLink)}
        size="md"
        className="group shadow-lg shadow-primary-500/25"
      >
        {buttonText}
        <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Button>
    </div>
  );
};

export default HeroContent;
