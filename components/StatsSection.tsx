import React from 'react';

const HIGHLIGHTS = [
  { value: '4+', label: 'Clubes afiliados', detail: 'Campestre, Comfamiliar, Pitalito y Corporación Club de Tenis.' },
  { value: '500+', label: 'Jugadores activos', detail: 'Escuelas, interclubes y alto rendimiento en todo el departamento.' },
  { value: '20+', label: 'Torneos al año', detail: 'Circuitos oficiales avalados por FCT y festivales infantiles.' },
  { value: '2012', label: 'Reactivación', detail: 'Año en que retomamos con fuerza el proyecto departamental.' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="relative -mt-8 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-huila-green via-emerald-700 to-huila-green text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_30%)]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="relative grid gap-10 p-10 md:grid-cols-5 md:items-center md:p-14">
            <div className="md:col-span-2 space-y-3">
              <p className="text-xs uppercase tracking-[0.26em] text-white/70">Impacto regional</p>
              <h3 className="font-display text-4xl leading-tight md:text-5xl">El tenis mueve al Huila.</h3>
              <p className="text-sm text-emerald-50/80 md:text-base">
                Indicadores que reflejan el trabajo con clubes, familias y deportistas que hoy compiten con sello opita.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-2 gap-4 md:grid-cols-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="font-display text-3xl md:text-4xl">{item.value}</div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">{item.label}</p>
                  <p className="mt-2 text-xs text-emerald-50/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
