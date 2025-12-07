import React from 'react';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 border-t-4 border-huila-green">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-1">
                <Logo />
              </div>
              <div className="font-display text-xl font-bold uppercase leading-tight text-white">
                Liga de Tenis
                <br />
                <span className="text-huila-yellow">Del Huila</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Entidad rectora del tenis de campo en el departamento del Huila, afiliada a la Federación Colombiana de Tenis.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/ligatenishuila/"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-[#E4405F]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-lg font-display font-bold uppercase tracking-wider text-huila-yellow">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center transition-colors hover:text-huila-green">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-huila-green opacity-0 transition-opacity hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-6 text-lg font-display font-bold uppercase tracking-wider text-huila-yellow">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-huila-green" />
                <span>
                  Calle 21 # 5 Bis - 55
                  <br />
                  Barrio Sevilla, Neiva
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-huila-green" />
                <span>(608) 871 2345</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-huila-green" />
                <span>contacto@ligatenishuila.com</span>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="mb-6 text-lg font-display font-bold uppercase tracking-wider text-huila-yellow">Horarios</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex justify-between border-b border-gray-800 pb-2">
                <span>Lunes - Viernes</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sábados</span>
                <span className="text-white">8:00 AM - 12:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Domingos</span>
                <span className="text-huila-green">Cerrado</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-xs text-gray-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Liga de Tenis del Huila. Diseñada por{' '}
            <a
              href="https://ecoingenieria.co/"
              className="font-semibold text-huila-yellow hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ecoingeniería
            </a>
            .
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
