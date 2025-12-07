import React from 'react';
import { MOCK_SPONSORS } from '../constants';

export const Sponsors: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Nuestros Aliados</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {MOCK_SPONSORS.map((sponsor) => (
             <div key={sponsor.id} className="w-24 md:w-32 h-20 flex items-center justify-center">
               <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  title={sponsor.name}
               />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};