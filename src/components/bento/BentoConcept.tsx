'use client';

import React from 'react';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { Layers, ShieldAlert, Clock, TrendingUp, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface BentoConceptProps {
  lang: Language;
  onOpenAnalysis?: () => void;
}

export const BentoConcept: React.FC<BentoConceptProps> = ({ lang, onOpenAnalysis }) => {
  const t = TRANSLATIONS[lang].bento;

  return (
    <section id="concepto" className="py-28 bg-[#07090E] relative overflow-hidden">
      {/* Luz ambiental dorada sutil */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Editorial */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-white/[0.02] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#C5A059]">
              {t.kicker}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] mb-4">
            {t.title}
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Bento Grid Asimétrico de 4 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Grande (2 columnas en lg) - Optimización de Capital */}
          <div className="lg:col-span-2 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/50 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 rounded bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30">
                  {t.card1Tag}
                </span>
                <Layers className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4 group-hover:text-[#C5A059] transition-colors">
                {t.card1Title}
              </h3>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-2xl mb-8">
                {t.card1Desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.06] text-xs">
              <div>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Titularidad</span>
                <strong className="text-white font-serif text-sm">Registro Aeronáutico Real</strong>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Respaldo</span>
                <strong className="text-white font-serif text-sm">Aeronave de Respaldo</strong>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Corporaciones</span>
                <strong className="text-white font-serif text-sm">Complemento de Flota</strong>
              </div>
            </div>
          </div>

          {/* Card 2: Fee de Administración Proporcional */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/50 p-8 backdrop-blur-xl transition-all duration-500 group flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 rounded bg-white/[0.04] text-[#D4D8E2] border border-white/[0.08]">
                  {t.card2Tag}
                </span>
                <ShieldAlert className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3 group-hover:text-[#C5A059] transition-colors">
                {t.card2Title}
              </h3>

              <p className="text-[#94A3B8] text-xs leading-relaxed">
                {t.card2Desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#C5A059]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Hangaraje, tripulación fija y seguros incluidos</span>
            </div>
          </div>

          {/* Card 3: Tarifa Solo por Hora Ocupada */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/50 p-8 backdrop-blur-xl transition-all duration-500 group flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 rounded bg-white/[0.04] text-[#D4D8E2] border border-white/[0.08]">
                  {t.card3Tag}
                </span>
                <Clock className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3 group-hover:text-[#C5A059] transition-colors">
                {t.card3Title}
              </h3>

              <p className="text-[#94A3B8] text-xs leading-relaxed">
                {t.card3Desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#C5A059]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>0 horas muertas o tramos vacíos facturados</span>
            </div>
          </div>

          {/* Card 4: Liquidez y Salida Segura (2 columnas en lg) */}
          <div className="lg:col-span-2 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/50 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 rounded bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30">
                  {t.card4Tag}
                </span>
                <TrendingUp className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3 group-hover:text-[#C5A059] transition-colors">
                {t.card4Title}
              </h3>

              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-2xl">
                {t.card4Desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#94A3B8] font-mono">
                Programa oficial de recompra respaldado por Felton Aviation Management Inc.
              </span>
              <button
                onClick={onOpenAnalysis}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] hover:underline uppercase tracking-wider"
              >
                <span>Solicitar Términos Financieros</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};