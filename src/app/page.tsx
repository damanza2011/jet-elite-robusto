'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/i18n/translations';
import { NavbarUltra } from '@/components/layout/NavbarUltra';
import { HeroUltra } from '@/components/hero/HeroUltra';
import { TrustBar } from '@/components/layout/TrustBar';
import { BentoConcept } from '@/components/bento/BentoConcept';
import { CalculatorUltra } from '@/components/calculator/CalculatorUltra';
import { FleetUltra } from '@/components/fleet/FleetUltra';
import { RangeMapVisualizer } from '@/components/range-map/RangeMapVisualizer';
import { SafetyUltra } from '@/components/safety/SafetyUltra';
import { FaqUltra } from '@/components/faq/FaqUltra';
import { EmptyLegsBoard } from '@/components/empty-legs/EmptyLegsBoard';
import { FooterUltra } from '@/components/layout/FooterUltra';
import { ConciergeAnalysisModal } from '@/components/cta/ConciergeAnalysisModal';
import { QuoteModal } from '@/components/quote-flow/QuoteModal';
import { AiJetConcierge } from '@/components/chat/AiJetConcierge';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('es');
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteOrigin, setQuoteOrigin] = useState<string | undefined>();
  const [quoteDestination, setQuoteDestination] = useState<string | undefined>();

  const handleOpenQuoteWithRoute = (origin?: string, destination?: string) => {
    setQuoteOrigin(origin);
    setQuoteDestination(destination);
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07090E] text-[#F4F5F8] selection:bg-[#C5A059] selection:text-[#07090E]">
      
      {/* 1. Navbar Flotante Minimalista & 4 Idiomas (ES, EN, FR, PT) */}
      <NavbarUltra
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        onOpenAnalysis={() => setIsAnalysisOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section Cinemático (#_inicio) con Dual Intent & Telemetría */}
        <HeroUltra
          lang={lang}
          onOpenAnalysis={() => setIsAnalysisOpen(true)}
          onOpenQuoteWithRoute={handleOpenQuoteWithRoute}
        />

        {/* 3. Señales de Confianza y Sellos Aeronáuticos (AOC, ARGUS Gold, Wyvern) */}
        <TrustBar />

        {/* 4. El Modelo de Propiedad Fraccionada: Bento Grid Asimétrico */}
        <BentoConcept
          lang={lang}
          onOpenAnalysis={() => setIsAnalysisOpen(true)}
        />

        {/* 5. Calculadora / Comparador Visual de Eficiencia (Elemento WOW 50-400h) */}
        <CalculatorUltra
          lang={lang}
          onOpenAnalysis={() => setIsAnalysisOpen(true)}
        />

        {/* 6. Especificaciones de Flota y Gran Cabina (Estilo Porsche / Boom 7,000 NM) */}
        <FleetUltra
          lang={lang}
          onOpenAnalysis={() => setIsAnalysisOpen(true)}
        />

        {/* 7. Simulador de Alcance de Vuelo sin Escalas (Medellín, Miami, Madrid) */}
        <div id="alcance">
          <RangeMapVisualizer onOpenQuoteWithRoute={handleOpenQuoteWithRoute} />
        </div>

        {/* 8. Estándar de Seguridad e Ingeniería EE. UU. (Capitanes & Fábrica) */}
        <SafetyUltra lang={lang} />

        {/* 9. Preguntas Frecuentes de Clientes UHNW (Transparencia & Confidencialidad) */}
        <FaqUltra lang={lang} />

        {/* 10. Pizarra de Vuelos Vacíos (Empty Legs con hasta 58% descuento) */}
        <EmptyLegsBoard onSelectEmptyLeg={(orig, dest) => handleOpenQuoteWithRoute(orig, dest)} />
      </main>

      {/* 10. Concierge CTA & Footer Ejecutivo */}
      <FooterUltra
        lang={lang}
        onOpenAnalysis={() => setIsAnalysisOpen(true)}
      />

      {/* Modal de Análisis Confidencial de Perfil de Vuelo */}
      <ConciergeAnalysisModal
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
        lang={lang}
      />

      {/* Modal de Cotización de Vuelo Multi-Paso */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialOrigin={quoteOrigin}
        initialDestination={quoteDestination}
      />

      {/* Asistente Flotante IA Jet Elite Concierge 24/7 */}
      <AiJetConcierge onOpenQuote={() => setIsQuoteOpen(true)} />

    </div>
  );
}