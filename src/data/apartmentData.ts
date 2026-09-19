export interface ApartmentPhoto {
  id: string;
  category: 'living' | 'suite' | 'varanda' | 'cozinha' | 'lazer' | 'fachada';
  title: string;
  description: string;
  url: string;
}

export interface RoomSpec {
  name: string;
  area: string;
  description: string;
  highlights: string[];
}

export const APARTMENT_DATA = {
  name: "Residencial Jardins Imperial",
  headline: "Apartamento de Alto Padrão nos Jardins",
  tagline: "O equilíbrio sublime entre arquitetura contemporânea, espaço generoso e localização ímpar.",
  badge: "Oportunidade Única • Pronto para Morar",
  location: "Alameda dos Jacarandás, Jardins — São Paulo, SP",
  
  // Links oficiais de interesse
  interestFormUrl: "https://forms.gle/3E13784rtQNCeWPc8",
  formLinks: [
    {
      id: "form-1",
      title: "Agendamento de Visita & Apresentação",
      description: "Preencha para receber a ficha técnica detalhada e agendar sua visita privativa.",
      url: "https://forms.gle/3E13784rtQNCeWPc8",
      tag: "Principal"
    },
    {
      id: "form-2",
      title: "Proposta de Compra & Simulação de Financiamento",
      description: "Canal direto para envio de propostas, análise de financiamento bancário e permutas.",
      url: "https://forms.gle/d4k386dUYqaSZwUP9",
      tag: "Propostas"
    }
  ],
  
  pricing: {
    priceFormatted: "R$ 2.490.000",
    priceNumber: 2490000,
    priceM2: "R$ 14.821 / m²",
    condoFee: "R$ 1.850 / mês",
    iptu: "R$ 680 / mês",
    status: "Documentação 100% regularizada • Aceita financiamento bancário",
    permuta: "Estuda veículo de alto padrão ou imóvel de menor valor na negociação"
  },

  keyStats: [
    { label: "Área Privativa", value: "168 m²", detail: "Planta inteligente sem corredores perdidos" },
    { label: "Suítes", value: "3 Suítes", detail: "Master com closet walk-in e banheira" },
    { label: "Vagas de Garagem", value: "3 Vagas", detail: "Demarcadas, cobertas + depósito privativo" },
    { label: "Andar & Posição", value: "18º Andar", detail: "Sol da manhã e vista livre 180° permanente" },
    { label: "Banheiros", value: "4.5", detail: "3 suítes + lavabo nobre + dependência" }
  ],

  differentials: [
    {
      title: "Varanda Gourmet Integrada",
      description: "Fechamento articulado em vidro retrátil, churrasqueira a carvão em inox e bancada em quartzo branco com pia de apoio.",
      icon: "Sparkles"
    },
    {
      title: "Living com Pé-Direito Livre",
      description: "Piso em porcelanato nobre 120x120cm, forro rebaixado em gesso com projeto luminotécnico em LED e automação pré-instalada.",
      icon: "Maximize2"
    },
    {
      title: "Suíte Master com Walk-in Closet",
      description: "Amplo closet planejado, cuba dupla em mármore importado, banheira de imersão e persianas elétricas com isolamento acústico.",
      icon: "BedDouble"
    },
    {
      title: "Cozinha Funcional & Despensa",
      description: "Integrada ou isolável por portas de correr em madeira ripada, torre quente preparada, bancadas em Silestone cinza e coifa potente.",
      icon: "ChefHat"
    },
    {
      title: "Climatização & Automação",
      description: "Infraestrutura completa de ar-condicionado Multi-Split inverter em todos os ambientes e fechadura biométrica digital na entrada social.",
      icon: "Cpu"
    },
    {
      title: "Isolamento Acústico Premium",
      description: "Esquadrias com vidros laminados acústicos de alto desempenho e manta de atenuação de ruído de impacto sob os pisos.",
      icon: "ShieldCheck"
    }
  ],

  photos: [
    {
      id: "photo-1",
      category: "living",
      title: "Living Integrado & Estar",
      description: "Amplo espaço com luz natural abundante, integração perfeita com o jantar e varanda.",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-2",
      category: "varanda",
      title: "Varanda Gourmet com Vista Livre",
      description: "Ambiente perfeito para receber amigos e familiares com churrasqueira e vista panorâmica.",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-3",
      category: "suite",
      title: "Suíte Master com Closet",
      description: "Refúgio de conforto com espaço amplo para cama king size e iluminação indireta relaxante.",
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-4",
      category: "cozinha",
      title: "Cozinha Gourmet Contemporânea",
      description: "Marcenaria planejada de alto padrão com ilha central e acabamentos foscos refinados.",
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-5",
      category: "suite",
      title: "Banheiro da Suíte Master",
      description: "Cuba dupla esculpida em mármore, nicho iluminado e box elegance até o teto.",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-6",
      category: "lazer",
      title: "Piscina Aquecida com Borda Infinita",
      description: "Área de lazer espetacular no condomínio com deck molhado e solarium.",
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-7",
      category: "fachada",
      title: "Fachada Arquitetônica Contemporânea",
      description: "Projeto assinado com linhas marcantes, paisagismo exuberante e segurança perimetral.",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "photo-8",
      category: "lazer",
      title: "Academia Completa Technogym",
      description: "Espaço fitness equipado para treinos de alta performance sem sair de casa.",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85"
    }
  ] as ApartmentPhoto[],

  rooms: [
    {
      name: "Living & Sala de Jantar",
      area: "48,5 m²",
      description: "Espaço contínuo que comporta confortavelmente mesa de jantar de 8 a 10 lugares e dois ambientes de estar.",
      highlights: ["Piso em porcelanato nobre", "Janelas do chão ao teto", "Ponto de automação de cortinas"]
    },
    {
      name: "Varanda Gourmet",
      area: "22,0 m²",
      description: "Integrada diretamente ao living e à cozinha, com churrasqueira ecológica e bancada de preparo.",
      highlights: ["Envidraçamento retrátil", "Ponto de gás e água quente", "Ralo linear oculto"]
    },
    {
      name: "Suíte Master + Closet",
      area: "31,2 m²",
      description: "Quarto com espaço generoso para cama king-size, closet walk-in ventilado e banheiro com cuba dupla.",
      highlights: ["Persiana blackout elétrica", "Banheira de imersão", "Piso de madeira natural"]
    },
    {
      name: "Suíte 02 (Júnior)",
      area: "17,4 m²",
      description: "Ideal para filhos ou hóspedes, com bancada de estudos planejada e armário embutido.",
      highlights: ["Isolamento termoacústico", "Banheiro privativo completo", "Esquadria ampla"]
    },
    {
      name: "Suíte 03 / Home Office Flex",
      area: "16,8 m²",
      description: "Ambiente versátil preparado tanto como suíte completa quanto como escritório executivo silencioso.",
      highlights: ["Infraestrutura para rede cabeada", "Iluminação cenográfica", "Banheiro privativo"]
    },
    {
      name: "Cozinha & Área de Serviço",
      area: "21,1 m²",
      description: "Layout ergonômico com ilha central, despensa independente, lavanderia ventilada e banheiro de serviço.",
      highlights: ["Bancada Silestone", "Tubulação para coifa externa", "Entrada de serviço independente"]
    }
  ] as RoomSpec[],

  condoFeatures: [
    { name: "Piscina Aquecida", desc: "Raia de 25m semiolímpica coberta e climatizada o ano todo" },
    { name: "Academia Technogym", desc: "Equipamentos profissionais para musculação e cárdio" },
    { name: "Segurança 24h Blindada", desc: "Guarita com vidro à prova de balas e controle biométrico" },
    { name: "Spa com Sauna", desc: "Ambiente de relaxamento com sauna seca, úmida e sala de massagem" },
    { name: "Salão de Festas Gourmet", desc: "Capacidade para 60 pessoas com cozinha industrial de apoio" },
    { name: "Rooftop Lounge", desc: "Vista panorâmica 360° da cidade com lareira ecológica ao ar livre" },
    { name: "Brinquedoteca & Playground", desc: "Área lúdica e segura para crianças de todas as idades" },
    { name: "Gerador Full 100%", desc: "Atendimento completo das áreas privativas e sociais em caso de apagão" }
  ],

  locationHighlights: [
    { title: "Parque do Ibirapuera", time: "6 minutos", type: "Lazer & Natureza" },
    { title: "Colégio Dante Alighieri", time: "4 minutos", type: "Educação de Excelência" },
    { title: "Shopping JK Iguatemi", time: "8 minutos", type: "Compras & Entretenimento" },
    { title: "Hospital Albert Einstein / Sírio", time: "7 minutos", type: "Saúde & Bem-Estar" },
    { title: "Rua Oscar Freire", time: "5 minutos", type: "Alta Gastronomia & Boutiques" },
    { title: "Estação de Metrô / Eixos Viários", time: "3 minutos", type: "Mobilidade Rápida" }
  ],

  faq: [
    {
      question: "Como agendar uma visita presencial ou enviar uma proposta?",
      answer: "Basta clicar em qualquer botão 'Tenho Interesse' nesta página para escolher entre o Formulário de Visita ou o Formulário de Proposta. Você receberá uma confirmação individual do seu interesse diretamente no seu e-mail e nossa consultoria entrará em contato prontamente."
    },
    {
      question: "O imóvel aceita financiamento bancário ou uso do FGTS?",
      answer: "Sim! A documentação do apartamento está 100% regularizada com matrícula limpa e escritura registrada, estando apto para financiamento imediato em qualquer instituição bancária (Itaú, Bradesco, Santander, Caixa, etc.)."
    },
    {
      question: "Os móveis planejados e ar-condicionado estão inclusos?",
      answer: "Sim, todos os armários planejados de marcenaria de alta linha (closet, cozinha, banheiros), painéis ripados, aparelhos de ar-condicionado inverter e iluminação já instalada fazem parte da venda."
    },
    {
      question: "Quantas vagas de garagem e onde ficam localizadas?",
      answer: "São 3 vagas de garagem fixas, demarcadas na escritura e cobertas no 1º subsolo, além de um depósito privativo fechado de 4m²."
    }
  ]
};
