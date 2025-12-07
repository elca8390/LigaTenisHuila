import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  '/assets/images/hero-1.png',
  '/assets/images/hero-2.png',
  '/assets/images/hero-3.png',
  '/assets/images/hero-4.png',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      3200
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/65 to-huila-green/40" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-huila-yellow/20 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-huila-green/30 blur-3xl" />
      </div>

      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 pt-36 pb-20 md:pt-40 lg:pb-28">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              <span className="mr-2 h-2 w-2 rounded-full bg-huila-yellow" />
              Liga de Tenis del Huila · Oficial
            </div>

            <div className="flex items-center gap-4">
              <img src="/assets/icons/Icon.png" alt="Icono Liga de Tenis del Huila" className="h-14 w-14" />
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                Símbolo oficial · Identidad opita
              </p>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              El tenis que impulsa
              <br />
              al <span className="text-huila-yellow drop-shadow-[0_10px_40px_rgba(254,221,0,0.35)]">Huila</span>
            </h1>

            <p className="max-w-2xl border-l-4 border-huila-green/70 pl-6 text-lg text-gray-100/90 md:text-xl">
              Somos la fuerza que articula clubes, familias y deportistas para que el tenis huilense compita con
              identidad, excelencia y visión de país.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl bg-huila-green px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-[0_10px_35px_rgba(0,155,58,0.35)] transition-all hover:-translate-y-0.5 hover:bg-green-700"
              >
                Afíliate hoy
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#clubs"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Ver clubes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
