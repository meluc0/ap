export interface ApartmentUnit {
  id: 'vila-ema' | 'tatuape' | 'mooca';
  name: string;
  neighborhood: string;
  zone: string;
  badge: string;
  tagline: string;
  priceFormatted: string;
  priceNumber: number;
  condoFee: string;
  iptu: string;
  area: string;
  suites: string;
  bedrooms: string;
  parking: string;
  floor: string;
  formUrl: string;
  formLabel: string;
  highlightCover: string;
  locationDetails: string;
  highlights: string[];
  nearby: { title: string; time: string; type: string }[];
}

export const APARTMENT_UNITS: ApartmentUnit[] = [
  {
    id: 'vila-ema',
    name: 'Residencial Reserva Vila Ema',
    neighborhood: 'Vila Ema',
    zone: 'Zona Leste Nobre — São Paulo, SP',
    badge: 'Excelente Custo-Benefício • Pronto para Morar',
    tagline: 'Sofisticação e tranquilidade com lazer de resort a minutos da Linha 15-Prata do Monotrilho.',
    priceFormatted: 'R$ 790.000',
    priceNumber: 790000,
    condoFee: 'R$ 680 / mês',
    iptu: 'R$ 195 / mês',
    area: '84 m²',
    suites: '1 Suíte Master',
    bedrooms: '3 Dorms (1 Suíte)',
    parking: '2 Vagas Cobertas',
    floor: '12º Andar',
    formUrl: 'https://forms.gle/XQjvT1EoakjtAgkv9',
    formLabel: 'Formulário Oficial — Vila Ema',
    highlightCover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    locationDetails: 'Av. Vila Ema, próximo à Estação São Lucas e Colégio Joana D\'Arc',
    highlights: [
      'Varanda gourmet envidraçada com churrasqueira a carvão',
      'Piso laminado de alta durabilidade e móveis sob medida',
      'Condomínio clube com piscina climatizada e quadra poliesportiva',
      'Aceita financiamento Caixa, Itaú, Bradesco e uso do FGTS'
    ],
    nearby: [
      { title: 'Estação São Lucas (Monotrilho)', time: '4 min a pé', type: 'Mobilidade' },
      { title: 'Parque Ecológico Vila Prudente', time: '6 min', type: 'Lazer & Verde' },
      { title: 'Supermercado Joanin & Dia', time: '3 min a pé', type: 'Conveniência' },
      { title: 'Colégio Joana D\'Arc', time: '5 min', type: 'Educação' }
    ]
  },
  {
    id: 'tatuape',
    name: 'Edifício Grand Tatuapé Privilege',
    neighborhood: 'Tatuapé',
    zone: 'Altíssimo Padrão — São Paulo, SP',
    badge: 'Exclusividade & Luxo • Próximo ao Ceret',
    tagline: 'Arquitetura imponente em uma das regiões mais valorizadas da Zona Leste, ao lado dos melhores shoppings e restaurantes.',
    priceFormatted: 'R$ 1.850.000',
    priceNumber: 1850000,
    condoFee: 'R$ 1.450 / mês',
    iptu: 'R$ 490 / mês',
    area: '142 m²',
    suites: '3 Suítes Plenas',
    bedrooms: '3 Suítes',
    parking: '3 Vagas Demarcadas',
    floor: '16º Andar',
    formUrl: 'https://forms.gle/SaP9bCnnyDNghtaw6',
    formLabel: 'Formulário Oficial — Tatuapé',
    highlightCover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    locationDetails: 'Rua Emília Marengo / Próximo ao Parque Ceret e Shopping Anália Franco',
    highlights: [
      'Living amplo integrado com pé-direito elevado e vista 180°',
      'Varanda gourmet com churrasqueira em inox e bancada em granito',
      'Suíte master com closet walk-in e hidromassagem',
      'Condomínio com academia Technogym, spa e quadra de tênis oficial'
    ],
    nearby: [
      { title: 'Parque CERET Anália Franco', time: '3 min', type: 'Esporte & Lazer' },
      { title: 'Shopping Anália Franco', time: '5 min', type: 'Gastronomia & Compras' },
      { title: 'Metrô Tatuapé & Carrão', time: '7 min', type: 'Transporte Rápido' },
      { title: 'Colégio Agostiniano Mendel', time: '4 min', type: 'Educação Top' }
    ]
  },
  {
    id: 'mooca',
    name: 'Palazzo Mooca Tradizione',
    neighborhood: 'Mooca',
    zone: 'Bairro Tradicional & Gastronômico — São Paulo, SP',
    badge: 'Charme & Espaço • Vista Panorâmica',
    tagline: 'O requinte moderno com a alma e o acolhimento da tradicional Mooca. Amplo terraço e acabamento impecável.',
    priceFormatted: 'R$ 1.290.000',
    priceNumber: 1290000,
    condoFee: 'R$ 980 / mês',
    iptu: 'R$ 340 / mês',
    area: '115 m²',
    suites: '2 Suítes + Home Office',
    bedrooms: '3 Dormitórios (2 Suítes)',
    parking: '2 Vagas Determinadas',
    floor: '9º Andar',
    formUrl: 'https://forms.gle/tQ6Z5rDgkWtXQiyz9',
    formLabel: 'Formulário Oficial — Mooca',
    highlightCover: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    locationDetails: 'Rua Juventus / Próximo ao Clube Juventus e Praça dos Três Poderes',
    highlights: [
      'Terraço gourmet amplo integrado com fechamento de vidro',
      'Cozinha americana planejada com ilha de cocção',
      'Depósito privativo no subsolo e vagas livres',
      'Segurança 24 horas blindada com biometria facial'
    ],
    nearby: [
      { title: 'Clube Atlético Juventus', time: '2 min', type: 'Tradição & Lazer' },
      { title: 'Pizzaria San Pedro & Cantinas', time: '3 min a pé', type: 'Alta Gastronomia' },
      { title: 'Mooca Plaza Shopping', time: '6 min', type: 'Compras & Cinema' },
      { title: 'Universidade São Judas', time: '4 min', type: 'Educação Superior' }
    ]
  }
];

export const GENERAL_DATA = {
  developerName: "Grupo Imobiliário Prime São Paulo",
  creci: "CRECI SP: 198.442-J",
  phone: "(11) 99876-5432",
  hours: "Segunda a Sábado das 09h às 19h | Domingos sob agendamento",
  
  // Direct form links provided by user
  formLinks: [
    {
      id: "vila-ema",
      unitId: "vila-ema",
      neighborhood: "Vila Ema",
      title: "Apartamento Vila Ema (84m² • 3 Dorms / 1 Suíte)",
      description: "Agendamento de visita, book técnico e proposta para o imóvel na Vila Ema.",
      url: "https://forms.gle/XQjvT1EoakjtAgkv9",
      price: "R$ 790.000",
      tag: "Vila Ema"
    },
    {
      id: "tatuape",
      unitId: "tatuape",
      neighborhood: "Tatuapé",
      title: "Apartamento Tatuapé (142m² • 3 Suítes Plenas)",
      description: "Visita privativa, proposta comercial e análise de permuta/financiamento no Tatuapé.",
      url: "https://forms.gle/SaP9bCnnyDNghtaw6",
      price: "R$ 1.850.000",
      tag: "Tatuapé (Alto Padrão)"
    },
    {
      id: "mooca",
      unitId: "mooca",
      neighborhood: "Mooca",
      title: "Apartamento Mooca (115m² • 2 Suítes + Varanda Gourmet)",
      description: "Agendamento de visita, simulação bancária e ficha completa do imóvel na Mooca.",
      url: "https://forms.gle/tQ6Z5rDgkWtXQiyz9",
      price: "R$ 1.290.000",
      tag: "Mooca"
    }
  ],

  differentials: [
    {
      icon: "ShieldCheck",
      title: "Documentação 100% Regularizada",
      description: "Todos os apartamentos possuem matrícula individualizada, escritura pública e certidões negativas prontas para financiamento imediato."
    },
    {
      icon: "ChefHat",
      title: "Varanda Gourmet com Churrasqueira",
      description: "Unidades com área gourmet integrada ao living, perfeita para recepções familiares e momentos de lazer privativo."
    },
    {
      icon: "BedDouble",
      title: "Suítes Confortáveis & Iluminação Natural",
      description: "Plantas modernas pensadas para ventilação cruzada, isolamento acústico e persianas de enrolar com máxima privacidade."
    },
    {
      icon: "Sparkles",
      title: "Lazer de Clube Completo",
      description: "Condomínios entregues com piscina, academia moderna, salão de festas decorado, playground e espaço pet."
    },
    {
      icon: "Cpu",
      title: "Localizações Estratégicas & Mobilidade",
      description: "Próximos a estações de metrô/monotrilho, grandes shoppings, colégios renomados e vias de acesso rápido."
    },
    {
      icon: "Maximize2",
      title: "Facilidade de Pagamento",
      description: "Entrada facilitada, aceitação do FGTS, aprovação ágil de crédito imobiliário e estudo de veículos ou permuta."
    }
  ],

  faq: [
    {
      question: "Como funciona o agendamento de visitas?",
      answer: "Basta clicar no botão 'Tenho Interesse' e escolher a unidade de sua preferência (Vila Ema, Tatuapé ou Mooca). Você será direcionado ao formulário oficial e receberá uma confirmação individual no seu e-mail. Nossa equipe entrará em contato em menos de 2 horas para confirmar o melhor dia e horário."
    },
    {
      question: "Posso utilizar financiamento bancário e FGTS?",
      answer: "Sim! As 3 opções possuem habite-se averbado e documentação pronta para financiamento em qualquer banco (Caixa, Itaú, Bradesco, Santander, Banco do Brasil), inclusive com amortização pelo FGTS."
    },
    {
      question: "Os apartamentos aceitam carro ou permuta de imóvel?",
      answer: "Sim, os proprietários analisam propostas com veículos de valor de mercado e imóveis de menor valor como parte do pagamento. Basta indicar sua proposta no formulário."
    },
    {
      question: "Como os interessados são atendidos e onde as respostas ficam salvas?",
      answer: "Cada interessado recebe a confirmação individual da sua solicitação por e-mail com os dados preenchidos, enquanto as respostas são centralizadas em uma planilha única e segura para rápido retorno do corretor responsável."
    }
  ]
};
