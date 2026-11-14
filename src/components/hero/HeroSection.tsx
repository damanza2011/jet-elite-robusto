'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plane, ArrowRight, ShieldCheck, Sparkles, MapPin, Calendar, Users, Award, Clock } from 'lucide-react';
import { POPULAR_EXECUTIVE_AIRPORTS } from '@/lib/data/airports.data';

interface HeroSectionProps {
  onOpenQuoteWithRoute?: (origin?: string, destination?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteWithRoute }) => {
  const [activeTab, setActiveTab] = useState<'charter' | 'fractional'>('charter');
  const [quickOrigin, setQuickOrigin] = useState('SKRG / MDE');
  const [quickDestination, setQuickDestination] = useState('KOPF / MIA');
  const [passengers, setPassengers] = useState(4);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenQuoteWithRoute) {
      onOpenQuoteWithRoute(quickOrigin, quickDestination);
    }
  };

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-obsidian-950">
      {/* Background ultra-lujo con foto de cabina ejecutiva y degradado editorial */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=85&w=2000&auto=format&fit=crop"
          alt="Jet Elite Luxury Private Aviation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 select-none pointer-events-none"
        />
        {/* Degradados multicapa estilo VistaJet */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/85 to-obsidian-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.14)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Eyebrow de Lujo */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/40 bg-obsidian-900/90 backdrop-blur-md mb-6 shadow-lg shadow-champagne/5">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-champagne">
            Estándar VistaJet &amp; OPUL · Aviación Privada UHNW
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-platinum tracking-tight max-w-5xl font-normal leading-[1.1] mb-6">
          Vuelos privados a su medida.{' '}
          <span className="block mt-2 italic font-serif bg-gradient-to-r from-champagne-light via-champagne to-champagne-dark bg-clip-text text-transparent">
            Sin esperas, sin intermediarios.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-lg text-silver max-w-2xl font-normal leading-relaxed mb-10">
          Chárter ejecutivo on-demand o copropiedad fraccionada de aeronaves con base en Medellín y alcance global (Miami, Madrid, Caribe y Europa).
        </p>

        {/* Selector Dual Intent con Pestañas de Lujo */}
        <div className="w-full max-w-3xl bg-obsidian-900/95 border border-champagne/40 rounded-2xl p-3 sm:p-4 backdrop-blur-2xl shadow-2xl shadow-black/90 mb-10">
          
          {/* Pestañas */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-obsidian-950 rounded-xl mb-4 border border-obsidian-800">
            <button
              onClick={() => setActiveTab('charter')}
              className={`py-2.5 px-4 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'charter'
                  ? 'bg-champagne text-obsidian-950 shadow-md'
                  : 'text-silver hover:text-platinum'
              }`}
            >
              <Plane className="w-4 h-4 -rotate-45" />
              <span>Chárter On-Demand</span>
            </button>
            <button
              onClick={() => setActiveTab('fractional')}
              className={`py-2.5 px-4 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'fractional'
                  ? 'bg-champagne text-obsidian-950 shadow-md'
                  : 'text-silver hover:text-platinum'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Copropiedad Fraccionada</span>
            </button>
          </div>

          {/* Contenido Pestaña 1: Chárter Rápido */}
          {activeTab === 'charter' ? (
            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                {/* Origen */}
                <div className="bg-obsidian-950 border border-obsidian-750 p-2.5 rounded-xl">
                  <label className="block text-[10px] font-mono uppercase text-silver mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-champagne" />
                    <span>Origen FBO</span>
                  </label>
                  <select
                    value={quickOrigin}
                    onChange={(e) => setQuickOrigin(e.target.value)}
                    className="w-full bg-transparent text-platinum text-xs font-serif font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="SKRG / MDE" className="bg-obsidian-900">Medellín (JMC Exec - SKRG)</option>
                    <option value="SKBO / BOG" className="bg-obsidian-900">Bogotá (El Dorado VIP - SKBO)</option>
                    <option value="KOPF / MIA" className="bg-obsidian-900">Miami (Opa-locka Exec - KOPF)</option>
                    <option value="LEMD / MAD" className="bg-obsidian-900">Madrid (Barajas VIP - LEMD)</option>
                    <option value="SKCG / CTG" className="bg-obsidian-900">Cartagena (Rafael Núñez - SKCG)</option>
                  </select>
                </div>

                {/* Destino */}
                <div className="bg-obsidian-950 border border-obsidian-750 p-2.5 rounded-xl">
                  <label className="block text-[10px] font-mono uppercase text-silver mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-champagne" />
                    <span>Destino FBO</span>
                  </label>
                  <select
                    value={quickDestination}
                    onChange={(e) => setQuickDestination(e.target.value)}
                    className="w-full bg-transparent text-platinum text-xs font-serif font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="KOPF / MIA" className="bg-obsidian-900">Miami (Opa-locka Exec - KOPF)</option>
                    <option value="SKRG / MDE" className="bg-obsidian-900">Medellín (JMC Exec - SKRG)</option>
                    <option value="KTEB / NYC" className="bg-obsidian-900">Nueva York (Teterboro - KTEB)</option>
                    <option value="LEIB / IBZ" className="bg-obsidian-900">Ibiza (Baleares VIP - LEIB)</option>
                    <option value="SKCG / CTG" className="bg-obsidian-900">Cartagena (Rafael Núñez - SKCG)</option>
                  </select>
                </div>

                {/* Pasajeros */}
                <div className="bg-obsidian-950 border border-obsidian-750 p-2.5 rounded-xl">
                  <label className="block text-[10px] font-mono uppercase text-silver mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-champagne" />
                    <span>Pasajeros</span>
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-transparent text-platinum text-xs font-serif font-bold focus:outline-none cursor-pointer"
                  >
                    <option value={1} className="bg-obsidian-900">1 Pasajero (Ejecutivo)</option>
                    <option value={4} className="bg-obsidian-900">4 Pasajeros (Grupo corporativo)</option>
                    <option value={8} className="bg-obsidian-900">8 Pasajeros (Super Midsize)</option>
                    <option value={12} className="bg-obsidian-900">12 Pasajeros (Heavy Jet)</option>
                  </select>
                </div>
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light text-obsidian-950 font-serif font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-champagne/20"
              >
                <span>Cotizar Vuelo Privado Paso a Paso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Contenido Pestaña 2: Copropiedad Fraccionada */
            <div className="text-left p-4 bg-obsidian-950 rounded-xl border border-obsidian-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-platinum">
                    Adquiera una fracción de aeronave (1/8, 1/4 o 1/2)
                  </h3>
                  <p className="text-xs text-silver mt-0.5">
                    Garantice 50 a 200 horas anuales con titularidad legal, deducción contable y costo por hora neto de \$5,400 USD.
                  </p>
                </div>
                <div className="px-3 py-1 rounded bg-champagne/10 border border-champagne/40 text-champagne font-mono text-xs font-semibold shrink-0">
                  Respuesta &lt; 120 min
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#membresias"
                  className="py-2.5 px-5 rounded-lg bg-champagne text-obsidian-950 font-serif font-bold text-xs hover:bg-champagne-light transition-all flex items-center gap-1.5"
                >
                  <span>Calcular ROI y Ahorro en Membresía</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => onOpenQuoteWithRoute?.('Membresía Fraccional', '50-100h')}
                  className="py-2.5 px-5 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 text-platinum border border-obsidian-700 text-xs font-serif font-semibold transition-all"
                >
                  Solicitar Consulta con Director VIP
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Badges de Confianza Rápidos en el Hero */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-silver">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-champagne" />
            <span>Alistamiento &lt; 120 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-champagne" />
            <span>Certificación AOC FAA / EASA</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-champagne" />
            <span>Auditorías ARGUS Gold &amp; Wyvern</span>
          </div>
        </div>

      </div>
    </section>
  );
};