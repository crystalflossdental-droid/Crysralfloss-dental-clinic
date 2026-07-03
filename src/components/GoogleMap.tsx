import React from 'react';

const GoogleMap = () => {
  return (
    <div className="bg-[#F8FAFC] pb-24">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337457.7140804648!2d76.93329011309643!3d28.62752449371222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57cd5a7d5fd%3A0x220205f648643074!2sCrystalFloss%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1783050082535!5m2!1sen!2sin" 
            className="w-full h-80 sm:h-96 lg:h-[550px] rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Crystalfloss Dental Clinic Location"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
