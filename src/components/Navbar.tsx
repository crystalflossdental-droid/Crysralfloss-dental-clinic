import React, { useState, useEffect } from 'react';
import Button from './common/Button';
import { Menu as Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll style effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll into section
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = ['home', 'about',  'treatments', 'gallery', 'testimonial', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by the amount of intersection ratio (most visible first)
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const mostVisibleId = visibleEntries[0].target.id;
          setActiveSection(mostVisibleId);
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Clinic Name */}
          <div className="flex items-center">
            {/* Mobile Menu Toggle - Only on mobile, before logo */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden focus:outline-none mr-4 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Logo */}
            <img 
              src="/assets/images/footer_logo.png" 
              className={`transition-all duration-500 object-contain ${
                isScrolled 
                  ? 'w-12 h-12 md:w-24 md:h-24' 
                  : 'w-24 h-24'
              }`} 
            />
            
            {/* Clinic Name - Two lines: CrystalFloss on top, Dental Clinic below */}
            <div className={`ml-4 transition-all duration-500 ${
              isScrolled 
                ? 'text-slate-900' 
                : 'text-white'
            }`}>
              <h1 className={`font-bold font-heading capitalize ${
                isScrolled 
                  ? 'text-base md:text-lg lg:text-xl' 
                  : 'text-base md:text-lg lg:text-xl'
              }`}>
                CrystalFloss
              </h1>
              <h2 className={`font-medium font-heading capitalize ${
                isScrolled 
                  ? 'text-xs md:text-sm lg:text-base' 
                  : 'text-xs md:text-sm lg:text-base'
              }`}>
                Dental Clinic
              </h2>
            </div>
          </div>

          {/* Right: Desktop Navigation and Button */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <nav className="flex items-center space-x-1 lg:space-x-3 xl:space-x-6">
              {['home', 'about', 'treatments', 'gallery', 'testimonial', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-heading font-semibold transition-all duration-300 border-b-2 pb-1 text-sm lg:text-base px-1 ${
                    activeSection === item
                      ? isScrolled
                        ? 'text-primary-600 border-primary-600'
                        : 'text-white border-white'
                      : isScrolled
                      ? 'text-slate-600 border-transparent hover:text-primary-600 hover:border-primary-600/30'
                      : 'text-slate-200 border-transparent hover:text-white hover:border-white/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              variant={isScrolled ? 'primary' : 'outline-white'}
              size="sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              Get in Touch 
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50"
            >
              <nav className="flex flex-col space-y-4 px-6 text-center">
                {['home', 'about', 'treatments', 'gallery', 'testimonial', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsOpen(false);
                    }}
                    className={`capitalize font-heading font-semibold py-2 transition-all ${
                      activeSection === item 
                        ? 'text-primary-600 bg-primary-50/50 rounded-xl' 
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-xl'
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <div className="pt-2">
                  <Button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsOpen(false);
                    }}
                    fullWidth
                    size="sm"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
