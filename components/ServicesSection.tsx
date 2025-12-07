import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Trophy, TrendingUp, GraduationCap, Users } from 'lucide-react';

const SERVICES = [
  {
    icon: Trophy,
    title: 'Circuito de Torneos',
    description: 'Coordinamos el calendario oficial de competencias Grado 4, 5 y Festivales Infantiles en todo el departamento.'
  },
  {
    icon: TrendingUp,
    title: 'Ranking Departamental',
    description: 'Administramos el escalafón oficial que mide el rendimiento de los jugadores y define las siembras en torneos.'
  },
  {
    icon: GraduationCap,
    title: 'Capacitación',
    description: 'Ofrecemos cursos de certificación y actualización para entrenadores, preparadores físicos y árbitros.'
  },
  {
    icon: Users,
    title: 'Interclubes',
    description: 'Fomentamos la integración entre clubes mediante torneos por equipos y eventos sociales deportivos.'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nuestros Programas" 
          subtitle="Ejes fundamentales para el desarrollo del tenis huilense."
          centered 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-huila-green group">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-huila-green transition-colors duration-300">
                <service.icon className="w-8 h-8 text-huila-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};