import React from 'react';
import { MOCK_RANKING } from '../constants';
import { SectionTitle } from './ui/SectionTitle';

export const RankingsSection: React.FC = () => {
  return (
    <section id="ranking" className="py-20 bg-huila-green relative overflow-hidden">
      {/* Decorative bg patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-huila-yellow opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-white uppercase tracking-wide">
            Ranking Departamental
          </h2>
          <p className="mt-4 text-green-100 text-lg">
            Los mejores tenistas del departamento.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Pos</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Jugador</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Club</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Categoría</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Puntos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_RANKING.map((player) => (
                  <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                        player.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                        player.rank === 2 ? 'bg-gray-300 text-gray-800' :
                        player.rank === 3 ? 'bg-orange-200 text-orange-900' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {player.rank}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{player.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-sm text-gray-500">{player.club}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {player.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-bold text-huila-green">{player.points}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-center">
            <a href="#full-ranking" className="text-sm font-bold text-huila-green hover:text-green-800 uppercase tracking-wide">
              Ver Ranking Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};