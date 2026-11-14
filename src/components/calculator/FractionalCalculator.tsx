'use client';

import React, { useState } from 'react';
import { Calculator, ShieldCheck, TrendingDown, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface FractionalCalculatorProps {
  onOpenQuote?: () => void;
}

export const FractionalCalculator: React.FC<FractionalCalculatorProps> = ({ onOpenQuote }) => {
  const [flightHours, setFlightHours] = useState(75);

  // Lógica de cálculo financiero comparativo de UHNW
  const shareFraction =
    flightHours <= 50 ? '1/8 (50 Horas/año)' : flightHours <= 100 ? '1/4 (100 Horas/año)' : '1/2 (200 Horas/año)';

  const charterHourlyRate = 8500;
  const fractionalHourlyRate = 5400;

  const totalCharterAnnual = flightHours * charterHourlyRate;
  const totalFractionalAnnual = flightHours * fractionalHourlyRate;
  const annualSavings = totalCharterAnnual - totalFractionalAnnual;

  // Costo fijo evitado frente a compra del 100% (Tripulación fija, hangaraje, seguros)
  const fullOwnershipFixedCostsAvoided = 380000;

  return (
    <section id="membresias" className="py-24 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-t border-b border-obsidian-800 relative overflow-hidden">
      {/* Luz ambiental dorada de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne/30 bg-obsidian-800/80 mb-4">
            <Calculator className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-champagne">
              Ingeniería Financiera UHNW · Modelo OPUL &amp; NetJets
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-platinum tracking-tight mb-4">
            Copropiedad Fraccionada vs. Chárter Tradicional
          </h2>
          <p className="text-silver text-sm sm:text-base font-normal leading-relaxed">
            Elimine los costos muertos de comprar un avión entero. Adquiera únicamente la participación que su agenda requiere con titularidad jurídica y disponibilidad garantizada en &lt; 120 minutos.
          </p>
        </div>

        {/* Panel Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Lado Izquierdo: Deslizador y Métricas de Uso */}
          <div className="lg:col-span-7 bg-obsidian-800/80 border border-obsidian-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="hoursRange" className="font-serif text-lg text-platinum font-semibold">
                  Sus Horas de Vuelo Estimadas al Año:
                </label>
                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-champagne">{flightHours}</span>
                  <span className="text-xs text-silver font-mono ml-1">horas / año</span>
                </div>
              </div>

              {/* Slider de Horas */}
              <input
                id="hoursRange"
                type="range"
                min="25"
                max="200"
                step="5"
                value={flightHours}
                onChange={(e) => setFlightHours(Number(e.target.value))}
                className="w-full h-2.5 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-champagne"
              />
              <div className="flex justify-between text-[11px] font-mono text-silver mt-2">
                <span>25h (Viajero puntual)</span>
                <span>100h (Frecuente ejecutivo)</span>
                <span>200h+ (Corporativo)</span>
              </div>

              {/* Participación Recomendada */}
              <div className="mt-8 p-4 rounded-xl bg-obsidian-900/90 border border-champagne/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-silver">
                    Participación Óptima Sugerida:
                  </span>
                  <div className="font-serif text-base sm:text-lg font-bold text-platinum">
                    {shareFraction}
                  </div>
                </div>
                <div className="px-3 py-1 rounded bg-champagne/10 border border-champagne/40 text-champagne font-mono text-xs font-semibold">
                  Titularidad Registral FAA/Aerocivil
                </div>
              </div>

              {/* Ventajas Clave del Modelo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  'Disponibilidad garantizada con 12h de aviso previo',
                  'Aeronave de reemplazo sin costo adicional',
                  'Amortización y depreciación contable de activo',
                  'Cero costos de pilotos en tierra o mantenimiento no volado',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-silver">
                    <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-obsidian-700/60 flex items-center gap-3 text-xs text-silver">
              <Clock className="w-4 h-4 text-champagne shrink-0" />
              <span>Base de operaciones y despacho FBO: Medellín (SKRG), Miami (OPF) y Madrid (LEMD).</span>
            </div>
          </div>

          {/* Lado Derecho: Desglose de ROI Financiero */}
          <div className="lg:col-span-5 bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-950 border border-champagne/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-champagne uppercase tracking-widest mb-2">
                <TrendingDown className="w-4 h-4" />
                <span>Optimización de Capital</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-platinum mb-6">
                Ahorro Anual Proyectado
              </h3>

              {/* Comparativa Numérica */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-obsidian-950/80 border border-obsidian-700/60">
                  <div>
                    <div className="text-xs text-silver font-sans">Coste Chárter On-Demand ({flightHours}h)</div>
                    <div className="text-[10px] text-silver/60 font-mono">Tarifa promedio spot \$8,500/h</div>
                  </div>
                  <div className="font-mono text-base font-bold text-platinum line-through opacity-70">
                    \${totalCharterAnnual.toLocaleString()} USD
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-lg bg-champagne/10 border border-champagne/40">
                  <div>
                    <div className="text-xs text-champagne font-bold font-sans">Copropiedad Fraccionada Jet Elite</div>
                    <div className="text-[10px] text-champagne/80 font-mono">Tarifa preferencial neta \$5,400/h</div>
                  </div>
                  <div className="font-mono text-lg font-extrabold text-champagne">
                    \${totalFractionalAnnual.toLocaleString()} USD
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                    Ahorro Directo en Operaciones Aéreas:
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-300 mt-1">
                    +\${annualSavings.toLocaleString()} USD / año
                  </div>
                  <div className="text-[10px] text-silver mt-1">
                    + Adicional: Evita \${fullOwnershipFixedCostsAvoided.toLocaleString()} USD en costos fijos de compra total.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA de Solicitud de Dossier */}
            <button
              onClick={onOpenQuote}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light text-obsidian-950 font-serif font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-champagne/20"
            >
              <span>Solicitar Dossier Fraccional Confidencial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};