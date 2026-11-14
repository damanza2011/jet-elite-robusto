'use client';

import React from 'react';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { ShieldCheck, Award, Wrench, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface SafetyUltraProps {
  lang: Language;
}

export const SafetyUltra: React.FC<SafetyUltraProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].safety;

  return (
    <section id="seguridad" className="py-28 bg-[#0F131C] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-white/[0.02] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
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

        {/* 2 Columnas de Precisión: Tripulación vs Mantenimiento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Columna 1: Capitanes Ex-Aerolínea */}
          <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/40 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6">
                <UserCheck className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] block mb-1">
                Comando &amp; Experiencia
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-4">
                {t.pilotsTitle}
              </h3>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                {t.pilotsDesc}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/[0.06] text-xs text-[#D4D8E2]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>&gt;15,000 horas promedio de vuelo en aeronaves pesadas multimotor.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Entrenamiento bianual mandatorio en simuladores de Nivel D (FlightSafety / CAE).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Políticas de descanso estricto y dos capitanes al mando en cada etapa transcontinental.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span>Certificaciones FAA ATP / ICAO Primera Clase</span>
              <span className="text-[#C5A059]">100% Vuelo Seguro</span>
            </div>
          </div>

          {/* Columna 2: Mantenimiento de Fábrica en EE. UU. */}
          <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/40 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6">
                <Wrench className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] block mb-1">
                Ingeniería Certificada
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-4">
                {t.maintTitle}
              </h3>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                {t.maintDesc}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/[0.06] text-xs text-[#D4D8E2]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Instalaciones autorizadas FAA Part 145 en Dallas, Savannah y Fort Lauderdale.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Trazabilidad integral de componentes con historial de ciclo y horas de turbina.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Auditorías continuas de aeronavegabilidad bajo estándares de aerolínea comercial.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span>Mantenimiento Preventivo Cero Tolerancia</span>
              <span className="text-[#C5A059]">FAA / EASA Compliant</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};