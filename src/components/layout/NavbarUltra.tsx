'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { Globe, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarUltraProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAnalysis: () => void;
}

export const NavbarUltra: React.FC<NavbarUltraProps> = ({
  lang,
  onLanguageChange,
  onOpenAnalysis,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#07090E]/95 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Felton Endorsement */}
        <a href="#_inicio" className="group flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-[#C5A059]/40 flex items-center justify-center transition-all group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            <span className="font-serif text-[#C5A059] font-bold text-lg tracking-widest">JE</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif tracking-[0.25em] text-white font-bold text-base sm:text-lg uppercase">
              Jet-Elite
            </span>
            <span className="text-[8.5px] tracking-[0.16em] text-[#94A3B8] uppercase font-mono">
              By Felton Aviation Management
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.15em] uppercase font-mono text-[#D4D8E2]/80">
          <a href="#concepto" className="hover:text-[#C5A059] transition-colors">
            {t.concept}
          </a>
          <a href="#financiero" className="hover:text-[#C5A059] transition-colors">
            {t.financial}
          </a>
          <a href="#flota-alcance" className="hover:text-[#C5A059] transition-colors">
            {t.fleet}
          </a>
          <a href="#seguridad" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.safety}</span>
          </a>
        </nav>

        {/* Language Selector + CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          
          {/* Selector de 4 Idiomas Globales */}
          <div className="flex items-center rounded-full bg-white/[0.03] border border-white/[0.08] p-1 font-mono text-[10px]">
            {(['es', 'en', 'fr', 'pt'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-2 py-0.5 rounded-full uppercase transition-all ${
                  lang === l
                    ? 'bg-[#C5A059] text-[#07090E] font-bold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Botón CTA Destacado con Borde Oro Champán */}
          <button
            onClick={onOpenAnalysis}
            className="group relative overflow-hidden rounded-full bg-transparent border border-[#C5A059] text-white px-5 py-2.5 text-xs uppercase font-mono tracking-wider transition-all duration-300 hover:bg-[#C5A059] hover:text-[#07090E] hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] flex items-center gap-2"
          >
            <span className="font-bold">{t.cta}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <div className="flex items-center rounded bg-white/[0.04] p-0.5 border border-white/[0.08] text-[10px] font-mono">
            {(['es', 'en', 'fr', 'pt'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-1.5 py-0.5 uppercase ${
                  lang === l ? 'text-[#C5A059] font-bold' : 'text-[#94A3B8]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090E]/98 border-b border-white/[0.08] px-6 py-6 space-y-4">
          <a
            href="#concepto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#D4D8E2] uppercase font-mono tracking-wider"
          >
            {t.concept}
          </a>
          <a
            href="#financiero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#D4D8E2] uppercase font-mono tracking-wider"
          >
            {t.financial}
          </a>
          <a
            href="#flota-alcance"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#D4D8E2] uppercase font-mono tracking-wider"
          >
            {t.fleet}
          </a>
          <a
            href="#seguridad"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#D4D8E2] uppercase font-mono tracking-wider"
          >
            {t.safety}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAnalysis();
            }}
            className="w-full py-3 rounded-full bg-[#C5A059] text-[#07090E] font-mono text-xs uppercase font-bold tracking-wider"
          >
            {t.cta}
          </button>
        </div>
      )}
    </header>
  );
};