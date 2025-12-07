import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Contáctanos" centered />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Card */}
          <div className="bg-huila-green rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display mb-6">Información de Contacto</h3>
              <p className="mb-8 text-green-100">
                Estamos aquí para resolver tus dudas sobre afiliaciones, torneos y escuelas de formación.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg">Dirección</h4>
                    <p className="text-green-100 text-sm">Calle 21 # 5 Bis - 55<br/>Barrio Sevilla, Neiva - Huila</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg">Email</h4>
                    <p className="text-green-100 text-sm">contacto@ligatenishuila.com<br/>presidencia@ligatenishuila.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg">Teléfono</h4>
                    <p className="text-green-100 text-sm">(+57) 310 860 2445<br/>(608) 871 2345</p>
                  </div>
                </div>
              </div>
            </div>
            
             {/* Decorative circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-huila-yellow opacity-20 rounded-full blur-2xl"></div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-gradient-to-br from-huila-green via-green-300 to-huila-yellow p-8 md:p-12 shadow-lg text-gray-900">
            <form
              className="space-y-6"
              action="mailto:contacto@ligadetenisdelhuila.com"
              method="POST"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-huila-green focus:bg-white focus:ring-0 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-huila-green focus:bg-white focus:ring-0 transition-colors" placeholder="300 000 0000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-huila-green focus:bg-white focus:ring-0 transition-colors" placeholder="tu@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-huila-green focus:bg-white focus:ring-0 transition-colors" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-huila-green transition-colors flex items-center justify-center uppercase tracking-widest text-sm"
              >
                Enviar Mensaje
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
