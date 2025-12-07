import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { MOCK_NEWS } from '../constants';
import { SectionTitle } from './ui/SectionTitle';

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Últimas Noticias"
          subtitle="Mantente al día con lo que sucede en el tenis del Huila."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS.map((news) => (
            <article key={news.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-huila-green text-white text-xs font-bold px-3 py-1 rounded uppercase">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {news.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display leading-tight group-hover:text-huila-green transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <a href={`#news-${news.id}`} className="inline-flex items-center text-huila-green font-bold uppercase text-sm hover:underline">
                  Leer más <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};