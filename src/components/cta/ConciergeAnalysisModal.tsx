'use client';

import React, { useState } from 'react';
import { TRANSLATIONS, Language } from '@/lib/i18n/translations';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock, PhoneCall } from 'lucide-react';

interface ConciergeAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ConciergeAnalysisModal: React.FC<ConciergeAnalysisModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = TRANSLATIONS[lang].ctaSection;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hours: '100',
    routes: '',
    nda: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0B0E15] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Glow de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#94A3B8] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-white/[0.02] mb-3">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059]">
                {t.kicker}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
              {t.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
              {t.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#C5A059]"
                />
                <input
                  type="tel"
                  required
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder={t.hoursPlaceholder}
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#C5A059]"
                />
                <input
                  type="text"
                  placeholder={t.routesPlaceholder}
                  value={formData.routes}
                  onChange={(e) => setFormData({ ...formData, routes: e.target.value })}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="ndaCheckbox"
                  checked={formData.nda}
                  onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                  className="mt-0.5 accent-[#C5A059] rounded"
                />
                <label htmlFor="ndaCheckbox" className="text-xs text-[#94A3B8] cursor-pointer">
                  {t.ndaCheck}
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#B59456] via-[#C5A059] to-[#E0C797] text-[#07090E] font-serif font-bold text-xs uppercase tracking-[0.18em] transition-all hover:brightness-110 shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2 mt-4"
              >
                <span>{t.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center text-3xl">
              ✓
            </div>
            <h4 className="font-serif text-2xl font-bold text-white">
              Solicitud de Análisis Registrada
            </h4>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
              Un Director de Vuelo Senior de <strong>Felton Aviation Management Inc.</strong> se pondrá en contacto confidencial con usted en menos de 120 minutos con el dossier técnico y financiero.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};