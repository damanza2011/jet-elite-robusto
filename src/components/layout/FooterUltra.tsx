'use client';

import React from 'react';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterUltraProps {
  lang: Language;
  onOpenAnalysis: () => void;
}

export const FooterUltra: React.FC<FooterUltraProps> = ({ lang, onOpenAnalysis }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#05070A] border-t border-white/[0.08] text-[#94A3B8] relative overflow-hidden">
      {/* Sección Pre-Footer de Conversión Ejecutiva */}
      <div className="border-b border-white/[0.06] py-20 bg-gradient-to-b from-[#07090E] to-[#05070A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A059] uppercase block mb-3">
            {t.ctaSection.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
            {t.ctaSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.ctaSection.subtitle}
          </p>
          <button
            onClick={onOpenAnalysis}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#B59456] via-[#C5A059] to-[#E0C797] text-[#07090E] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:brightness-110 shadow-2xl shadow-[#C5A059]/25 inline-flex items-center gap-2"
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Columna Marca */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-[#C5A059]/40 flex items-center justify-center font-serif text-[#C5A059] font-bold text-base">
                JE
              </div>
              <div>
                <span className="font-serif tracking-[0.25em] text-white font-bold text-lg uppercase block">
                  Jet-Elite
                </span>
                <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-wider block">
                  A Felton Aviation Management Program
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Propiedad fraccionada de aeronaves de gran cabina con alcance transcontinental de hasta 7,000 NM. Operaciones corporativas bajo estrictos estándares de seguridad y mantenimiento en EE. UU.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#D4D8E2]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Certificaciones FAA Part 135 / Part 145 &amp; AOC</span>
            </div>
          </div>

          {/* Hubs Operacionales */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Bases FBO Prioritarias
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li className="flex items-center gap-1.5 text-[#D4D8E2]">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Medellín (SKRG / MDE)</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#D4D8E2]">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Miami (KOPF / MIA)</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#D4D8E2]">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Madrid (LEMD / MAD)</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#D4D8E2]">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Bogotá (SKBO / BOG)</span>
              </li>
            </ul>
          </div>

          {/* Navegación Rápida */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#94A3B8]">
              <li><a href="#concepto" className="hover:text-[#C5A059] transition-colors">{t.nav.concept}</a></li>
              <li><a href="#financiero" className="hover:text-[#C5A059] transition-colors">{t.nav.financial}</a></li>
              <li><a href="#flota-alcance" className="hover:text-[#C5A059] transition-colors">{t.nav.fleet}</a></li>
              <li><a href="#seguridad" className="hover:text-[#C5A059] transition-colors">{t.nav.safety}</a></li>
              <li><a href="#alcance" className="hover:text-[#C5A059] transition-colors">Simulador de Alcance</a></li>
            </ul>
          </div>

          {/* Contacto Despacho VIP */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Despacho VIP 24/7
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <a href="tel:+18005383548" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>+1 (800) JET-ELITE (USA)</span>
                </a>
              </li>
              <li>
                <a href="tel:+573009123456" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>+57 (300) 912-3456 (LATAM)</span>
                </a>
              </li>
              <li>
                <a href="mailto:dispatch@jet-elite.com" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>dispatch@jet-elite.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Legal y Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#94A3B8]/60">
          <div>
            © {new Date().getFullYear()} Jet-Elite. Un programa exclusivo de Felton Aviation Management Inc. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidad &amp; NDA</span>
            <span>Términos Operacionales FAA/EASA</span>
            <span>Compliance Financiero UHNW</span>
          </div>
        </div>

      </div>
    </footer>
  );
};