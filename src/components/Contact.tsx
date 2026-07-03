import React, { useRef, useState } from 'react';
import Button from './common/Button';
import { Phone, Mail, Send, MapPin, Check, Loader, AlertCircle, Instagram } from 'lucide-react';
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null); 
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    treatment: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.current) return;

  setLoading(true);
  setError(false);

  try {
    console.log('Form submitted:', formState);

    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    setSubmitted(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
      treatment: '',
    });

    form.current.reset();

    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Email sending failed:', error);
    setError(true);
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl font-normal leading-relaxed">
            We're here to answer your questions and help plan your dental journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" data-aos-delay="100" className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/50 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">Get In Touch </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 flex-shrink-0 mr-4 shadow-sm">
                      <Phone className="h-5 w-5 cursor-pointer" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-slate-900 text-base">Phone & WhatsApp</h4>
                      <p className="text-slate-600 text-sm sm:text-base mt-0.5">+91 9560726424</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 flex-shrink-0 mr-4 shadow-sm">
                      <Mail className="h-5 w-5 cursor-pointer" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-slate-900 text-base">Email</h4>
                      <p className="text-slate-600 text-sm sm:text-base mt-0.5">crystalflossdental@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="225">
                    <a 
                      href="https://www.instagram.com/crystalfloss.dentalclinic?igsh=OHFiZm5vcHM0a3hp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 flex-shrink-0 mr-4 shadow-sm hover:bg-primary-100 transition-colors">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold font-heading text-slate-900 text-base">Instagram</h4>
                        <p className="text-slate-600 text-sm sm:text-base mt-0.5">@crystalfloss.dentalclinic</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex items-start" data-aos="fade-up" data-aos-delay="250">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 border border-primary-100 text-primary-600 flex-shrink-0 mr-4 shadow-sm">
                      <MapPin className="h-5 w-5 cursor-pointer" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-slate-900 text-base">Location</h4>
                      <p className="text-slate-600 text-sm sm:text-base mt-0.5 leading-relaxed">Shop No. 6, First Floor, B-Block, Sector 52, Noida - 201301</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-100/40 border border-primary-200/30 rounded-2xl p-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4">Why contact us?</h3>
              <ul className="space-y-3.5">
                {[
                  "Get a personalized treatment plan",
                  "Receive a clear, upfront cost estimate — no hidden charges",
                  "Ask questions about any dental procedure",
                  "Schedule a consultation at your convenience",
                  "Experience treatment explained in simple, honest terms"
                ].map((item, index) => (
                  <li key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={350 + index * 50}>
                    <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-650 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/40 p-8" data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">Send Us A Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center text-sm font-semibold" >
                  <Check className="h-5 w-5 mr-2" />
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-center text-sm font-semibold" >
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>Sorry, we couldn't send your message. Please try again later.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} ref={form} className="space-y-5" data-aos="fade-up" data-aos-delay="300">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-sm sm:text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="treatment" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Interested In
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formState.treatment}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-850 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  >
                    <option value="">Select a treatment</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                    <option value="Dental Veneers">Dental Veneers</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Crowns & Bridges">Crowns & Bridges</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Braces & Aligners">Braces & Aligners</option>
                    <option value="Gum Treatment">Gum Treatment</option>
                    <option value="Dentures">Dentures</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Tell us about your dental needs or any questions you have..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    fullWidth
                    className="shadow-lg shadow-primary-500/20 py-4"
                  >
                    {loading ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
