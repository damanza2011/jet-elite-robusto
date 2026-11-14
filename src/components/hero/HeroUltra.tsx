'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Users, Globe2, Clock, Plane, Award, MapPin } from 'lucide-react';

interface HeroUltraProps {
  lang: Language;
  onOpenAnalysis: () => void;
  onOpenQuoteWithRoute?: (origin?: string, destination?: string) => void;
}

export const HeroUltra: React.FC<HeroUltraProps> = ({
  lang,
  onOpenAnalysis,
  onOpenQuoteWithRoute,
}) => {
  const [activeTab, setActiveTab] = useState<'fractional' | 'charter'>('fractional');
  const [quickOrigin, setQuickOrigin] = useState('SKRG / MDE');
  const [quickDest, setQuickDest] = useState('KOPF / MIA');
  const [quickPax, setQuickPax] = useState('4');

  const t = TRANSLATIONS[lang].hero;

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenQuoteWithRoute) {
      onOpenQuoteWithRoute(quickOrigin, quickDest);
    }
  };

  return (
    <section id="_inicio" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#07090E]">
      {/* Background Nocturno Aeronáutico de Ultra-Lujo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=90&w=2400&auto=format&fit=crop"
          alt="Jet-Elite Transcontinental Large-Cabin Aircraft"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 select-none pointer-events-none scale-105"
        />
        {/* Degradado multicapa estilo VistaJet */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-[#07090E]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.18)_0%,transparent_65%)]" />
      </div>

      {/* Contenido Central */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center text-center my-auto">
        
        {/* Kicker Superior: Felton Aviation Management */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-white/[0.02] backdrop-blur-xl mb-6 shadow-2xl">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#D4D8E2]">
            {t.badge}
          </span>
        </div>

        {/* Título H1 Imponente */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight max-w-5xl font-normal leading-[1.08] mb-6">
          {t.titleLine1}{' '}
          <span className="block mt-1 sm:mt-2 italic font-serif bg-gradient-to-r from-[#F4F5F8] via-[#C5A059] to-[#D4D8E2] bg-clip-text text-transparent">
            {t.titleLine2}
          </span>
        </h1>

        {/* Subtítulo de Propuesta de Valor Real */}
        <p className="text-sm sm:text-lg text-[#94A3B8] max-w-2xl font-normal leading-relaxed mb-8">
          {t.subtitle}
        </p>

        {/* Selector Dual Intent con Pestañas: Chárter vs Propiedad Fraccionada */}
        <div className="w-full max-w-3xl bg-white/[0.03] border border-[#C5A059]/40 rounded-2xl p-3 sm:p-4 backdrop-blur-2xl shadow-2xl mb-8">
          
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#07090E] rounded-xl mb-3 border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('fractional')}
              className={`py-2 px-4 rounded-lg font-serif text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'fractional'
                  ? 'bg-[#C5A059] text-[#07090E] shadow-md'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Propiedad Fraccionada</span>
            </button>
            <button
              onClick={() => setActiveTab('charter')}
              className={`py-2 px-4 rounded-lg font-serif text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'charter'
                  ? 'bg-[#C5A059] text-[#07090E] shadow-md'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Plane className="w-3.5 h-3.5 -rotate-45" />
              <span>Chárter On-Demand</span>
            </button>
          </div>

          {activeTab === 'fractional' ? (
            <div className="text-left p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-base font-bold text-white">
                  Invierte en una fracción y sé dueño de una flota entera
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Asegure de 50 a 200 horas anuales garantizadas los 365 días del año con tripulación ex-aerolínea.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={onOpenAnalysis}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B59456] via-[#C5A059] to-[#E0C797] text-[#07090E] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-[#C5A059]/20"
                >
                  <span>Analizar Fracción</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#financiero"
                  className="px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-white transition-all flex items-center"
                >
                  Simular ROI
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
                <div className="bg-[#07090E] border border-white/[0.08] p-2.5 rounded-xl">
                  <label className="block text-[9.5px] font-mono uppercase text-[#94A3B8] mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>Origen FBO</span>
                  </label>
                  <select
                    value={quickOrigin}
                    onChange={(e) => setQuickOrigin(e.target.value)}
                    className="w-full bg-transparent text-white text-xs font-serif font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="SKRG / MDE" className="bg-[#0B0E15]">Medellín (JMC Exec - SKRG)</option>
                    <option value="SKBO / BOG" className="bg-[#0B0E15]">Bogotá (El Dorado VIP - SKBO)</option>
                    <option value="KOPF / MIA" className="bg-[#0B0E15]">Miami (Opa-locka Exec - KOPF)</option>
                    <option value="LEMD / MAD" className="bg-[#0B0E15]">Madrid (Barajas VIP - LEMD)</option>
                    <option value="SKCG / CTG" className="bg-[#0B0E15]">Cartagena (Rafael Núñez - SKCG)</option>
                  </select>
                </div>

                <div className="bg-[#07090E] border border-white/[0.08] p-2.5 rounded-xl">
                  <label className="block text-[9.5px] font-mono uppercase text-[#94A3B8] mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>Destino FBO</span>
                  </label>
                  <select
                    value={quickDest}
                    onChange={(e) => setQuickDest(e.target.value)}
                    className="w-full bg-transparent text-white text-xs font-serif font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="KOPF / MIA" className="bg-[#0B0E15]">Miami (Opa-locka Exec - KOPF)</option>
                    <option value="SKRG / MDE" className="bg-[#0B0E15]">Medellín (JMC Exec - SKRG)</option>
                    <option value="KTEB / NYC" className="bg-[#0B0E15]">Nueva York (Teterboro - KTEB)</option>
                    <option value="LEIB / IBZ" className="bg-[#0B0E15]">Ibiza (Baleares VIP - LEIB)</option>
                    <option value="SKCG / CTG" className="bg-[#0B0E15]">Cartagena (Rafael Núñez - SKCG)</option>
                  </select>
                </div>

                <div className="bg-[#07090E] border border-white/[0.08] p-2.5 rounded-xl">
                  <label className="block text-[9.5px] font-mono uppercase text-[#94A3B8] mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#C5A059]" />
                    <span>Pasajeros</span>
                  </label>
                  <select
                    value={quickPax}
                    onChange={(e) => setQuickPax(e.target.value)}
                    className="w-full bg-transparent text-white text-xs font-serif font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="1" className="bg-[#0B0E15]">1 Pasajero (Ejecutivo)</option>
                    <option value="4" className="bg-[#0B0E15]">4 Pasajeros (Corporativo)</option>
                    <option value="8" className="bg-[#0B0E15]">8 Pasajeros (Super Midsize)</option>
                    <option value="12" className="bg-[#0B0E15]">12-18 Pasajeros (Gran Cabina)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-[#C5A059] text-[#07090E] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Cotizar Vuelo Chárter en 4 Pasos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Barra de Telemetría Inferior (3 KPIs de Alto Impacto) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-4 sm:p-5 shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          
          <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
            <div className="flex items-center gap-2 text-white font-mono text-2xl sm:text-3xl font-bold tracking-tight">
              <Users className="w-5 h-5 text-[#C5A059]" />
              <span className="tabular-nums">{t.kpi1Value}</span>
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase mt-1">
              {t.kpi1Label}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0 sm:px-4">
            <div className="flex items-center gap-2 text-[#C5A059] font-mono text-2xl sm:text-3xl font-bold tracking-tight">
              <Compass className="w-5 h-5 text-[#C5A059]" />
              <span className="tabular-nums">{t.kpi2Value}</span>
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase mt-1">
              {t.kpi2Label}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0 sm:pl-4">
            <div className="flex items-center gap-2 text-white font-mono text-2xl sm:text-3xl font-bold tracking-tight">
              <Clock className="w-5 h-5 text-[#C5A059]" />
              <span className="tabular-nums">{t.kpi3Value}</span>
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase mt-1">
              {t.kpi3Label}
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};