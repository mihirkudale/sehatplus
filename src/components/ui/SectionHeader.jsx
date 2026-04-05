import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className = '', 
  animation = true 
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const header = (
    <div className={`flex flex-col space-y-4 max-w-4xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="text-charcoal/50 font-semibold uppercase tracking-[0.2em] text-[12px] font-sans">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-[48px] font-serif text-charcoal leading-tight tracking-tight italic italic italic">
        {title}
      </h2>
    </div>
  );

  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {header}
      </motion.div>
    );
  }

  return header;
};

export default SectionHeader;
