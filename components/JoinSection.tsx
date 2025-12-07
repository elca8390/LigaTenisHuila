import React from 'react';
import { Phone, Users, Trophy, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    icon: Rocket,
    title: 'Desarrollo Integral',
    description: 'Impulsamos tu talento desde la formación base hasta el alto rendimiento con metodología profesional.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Únete a la red más grande de tenistas, entrenadores y familias apasionadas por el deporte blanco en el Huila.',
  },
  {
    icon: Trophy,
    title: 'Competencia Oficial',
    description: 'Acceso exclusivo a torneos federados, ranking departamental y validación nacional de tu juego.',
  },
];

export const JoinSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-gray-50">
      {/* Parte 1: Beneficios (Diseño de Tarjetas) con fondo */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/assets/images/join-bg.jpg"
            alt="Cancha de tenis en el Huila"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="mx-auto mb-16 max-w-3xl text-center text-white">
            <h2 className="mb-6 text-4xl font-display font-bold uppercase tracking-tight md:text-5xl">
              ¿Por qué ser parte de <br />
              <span className="text-huila-green">nuestra liga?</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-100">
              Más que una organización, somos el motor que impulsa el tenis en la región.
              Descubre lo que podemos lograr juntos.
            </p>
          </div>

          <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {REASONS.map((reason, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute -mr-4 -mt-4 top-0 right-0 h-24 w-24 rounded-bl-full bg-huila-yellow/20 transition-transform duration-300 group-hover:scale-110"></div>

                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 transition-colors duration-300 group-hover:bg-huila-green">
                  <reason.icon className="h-7 w-7 text-huila-green transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="relative z-10 mb-3 text-xl font-display font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-700">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parte 2: Split Action (Imagen y CTA) */}
      <div className="flex h-auto flex-col lg:min-h-[600px] lg:flex-row">
        {/* Imagen Izquierda con Overlay Tipográfico */}
        <div className="group relative flex min-h-[500px] justify-center overflow-hidden lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
          <img
            src="/assets/images/Vinculate.png"
            alt="Vincúlate a la Liga de Tenis del Huila"
            className="h-full w-full max-w-[520px] object-cover transition-transform duration-1000 group-hover:scale-105 border-8 border-white/90 rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-16">
            <div className="mb-4 border-l-4 border-huila-yellow pl-6">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-[0.9] drop-shadow-lg">
                ¿QUIERES UNIRTE <br />
                A LA LIGA?
              </h2>
            </div>
            <p className="max-w-md text-lg font-medium text-white/90 drop-shadow-md">
              Tu camino hacia la excelencia deportiva comienza aquí.
            </p>
          </div>
        </div>

        {/* Contenido Derecho CTA */}
        <div className="relative flex flex-col justify-center bg-white p-10 md:p-20 lg:w-1/2">
          <div className="mx-auto max-w-md lg:mx-0">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-huila-green">
              Afiliaciones Abiertas
            </span>
            <h3 className="mb-8 text-3xl font-display font-bold leading-tight text-gray-900 md:text-4xl">
              Haz parte del cambio. <br />
              <span className="text-gray-400">¡Hablemos hoy!</span>
            </h3>

            <div className="mb-10 space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Si eres deportista, padre de familia o entrenador, en la Liga de Tenis del Huila hay un lugar para ti.
              </p>

              <ul className="space-y-3">
                {['Acceso a escuelas de formación', 'Participación en torneos oficiales', 'Beneficios en clubes aliados'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-huila-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-6 border-t border-gray-100 pt-6 sm:flex-row">
              <a
                href="#contact"
                className="group flex w-full items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-huila-green hover:shadow-huila-green/30 shadow-lg sm:w-auto"
              >
                Vincúlate ahora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex w-full items-center justify-center space-x-3 sm:w-auto sm:justify-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-huila-yellow/20">
                  <Phone className="h-5 w-5 text-gray-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-gray-500">Llámanos</span>
                  <span className="font-display text-lg font-bold leading-none text-gray-900">310 860 2445</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
