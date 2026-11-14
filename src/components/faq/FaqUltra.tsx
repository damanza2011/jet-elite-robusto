'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/i18n/translations';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: { es: string; en: string; fr: string; pt: string };
  a: { es: string; en: string; fr: string; pt: string };
}

const FAQ_DATA: FaqItem[] = [
  {
    q: {
      es: '¿Cómo funciona jurídicamente la propiedad fraccionada en Jet-Elite?',
      en: 'How does fractional ownership legally work at Jet-Elite?',
      fr: 'Comment fonctionne juridiquement la copropriété chez Jet-Elite ?',
      pt: 'Como funciona juridicamente a propriedade fracionada na Jet-Elite?',
    },
    a: {
      es: 'Usted adquiere un porcentaje indiviso del activo (1/8, 1/4 o 1/2) debidamente registrado ante las autoridades aeronáuticas (FAA / Aerocivil) con título de propiedad real. Esto permite depreciación y amortización fiscal corporativa, eliminando los costos fijos de un avión al 100%.',
      en: 'You acquire an undivided fractional equity share (1/8, 1/4, or 1/2) officially registered with civil aviation authorities (FAA) with genuine legal title, allowing corporate tax depreciation without full ownership overhead.',
      fr: 'Vous acquérez une part indivise de l’appareil (1/8, 1/4 ou 1/2) officiellement enregistrée auprès des autorités de l’aviation civile avec un titre légal réel, permettant l’amortissement fiscal.',
      pt: 'Você adquire uma cota indivisa do ativo (1/8, 1/4 ou 1/2) averbada junto às autoridades aeronáuticas com título de propriedade real, permitindo depreciação fiscal corporativa.',
    },
  },
  {
    q: {
      es: '¿Con cuánta anticipación debo solicitar mi vuelo y qué ocurre si mi avión está en mantenimiento?',
      en: 'How far in advance must I request my flight and what happens during maintenance?',
      fr: 'Quel est le préavis de réservation et que se passe-t-il en cas de maintenance ?',
      pt: 'Com que antecedência devo solicitar o voo e o que ocorre durante a manutenção?',
    },
    a: {
      es: 'Garantizamos disponibilidad operacional los 365 días del año con solo 12 horas de preaviso (y menos de 120 minutos para emergencias en bases principales). Si la aeronave específica asignada está en mantenimiento programado en fábrica, se le posiciona un avión de igual o superior categoría sin costo adicional.',
      en: 'We guarantee 365-day availability with as little as 12 hours notice (<120 minutes at main FBO hubs). If your dedicated tail is in scheduled maintenance, a supplemental aircraft of equal or higher category is dispatched at no extra cost.',
      fr: 'Disponibilité garantie 365 jours par an avec seulement 12 heures de préavis. Si votre appareil est en révision, un jet de catégorie équivalente ou supérieure est mis à disposition sans surcoût.',
      pt: 'Garantimos disponibilidade operacional 365 dias por ano com apenas 12 horas de aviso prévio. Se a aeronave estiver em manutenção, disponibilizamos um jato de categoria igual ou superior sem custo adicional.',
    },
  },
  {
    q: {
      es: '¿Cómo se protegen la privacidad y los datos de vuelo de los pasajeros?',
      en: 'How are passenger privacy and flight data protected?',
      fr: 'Comment la confidentialité et les données des passagers sont-elles protégées ?',
      pt: 'Como a privacidade e os dados dos passageiros são protegidos?',
    },
    a: {
      es: 'Operamos bajo estricto Acuerdo de Confidencialidad (NDA). Los manifiestos de vuelo son confidenciales y solo se transmiten a las autoridades de aviación civil obligatorias. El embarque se realiza desde terminales FBO privadas exclusivas con acceso directo de vehículos escoltados a pie de pista.',
      en: 'We operate under strict Non-Disclosure Agreements (NDA). Flight manifests are strictly confidential. Boarding occurs via private FBO suites with direct tarmac security vehicle access away from commercial visibility.',
      fr: 'Nous appliquons des accords stricts de non-divulgation (NDA). Les manifestes de vol sont strictement confidentiels et l’embarquement se fait depuis des salons FBO privés avec accès direct sur le tarmac.',
      pt: 'Operamos sob rigoroso Acordo de Confidencialidade (NDA). Os manifestos de voo são confidenciais e o embarque ocorre em terminais FBO privados com acesso direto à pista.',
    },
  },
  {
    q: {
      es: '¿Puedo volar con mascotas a bordo y catering personalizado de alta gama?',
      en: 'Can I travel with pets on board and request bespoke luxury catering?',
      fr: 'Puis-je voyager avec mes animaux et bénéficier d’un service traiteur personnalisé ?',
      pt: 'Posso viajar com animais de estimação a bordo e catering personalizado?',
    },
    a: {
      es: 'Absolutamente. Todas las cabinas son Pet-Friendly, permitiendo que sus mascotas viajen junto a usted en cabina sin jaulas. El catering se coordina previamente con chefs de alta gastronomía y bodegas seleccionadas según sus preferencias exactas.',
      en: 'Absolutely. All cabins are Pet-Friendly, allowing your pets to travel unrestrained in the cabin with you. In-flight dining is curated with fine dining culinary partners and cellars tailored to your taste.',
      fr: 'Absolument. Toutes nos cabines accueillent vos animaux de compagnie sans cage à vos côtés. La gastronomie à bord est préparée sur mesure selon vos exigences.',
      pt: 'Com certeza. Todas as cabines são Pet-Friendly, permitindo que seus animais viajem ao seu lado na cabine. O serviço de bordo é personalizado com chefs de alta gastronomia.',
    },
  },
];

interface FaqUltraProps {
  lang: Language;
}

export const FaqUltra: React.FC<FaqUltraProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const titles = {
    es: { kicker: 'TRANSPARENCIA & SEGURIDAD OPERACIONAL', title: 'Preguntas Frecuentes de Clientes UHNW' },
    en: { kicker: 'OPERATIONAL TRANSPARENCY & ASSURANCE', title: 'Frequently Asked Questions by UHNW Clients' },
    fr: { kicker: 'TRANSPARENCE ET SÉCURITÉ OPÉRATIONNELLE', title: 'Foire Aux Questions Clients UHNW' },
    pt: { kicker: 'TRANSPARÊNCIA E SEGURANÇA OPERACIONAL', title: 'Perguntas Frequentes de Clientes UHNW' },
  };

  return (
    <section className="py-24 bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-[10.5px] font-mono tracking-[0.22em] text-[#C5A059] uppercase block mb-2">
            {titles[lang].kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            {titles[lang].title}
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#C5A059]/40 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl text-white font-semibold leading-snug">
                    {item.q[lang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-[#C5A059] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C5A059]/10 border-[#C5A059]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.06] pt-4 animate-fade-in">
                    {item.a[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};