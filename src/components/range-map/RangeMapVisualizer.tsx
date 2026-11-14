'use client';

import React, { useState } from 'react';
import { Compass, Plane, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface RouteReach {
  dest: string;
  code: string;
  country: string;
  nm: number;
  timeHours: string;
  nonStop: boolean;
}

interface BaseRangeData {
  baseName: string;
  baseCode: string;
  aircraftRanges: {
    [aircraftId: string]: {
      aircraftName: string;
      category: string;
      maxRangeNm: number;
      routes: RouteReach[];
    };
  };
}

const BASES_DATA: { [key: string]: BaseRangeData } = {
  'medellin': {
    baseName: 'Medellín (FBO Rionegro / JMC)',
    baseCode: 'SKRG / MDE',
    aircraftRanges: {
      'phenom-300e': {
        aircraftName: 'Embraer Phenom 300E',
        category: 'Light Jet (2,010 NM)',
        maxRangeNm: 2010,
        routes: [
          { dest: 'Bogotá (El Dorado)', code: 'BOG', country: 'Colombia', nm: 130, timeHours: '0h 42m', nonStop: true },
          { dest: 'Cartagena (Rafael Núñez)', code: 'CTG', country: 'Colombia', nm: 250, timeHours: '0h 55m', nonStop: true },
          { dest: 'Panamá (Tocumen)', code: 'PTY', country: 'Panamá', nm: 320, timeHours: '1h 05m', nonStop: true },
          { dest: 'Miami (Opa-locka Exec)', code: 'OPF', country: 'USA', nm: 1380, timeHours: '3h 30m', nonStop: true },
          { dest: 'Cancún (FBO Exec)', code: 'CUN', country: 'México', nm: 1150, timeHours: '2h 55m', nonStop: true },
          { dest: 'Lima (Jorge Chávez)', code: 'LIM', country: 'Perú', nm: 1100, timeHours: '2h 45m', nonStop: true },
        ],
      },
      'challenger-650': {
        aircraftName: 'Bombardier Challenger 650',
        category: 'Heavy Jet (4,000 NM)',
        maxRangeNm: 4000,
        routes: [
          { dest: 'Miami (Opa-locka Exec)', code: 'OPF', country: 'USA', nm: 1380, timeHours: '3h 10m', nonStop: true },
          { dest: 'Nueva York (Teterboro)', code: 'TEB', country: 'USA', nm: 2390, timeHours: '5h 15m', nonStop: true },
          { dest: 'São Paulo (Guarulhos)', code: 'GRU', country: 'Brasil', nm: 2750, timeHours: '5h 50m', nonStop: true },
          { dest: 'Buenos Aires (San Fernando)', code: 'FDO', country: 'Argentina', nm: 3050, timeHours: '6h 30m', nonStop: true },
          { dest: 'Los Ángeles (Van Nuys)', code: 'VNY', country: 'USA', nm: 3200, timeHours: '6h 50m', nonStop: true },
          { dest: 'Madrid (Barajas VIP)', code: 'LEMD', country: 'España', nm: 4400, timeHours: '9h 10m (1 Escala técnica)', nonStop: false },
        ],
      },
      'gulfstream-g650er': {
        aircraftName: 'Gulfstream G650ER',
        category: 'Ultra Long Range (7,500 NM)',
        maxRangeNm: 7500,
        routes: [
          { dest: 'Madrid (Barajas FBO)', code: 'MAD', country: 'España', nm: 4400, timeHours: '8h 25m', nonStop: true },
          { dest: 'Londres (Farnborough)', code: 'FAB', country: 'UK', nm: 4700, timeHours: '8h 55m', nonStop: true },
          { dest: 'París (Le Bourget)', code: 'LFPB', country: 'Francia', nm: 4750, timeHours: '9h 05m', nonStop: true },
          { dest: 'Dubái (Al Maktoum VIP)', code: 'DWC', country: 'EAU', nm: 7400, timeHours: '13h 40m', nonStop: true },
          { dest: 'Tokio (Haneda Exec)', code: 'HND', country: 'Japón', nm: 7450, timeHours: '14h 10m', nonStop: true },
        ],
      },
    },
  },
  'miami': {
    baseName: 'Miami (Opa-locka Executive KOPF)',
    baseCode: 'KOPF / MIA',
    aircraftRanges: {
      'phenom-300e': {
        aircraftName: 'Embraer Phenom 300E',
        category: 'Light Jet (2,010 NM)',
        maxRangeNm: 2010,
        routes: [
          { dest: 'Nueva York (Teterboro)', code: 'TEB', country: 'USA', nm: 950, timeHours: '2h 25m', nonStop: true },
          { dest: 'Nassau (Lynden Pindling)', code: 'NAS', country: 'Bahamas', nm: 180, timeHours: '0h 40m', nonStop: true },
          { dest: 'Medellín (JMC Exec)', code: 'MDE', country: 'Colombia', nm: 1380, timeHours: '3h 30m', nonStop: true },
          { dest: 'Aspen (Pitkin County)', code: 'ASE', country: 'USA', nm: 1720, timeHours: '4h 15m', nonStop: true },
        ],
      },
      'challenger-650': {
        aircraftName: 'Bombardier Challenger 650',
        category: 'Heavy Jet (4,000 NM)',
        maxRangeNm: 4000,
        routes: [
          { dest: 'Los Ángeles (Van Nuys)', code: 'VNY', country: 'USA', nm: 2050, timeHours: '4h 45m', nonStop: true },
          { dest: 'Bogotá (El Dorado VIP)', code: 'BOG', country: 'Colombia', nm: 1510, timeHours: '3h 35m', nonStop: true },
          { dest: 'Londres (Farnborough)', code: 'FAB', country: 'UK', nm: 3850, timeHours: '7h 45m', nonStop: true },
          { dest: 'Ginebra (Cointrin VIP)', code: 'GVA', country: 'Suiza', nm: 4100, timeHours: '8h 20m', nonStop: true },
        ],
      },
      'gulfstream-g650er': {
        aircraftName: 'Gulfstream G650ER',
        category: 'Ultra Long Range (7,500 NM)',
        maxRangeNm: 7500,
        routes: [
          { dest: 'Madrid (Barajas VIP)', code: 'MAD', country: 'España', nm: 3820, timeHours: '7h 15m', nonStop: true },
          { dest: 'Dubái (Al Maktoum VIP)', code: 'DWC', country: 'EAU', nm: 6850, timeHours: '12h 45m', nonStop: true },
          { dest: 'Buenos Aires (San Fernando)', code: 'FDO', country: 'Argentina', nm: 3950, timeHours: '7h 50m', nonStop: true },
        ],
      },
    },
  },
  'madrid': {
    baseName: 'Madrid (Barajas FBO Ejecutivo LEMD)',
    baseCode: 'LEMD / MAD',
    aircraftRanges: {
      'phenom-300e': {
        aircraftName: 'Embraer Phenom 300E',
        category: 'Light Jet (2,010 NM)',
        maxRangeNm: 2010,
        routes: [
          { dest: 'Ibiza (Baleares VIP)', code: 'IBZ', country: 'España', nm: 250, timeHours: '0h 50m', nonStop: true },
          { dest: 'París (Le Bourget)', code: 'LFPB', country: 'Francia', nm: 570, timeHours: '1h 35m', nonStop: true },
          { dest: 'Londres (Farnborough)', code: 'FAB', country: 'UK', nm: 680, timeHours: '1h 55m', nonStop: true },
          { dest: 'Roma (Ciampino VIP)', code: 'CIA', country: 'Italia', nm: 740, timeHours: '2h 05m', nonStop: true },
        ],
      },
      'challenger-650': {
        aircraftName: 'Bombardier Challenger 650',
        category: 'Heavy Jet (4,000 NM)',
        maxRangeNm: 4000,
        routes: [
          { dest: 'Nueva York (Teterboro)', code: 'TEB', country: 'USA', nm: 3120, timeHours: '7h 10m', nonStop: true },
          { dest: 'Dubái (Al Maktoum)', code: 'DWC', country: 'EAU', nm: 3050, timeHours: '6h 40m', nonStop: true },
          { dest: 'Miami (Opa-locka Exec)', code: 'OPF', country: 'USA', nm: 3820, timeHours: '8h 20m', nonStop: true },
        ],
      },
      'gulfstream-g650er': {
        aircraftName: 'Gulfstream G650ER',
        category: 'Ultra Long Range (7,500 NM)',
        maxRangeNm: 7500,
        routes: [
          { dest: 'Medellín (JMC Exec)', code: 'MDE', country: 'Colombia', nm: 4400, timeHours: '8h 45m', nonStop: true },
          { dest: 'Bogotá (El Dorado VIP)', code: 'BOG', country: 'Colombia', nm: 4350, timeHours: '8h 40m', nonStop: true },
          { dest: 'Singapur (Seletar)', code: 'XSP', country: 'Singapur', nm: 6250, timeHours: '12h 10m', nonStop: true },
        ],
      },
    },
  },
};

interface RangeMapVisualizerProps {
  onOpenQuoteWithRoute?: (origin?: string, destination?: string) => void;
}

export const RangeMapVisualizer: React.FC<RangeMapVisualizerProps> = ({ onOpenQuoteWithRoute }) => {
  const [selectedBaseKey, setSelectedBaseKey] = useState<string>('medellin');
  const [selectedAircraftKey, setSelectedAircraftKey] = useState<string>('challenger-650');

  const currentBase = BASES_DATA[selectedBaseKey];
  const currentAircraft = currentBase.aircraftRanges[selectedAircraftKey] || currentBase.aircraftRanges['challenger-650'];

  return (
    <section className="py-24 bg-obsidian-950 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne/30 bg-obsidian-900 mb-3 text-champagne text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Capacidad Operacional Global</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-platinum">
            Simulador de Alcance de Vuelo sin Escalas
          </h2>
        </div>
        <p className="text-silver text-xs sm:text-sm max-w-md">
          Seleccione su punto de partida y compruebe el rango de cobertura directa de cada aeronave con tiempos de vuelo certificados.
        </p>
      </div>

      {/* Controles de Selección */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Selector de Base FBO */}
        <div className="bg-obsidian-900 border border-obsidian-750 p-4 rounded-xl">
          <label className="block text-[11px] font-mono uppercase text-silver mb-2">
            Punto de Partida FBO:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'medellin', label: 'Medellín', sub: 'SKRG' },
              { id: 'miami', label: 'Miami', sub: 'KOPF' },
              { id: 'madrid', label: 'Madrid', sub: 'LEMD' },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBaseKey(b.id)}
                className={`p-3 rounded-lg text-left transition-all border ${
                  selectedBaseKey === b.id
                    ? 'bg-champagne/15 border-champagne text-platinum'
                    : 'bg-obsidian-950 border-obsidian-800 text-silver hover:border-obsidian-700'
                }`}
              >
                <div className="font-serif text-sm font-bold">{b.label}</div>
                <div className="text-[10px] font-mono text-champagne">{b.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selector de Aeronave */}
        <div className="bg-obsidian-900 border border-obsidian-750 p-4 rounded-xl">
          <label className="block text-[11px] font-mono uppercase text-silver mb-2">
            Aeronave de la Flota:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'phenom-300e', label: 'Phenom 300E', range: '2,010 NM' },
              { id: 'challenger-650', label: 'Challenger 650', range: '4,000 NM' },
              { id: 'gulfstream-g650er', label: 'G650ER', range: '7,500 NM' },
            ].map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedAircraftKey(a.id)}
                className={`p-3 rounded-lg text-left transition-all border ${
                  selectedAircraftKey === a.id
                    ? 'bg-champagne/15 border-champagne text-platinum'
                    : 'bg-obsidian-950 border-obsidian-800 text-silver hover:border-obsidian-700'
                }`}
              >
                <div className="font-serif text-xs sm:text-sm font-bold truncate">{a.label}</div>
                <div className="text-[10px] font-mono text-champagne">{a.range}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tarjeta de Destinos Alcanzables */}
      <div className="bg-obsidian-900/90 border border-champagne/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-obsidian-800 gap-4">
          <div>
            <div className="text-xs font-mono text-silver">Desde: <strong className="text-platinum">{currentBase.baseName}</strong></div>
            <h3 className="font-serif text-2xl font-bold text-champagne mt-0.5">
              {currentAircraft.aircraftName} ({currentAircraft.category})
            </h3>
          </div>
          <div className="px-4 py-2 bg-obsidian-950 rounded-xl border border-obsidian-800 text-right">
            <div className="text-[10px] font-mono uppercase text-silver">Radio Máximo de Vuelo</div>
            <div className="text-xl font-mono font-bold text-platinum">{currentAircraft.maxRangeNm.toLocaleString()} NM</div>
          </div>
        </div>

        {/* Lista de Rutas con Tiempos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {currentAircraft.routes.map((route, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-obsidian-950/70 border border-obsidian-800 hover:border-champagne/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-silver mb-1">
                  <span className="font-mono text-champagne">{route.code} • {route.country}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    route.nonStop ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                  }`}>
                    {route.nonStop ? 'Sin escalas' : 'Escala técnica'}
                  </span>
                </div>
                <div className="font-serif text-base font-bold text-platinum group-hover:text-champagne transition-colors">
                  {route.dest}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-obsidian-850 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-silver">
                  <Clock className="w-3.5 h-3.5 text-champagne" />
                  <span>{route.timeHours}</span>
                </div>
                <button
                  onClick={() => {
                    if (onOpenQuoteWithRoute) {
                      onOpenQuoteWithRoute(currentBase.baseCode, route.code);
                    }
                  }}
                  className="font-mono text-[11px] text-champagne hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Cotizar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};