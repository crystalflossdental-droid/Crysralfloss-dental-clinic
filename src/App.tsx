import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

import About from './components/About';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';


function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
      
        <Treatments />
        <Gallery />
        <Testimonial />
        <Contact />
        <GoogleMap />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="919560726424" message="Hello! I'd like to schedule a dental appointment at CrystalFloss Dental Clinic." />
    </div>
  );
}

export default App;
