const fs = require('fs');
const content = `import React, { useState, useEffect } from 'react';
import Button from './common/Button';
import { Menu as Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'treatments', 'gallery', 'testimonial', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
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
      className={\`fixed top-0 w-full z-50 transition-all duration-500 \${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-md py-4' 
          : 'bg-transparent py-6'
      }\`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={\`md:hidden focus:outline-none mr-4 \${isScrolled ? 'text-gray-800' : 'text-white'}\`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <img 
              src="/assets/images/footer_logo.png" 
              className={\`transition-all duration-500 object-contain \${
                isScrolled 
                  ? 'h-14 w-auto md:h-16' 
                  : 'h-20 w-auto md:h-24'
              }\`} 
              alt="CrystalFloss Dental Clinic"
            />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <nav className="flex items-center space-x-1 lg:space-x-4 xl:space-x-8">
              {['home', 'about', 'treatments', 'gallery', 'testimonial', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={\`capitalize font-heading font-semibold transition-all duration-300 border-b-2 pb-1 text-base lg:text-lg px-2 \${
                    activeSection === item
                      ? isScrolled
                        ? 'text-primary-600 border-primary-600'
                        : 'text-white border-white'
                      : isScrolled
                      ? 'text-slate-700 border-transparent hover:text-primary-600 hover:border-primary-600/30'
                      : 'text-white/90 border-transparent hover:text-white hover:border-white/50'
                  }\`}
                >
                  {item}
                </button>
              ))}
            </nav>

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
                    className={\`capitalize font-heading font-semibold py-2 transition-all \${
                      activeSection === item 
                        ? 'text-primary-600 bg-primary-50/50 rounded-xl' 
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-xl'
                    }\`}
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
`;
fs.writeFileSync('d:\\client\\Crysralfloss-dental-clinic\\src\\components\\Navbar.tsx', content, 'utf8');
console.log('Navbar fixed');
