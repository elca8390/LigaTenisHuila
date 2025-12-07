import React from 'react';
import { MOCK_CLUBS } from '../constants';
import { SectionTitle } from './ui/SectionTitle';

export const ClubsSection: React.FC = () => {
  return (
    <section id="clubs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Clubes Afiliados" 
          subtitle="Conoce los escenarios deportivos donde se desarrolla el tenis en el Huila."
          centered 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_CLUBS.map((club) => (
            <div key={club.id} className="group relative overflow-hidden rounded-xl shadow-lg h-64 cursor-pointer">
              <img 
                src={club.image} 
                alt={club.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-display font-bold text-xl leading-tight group-hover:text-huila-yellow transition-colors">
                  {club.name}
                </h3>
                <div className="h-1 w-12 bg-huila-green mt-3 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};