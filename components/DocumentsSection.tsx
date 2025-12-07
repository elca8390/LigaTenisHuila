import React from 'react';
import { FileText, Download } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const DOCUMENTS = [
  { name: 'Certificación cumplimiento Art. 364-5', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/02.%20CERTIFICACION%20CUMPLIMIENTO%20ART.%20364-5.pdf' },
  { name: 'Acta de Constitución + Resolución 020 1971', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/03.%20ACTA%20DE%20CONSTITUCION%20+%20Resolucion%20020%201971.PDF' },
  { name: 'Certificación cargos directivos', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/08.%20CERTIFICACION%20CARGOS%20DIRECTIVOS.pdf' },
  { name: 'Acta 029 LTH Autorización RL', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/09.%20ACTA%20029%20%20LTH%20AUTORIZACION%20RL.pdf' },
  { name: 'Acta 030 LTH - No distribución de beneficios ni devolución de aportes', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/10.%20ACTA%20030%20%20LTH%20-%20No%20distrubicion%20de%20beneficios%20ni%20devol%20aportes.pdf' },
  { name: 'Certificación cumplimiento antecedentes Art. 364-3', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/11.%20CERTIFICACION%20CUMPLIMIENTO%20antecedentes%20ART.%20364-3.pdf' },
  { name: 'Estados financieros 2024 - LTH', url: 'https://www.ligadetenisdelhuila.com/DocumentosRTE/ESTADOS%20FINANCIEROS%202024%20-%20LTH.pdf' },
];

export const DocumentsSection: React.FC = () => {
  return (
    <section className="bg-white py-16" id="documents">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Documentos RTE"
          subtitle="Aquí se encuentran publicados los documentos requeridos para la solicitud o actualización del Registro Web de Entidades Sin Ánimo de Lucro — RTE, conforme a la normatividad vigente."
          centered
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {DOCUMENTS.map((doc) => (
            <a
              key={doc.url}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-huila-green hover:bg-white"
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-huila-green/10 text-huila-green">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-500">Abrir o descargar</p>
                </div>
              </div>
              <Download className="h-5 w-5 text-gray-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
