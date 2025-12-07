import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-full h-full" }) => {
  return (
    <img
      src="/assets/icons/Icon.png"
      alt="Logo Liga de Tenis del Huila"
      className={className}
      loading="lazy"
    />
  );
};
