'use client';

import React, { useState } from 'react';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { TrendingDown, ShieldCheck, Check, X, ArrowRight, Sparkles } from 'lucide-react';

interface CalculatorUltraProps {
  lang: Language;
  onOpenAnalysis: () => void;
}

export const CalculatorUltra: React.FC<CalculatorUltraProps> = ({ lang, onOpenAnalysis }) => {
  const [hours, setHours] = useState(120);
  const t = TRANSLATIONS[lang].calc;

  // Cálculos comparativos de aviación privada UHNW
  const share =
    hours <= 75
      ? '1/8 (50 - 75h/año)'
      : hours <= 150
      ? '1/4 (100 - 150h/año)'
      : hours <= 250
      ? '1/2 (200 - 250h/año)'
      : 'Flota Compartida (300h+)';

  const charterRate = 9800; // Spot charter medio para aeronave de gran cabina
  const jetEliteRate = 5600; // Tarifa neta de hora ocupada Jet-Elite

  const totalCharter = hours * charterRate;
  const totalJetElite = hours * jetEliteRate;
  const savingsAnnual = totalCharter - totalJetElite;

  // Costes fijos evitados frente a comprar el 100% del avión
  const fullFixedOverhead = 480000; // Hangar, tripulación fija, seguros de casco y recertificación

  return (
    <section id="financiero" className="py-28 bg-[#0F131C] relative border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-white/[0.02] mb-4">
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

        {/* Panel Interactivo */}
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          
          {/* Slider de Horas Anuales (50 a 400 hrs) */}
          <div className="mb-12 max-w-2xl mx-auto text-center">
            <label htmlFor="ultraHours" className="block font-mono text-xs text-[#94A3B8] uppercase tracking-wider mb-2">
              {t.hoursLabel}
            </label>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-mono text-5xl sm:text-6xl font-extrabold text-[#C5A059] tabular-nums">
                {hours}
              </span>
              <span className="text-sm font-mono text-white/70 uppercase">hrs / año</span>
            </div>

            <input
              id="ultraHours"
              type="range"
              min="50"
              max="400"
              step="10"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2.5 bg-[#07090E] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#94A3B8] mt-2">
              <span>50 hrs</span>
              <span>150 hrs</span>
              <span>250 hrs</span>
              <span>400 hrs</span>
            </div>

            <div className="mt-6 inline-block py-1.5 px-4 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-mono text-[#C5A059]">
              {t.recShare} <strong className="text-white font-serif">{share}</strong>
            </div>
          </div>

          {/* Comparador de 3 Columnas: Jet-Elite vs Chárter vs Compra 100% */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
            
            {/* Columna 1: Jet-Elite Fractional (Destacada) */}
            <div className="rounded-2xl bg-gradient-to-b from-[#C5A059]/15 via-white/[0.02] to-white/[0.01] border-2 border-[#C5A059] p-6 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-[#C5A059] text-[#07090E] font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                RECOMENDADO
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                  Modelo Felton Aviation
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {t.colFractional}
                </h3>

                <div className="font-mono text-3xl font-extrabold text-[#C5A059] mb-1 tabular-nums">
                  ${totalJetElite.toLocaleString()} USD
                </div>
                <p className="text-[11px] font-mono text-[#94A3B8] mb-6">
                  Tarifa neta $5,600/h ocupada + Fee proporcional
                </p>

                <ul className="space-y-3 text-xs text-[#D4D8E2] border-t border-white/[0.08] pt-4 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Titularidad registral y deducción contable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Aeronave garantizada en 120 minutos (365 días)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Cero horas muertas o tramos vacíos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Programa de recompra de capital garantizado</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block">
                  {t.annualSavings}
                </span>
                <span className="font-mono text-xl font-bold text-emerald-300">
                  +${savingsAnnual.toLocaleString()} USD / año
                </span>
              </div>
            </div>

            {/* Columna 2: Chárter Spot Tradicional */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-1">
                  Vuelo a Vuelo
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {t.colCharter}
                </h3>

                <div className="font-mono text-3xl font-bold text-white/80 mb-1 tabular-nums">
                  ${totalCharter.toLocaleString()} USD
                </div>
                <p className="text-[11px] font-mono text-[#94A3B8] mb-6">
                  Tarifa spot media $9,800/h sin compromiso
                </p>

                <ul className="space-y-3 text-xs text-[#94A3B8] border-t border-white/[0.08] pt-4 mb-6">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Sin retorno de capital ni activo contable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Tarifas fluctuantes en temporada alta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Sujeto a disponibilidad del mercado chárter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Facturación de tramos de reposicionamiento</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-[#94A3B8]">
                <span>Sin amortización de activo patrimonial</span>
              </div>
            </div>

            {/* Columna 3: Compra 100% de Aeronave */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-1">
                  Propiedad Completa
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {t.colFull}
                </h3>

                <div className="font-mono text-2xl sm:text-3xl font-bold text-white/80 mb-1">
                  $12M - $35M USD
                </div>
                <p className="text-[11px] font-mono text-[#94A3B8] mb-6">
                  Capital inmovilizado en 1 solo avión
                </p>

                <ul className="space-y-3 text-xs text-[#94A3B8] border-t border-white/[0.08] pt-4 mb-6">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>$480,000/año en costos fijos fijos aunque no vuele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Si el avión entra a mantenimiento, usted no vuela</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Gestión compleja de tripulación y nóminas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Depreciación acelerada y riesgo de reventa</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center">
                <span className="text-[10px] font-mono uppercase text-amber-300 block">
                  {t.avoidedFixed}
                </span>
                <span className="font-mono text-base font-bold text-amber-200">
                  +${fullFixedOverhead.toLocaleString()} USD / año
                </span>
              </div>
            </div>

          </div>

          {/* CTA Footer de la Calculadora */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span className="text-xs text-[#94A3B8] font-mono">
              * Estimaciones basadas en operación auditada de gran cabina con tripulación ejecutiva certificada.
            </span>
            <button
              onClick={onOpenAnalysis}
              className="px-6 py-3 rounded-full bg-[#C5A059] text-[#07090E] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shrink-0"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};