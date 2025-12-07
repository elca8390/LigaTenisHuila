import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl font-bold font-display text-gray-900 uppercase tracking-wide relative inline-block">
        {title}
        <span className="block h-1 w-20 bg-huila-green mt-2 mx-auto rounded-full"></span>
      </h2>
      {subtitle && <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};