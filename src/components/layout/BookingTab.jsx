import React from 'react';

const BookingTab = () => {
  return (
    <a 
      href="/contact" 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] bg-[var(--sp-gold)] text-white py-4 px-2 rounded-l-md shadow-2xl hover:bg-[#8a6e47] transition-all duration-300 group hidden md:block"
      style={{ writingMode: 'vertical-rl' }}
    >
      <span className="text-[12px] font-bold uppercase tracking-[0.2em] transform rotate-180">
        Book An Appointment
      </span>
    </a>
  );
};

export default BookingTab;
