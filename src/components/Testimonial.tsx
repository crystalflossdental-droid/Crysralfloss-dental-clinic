import React, {  useRef } from "react";
import { Star } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating?: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Geetansh Makkar",
    role: "Preventive Dentistry Patient",
    quote:
      "Working with CrystalFloss felt effortless. They guided me through the process and delivered a smile that exceeded expectations.",
    avatar: "GM",
    rating: 5,
  },
  {
    id: 2,
    name: "Nikita Gupta",
    role: "Restoration & Filling Patient",
    quote:
      "CrystalFloss integrated their professional approach with a patient-friendly experience. I'm thrilled with the results!",
    avatar: "NG",
    rating: 5,
  },
  {
    id: 3,
    name: "Preeti Rathi",
    role: "Teeth Cleaning Patient",
    quote:
      "From regular check-ups to cosmetic dentistry, CrystalFloss transformed my dental health experience. A+!",
    avatar: "PR",
    rating: 5,
  },
  {
    id: 4,
    name: "Dot U",
    role: "Dental Crown Patient",
    quote:
      "Top-notch facility and professional service. Crysralfloss dental clinic is easily the best dental clinic I've visited. They are very punctual, so I had almost no waiting time. At first I was scared little bit but when I saw the patients and after talking with them i got a bunch of nice reviews. They use the latest dental tools and follow strict hygiene protocols. Very satisfied with the results of my treatment of teeths !",
    avatar: "DU",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikas Kamra",
    role: "Pediatric Dentistry Patient",
    quote:
      "We had excellent experience with the doctor. She handled the case of my 6 year old with compassion and patience. Made her feel at ease. Highly recommended!",
    avatar: "VK",
    rating: 5,
  },
  {
    id: 6,
    name: "Ansh varshney",
    role: "RCT (Root Canal Treatment) Patient",
    quote:
      "Great experience! Highly trained staff, clean clinic and painless treatment. Highly recommended.",
    avatar: "AV",
    rating: 5,
  },
  {
    id: 7,
    name: "Arun Kumar",
    role: "Teeth Whitening Patient",
    quote:
      "I got my RCT done from here. It was painless and very comfortable. Highly recommend CrystalFloss Dental Clinic Noida sector 52",
    avatar: "AK",
    rating: 5,
  },
  {
    id: 8,
    name: "Swati Nain",
    role: "Restoration & Filling Patient",
    quote:
      "Dr.Millan is a very brilliant ,soft spoken and polite doctor.She gives best treatment in less visit. I highly recommend Crystal Floss Dental Clinic to anyone looking for quality dental care.",
    avatar: "SN",
    rating: 5,
  },
  {
    id: 9,
    name: "Neha Garg",
    role: "RCT (Root Canal Treatment) Patient",
    quote:
      "Dr Milan is very professional in her work. I felt so comfortable with the RCT process.. At first I was bit anxious but she handled me very calmly. Amazing doctor. Thanks Dr Milan.",
    avatar: "NG",
    rating: 5,
  },
  {
    id: 10,
    name: "Manu Bansal",
    role: "Preventive Dentistry Patient",
    quote:
      "Milan is a great dentist. She hears your problem with patience and provides the treatment after proper examination. Another great thing about her is that she never suggest you a treatment which is not required.",
    avatar: "MB",
    rating: 5,
  },
];

const Testimonial = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    startScrollLeftRef.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    startScrollLeftRef.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

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
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto py-4 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-6 px-2" style={{ width: "max-content" }}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-[380px] md:max-w-80 bg-white border border-slate-100/80 rounded-2xl p-8 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col flex-shrink-0"
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

                  {testimonial.rating && (
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < (testimonial.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                  )}

                  <blockquote className="text-slate-600 text-base leading-relaxed mb-6 flex-1 font-normal">
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