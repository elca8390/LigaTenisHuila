import React from 'react';
import { MapPin, CalendarDays, Trophy } from 'lucide-react';
import { MOCK_TOURNAMENTS } from '../constants';
import { SectionTitle } from './ui/SectionTitle';

export const TournamentsSection: React.FC = () => {
  return (
    <section id="tournaments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h2 className="text-4xl font-bold font-display text-gray-900 uppercase tracking-wide">
                Calendario de <span className="text-huila-green">Torneos</span>
             </h2>
             <p className="mt-4 text-gray-600 text-lg max-w-2xl">
               Prográmate para los próximos eventos competitivos.
             </p>
           </div>
           <a href="#all-tournaments" className="hidden md:inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-gray-900 hover:text-white transition-colors">
             Ver Calendario Completo
           </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MOCK_TOURNAMENTS.map((tournament) => (
            <div key={tournament.id} className="border border-gray-200 rounded-2xl p-6 hover:border-huila-green transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-gray-50/50">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center min-w-[100px]">
                <span className="block text-3xl font-bold text-huila-green font-display">
                  {tournament.date.split(' ')[0]}
                </span>
                <span className="block text-xs uppercase font-bold text-gray-500">
                  {tournament.date.split(' ').slice(1, 3).join(' ')}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                    tournament.status === 'Open' ? 'bg-green-100 text-green-700' :
                    tournament.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {tournament.status === 'Open' ? 'Inscripciones Abiertas' : tournament.status}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">
                     • {tournament.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{tournament.name}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-huila-green" />
                  {tournament.location}
                </div>
              </div>

              <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg font-bold text-sm hover:bg-huila-green transition-colors whitespace-nowrap">
                Info
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#all-tournaments" className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-gray-900 hover:text-white transition-colors">
             Ver Calendario Completo
           </a>
        </div>
      </div>
    </section>
  );
};