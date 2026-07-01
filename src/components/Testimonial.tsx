import React, { useState, useEffect, useRef } from "react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Geetansh Makkar",
    role: "Smile Makeover Patient",
    quote:
      "Working with CrystalFloss felt effortless. They guided me through the process and delivered a smile that exceeded expectations.",
    avatar: "GM",
  },
  {
    id: 2,
    name: "Nikita Gupta",
    role: "Dental Implant Patient",
    quote:
      "CrystalFloss integrated their professional approach with a patient-friendly experience. I'm thrilled with the results!",
    avatar: "NG",
  },
  {
    id: 3,
    name: "Preeti Rathi",
    role: "Teeth Whitening Patient",
    quote:
      "From regular check-ups to cosmetic dentistry, CrystalFloss transformed my dental health experience. A+!",
    avatar: "PR",
  },
  {
    id: 4,
    name: "Dot U",
    role: "Teeth Whitening Patient",
    quote:
      "Top-notch facility and professional service. Crysralfloss dental clinic is easily the best dental clinic I’ve visited. They are very punctual, so I had almost no waiting time. At first I was scared little bit but when I saw the patients and after talking with them i got a bunch of nice reviews. They use the latest dental tools and follow strict hygiene protocols. Very satisfied with the results of my treatment of teeths !",
    avatar: "DU",
  },
  {
    id: 5,
    name: "Vikas Kamra",
    role: "Teeth Whitening Patient",
    quote:
      "We had excellent experience with the doctor. She handled the case of my 6 year old with compassion and patience. Made her feel at ease. Highly recommended!",
    avatar: "VK",
  },
  {
    id: 6,
    name: "Ansh varshney",
    role: "Teeth Whitening Patient",
    quote:
      "Great experience! Highly trained staff, clean clinic and painless treatment. Highly recommended.",
    avatar: "AV",
  },
  {
    id: 7,
    name: "Arun Kumar",
    role: "Teeth Whitening Patient",
    quote:
      "I got my RCT done from here. It was painless and very comfortable. Highly recommend CrystalFloss Dental Clinic Noida sector 52",
    avatar: "AK",
  },
  {
    id: 8,
    name: "Swati Nain",
    role: "Teeth Whitening Patient",
    quote:
      "Dr.Millan is a very brilliant ,soft spoken and polite doctor.She gives best treatment in less visit. I highly recommend Crystal Floss Dental Clinic to anyone looking for quality dental care.",
    avatar: "SN",
  },
  {
    id: 9,
    name: "Neha Garg",
    role: "Teeth Whitening Patient",
    quote:
      "Dr Milan is very professional in her work. I felt so comfortable with the RCT process.. At first I was bit anxious but she handled me very calmly. Amazing doctor. Thanks Dr Milan.",
    avatar: "NG",
  },
  {
    id: 10,
    name: "Manu Bansal",
    role: "Teeth Whitening Patient",
    quote:
      "Milan is a great dentist. She hears your problem with patience and provides the treatment after proper examination. Another great thing about her is that she never suggest you a treatment which is not required.",
    avatar: "MB",
  },
];

const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);

  const allTestimonials = [...testimonials, ...testimonials];

  const animate = () => {
    if (!isPaused && scrollContainerRef.current) {
      scrollPositionRef.current += 1;
      const maxScroll = scrollContainerRef.current.scrollWidth / 2;
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
      }
      scrollContainerRef.current.scrollLeft = scrollPositionRef.current;
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <section id="testimonial" className="bg-white py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl font-normal leading-relaxed">
            Real stories from real patients who have transformed their smiles
            and dental health with us
          </p>
        </div>

        <div className="relative">
          {/* Left gradient blur */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient blur */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {allTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-[380px] md:max-w-80 bg-white border border-slate-100/80 rounded-2xl p-8 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  <div className="text-primary-500 mb-5 opacity-40">
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.069-.499-2.848-1.315zm13.334 0C16.883 16.227 16.33 15 16.33 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.069-.499-2.848-1.315z" />
                    </svg>
                  </div>

                  <blockquote className="text-slate-600 text-base leading-relaxed mb-6 flex-1 line-clamp-6 font-normal">
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm shadow-primary-500/10">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold font-heading text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
