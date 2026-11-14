export type Language = 'es' | 'en' | 'fr' | 'pt';

export interface TranslationSchema {
  nav: {
    concept: string;
    financial: string;
    fleet: string;
    safety: string;
    emptyLegs: string;
    cta: string;
    byFelton: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    kpi1Value: string;
    kpi1Label: string;
    kpi2Value: string;
    kpi2Label: string;
    kpi3Value: string;
    kpi3Label: string;
  };
  bento: {
    kicker: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card1Tag: string;
    card2Title: string;
    card2Desc: string;
    card2Tag: string;
    card3Title: string;
    card3Desc: string;
    card3Tag: string;
    card4Title: string;
    card4Desc: string;
    card4Tag: string;
  };
  calc: {
    kicker: string;
    title: string;
    subtitle: string;
    hoursLabel: string;
    recShare: string;
    colFractional: string;
    colCharter: string;
    colFull: string;
    annualSavings: string;
    avoidedFixed: string;
    cta: string;
  };
  fleet: {
    kicker: string;
    title: string;
    subtitle: string;
    rangeLabel: string;
    paxLabel: string;
    speedLabel: string;
    altitudeLabel: string;
  };
  safety: {
    kicker: string;
    title: string;
    subtitle: string;
    pilotsTitle: string;
    pilotsDesc: string;
    maintTitle: string;
    maintDesc: string;
  };
  ctaSection: {
    kicker: string;
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    hoursPlaceholder: string;
    routesPlaceholder: string;
    ndaCheck: string;
    submitBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      concept: 'El Concepto',
      financial: 'Modelo Financiero',
      fleet: 'Flota & Alcance',
      safety: 'Seguridad EE.UU.',
      emptyLegs: 'Empty Legs',
      cta: 'Solicitar Análisis de Vuelo',
      byFelton: 'UN PROGRAMA DE FELTON AVIATION MANAGEMENT INC.',
    },
    hero: {
      badge: 'FELTON AVIATION MANAGEMENT INC. · PROPIEDAD FRACCIONADA',
      titleLine1: 'Adquiera una fracción.',
      titleLine2: 'Domine una flota entera.',
      subtitle:
        'Invierta únicamente en la cuota de activo que su agenda corporativa o personal requiere. Acceda a aeronaves transcontinentales de gran cabina con disponibilidad garantizada los 365 días del año.',
      ctaPrimary: 'Solicitar Análisis de Fracción',
      ctaSecondary: 'Explorar Flota y Alcance',
      kpi1Value: '12 – 18',
      kpi1Label: 'Pasajeros en Gran Cabina',
      kpi2Value: '7,000 NM',
      kpi2Label: 'Alcance Transcontinental sin Escalas',
      kpi3Value: '365 Días',
      kpi3Label: 'Disponibilidad Garantizada < 120m',
    },
    bento: {
      kicker: 'INGENIERÍA FINANCIERA AERONÁUTICA',
      title: 'El Modelo de Propiedad Fraccionada Jet-Elite',
      subtitle: 'La alternativa superior frente a la compra total y al chárter tradicional. Eficiencia sin fricción.',
      card1Title: 'Optimización Inteligente de Capital',
      card1Desc:
        'Adquiera participaciones fraccionales sobre aeronaves reales con registro jurídico. Es la solución óptima tanto para nuevos inversores como el complemento estratégico para corporaciones que ya poseen un avión propio y requieren respaldo inmediato.',
      card1Tag: 'ACCESO MULTI-AERONAVE',
      card2Title: 'Fee de Administración Proporcional',
      card2Desc:
        'Una cuota mensual predecible y proporcional a su cuota de participación que cubre todos los costos fijos: hangaraje, seguros globales, sueldos de tripulación fija y cumplimiento legal.',
      card2Tag: 'CERO SORPRESAS',
      card3Title: 'Tarifa Solo por Hora Ocupada',
      card3Desc:
        'Los costos variables (combustible, tasas de aterrizaje y handling FBO) solo se facturan cuando usted está a bordo de la aeronave. Cero costes por tramos de reposicionamiento vacíos.',
      card3Tag: 'COSTO VARIABLE NETO',
      card4Title: 'Liquidez y Recompra Garantizada',
      card4Desc:
        'Nuestro programa contempla una salida financiera ordenada mediante recompras garantizadas basadas en valor de mercado tasado, protegiendo su patrimonio y garantizando su satisfacción total.',
      card4Tag: 'RETORNO Y LIQUIDEZ',
    },
    calc: {
      kicker: 'COMPARADOR DE EFICIENCIA FINANCIERA',
      title: 'Simule su Retorno de Inversión',
      subtitle: 'Ajuste sus horas anuales estimadas de vuelo y compruebe por qué la propiedad fraccionada supera al chárter spot y a la compra total.',
      hoursLabel: 'Horas anuales estimadas de vuelo:',
      recShare: 'Participación recomendada en Jet-Elite:',
      colFractional: 'Jet-Elite Fraccional',
      colCharter: 'Chárter Spot Tradicional',
      colFull: 'Compra 100% de Aeronave',
      annualSavings: 'Ahorro Anual Proyectado:',
      avoidedFixed: 'Costos fijos anuales de hangar y pilotos evitados:',
      cta: 'Solicitar Análisis de Perfil Personalizado',
    },
    fleet: {
      kicker: 'TELEMETRÍA Y ALCANCE TRANSCONTINENTAL',
      title: 'Aeronaves de Gran Cabina para 12 a 18 Pasajeros',
      subtitle: 'Hasta 7,000 millas náuticas que unen América, Europa y Asia sin escalas, permitiendo visitar múltiples centros de negocios en una misma jornada.',
      rangeLabel: 'Alcance Máximo:',
      paxLabel: 'Capacidad VIP:',
      speedLabel: 'Velocidad Crucero:',
      altitudeLabel: 'Techo de Servicio:',
    },
    safety: {
      kicker: 'ESTÁNDAR AERONÁUTICO MILITAR Y CORPORATIVO',
      title: 'Seguridad e Ingeniería Certificada en EE. UU.',
      subtitle: 'Tranquilidad absoluta para usted, su familia y sus directivos en cada operación.',
      pilotsTitle: 'Capitanes Ex-Aerolínea Comercial',
      pilotsDesc:
        'Nuestros comandantes cuentan con más de 15,000 horas promedio de vuelo y entrenamiento semestral en simuladores de nivel D (FlightSafety International / CAE en Dallas y Savannah).',
      maintTitle: 'Mantenimiento de Fábrica en EE. UU.',
      maintDesc:
        'Inspecciones y mantenimiento mayor ejecutados directamente por los fabricantes bajo normativas estrictas FAA Part 145 con componentes trazables y auditorías continuas.',
    },
    ctaSection: {
      kicker: 'ATENCIÓN PRIVADA UHNW',
      title: 'Permítanos analizar su perfil de vuelo corporativo y personal',
      subtitle: 'Diseñaremos la fracción exacta y el programa de vuelo a la medida de sus destinos prioritarios bajo estricto acuerdo de confidencialidad (NDA).',
      namePlaceholder: 'Nombre y Apellidos / Organización',
      emailPlaceholder: 'Correo electrónico corporativo',
      phonePlaceholder: 'Teléfono de contacto directo (+código país)',
      hoursPlaceholder: 'Horas de vuelo estimadas al año',
      routesPlaceholder: 'Rutas habituales (ej. Medellín - Miami - Madrid)',
      ndaCheck: 'Deseo firmar un Acuerdo de Confidencialidad (NDA) antes de la llamada técnica.',
      submitBtn: 'Solicitar Análisis Confidencial',
    },
  },
  en: {
    nav: {
      concept: 'The Concept',
      financial: 'Financial Model',
      fleet: 'Fleet & Range',
      safety: 'U.S. Safety',
      emptyLegs: 'Empty Legs',
      cta: 'Request Flight Analysis',
      byFelton: 'A PROGRAM BY FELTON AVIATION MANAGEMENT INC.',
    },
    hero: {
      badge: 'FELTON AVIATION MANAGEMENT INC. · FRACTIONAL OWNERSHIP',
      titleLine1: 'Own a fraction.',
      titleLine2: 'Command a whole fleet.',
      subtitle:
        'Invest only in the exact asset share your corporate or personal schedule requires. Access large-cabin transcontinental jets with guaranteed availability 365 days a year.',
      ctaPrimary: 'Request Fraction Analysis',
      ctaSecondary: 'Explore Fleet & Range',
      kpi1Value: '12 – 18',
      kpi1Label: 'Large-Cabin Executive Passengers',
      kpi2Value: '7,000 NM',
      kpi2Label: 'Non-Stop Transcontinental Range',
      kpi3Value: '365 Days',
      kpi3Label: 'Guaranteed Availability < 120m',
    },
    bento: {
      kicker: 'AERONAUTICAL FINANCIAL ENGINEERING',
      title: 'The Jet-Elite Fractional Ownership Model',
      subtitle: 'The superior alternative to outright aircraft purchase and traditional ad-hoc charter. Frictionless efficiency.',
      card1Title: 'Intelligent Capital Optimization',
      card1Desc:
        'Acquire fractional equity in real aircraft with legal title registration. The ideal solution for both new private flyers and corporations that already own an aircraft and need immediate supplemental lift.',
      card1Tag: 'MULTI-AIRCRAFT ACCESS',
      card2Title: 'Proportional Management Fee',
      card2Desc:
        'A predictable monthly fee proportional to your share size covering all indirect fixed costs: hangarage, global hull insurance, dedicated crew salaries, and regulatory oversight.',
      card2Tag: 'ZERO SURPRISES',
      card3Title: 'Occupied Hourly Rate Only',
      card3Desc:
        'Variable operational costs (fuel, landing fees, and FBO handling) are only billed when you are physically airborne. Zero deadhead or positioning flight expenses.',
      card3Tag: 'NET VARIABLE COST',
      card4Title: 'Liquidity & Guaranteed Exit',
      card4Desc:
        'Our program includes an orderly financial exit via guaranteed repurchases based on fair market appraised value, safeguarding your capital and guaranteeing total satisfaction.',
      card4Tag: 'CAPITAL PRESERVATION',
    },
    calc: {
      kicker: 'FINANCIAL EFFICIENCY COMPARATOR',
      title: 'Simulate Your Return on Investment',
      subtitle: 'Adjust your estimated annual flight hours and see why fractional ownership outperforms spot charter and 100% outright purchase.',
      hoursLabel: 'Estimated annual flight hours:',
      recShare: 'Recommended Jet-Elite Share:',
      colFractional: 'Jet-Elite Fractional',
      colCharter: 'Traditional Spot Charter',
      colFull: '100% Outright Purchase',
      annualSavings: 'Projected Annual Savings:',
      avoidedFixed: 'Annual fixed hangar & dedicated crew overhead avoided:',
      cta: 'Request Tailored Profile Analysis',
    },
    fleet: {
      kicker: 'TELEMETRY & TRANSCONTINENTAL RANGE',
      title: 'Large-Cabin Aircraft for 12 to 18 Passengers',
      subtitle: 'Up to 7,000 nautical miles connecting the Americas, Europe, and Asia non-stop, enabling visits to multiple global business hubs in a single day.',
      rangeLabel: 'Max Range:',
      paxLabel: 'VIP Capacity:',
      speedLabel: 'Cruise Speed:',
      altitudeLabel: 'Service Ceiling:',
    },
    safety: {
      kicker: 'MILITARY & CORPORATE GRADE AVIATION STANDARDS',
      title: 'U.S. Certified Engineering & Safety Protocols',
      subtitle: 'Absolute peace of mind for you, your family, and your executive board on every mission.',
      pilotsTitle: 'Retired Commercial Airline Captains',
      pilotsDesc:
        'Our captains average over 15,000 flight hours and undergo mandatory semi-annual Level-D full flight simulator training at FlightSafety International / CAE in Dallas and Savannah.',
      maintTitle: 'Direct U.S. Factory Maintenance',
      maintDesc:
        'Heavy maintenance and scheduled inspections performed directly at FAA Part 145 factory-authorized facilities in the USA with serialized component tracking and continuous audits.',
    },
    ctaSection: {
      kicker: 'PRIVATE UHNW CLIENT CONCIERGE',
      title: 'Allow us to analyze your corporate and personal flight profile',
      subtitle: 'We will design your ideal fractional share and tailored flight program under a strict Non-Disclosure Agreement (NDA).',
      namePlaceholder: 'Full Name / Organization',
      emailPlaceholder: 'Corporate email address',
      phonePlaceholder: 'Direct phone number (+country code)',
      hoursPlaceholder: 'Estimated annual flight hours',
      routesPlaceholder: 'Priority routes (e.g., Medellin - Miami - Madrid)',
      ndaCheck: 'I request a mutual Non-Disclosure Agreement (NDA) prior to the technical consultation.',
      submitBtn: 'Submit Confidential Request',
    },
  },
  fr: {
    nav: {
      concept: 'Le Concept',
      financial: 'Modèle Financier',
      fleet: 'Flotte & Rayon',
      safety: 'Sécurité USA',
      emptyLegs: 'Empty Legs',
      cta: 'Demander une Analyse',
      byFelton: 'UN PROGRAMME DE FELTON AVIATION MANAGEMENT INC.',
    },
    hero: {
      badge: 'FELTON AVIATION MANAGEMENT INC. · COPROPRIÉTÉ FRACTIONNÉE',
      titleLine1: 'Acquérez une fraction.',
      titleLine2: 'Commandez une flotte entière.',
      subtitle:
        'Investissez uniquement dans la part d’actif dont vos déplacements ont besoin. Accédez à des jets transcontinentaux à large cabine avec une disponibilité garantie 365 jours par an.',
      ctaPrimary: 'Analyse de Fraction VIP',
      ctaSecondary: 'Explorer la Flotte',
      kpi1Value: '12 – 18',
      kpi1Label: 'Passagers en Grande Cabine VIP',
      kpi2Value: '7 000 NM',
      kpi2Label: 'Rayon d’Action Sans Escale',
      kpi3Value: '365 Jours',
      kpi3Label: 'Disponibilité Garantie < 120m',
    },
    bento: {
      kicker: 'INGÉNIERIE FINANCIÈRE AÉRONAUTIQUE',
      title: 'Le Modèle de Propriété Fractionnée Jet-Elite',
      subtitle: 'L’alternative d’élite à l’achat intégral et au charter ponctuel. Une efficacité financière absolue.',
      card1Title: 'Optimisation Intelligente du Capital',
      card1Desc:
        'Acquérez des parts de copropriété avec titre juridique officiel. C’est la solution idéale tant pour les nouveaux voyageurs que pour les entreprises possédant déjà un jet privé et recherchant un soutien immédiat.',
      card1Tag: 'ACCÈS MULTI-APPAREILS',
      card2Title: 'Frais de Gestion Mensuels Proportionnels',
      card2Desc:
        'Une redevance mensuelle prévisible couvrant tous les coûts fixes : hangar, assurances tous risques, équipage permanent et supervision réglementaire.',
      card2Tag: 'ZÉRO SURPRISE',
      card3Title: 'Tarif par Heure Volée Uniquement',
      card3Desc:
        'Les coûts variables (carburant, taxes d’atterrissage et assistance FBO) ne sont facturés que lorsque vous êtes physiquement à bord de l’avion. Zéro vol à vide à votre charge.',
      card3Tag: 'COÛT VARIABLE NET',
      card4Title: 'Liquidité & Rachat Garanti',
      card4Desc:
        'Notre programme assure une sortie financière structurée grâce à un engagement de rachat à la valeur de marché certifiée, préservant votre capital.',
      card4Tag: 'SÉCURITÉ DU CAPITAL',
    },
    calc: {
      kicker: 'COMPARATEUR D’EFFICACITÉ FINANCIÈRE',
      title: 'Simulez Votre Retour sur Investissement',
      subtitle: 'Ajustez vos heures de vol annuelles et découvrez pourquoi la copropriété surpasse le charter spot et l’achat à 100%.',
      hoursLabel: 'Heures de vol annuelles estimées :',
      recShare: 'Part recommandée chez Jet-Elite :',
      colFractional: 'Jet-Elite Fractionné',
      colCharter: 'Charter Spot Traditionnel',
      colFull: 'Achat Intégral 100%',
      annualSavings: 'Économie Annuelle Estimée :',
      avoidedFixed: 'Frais fixes de hangar et équipage évités :',
      cta: 'Demander une Analyse Sur Mesure',
    },
    fleet: {
      kicker: 'TÉLÉMÉTRIE ET RAYON TRANSCONTINENTAL',
      title: 'Jets Long-Courriers pour 12 à 18 Passagers',
      subtitle: 'Jusqu’à 7 000 milles nautiques reliant les Amériques, l’Europe et l’Asie sans escale, permettant de relier plusieurs capitales le même jour.',
      rangeLabel: 'Rayon d’action :',
      paxLabel: 'Capacité VIP :',
      speedLabel: 'Vitesse de croisière :',
      altitudeLabel: 'Plafond pratique :',
    },
    safety: {
      kicker: 'STANDARDS MILITAIRES ET CORPORATIFS',
      title: 'Sécurité et Ingénierie Certifiées aux USA',
      subtitle: 'Sérénité absolue pour vous, votre famille et votre conseil d’administration.',
      pilotsTitle: 'Capitaines Anciens de Compagnies Régulières',
      pilotsDesc:
        'Nos pilotes cumulent plus de 15 000 heures de vol et suivent des formations semestrielles intensives sur simulateur de Niveau D chez FlightSafety et CAE.',
      maintTitle: 'Maintenance Constructeur aux USA',
      maintDesc:
        'Inspections majeures réalisées directement dans les ateliers certifiés FAA Part 145 aux États-Unis avec une traçabilité totale des composants.',
    },
    ctaSection: {
      kicker: 'CONCIERGE PRIVÉ UHNW',
      title: 'Permettez-nous d’analyser votre profil de vol exécutif',
      subtitle: 'Nous concevrons votre part idéale et votre programme de vol sous accord strict de confidentialité (NDA).',
      namePlaceholder: 'Nom et Prénom / Organisation',
      emailPlaceholder: 'Courriel professionnel',
      phonePlaceholder: 'Numéro de téléphone direct (+code pays)',
      hoursPlaceholder: 'Heures de vol annuelles estimées',
      routesPlaceholder: 'Liaisons prioritaires (ex. Medellín - Miami - Paris)',
      ndaCheck: 'Je demande un accord de confidentialité (NDA) préalable.',
      submitBtn: 'Envoyer ma Demande Confidentielle',
    },
  },
  pt: {
    nav: {
      concept: 'O Conceito',
      financial: 'Modelo Financeiro',
      fleet: 'Frota & Alcance',
      safety: 'Segurança EUA',
      emptyLegs: 'Empty Legs',
      cta: 'Solicitar Análise de Voo',
      byFelton: 'UM PROGRAMA DA FELTON AVIATION MANAGEMENT INC.',
    },
    hero: {
      badge: 'FELTON AVIATION MANAGEMENT INC. · PROPRIEDADE FRACIONADA',
      titleLine1: 'Adquira uma fração.',
      titleLine2: 'Comande uma frota inteira.',
      subtitle:
        'Invista apenas na cota de ativo que sua agenda executiva ou pessoal exige. Tenha acesso a jatos transcontinentais de cabine ampla com disponibilidade garantida 365 dias por ano.',
      ctaPrimary: 'Solicitar Análise de Fração',
      ctaSecondary: 'Explorar Frota e Alcance',
      kpi1Value: '12 – 18',
      kpi1Label: 'Passageiros em Cabine Ampla VIP',
      kpi2Value: '7.000 NM',
      kpi2Label: 'Alcance Transcontinental Sem Escalas',
      kpi3Value: '365 Dias',
      kpi3Label: 'Disponibilidade Garantida < 120m',
    },
    bento: {
      kicker: 'ENGENHARIA FINANCEIRA AERONÁUTICA',
      title: 'O Modelo de Propriedade Fracionada Jet-Elite',
      subtitle: 'A melhor alternativa frente à compra total e ao táxi aéreo pontual. Eficiência sem atrito.',
      card1Title: 'Otimização Inteligente de Capital',
      card1Desc:
        'Adquira cotas fracionadas com titularidade jurídica averbada. A solução ideal tanto para novos proprietários quanto para empresas que já possuem avião e necessitam de apoio de frota imediato.',
      card1Tag: 'ACESSO MULTI-AERONAVE',
      card2Title: 'Taxa de Gestão Proporcional',
      card2Desc:
        'Uma mensalidade previsível e proporcional que cobre todos os custos fixos: hangaragem, seguro internacional de casco, salários de tripulação dedicada e conformidade legal.',
      card2Tag: 'ZERO SURPRESAS',
      card3Title: 'Tarifa Apenas por Hora Ocupada',
      card3Desc:
        'Os custos variáveis (combustível, taxas de pouso e handling FBO) só são faturados quando você está fisicamente a bordo. Zero custo por voos de translado vazios.',
      card3Tag: 'CUSTO VARIÁVEL LÍQUIDO',
      card4Title: 'Liquidez e Recompra Garantida',
      card4Desc:
        'Nosso programa assegura uma saída financeira planejada com recompras garantidas pelo valor de mercado periciado, preservando seu patrimônio.',
      card4Tag: 'PRESERVAÇÃO PATRIMONIAL',
    },
    calc: {
      kicker: 'COMPARADOR DE EFICIÊNCIA FINANCEIRA',
      title: 'Simule o Retorno do Seu Investimento',
      subtitle: 'Ajuste suas horas anuais estimadas de voo e comprove por que a propriedade fracionada supera o fretamento tradicional e a compra de 100%.',
      hoursLabel: 'Horas anuais estimadas de voo:',
      recShare: 'Cota recomendada na Jet-Elite:',
      colFractional: 'Jet-Elite Fracionada',
      colCharter: 'Fretamento Tradicional Spot',
      colFull: 'Compra de 100% da Aeronave',
      annualSavings: 'Economia Anual Projetada:',
      avoidedFixed: 'Custos fixos de hangar e tripulação evitados:',
      cta: 'Solicitar Análise de Perfil Sob Medida',
    },
    fleet: {
      kicker: 'TELEMÉTRICA E ALCANCE TRANSCONTINENTAL',
      title: 'Aeronaves de Cabine Ampla para 12 a 18 Passageiros',
      subtitle: 'Até 7.000 milhas náuticas conectando as Américas, Europa e Ásia sem escalas, permitindo visitar múltiplos polos de negócios no mesmo dia.',
      rangeLabel: 'Alcance Máximo:',
      paxLabel: 'Capacidade VIP:',
      speedLabel: 'Velocidade de Cruzeiro:',
      altitudeLabel: 'Teto de Serviço:',
    },
    safety: {
      kicker: 'PADRÃO MILITAR E CORPORATIVO',
      title: 'Segurança e Engenharia Certificadas nos EUA',
      subtitle: 'Tranquilidade absoluta para você, sua família e seus executivos em todas as missões.',
      pilotsTitle: 'Capitães Ex-Aviação Comercial',
      pilotsDesc:
        'Nossos comandantes possuem mais de 15.000 horas médias de voo e passam por treinamento semestral em simuladores de Nível D na FlightSafety e CAE.',
      maintTitle: 'Manutenção Direta de Fábrica nos EUA',
      maintDesc:
        'Revisões gerais e inspeções executadas diretamente nas oficinas certificadas FAA Part 145 nos Estados Unidos com rastreabilidade total.',
    },
    ctaSection: {
      kicker: 'CONCIERGE EXECUTIVO UHNW',
      title: 'Permita-nos analisar seu perfil de voo corporativo e pessoal',
      subtitle: 'Desenharemos sua cota ideal e seu programa de voo sob estrito acordo de confidencialidade (NDA).',
      namePlaceholder: 'Nome Completo / Empresa',
      emailPlaceholder: 'E-mail corporativo',
      phonePlaceholder: 'Telefone de contato (+código do país)',
      hoursPlaceholder: 'Horas anuais estimadas de voo',
      routesPlaceholder: 'Rotas prioritárias (ex. São Paulo - Miami - Lisboa)',
      ndaCheck: 'Solicito a assinatura de um Acordo de Confidencialidade (NDA) prévio.',
      submitBtn: 'Enviar Solicitação Confidencial',
    },
  },
};