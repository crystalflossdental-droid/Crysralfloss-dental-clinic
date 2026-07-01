import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  center?: boolean;
}

// Customizable button styles - change these values to update all buttons
const buttonConfig = {
  fontFamily: "'Poppins', sans-serif",
  colors: {
    primary: {
      bg: 'bg-gradient-to-r from-primary-600 to-primary-500 shadow-md shadow-primary-500/10',
      text: 'text-white',
      hoverBg: 'hover:from-primary-700 hover:to-primary-600 hover:shadow-xl hover:shadow-primary-500/20',
    },
    secondary: {
      bg: 'bg-primary-50 border border-primary-100',
      text: 'text-primary-700',
      hoverBg: 'hover:bg-primary-100',
    },
    outline: {
      bg: 'bg-transparent border-2 border-primary-600',
      text: 'text-primary-600',
      hoverBg: 'hover:bg-primary-50',
    },
    'outline-white': {
      bg: 'bg-transparent border-2 border-white',
      text: 'text-white',
      hoverBg: 'hover:bg-white/15',
    },
    ghost: {
      bg: 'bg-transparent',
      text: 'text-primary-600',
      hoverBg: 'hover:bg-primary-50',
    },
  },
  sizes: {
    sm: 'px-5 py-2.5 text-sm tracking-wide',
    md: 'px-7 py-3.5 text-base tracking-wide',
    lg: 'px-9 py-4 text-lg tracking-wide',
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  center = false,
  className = '',
  ...props
}) => {
  const config = buttonConfig;
  const colorConfig = config.colors[variant];
  const sizeConfig = config.sizes[size];

  const baseClasses = [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold',
    'transition-all duration-300 transform hover:-translate-y-0.5',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0',
    sizeConfig,
    colorConfig.bg,
    colorConfig.text,
    colorConfig.hoverBg,
    fullWidth && 'w-full',
    center && 'mx-auto',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={`${baseClasses} ${className}`}
      style={{ fontFamily: config.fontFamily }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
