import React from 'react';
import { NavLink } from 'react-router-dom';

const SERVICES = [
  { id: 'wellness-nutrition', name: 'Wellness Nutrition' },
  { id: 'medical-nutrition-therapy', name: 'Medical Nutrition Therapy' },
  { id: 'weight-management', name: 'Weight Management' },
  { id: 'nutrition-for-skin-and-hair', name: 'Nutrition for Skin and Hair' },
  { id: 'corporate-nutrition-program', name: 'Corporate Nutrition Program' },
  { id: 'school-nutrition-program', name: 'School Nutrition Program' },
  { id: 'hospital-dietetic-department-setup', name: 'Hospital Dietetic Department Setup' },
  { id: 'sports-nutrition-services', name: 'Sports Nutrition Services' },
  { id: 'rd-examination-syllabus-revision', name: 'RD Examination' },
  { id: 'academics', name: 'Sehat+ Academia' },
  { id: 'my-life-coach', name: 'My Life Coach' },
];

export default function ServiceSidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-2 bg-[#faf9f6] p-6 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300">
      <h3 className="text-xl font-black text-[#2e2e2e] mb-6 px-4 italic font-serif">All Services</h3>
      {SERVICES.map((s) => (
        <NavLink
          key={s.id}
          to={`/${s.id}`}
          className={({ isActive }) => `
            group flex items-center justify-between px-6 py-4 rounded-2xl text-[14px] font-black uppercase tracking-widest transition-all duration-300
            ${isActive 
              ? 'bg-[var(--sp-brown)] text-white shadow-lg translate-x-2' 
              : 'text-gray-500 hover:bg-white hover:text-[var(--sp-brown)] hover:shadow-md'}
          `}
        >
          {s.name}
          <div className="w-2 h-2 rounded-full bg-[var(--sp-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </NavLink>
      ))}
    </aside>
  );
}
