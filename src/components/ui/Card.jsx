import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  animate = true, 
  variant = 'white' 
}) => {
  const baseStyles = 'rounded-xl overflow-hidden p-8 transition-all duration-300';
  
  const variants = {
    white: 'bg-white border border-gray-100 shadow-sm',
    muted: 'bg-muted/50 border border-gray-200',
    primary: 'bg-primary text-white',
    outlined: 'bg-transparent border-2 border-primary/20'
  };

  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  const content = (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Card;
