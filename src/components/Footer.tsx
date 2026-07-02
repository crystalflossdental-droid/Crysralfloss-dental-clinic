import React from 'react';
import {  Phone, Mail, MapPin, Instagram } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 border-t border-slate-800/80 text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/assets/images/footer_logo.png" className="w-16 h-16 object-contain" />
              <span className="ml-3 text-xl font-bold font-heading tracking-tight capitalize text-white">crystalfloss dental clinic</span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Premium dental care for international patients in India. 
              World-class treatments at affordable prices with a memorable experience.
            </p>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://www.instagram.com/crystalfloss.dentalclinic?igsh=OHFiZm5vcHM0a3hp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800 border border-slate-700/50 transition-all hover:bg-primary-600 hover:border-primary-500 hover:scale-105"
              >
                <Instagram className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-slate-300 hover:text-white">@crystalfloss.dentalclinic</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading tracking-wide mb-6 border-l-4 border-primary-500 pl-3">Quick Links</h3>
            <ul className="space-y-3.5">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#treatments" },
                { name: "Treatments", href: "#treatments" },
                { name: "Contact Us", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm sm:text-base inline-block py-0.5 hover:underline decoration-primary-500 underline-offset-4"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading tracking-wide mb-6 border-l-4 border-primary-500 pl-3">Contact Information</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-3 mt-1 cursor-pointer flex-shrink-0" />
                <span className="text-slate-400">+91 9560726424</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-1 cursor-pointer flex-shrink-0" />
                <span className="text-slate-400 break-all">crystalflossdental@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1 cursor-pointer flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed">Shop No. 6, First Floor, B-Block, Sector 52, Noida - 201301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>© {currentYear} crystalfloss dental clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
