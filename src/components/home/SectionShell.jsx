import React from 'react';

export default function SectionShell({ id, className = '', children }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}

