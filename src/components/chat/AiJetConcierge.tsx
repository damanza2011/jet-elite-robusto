'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Plane,
  Shield,
  Clock,
  PhoneCall,
  ArrowRight,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestions?: string[];
  action?: {
    type: 'quote' | 'whatsapp';
    label: string;
    payload?: any;
  };
}

interface AiJetConciergeProps {
  onOpenQuote?: () => void;
}

export function AiJetConcierge({ onOpenQuote }: AiJetConciergeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: 'Bienvenido a **Jet Elite Aviation Concierge**. Soy su asistente ejecutivo privado impulsado por IA.\n\n¿En qué puedo asistirle hoy para su próxima misión de vuelo?',
      timestamp: 'Ahora',
      suggestions: [
        '✈️ Cotizar vuelo chárter',
        '👑 Copropiedad Fraccionada',
        '🏷️ Vuelos Vacíos (Empty Legs)',
        '🛫 Flota y Autonomía',
        '💬 Asesor VIP por WhatsApp',
      ],
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateAiResponse(query);
      setIsTyping(false);
    }, 600);
  };

  const generateAiResponse = (query: string) => {
    const lower = query.toLowerCase();
    let reply = '';
    let suggestions: string[] = [];
    let action: Message['action'] = undefined;

    if (lower.includes('cotizar') || lower.includes('vuelo') || lower.includes('precio') || lower.includes('ruta')) {
      reply =
        'Para cotizar su vuelo privado con precisión operacional, consideraremos origen, destino FBO, número de pasajeros y comodidades a bordo.\n\nDisponemos de acceso prioritario en **Medellín (SKRG/SKMD)**, **Bogotá (SKBO)**, **Miami (KOPF/KMIA)** y **Madrid (LEMD)** con tiempo de alistamiento de aeronave menor a 120 minutos.';
      action = {
        type: 'quote',
        label: 'Abrir Cotizador Paso a Paso',
      };
      suggestions = ['Medellín → Miami', 'Bogotá → Cartagena', 'Madrid → Ibiza', '👑 Ver beneficios de membresía'];
    } else if (lower.includes('copropiedad') || lower.includes('fraccion') || lower.includes('membres')) {
      reply =
        'El **Programa de Copropiedad Fraccionada Jet Elite** le permite adquirir participaciones desde 1/8 (50 horas de vuelo anuales) con titularidad jurídica sobre la aeronave.\n\n• **Beneficios Clave:**\n- Amortización contable de activos\n- Cero costes de tripulación permanente ni mantenimiento en tierra no utilizado\n- Garantía de reemplazo inmediato de aeronave de igual o superior categoría';
      action = {
        type: 'whatsapp',
        label: 'Consultar Dossier Fraccional con Director VIP',
      };
      suggestions = ['¿Qué aeronaves aplican?', '✈️ Cotizar vuelo chárter puntual', 'Calculadora de ROI'];
    } else if (lower.includes('empty') || lower.includes('vacío') || lower.includes('oferta') || lower.includes('descuento')) {
      reply =
        'Nuestros **Empty Legs (Tramos Vacíos)** ofrecen reducciones de hasta el 60% sobre tarifas chárter estándar cuando una aeronave reposiciona:\n\n• **Medellín (MDE) → Miami (OPF)**: Phenom 300E (Próx. Viernes)\n• **Bogotá (BOG) → Cartagena (CTG)**: Citation Latitude\n• **Madrid (MAD) → Baleares (IBZ)**: Challenger 650\n\n¿Desea reservar uno de estos tramos con tarifa preferencial?';
      action = {
        type: 'whatsapp',
        label: 'Bloquear Tramo Vacío por WhatsApp VIP',
      };
      suggestions = ['Reservar Medellín → Miami', 'Ver otros tramos disponibles', '✈️ Cotizar ruta personalizada'];
    } else if (lower.includes('flota') || lower.includes('aeronave') || lower.includes('challenger') || lower.includes('gulfstream')) {
      reply =
        'Nuestra flota certificada bajo rigurosos estándares internacionales comprende:\n\n1. **Light Jets:** Embraer Phenom 300E (hasta 7 pax, ideal pistas cortas y vuelos regionales).\n2. **Super Midsize:** Cessna Citation Latitude (9 pax, stand-up cabin y cocina completa).\n3. **Heavy Jets:** Bombardier Challenger 650 (12 pax, autonomía transcontinental con cama y flight attendant).\n4. **Ultra Long Range:** Gulfstream G650ER (14 pax, alcance intercontinental sin escalas ej. Madrid-Bogotá).';
      suggestions = ['Ver detalles de Challenger 650', 'Cotizar con Phenom 300E', '👑 Ver programa de copropiedad'];
    } else if (lower.includes('whatsapp') || lower.includes('asesor') || lower.includes('humano') || lower.includes('telefono')) {
      reply =
        'Un Director de Vuelo de Jet Elite está disponible de manera confidencial y 24/7 para coordinar su itinerario, FBO transfers o acuerdos corporativos.';
      action = {
        type: 'whatsapp',
        label: 'Conectar por WhatsApp VIP (+57)',
      };
      suggestions = ['✈️ Cotizar vuelo ahora', 'Información de FBO y Privacidad'];
    } else {
      reply =
        `Entendido. En Jet Elite operamos bajo estricto acuerdo de confidencialidad (NDA), certificación aeronáutica internacional y atención FBO integral.\n\n¿Desea cotizar un vuelo, consultar disponibilidad de flota o explorar nuestra opción de copropiedad de aeronaves?`;
      suggestions = ['✈️ Cotizar vuelo chárter', '👑 Copropiedad Fraccionada', '💬 Asesor VIP'];
    }

    const aiMsg: Message = {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions,
      action,
    };

    setMessages((prev) => [...prev, aiMsg]);
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    if (action.type === 'quote') {
      if (onOpenQuote) {
        onOpenQuote();
        setIsOpen(false);
      }
    } else if (action.type === 'whatsapp') {
      window.open(
        'https://wa.me/573009123456?text=Hola%20Jet%20Elite,%20deseo%20asistencia%20VIP%20para%20un%20vuelo%20privado%20o%20informaci%C3%B3n%20fraccional.',
        '_blank'
      );
    }
  };

  return (
    <>
      {/* Botón Flotante Launcher */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-obsidian-900/95 hover:bg-obsidian-800 text-platinum p-3.5 sm:px-5 sm:py-3.5 rounded-full border border-champagne/40 shadow-2xl shadow-champagne/10 hover:border-champagne hover:scale-105 transition-all duration-300 backdrop-blur-md"
          aria-label="Abrir Asistente IA Jet Elite"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-champagne-dark via-champagne to-champagne-light flex items-center justify-center text-obsidian-950 font-bold shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div className="hidden sm:block text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-serif font-bold text-platinum tracking-wide">IA Jet Elite</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-champagne/10 text-champagne rounded border border-champagne/30">
                24/7
              </span>
            </div>
            <p className="text-[11px] text-silver font-sans">Concierge Aeronáutico Privado</p>
          </div>
        </button>
      )}

      {/* Ventana de Chat Flotante */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-obsidian-900/95 border border-champagne/30 rounded-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header del Chat */}
          <div className="bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-obsidian-700/80 px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-champagne-dark via-champagne to-champagne-light flex items-center justify-center text-obsidian-950">
                  <Plane className="w-5 h-5 -rotate-45" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-obsidian-900"></span>
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-platinum flex items-center gap-1.5">
                  Jet Elite AI Concierge
                </h3>
                <p className="text-[10px] font-mono text-champagne/90 flex items-center gap-1">
                  <span>Hub Medellín</span> • <span>SLA &lt; 30s</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-silver hover:text-platinum">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-obsidian-800 rounded-lg transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans scrollbar-thin scrollbar-thumb-obsidian-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-champagne text-obsidian-950 font-medium rounded-tr-xs'
                      : 'bg-obsidian-800/90 text-platinum border border-obsidian-700/70 rounded-tl-xs shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Botón de acción en el mensaje si existe */}
                  {msg.action && (
                    <div className="mt-3 pt-2.5 border-t border-obsidian-700/60">
                      <button
                        onClick={() => handleActionClick(msg.action)}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-champagne hover:bg-champagne-light text-obsidian-950 font-serif font-bold text-xs rounded-lg transition-colors shadow-sm"
                      >
                        {msg.action.type === 'quote' ? (
                          <Plane className="w-3.5 h-3.5" />
                        ) : (
                          <PhoneCall className="w-3.5 h-3.5" />
                        )}
                        <span>{msg.action.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>

                <span className="text-[9px] font-mono text-silver/60 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Sugerencias Rápidas */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(sug)}
                        className="text-[11px] py-1 px-2.5 rounded-full bg-obsidian-800 hover:bg-obsidian-700 text-silver hover:text-champagne border border-obsidian-700 hover:border-champagne/40 transition-all text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-silver bg-obsidian-800/60 px-3 py-2 rounded-xl w-fit border border-obsidian-700/40">
                <Sparkles className="w-3.5 h-3.5 text-champagne animate-spin" />
                <span className="text-[11px] font-mono">IA Jet analizando disponibilidad operacional...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input de Mensaje */}
          <div className="p-3 bg-obsidian-950 border-t border-obsidian-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Consulte ruta, aeronave, cotización o membresía..."
                className="flex-1 bg-obsidian-900 border border-obsidian-700 text-platinum placeholder-silver/50 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-champagne transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-champagne hover:bg-champagne-light disabled:opacity-40 disabled:hover:bg-champagne text-obsidian-950 rounded-xl transition-all"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between text-[9px] font-mono text-silver/60 px-1">
              <span>Transmisión encriptada bajo NDA</span>
              <span>Jet Elite AI v2.4</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}