import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-full outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md focus:ring-primary',
    secondary: 'bg-muted text-charcoal hover:bg-gray-200 focus:ring-gray-300 border border-gray-200',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary/5 focus:ring-primary',
    ghost: 'text-charcoal hover:bg-gray-100 bg-transparent',
    white: 'bg-white text-primary hover:bg-gray-50 shadow-sm hover:shadow-md'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg'
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
