'use client';

import React from 'react';
import { Tag, Plane, Calendar, Users, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

interface EmptyLegFlight {
  id: string;
  originName: string;
  originCode: string;
  destName: string;
  destCode: string;
  dateStr: string;
  aircraft: string;
  category: string;
  capacityMax: number;
  originalPriceUsd: number;
  discountedPriceUsd: number;
  discountPercent: number;
  urgent: boolean;
}

const EMPTY_LEGS: EmptyLegFlight[] = [
  {
    id: 'el-1',
    originName: 'Medellín (JMC)',
    originCode: 'SKRG',
    destName: 'Miami (Opa-locka Exec)',
    destCode: 'KOPF',
    dateStr: 'Viernes Próximo · Salida 10:00 AM',
    aircraft: 'Embraer Phenom 300E',
    category: 'Light Jet',
    capacityMax: 7,
    originalPriceUsd: 28500,
    discountedPriceUsd: 13900,
    discountPercent: 51,
    urgent: true,
  },
  {
    id: 'el-2',
    originName: 'Bogotá (El Dorado)',
    originCode: 'SKBO',
    destName: 'Cartagena (Rafael Núñez)',
    destCode: 'SKCG',
    dateStr: 'Sábado · Salida 14:30 PM',
    aircraft: 'Cessna Citation Latitude',
    category: 'Super Midsize',
    capacityMax: 9,
    originalPriceUsd: 11200,
    discountedPriceUsd: 4900,
    discountPercent: 56,
    urgent: false,
  },
  {
    id: 'el-3',
    originName: 'Madrid (Barajas VIP)',
    originCode: 'LEMD',
    destName: 'Ibiza (Baleares VIP)',
    destCode: 'LEIB',
    dateStr: 'Domingo · Salida 11:15 AM',
    aircraft: 'Bombardier Challenger 650',
    category: 'Heavy Jet',
    capacityMax: 12,
    originalPriceUsd: 19800,
    discountedPriceUsd: 8200,
    discountPercent: 58,
    urgent: true,
  },
  {
    id: 'el-4',
    originName: 'Miami (Opa-locka)',
    originCode: 'KOPF',
    destName: 'Nueva York (Teterboro)',
    destCode: 'KTEB',
    dateStr: 'Lunes · Salida 09:00 AM',
    aircraft: 'Gulfstream G650ER',
    category: 'Ultra Long Range',
    capacityMax: 14,
    originalPriceUsd: 36000,
    discountedPriceUsd: 18500,
    discountPercent: 48,
    urgent: false,
  },
];

interface EmptyLegsBoardProps {
  onSelectEmptyLeg?: (origin: string, dest: string) => void;
}

export const EmptyLegsBoard: React.FC<EmptyLegsBoardProps> = ({ onSelectEmptyLeg }) => {
  return (
    <section id="vuelos-vacios" className="py-24 bg-obsidian-900 border-t border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne/30 bg-obsidian-950 mb-3 text-champagne text-xs font-mono uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Oportunidades Operacionales FBO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-platinum">
              Vuelos Vacíos (Empty Legs) Disponibles
            </h2>
          </div>
          <p className="text-silver text-xs sm:text-sm max-w-md">
            Aproveche tramos de reposicionamiento de aeronaves con ahorros de hasta el 60% sobre la tarifa estándar, manteniendo todos los servicios VIP y catering gourmet.
          </p>
        </div>

        {/* Rejilla de Vuelos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EMPTY_LEGS.map((leg) => (
            <div
              key={leg.id}
              className="bg-obsidian-800/90 border border-obsidian-700/80 hover:border-champagne/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-black/70"
            >
              <div>
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                    -{leg.discountPercent}% OFF
                  </span>
                  {leg.urgent && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
                      Salida Inminente
                    </span>
                  )}
                </div>

                {/* Ruta */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-silver">{leg.originName}</div>
                  <div className="text-lg font-serif font-bold text-platinum flex items-center gap-2 my-1">
                    <span>{leg.originCode}</span>
                    <Plane className="w-4 h-4 text-champagne -rotate-45" />
                    <span>{leg.destCode}</span>
                  </div>
                  <div className="text-xs font-mono text-silver">{leg.destName}</div>
                </div>

                {/* Metadatos */}
                <div className="space-y-2 py-3 border-t border-b border-obsidian-700/60 text-xs text-silver">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>{leg.dateStr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>{leg.aircraft} · Hasta {leg.capacityMax} pax</span>
                  </div>
                </div>

                {/* Precios */}
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-silver line-through font-mono">
                      \${leg.originalPriceUsd.toLocaleString()} USD
                    </span>
                    <div className="font-mono text-xl font-extrabold text-champagne">
                      \${leg.discountedPriceUsd.toLocaleString()} USD
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-silver/70">Todo incluido</span>
                </div>
              </div>

              {/* Botón CTA */}
              <button
                onClick={() => {
                  if (onSelectEmptyLeg) {
                    onSelectEmptyLeg(leg.originCode, leg.destCode);
                  }
                }}
                className="w-full mt-5 py-2.5 px-4 rounded-xl bg-obsidian-900 hover:bg-champagne text-platinum hover:text-obsidian-950 font-serif font-bold text-xs border border-champagne/40 hover:border-champagne transition-all flex items-center justify-center gap-1.5"
              >
                <span>Bloquear Este Tramo</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};