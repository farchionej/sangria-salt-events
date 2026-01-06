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
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 ease-in-out border transform hover:scale-[1.02] active:scale-[0.98]";

  const variants = {
    primary: "bg-sangria-900 border-sangria-900 text-white hover:bg-stone-900 hover:border-stone-900 hover:shadow-lg",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-stone-900 hover:shadow-lg",
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
