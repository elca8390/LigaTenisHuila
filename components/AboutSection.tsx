import React from 'react';
import { Trophy, Sprout, Flag } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-br-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-huila-yellow/5 rounded-tl-full -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side (Left) */}
          <div className="order-2 lg:order-1">
            <div className="border-l-4 border-huila-green pl-4 mb-6">
                <span className="text-huila-green font-bold text-sm uppercase tracking-widest block mb-1">
                ¿Quiénes Somos?
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Impulsamos el tenis en el Huila y formamos a las futuras generaciones.
                </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              La Liga de Tenis del Huila es la entidad rectora que lidera el desarrollo del deporte blanco en la región. Desde nuestra reactivación en 2012, trabajamos de la mano con clubes, entrenadores y familias con una misión clara: <span className="text-gray-900 font-medium">masificar la práctica, formar nuevos talentos y representar con orgullo al Huila.</span>
            </p>

            <div className="space-y-8">
               {/* Feature 1 */}
               <div className="flex items-start group">
                 <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-huila-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-6 h-6 text-white" />
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                        Torneos Oficiales y Visibilidad
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Organizamos eventos avalados por la <span className="font-semibold text-huila-green">Federación Colombiana de Tenis</span>, permitiendo a nuestros jugadores sumar experiencia y puntos en el ranking nacional sin salir de casa.
                    </p>
                 </div>
               </div>

               {/* Feature 2 */}
               <div className="flex items-start group">
                 <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-huila-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Sprout className="w-6 h-6 text-white" />
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                        Formación de Nuevos Talentos
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Fortalecemos la base del tenis huilense apoyando a clubes y escuelas deportivas, acompañando el proceso desde las categorías infantiles (bolas rojas/naranjas) hasta el alto rendimiento.
                    </p>
                 </div>
               </div>

               {/* Feature 3 */}
               <div className="flex items-start group">
                 <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-huila-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Flag className="w-6 h-6 text-white" />
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                        Representación Nacional
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Nuestros deportistas llevan la bandera del departamento a torneos Interligas y Juegos Nacionales, compitiendo con disciplina, respeto y excelencia.
                    </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Image Side (Right) */}
          <div className="order-1 lg:order-2 relative h-full min-h-[500px]">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-100 rounded-3xl -rotate-3 transform translate-x-4 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-huila-yellow rounded-full filter blur-[80px] opacity-20 -z-10"></div>
            
            <img 
              src="/assets/images/FormacionTenis.png" 
              alt="Formación de tenis en el Huila" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl transform transition-transform hover:scale-[1.01] duration-500"
            />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl max-w-[200px] border-l-4 border-huila-green hidden md:block animate-fade-in-up">
              <p className="font-display font-bold text-4xl text-gray-900 mb-1">2012</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Año de Reactivación y Crecimiento Continuo</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
