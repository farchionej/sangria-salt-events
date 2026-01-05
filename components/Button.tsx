import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 ease-in-out border";

  const variants = {
    primary: "bg-sangria-900 border-sangria-900 text-white hover:bg-stone-900 hover:border-stone-900",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-stone-900",
    ghost: "bg-transparent border-transparent text-sangria-900 hover:text-stone-900 px-4",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
