'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { Plane, Users, Compass, Gauge, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

interface AircraftSpec {
  id: string;
  name: string;
  maker: string;
  category: string;
  pax: string;
  rangeNm: number;
  speedMach: string;
  ceilingFt: string;
  img: string;
  desc: {
    es: string;
    en: string;
    fr: string;
    pt: string;
  };
  keyRoutes: string[];
}

const FLEET_DATA: AircraftSpec[] = [
  {
    id: 'g650er',
    name: 'Gulfstream G650ER',
    maker: 'Gulfstream Aerospace',
    category: 'Ultra Long Range (7,500 NM)',
    pax: '14 – 18 Pasajeros',
    rangeNm: 7500,
    speedMach: 'Mach 0.925 (Crucero Máximo)',
    ceilingFt: '51,000 ft (Por encima del clima comercial)',
    img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80',
    desc: {
      es: 'La cúspide de la aviación ejecutiva transcontinental. Cuatro zonas de cabina independientes, suite privada y altitud de cabina ultrabaja para llegar completamente descansado tras vuelos intercontinentales sin escalas.',
      en: 'The pinnacle of transcontinental business aviation. Four distinct living areas, private stateroom, and lowest cabin altitude in class for effortless global missions.',
      fr: 'Le summum de l’aviation d’affaires mondiale. Quatre zones de cabine indépendantes, suite privée et altitude cabine la plus basse pour arriver reposé.',
      pt: 'O ápice da aviação executiva mundial. Quatro zonas de estar privativas, suíte com cama e menor altitude de cabine para missões transcontinentais sem escalas.',
    },
    keyRoutes: ['Medellín ➔ Madrid (8h 25m)', 'Miami ➔ Dubái (12h 45m)', 'Bogotá ➔ Londres (8h 55m)', 'São Paulo ➔ París (10h 30m)'],
  },
  {
    id: 'challenger-650',
    name: 'Bombardier Challenger 650',
    maker: 'Bombardier Aviation',
    category: 'Heavy Jet (4,000 NM)',
    pax: '12 Pasajeros',
    rangeNm: 4000,
    speedMach: 'Mach 0.85',
    ceilingFt: '41,000 ft',
    img: 'https://images.unsplash.com/photo-1559627755-520e5c8397a6?auto=format&fit=crop&w=1200&q=80',
    desc: {
      es: 'La cabina más ancha de su categoría. Combina comodidad de lujo con sofás cama convertibles, Flight Attendant dedicada y acceso ilimitado a equipaje en vuelo.',
      en: 'The widest cabin in its class. Pairs supreme comfort with berthing beds, dedicated cabin attendant, and full in-flight baggage bay access.',
      fr: 'La cabine la plus large de sa catégorie. Confort absolu avec lits convertibles, hôtesse dédiée et accès continu à la soute à bagages.',
      pt: 'A cabine mais larga de sua categoria. Conforto incomparável com camas convertíveis, comissária VIP e acesso total ao bagageiro em voo.',
    },
    keyRoutes: ['Medellín ➔ Miami (3h 10m)', 'Madrid ➔ Nueva York (7h 10m)', 'Bogotá ➔ Buenos Aires (6h 15m)', 'Miami ➔ Aspen (4h 15m)'],
  },
  {
    id: 'latitude',
    name: 'Cessna Citation Latitude',
    maker: 'Textron Aviation',
    category: 'Super Midsize Jet (2,700 NM)',
    pax: '9 Pasajeros',
    rangeNm: 2700,
    speedMach: 'Mach 0.80',
    ceilingFt: '45,000 ft',
    img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    desc: {
      es: 'Suelo de cabina completamente plano y stand-up cabin de 1.83 m. Excelente versatilidad para visitas de negocios regionales en múltiples ciudades en una misma jornada.',
      en: 'Completely flat cabin floor and 6-foot stand-up clearance. Unmatched versatility for multi-city business meetings in a single day.',
      fr: 'Plancher de cabine totalement plat avec 1,83 m sous plafond. Idéal pour des tournées régionales de plusieurs réunions dans la même journée.',
      pt: 'Piso totalmente plano e cabine de 1,83 m de altura. Ideal para itinerários executivos em várias cidades no mesmo dia.',
    },
    keyRoutes: ['Medellín ➔ Cartagena (0h 55m)', 'Miami ➔ Teterboro (2h 25m)', 'Bogotá ➔ Lima (2h 45m)', 'Madrid ➔ Roma (2h 05m)'],
  },
];

interface FleetUltraProps {
  lang: Language;
  onOpenAnalysis: () => void;
}

export const FleetUltra: React.FC<FleetUltraProps> = ({ lang, onOpenAnalysis }) => {
  const [activeAircraftId, setActiveAircraftId] = useState('g650er');
  const t = TRANSLATIONS[lang].fleet;
  const currentAircraft = FLEET_DATA.find((a) => a.id === activeAircraftId) || FLEET_DATA[0];

  return (
    <section id="flota-alcance" className="py-28 bg-[#07090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Técnico Estilo Porsche / Supersonic */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-white/[0.02] mb-4">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#C5A059]">
                {t.kicker}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              {t.title}
            </h2>
          </div>
          <p className="text-[#94A3B8] text-sm max-w-md font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Selector de Pestañas de Aeronaves */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {FLEET_DATA.map((aircraft) => (
            <button
              key={aircraft.id}
              onClick={() => setActiveAircraftId(aircraft.id)}
              className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                activeAircraftId === aircraft.id
                  ? 'bg-white/[0.05] border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                  : 'bg-white/[0.01] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.2]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase text-[#C5A059]">
                  {aircraft.maker}
                </span>
                <span className="text-[10px] font-mono font-bold text-white/80">
                  {aircraft.rangeNm.toLocaleString()} NM
                </span>
              </div>
              <div className="font-serif text-lg font-bold text-white">
                {aircraft.name}
              </div>
            </button>
          ))}
        </div>

        {/* Tarjeta Principal de Telemetría Técnica */}
        <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Imagen Principal */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[500px] overflow-hidden">
              <Image
                src={currentAircraft.img}
                alt={currentAircraft.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#07090E]" />
              
              <div className="absolute top-4 left-4 bg-[#07090E]/90 border border-[#C5A059]/40 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase text-[#C5A059] backdrop-blur-md">
                {currentAircraft.category}
              </div>
            </div>

            {/* Panel de Telemetría */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block mb-1">
                  Ingeniería &amp; Confort
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  {currentAircraft.name}
                </h3>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
                  {currentAircraft.desc[lang]}
                </p>

                {/* Grid de Métricas */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-white/[0.08] mb-8 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-[#94A3B8] uppercase block mb-0.5">{t.paxLabel}</span>
                    <strong className="text-white font-sans text-sm">{currentAircraft.pax}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94A3B8] uppercase block mb-0.5">{t.rangeLabel}</span>
                    <strong className="text-[#C5A059] text-sm">{currentAircraft.rangeNm.toLocaleString()} NM</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94A3B8] uppercase block mb-0.5">{t.speedLabel}</span>
                    <strong className="text-white font-sans text-sm">{currentAircraft.speedMach}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94A3B8] uppercase block mb-0.5">{t.altitudeLabel}</span>
                    <strong className="text-white font-sans text-sm">{currentAircraft.ceilingFt}</strong>
                  </div>
                </div>

                {/* Rutas Clave Sin Escalas */}
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#94A3B8] block mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>Conexiones Transcontinentales Típicas:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentAircraft.keyRoutes.map((r, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[#D4D8E2]"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón de Análisis */}
              <button
                onClick={onOpenAnalysis}
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#07090E] font-serif font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Análisis con {currentAircraft.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};