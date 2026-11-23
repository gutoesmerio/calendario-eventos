/**
 * data.js - Repositório de dados e manipulador de payloads de eventos
 */

const DEFAULT_EVENTS = [
  {
    "id": 33,
    "nome_evento": "Agrishow 2027",
    "sigla_ou_edicao": "33ª Feira Internacional de Tecnologia Agrícola em Ação",
    "periodo": {
      "data_inicio": "2027-04-26",
      "data_fim": "2027-05-01",
      "duracao_dias": 6,
      "periodo_formatado": "26 de abril a 01 de maio de 2027",
      "dias_para_o_evento": 158
    },
    "localizacao": {
      "recinto": "Polo Regional de Desenvolvimento Tecnológico dos Agronegócios",
      "cidade": "Ribeirão Preto",
      "estado": "SP",
      "endereco": "Rodovia Prefeito Antônio Duarte Nogueira, Km 321"
    },
    "segmento": "Agronegócio e Maquinário Agrícola",
    "promotora": {
      "organizadora": "Informa Markets",
      "iniciativa": "ABAG, ABIMAQ, ANDA, FAESP e SRB",
      "site_oficial": "https://www.agrishow.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "perfil_alvo_expositores": "Grandes fabricantes de tratores, implementos e estandes acima de 150m²",
      "acao_comercial": "Parcerias de grande porte e montagens personalizadas"
    }
  },
  {
    "id": 34,
    "nome_evento": "EXPOMAFE 2027",
    "sigla_ou_edicao": "Feira Internacional de Máquinas-Ferramenta e Automação Industrial",
    "periodo": {
      "data_inicio": "2027-05-04",
      "data_fim": "2027-05-08",
      "duracao_dias": 5,
      "periodo_formatado": "04 a 08 de maio de 2027",
      "dias_para_o_evento": 166
    },
    "localizacao": {
      "recinto": "São Paulo Expo",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5 - Água Funda"
    },
    "segmento": "Máquinas-Ferramenta, Automação e Metalmecânica",
    "promotora": {
      "organizadora": "Informa Markets",
      "iniciativa": "ABIMAQ",
      "site_oficial": "https://www.expomafe.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "perfil_alvo_expositores": "PMEs nacionais com estandes construídos de 20m² a 100m²",
      "acao_comercial": "Prospecção ativa de expositores confirmados (Brasfixo, Balmer, Erzinger, Schulz) e parcerias com agências locais"
    }
  },
  {
    "id": 35,
    "nome_evento": "Feicon Batimat 2027",
    "sigla_ou_edicao": "Salão Internacional da Construção Civil e Arquitetura",
    "periodo": {
      "data_inicio": "2027-05-05",
      "data_fim": "2027-05-07",
      "duracao_dias": 3,
      "periodo_formatado": "05 a 07 de maio de 2027",
      "dias_para_o_evento": 167
    },
    "localizacao": {
      "recinto": "São Paulo Expo",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5"
    },
    "segmento": "Construção Civil e Arquitetura",
    "promotora": {
      "organizadora": "RX Global",
      "site_oficial": "https://www.feicon.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "perfil_alvo_expositores": "Marcas de acabamentos e soluções hidrossanitárias",
      "acao_comercial": "Envio de portfólio para expositores recorrentes"
    }
  },
  {
    "id": 39,
    "nome_evento": "Encontro Tecnológico de Usinagem",
    "sigla_ou_edicao": "Edição São Paulo 2027",
    "periodo": {
      "data_inicio": "2027-05-06",
      "data_fim": "2027-05-06",
      "duracao_dias": 1,
      "periodo_formatado": "06 de maio de 2027",
      "dias_para_o_evento": 168
    },
    "localizacao": {
      "recinto": "Centro de Convenções Rebouças",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Av. Rebouças, 600"
    },
    "segmento": "Usinagem de Precisão",
    "promotora": {
      "organizadora": "Associação Brasileira de Usinagem"
    },
    "estrategia_comercial": {
      "prioridade": "Baixa",
      "perfil_alvo_expositores": "Fornecedores de ferramentas de corte e lubrificantes",
      "acao_comercial": "Divulgação institucional"
    }
  },
  {
    "id": 40,
    "nome_evento": "Fórum de Automação Industrial",
    "sigla_ou_edicao": "Seminário Anual de Robótica",
    "periodo": {
      "data_inicio": "2027-05-06",
      "data_fim": "2027-05-07",
      "duracao_dias": 2,
      "periodo_formatado": "06 a 07 de maio de 2027",
      "dias_para_o_evento": 168
    },
    "localizacao": {
      "recinto": "Centro de Convenções Frei Caneca",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rua Frei Caneca, 569"
    },
    "segmento": "Robótica e Automação",
    "promotora": {
      "organizadora": "Mundo Robótica Eventos"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "perfil_alvo_expositores": "Integradores de robôs colaborativos",
      "acao_comercial": "Contato via LinkedIn com palestrantes e expositores"
    }
  },
  {
    "id": 38,
    "nome_evento": "Fenasucro & Agrocana 2027",
    "sigla_ou_edicao": "Feira Internacional da Bioenergia",
    "periodo": {
      "data_inicio": "2027-05-10",
      "data_fim": "2027-05-13",
      "duracao_dias": 4,
      "periodo_formatado": "10 a 13 de maio de 2027",
      "dias_para_o_evento": 172
    },
    "localizacao": {
      "recinto": "Centro de Eventos Zanini",
      "cidade": "Sertãozinho",
      "estado": "SP",
      "endereco": "Marginal João Olézio Marques, 3563"
    },
    "segmento": "Bioenergia e Sucroalcooleiro",
    "promotora": {
      "organizadora": "RX Brasil",
      "iniciativa": "CEISE Br",
      "site_oficial": "https://www.fenasucro.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "perfil_alvo_expositores": "Usinas, caldeirarias e prestadores de serviços de destilaria",
      "acao_comercial": "Prospecção presencial e estandes com mezanino"
    }
  },
  {
    "id": 36,
    "nome_evento": "Hospitalar 2027",
    "sigla_ou_edicao": "Feira Internacional de Materiais e Equipamentos Médicos",
    "periodo": {
      "data_inicio": "2027-05-18",
      "data_fim": "2027-05-21",
      "duracao_dias": 4,
      "periodo_formatado": "18 a 21 de maio de 2027",
      "dias_para_o_evento": 180
    },
    "localizacao": {
      "recinto": "São Paulo Expo",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5"
    },
    "segmento": "Saúde e Equipamentos Hospitalares",
    "promotora": {
      "organizadora": "Informa Markets",
      "site_oficial": "https://www.hospitalar.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "perfil_alvo_expositores": "Laboratórios farmacêuticos e fabricantes de equipamentos de diagnóstico",
      "acao_comercial": "Foco em estandes de alto padrão arquitetônico"
    }
  }
];

class EventStore {
  constructor() {
    this.events = [...DEFAULT_EVENTS];
    this.listeners = [];
  }

  getEvents() {
    return this.events;
  }

  getEventById(id) {
    return this.events.find(ev => ev.id === Number(id));
  }

  setEvents(newEvents) {
    if (!Array.isArray(newEvents)) {
      throw new Error("O payload deve ser uma lista (array) de eventos.");
    }
    this.events = newEvents;
    this.notifyListeners();
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.events));
  }
}

window.eventStore = new EventStore();
