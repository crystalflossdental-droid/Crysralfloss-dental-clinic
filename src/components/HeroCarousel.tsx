import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export type HeroFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HeroAction = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  imageAlt: string;
  features: HeroFeature[];
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
  autoPlayInterval?: number;
};

const HeroCarousel = ({
  slides,
  autoPlayInterval = 5500,
}: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  if (!slides.length) return null;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f8ff_0%,#ffffff_42%,#edf4ff_100%)] py-16 sm:py-20 lg:min-h-screen lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#c88ac4]/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#7ea9ff]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#483E7C]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={`grid w-full items-center gap-10 transition-all duration-700 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 ${isActive
                  ? 'relative translate-y-0 opacity-100'
                  : 'pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 opacity-0 sm:inset-x-6 lg:inset-x-8'
                }`}
              aria-hidden={!isActive}
            >
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex rounded-full bg-[#b968aa]/12 px-4 py-2 text-sm font-semibold tracking-wide text-[#b968aa] sm:text-base">
                  {slide.eyebrow}
                </span>

                <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#165cba] sm:text-5xl lg:text-7xl">
                  {slide.title}
                  {slide.accent && (
                    <span className="block text-[#483E7C]">
                      {slide.accent}
                    </span>
                  )}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  {slide.description}
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {slide.features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_45px_rgba(72,62,124,0.08)] backdrop-blur"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f1ff] text-[#2d6cdf]">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-[#165cba]">
                              {feature.title}
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    type="button"
                    onClick={slide.primaryAction.onClick}
                    size="lg"
                  >
                    {slide.primaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  {slide.secondaryAction && (
                    <Button
                      type="button"
                      onClick={slide.secondaryAction.onClick}
                      variant="outline"
                      size="lg"
                    >
                      {slide.secondaryAction.label}
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full border border-[#c66cae]/30 bg-white/70 blur-[2px] lg:block" />

                <div className="absolute -right-6 bottom-12 hidden h-6 w-6 rounded-sm bg-[#c66cae] lg:block" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/30 p-3 shadow-[0_25px_60px_rgba(22,92,186,0.18)] backdrop-blur">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.4),transparent_45%,rgba(45,108,223,0.08))]" />

                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="relative h-[320px] w-full rounded-[26px] object-cover sm:h-[420px] lg:h-[560px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroCarousel;