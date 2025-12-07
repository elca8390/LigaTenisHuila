import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './ui/Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur shadow-lg py-4'
          : 'bg-gradient-to-b from-black/70 to-transparent py-6 backdrop-blur'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="group flex items-center space-x-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-1.5 shadow-md transition-transform group-hover:scale-105">
              <Logo />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-display text-xl font-bold uppercase tracking-[0.18em] ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Liga de Tenis
              </span>
              <span
                className={`font-display text-lg font-bold uppercase tracking-[0.25em] ${
                  scrolled ? 'text-huila-green' : 'text-huila-yellow'
                }`}
              >
                Del Huila
              </span>
            </div>
          </a>

          <nav className="hidden items-center space-x-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative py-2 text-sm font-semibold uppercase tracking-[0.18em] transition-all ${
                  scrolled ? 'text-gray-700 hover:text-huila-green' : 'text-gray-100 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-huila-yellow transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="transform rounded-xl border-b-4 border-green-800 bg-huila-green px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-green-700 active:border-b-0 active:translate-y-0.5"
            >
              Afiliarse
            </a>
          </nav>

          <button
            className="rounded-md p-2 transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-8 w-8 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-8 w-8 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-gray-900/95 transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 p-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-2xl font-bold uppercase text-white transition-colors hover:text-huila-yellow"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-8 rounded-full bg-huila-green px-10 py-4 text-lg font-bold uppercase tracking-widest text-white shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Afiliate ahora
          </a>
        </div>
      </div>
    </header>
  );
};
