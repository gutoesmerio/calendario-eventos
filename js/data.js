/**
 * data.js - Repositório de dados e manipulador de eventos, propostas e interações
 */

// Dados base de eventos ativos (carregamento garantido mesmo via file:///)
const DEFAULT_EVENTS = [
  {
    "id": 10,
    "nome_evento": "Dia de Campo C.Vale Safra 2026/2027",
    "sigla_ou_edicao": "Edição Palotina 2026",
    "periodo": {
      "data_inicio": "2026-12-01",
      "data_fim": "2026-12-03",
      "duracao_dias": 3,
      "periodo_formatado": "01 a 03 de dezembro de 2026",
      "dias_para_o_evento": 8
    },
    "localizacao": {
      "recinto": "Campo Experimental da C.Vale",
      "cidade": "Palotina",
      "estado": "PR",
      "endereco": "Prolongamento da Av. Independência, s/n"
    },
    "segmento": "Agronegócio, Soja, Milho e Tecnologia Agropecuária",
    "promotora": {
      "organizadora": "Cooperativa Agroindustrial C.Vale",
      "iniciativa": "C.Vale",
      "site_oficial": "https://www.cvale.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 5,
      "perfil_alvo_expositores": "Agências de live marketing de SP e cooperativas parceiras",
      "acao_comercial": "Ativação de parcerias de montagem regional para The Group (BASF), C&L Eventos (Syngenta/Ourofino), Vaccinar e IHARA"
    }
  },
  {
    "id": 24,
    "nome_evento": "Mundo do Futsal Experience 2026",
    "sigla_ou_edicao": "Edição Internacional Foz 2026",
    "periodo": {
      "data_inicio": "2026-12-14",
      "data_fim": "2026-12-19",
      "duracao_dias": 6,
      "periodo_formatado": "14 a 19 de dezembro de 2026",
      "dias_para_o_evento": 21
    },
    "localizacao": {
      "recinto": "Complexo Esportivo e Hoteleiro de Foz do Iguaçu",
      "cidade": "Foz do Iguaçu",
      "estado": "PR",
      "endereco": "Foz do Iguaçu - PR"
    },
    "segmento": "Esportivo, Negócios do Esporte e Entretenimento",
    "promotora": {
      "organizadora": "Mundo do Futsal",
      "iniciativa": "Federações e Marcas Esportivas",
      "site_oficial": "https://mundodofutsal.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 0,
      "perfil_alvo_expositores": "Patrocinadores esportivos, marcas de material esportivo e arenas",
      "acao_comercial": "Apoio local imediato com cenografia, pórticos e mobiliário próprio em Foz"
    }
  },
  {
    "id": 25,
    "nome_evento": "54º Encontro Nacional de Economia (ANPEC) & 48º EBE (SBE)",
    "sigla_ou_edicao": "54º Encontro ANPEC / 48º EBE SBE 2026",
    "periodo": {
      "data_inicio": "2026-12-15",
      "data_fim": "2026-12-18",
      "duracao_dias": 4,
      "periodo_formatado": "15 a 18 de dezembro de 2026",
      "dias_para_o_evento": 22
    },
    "localizacao": {
      "recinto": "Hotel Recanto Cataratas Thermas Resort & Convention",
      "cidade": "Foz do Iguaçu",
      "estado": "PR",
      "endereco": "Av. Costa e Silva, 3500 - Parque Pres. 1"
    },
    "segmento": "Economia, Finanças, Econometria e Políticas Públicas",
    "promotora": {
      "organizadora": "ANPEC & Sociedade Brasileira de Econometria (SBE)",
      "iniciativa": "ANPEC / SBE / PPGE-UNILA",
      "site_oficial": "https://www.anpec.org.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 2,
      "perfil_alvo_expositores": "Agências de live marketing detentoras das contas de bancos e consultorias (Itaú, Bradesco, GO Associados)",
      "acao_comercial": "Abordagem como braço operacional fabril local em Foz, eliminando frete de carretas de SP/RJ"
    }
  },
  {
    "id": 32,
    "nome_evento": "Copacol Agro 2027",
    "sigla_ou_edicao": "Edição Cafelândia 2027",
    "periodo": {
      "data_inicio": "2027-01-19",
      "data_fim": "2027-01-21",
      "duracao_dias": 3,
      "periodo_formatado": "19 a 21 de janeiro de 2027",
      "dias_para_o_evento": 57
    },
    "localizacao": {
      "recinto": "Centro de Pesquisa Agrícola Copacol",
      "cidade": "Cafelândia",
      "estado": "PR",
      "endereco": "Cafelândia - PR"
    },
    "segmento": "Agronegócio, Cooperativismo, Insumos e Grãos",
    "promotora": {
      "organizadora": "Copacol Cooperativa Agroindustrial",
      "iniciativa": "Copacol",
      "site_oficial": "https://www.copacol.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Fornecedores de sementes, defensivos, nutrição animal e máquinas",
      "acao_comercial": "Pacote regional oeste para expositores que participam da Copacol e Show Rural"
    }
  },
  {
    "id": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "sigla_ou_edicao": "39ª Edição Show Rural Coopavel",
    "periodo": {
      "data_inicio": "2027-02-01",
      "data_fim": "2027-02-05",
      "duracao_dias": 5,
      "periodo_formatado": "01 a 05 de fevereiro de 2027",
      "dias_para_o_evento": 70
    },
    "localizacao": {
      "recinto": "Parque Tecnológico Coopavel",
      "cidade": "Cascavel",
      "estado": "PR",
      "endereco": "BR-277, KM 577"
    },
    "segmento": "Agronegócio, Máquinas Agrícolas, Pecuária, Sementes e Tecnologia do Campo",
    "promotora": {
      "organizadora": "Coopavel Cooperativa Agroindustrial",
      "iniciativa": "Coopavel",
      "site_oficial": "https://showrural.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 77,
      "perfil_alvo_expositores": "Expositores de estandes construídos (marcenaria própria, climatização reforçada e entrega 24h antes)",
      "acao_comercial": "Fechamento da meta de 20 estandes construídos. Proposta ativa de R$ 78.000,00 na MSD Saúde Animal e 13 oportunidades quentes"
    }
  },
  {
    "id": 33,
    "nome_evento": "Show Rural Digital 2027",
    "sigla_ou_edicao": "Pavilhão de Inovação e Agtechs 2027",
    "periodo": {
      "data_inicio": "2027-02-01",
      "data_fim": "2027-02-05",
      "duracao_dias": 5,
      "periodo_formatado": "01 a 05 de fevereiro de 2027",
      "dias_para_o_evento": 70
    },
    "localizacao": {
      "recinto": "Parque Tecnológico Coopavel - Pavilhão Digital",
      "cidade": "Cascavel",
      "estado": "PR",
      "endereco": "BR-277, KM 577"
    },
    "segmento": "Tecnologia, Agtechs, Software Agro, Conectividade e Startups",
    "promotora": {
      "organizadora": "Coopavel Cooperativa Agroindustrial",
      "iniciativa": "Coopavel / Show Rural Digital",
      "site_oficial": "https://showrural.com.br/digital"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 2,
      "perfil_alvo_expositores": "Empresas de software agro, telemetria, drones e startups consolidadas",
      "acao_comercial": "Estandes mistos e modulares customizados com alta densidade de telas e conectividade"
    }
  },
  {
    "id": 28,
    "nome_evento": "Expodireto Cotrijal 2027",
    "sigla_ou_edicao": "27ª Edição Expodireto",
    "periodo": {
      "data_inicio": "2027-03-08",
      "data_fim": "2027-03-12",
      "duracao_dias": 5,
      "periodo_formatado": "08 a 12 de março de 2027",
      "dias_para_o_evento": 105
    },
    "localizacao": {
      "recinto": "Parque da Expodireto Cotrijal",
      "cidade": "Não-Me-Toque",
      "estado": "RS",
      "endereco": "RS-142, KM 24"
    },
    "segmento": "Agronegócio, Maquinário e Cooperativismo",
    "promotora": {
      "organizadora": "Cotrijal Cooperativa Agropecuária e Industrial",
      "iniciativa": "Cotrijal",
      "site_oficial": "https://www.expodireto.cotrijal.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 0,
      "perfil_alvo_expositores": "Clientes da DCarvalho que fazem a rota sul de feiras do primeiro trimestre",
      "acao_comercial": "Aproveitamento de projetos e estruturas móveis pós-Show Rural"
    }
  },
  {
    "id": 26,
    "nome_evento": "Tecnoshow Comigo 2027",
    "sigla_ou_edicao": "22ª Edição Tecnoshow",
    "periodo": {
      "data_inicio": "2027-04-05",
      "data_fim": "2027-04-09",
      "duracao_dias": 5,
      "periodo_formatado": "05 a 09 de abril de 2027",
      "dias_para_o_evento": 133
    },
    "localizacao": {
      "recinto": "Centro Tecnológico Comigo (CTC)",
      "cidade": "Rio Verde",
      "estado": "GO",
      "endereco": "Anel Viário Paulo Campos, KM 7"
    },
    "segmento": "Agronegócio, Tecnologia Agrícola, Pecuária e Grãos",
    "promotora": {
      "organizadora": "Comigo Cooperativa Agroindustrial dos Produtores Rurais",
      "iniciativa": "Comigo",
      "site_oficial": "https://www.tecnoshowcomigo.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Grandes players agro com operações multi-evento",
      "acao_comercial": "Elaboração do projeto de estande para MSD Saúde Animal (solicitado pela Egle)"
    }
  },
  {
    "id": 31,
    "nome_evento": "Fenicafé 2027",
    "sigla_ou_edicao": "Feira Nacional de Irrigação em Cafeicultura 2027",
    "periodo": {
      "data_inicio": "2027-04-06",
      "data_fim": "2027-04-08",
      "duracao_dias": 3,
      "periodo_formatado": "06 a 08 de abril de 2027",
      "dias_para_o_evento": 134
    },
    "localizacao": {
      "recinto": "Pica-Pau Country Club",
      "cidade": "Araguari",
      "estado": "MG",
      "endereco": "Araguari - MG"
    },
    "segmento": "Cafeicultura Irrigada, Irrigação e Máquinas Agrícolas",
    "promotora": {
      "organizadora": "Associação dos Cafeicultores de Araguari (ACA)",
      "iniciativa": "ACA / FEPAC",
      "site_oficial": "https://fenicafe.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Fabricantes de sistemas de irrigação, pivôs e beneficiamento de café",
      "acao_comercial": "Pacote circuito anual de feiras com a Granfinale Sistemas Agrícolas"
    }
  },
  {
    "id": 27,
    "nome_evento": "Agrishow 2027",
    "sigla_ou_edicao": "32ª Feira Internacional de Tecnologia Agrícola em Ação",
    "periodo": {
      "data_inicio": "2027-04-26",
      "data_fim": "2027-04-30",
      "duracao_dias": 5,
      "periodo_formatado": "26 a 30 de abril de 2027",
      "dias_para_o_evento": 154
    },
    "localizacao": {
      "recinto": "Polo Regional de Desenvolvimento Tecnológico dos Agronegócios",
      "cidade": "Ribeirão Preto",
      "estado": "SP",
      "endereco": "Rodovia Prefeito Antônio Duarte Nogueira, KM 321"
    },
    "segmento": "Mega-feira do Agronegócio, Maquinário Pesado, Implementos e Aviação Agrícola",
    "promotora": {
      "organizadora": "Informa Markets",
      "iniciativa": "ABAG, ABIMAQ, ANDA, FAESP e SRB",
      "site_oficial": "https://www.agrishow.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Expositores de grande porte e indústrias com presença contínua",
      "acao_comercial": "Atendimento à Granfinale e prospecção de estandes de grande metragem construídos"
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
      "dias_para_o_evento": 162
    },
    "localizacao": {
      "recinto": "São Paulo Expo",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5 - Água Funda"
    },
    "segmento": "Máquinas-Ferramenta, Automação, Robótica e Metalmecânica",
    "promotora": {
      "organizadora": "Informa Markets",
      "iniciativa": "ABIMAQ",
      "site_oficial": "https://www.expomafe.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 4,
      "perfil_alvo_expositores": "PMEs nacionais fabricantes de ferramentas, componentes, fixação, proteções e solda",
      "acao_comercial": "Prospecção ativa dos expositores confirmados: Brasfixo (I050), Balmer (D208), Erzinger (H018) e Schulz (D110)"
    }
  },
  {
    "id": 35,
    "nome_evento": "Feicon Batimat 2027",
    "sigla_ou_edicao": "Feira Internacional da Construção Civil e Arquitetura",
    "periodo": {
      "data_inicio": "2027-05-05",
      "data_fim": "2027-05-08",
      "duracao_dias": 4,
      "periodo_formatado": "05 a 08 de maio de 2027",
      "dias_para_o_evento": 163
    },
    "localizacao": {
      "recinto": "São Paulo Expo",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5 - Água Funda"
    },
    "segmento": "Construção Civil, Arquitetura, Acabamentos e Instalações",
    "promotora": {
      "organizadora": "RX Brasil (Reed Exhibitions)",
      "iniciativa": "RX / Setor da Construção Civil",
      "site_oficial": "https://www.feicon.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 0,
      "perfil_alvo_expositores": "Fabricantes de pisos, tintas, louças, metais, automação predial e iluminação",
      "acao_comercial": "Prospecção de marcas com estandes de conceito arquitetônico e design refinado"
    }
  },
  {
    "id": 36,
    "nome_evento": "Fórum de Automação Industrial",
    "sigla_ou_edicao": "Fórum e Seminário de Tecnologia Industrial 2027",
    "periodo": {
      "data_inicio": "2027-05-06",
      "data_fim": "2027-05-08",
      "duracao_dias": 3,
      "periodo_formatado": "06 a 08 de maio de 2027",
      "dias_para_o_evento": 164
    },
    "localizacao": {
      "recinto": "São Paulo Expo (Pavilhão Anexo / Auditórios)",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5 - Água Funda"
    },
    "segmento": "Automação Industrial, Robótica, IA Aplicada e Indústria 4.0",
    "promotora": {
      "organizadora": "Informa Markets / ABIMAQ",
      "iniciativa": "ABIMAQ",
      "site_oficial": "https://www.expomafe.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 0,
      "perfil_alvo_expositores": "Empresas de tecnologia e patrocinadores do congresso",
      "acao_comercial": "Cenografia de palco, backdrops, totens de credenciamento e lounges de patrocinadores"
    }
  },
  {
    "id": 37,
    "nome_evento": "Fenasucro & Agrocana 2027",
    "sigla_ou_edicao": "33ª Feira Internacional da Bioenergia",
    "periodo": {
      "data_inicio": "2027-05-10",
      "data_fim": "2027-05-14",
      "duracao_dias": 5,
      "periodo_formatado": "10 a 14 de maio de 2027",
      "dias_para_o_evento": 168
    },
    "localizacao": {
      "recinto": "Centro de Eventos Zanini",
      "cidade": "Sertãozinho",
      "estado": "SP",
      "endereco": "Marginal João Olézio Marques, 3563"
    },
    "segmento": "Bioenergia, Sucroenergético, Etanol, Açúcar e Equipamentos Pesados",
    "promotora": {
      "organizadora": "RX Brasil (Reed Exhibitions)",
      "iniciativa": "CEISE Br",
      "site_oficial": "https://www.fenasucro.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 0,
      "perfil_alvo_expositores": "Fabricantes de turbinas, moendas, caldeiras, válvulas e tecnologia para usinas",
      "acao_comercial": "Captação de indústrias pesadas de caldeiraria e usinagem com estandes de grande porte"
    }
  },
  {
    "id": 38,
    "nome_evento": "Hospitalar 2027",
    "sigla_ou_edicao": "34ª Feira Internacional Hospitalar",
    "periodo": {
      "data_inicio": "2027-05-18",
      "data_fim": "2027-05-21",
      "duracao_dias": 4,
      "periodo_formatado": "18 a 21 de maio de 2027",
      "dias_para_o_evento": 176
    },
    "localizacao": {
      "recinto": "São Paulo Expo",
      "cidade": "São Paulo",
      "estado": "SP",
      "endereco": "Rodovia dos Imigrantes, KM 1,5 - Água Funda"
    },
    "segmento": "Saúde, Medicina, Tecnologia Médica, Equipamentos e Facilities",
    "promotora": {
      "organizadora": "Informa Markets",
      "iniciativa": "Informa Markets",
      "site_oficial": "https://www.hospitalar.com"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 0,
      "perfil_alvo_expositores": "Fabricantes de equipamentos hospitalares, mobiliário clínico e diagnóstico",
      "acao_comercial": "Estandes de alto padrão em marcenaria com acabamento hospitalar asséptico e design limpo"
    }
  },
  {
    "id": 30,
    "nome_evento": "Expocafé 2027",
    "sigla_ou_edicao": "30ª Edição Expocafé",
    "periodo": {
      "data_inicio": "2027-05-18",
      "data_fim": "2027-05-21",
      "duracao_dias": 4,
      "periodo_formatado": "18 a 21 de maio de 2027",
      "dias_para_o_evento": 176
    },
    "localizacao": {
      "recinto": "Campo Experimental da EPAMIG",
      "cidade": "Três Pontas",
      "estado": "MG",
      "endereco": "Rodovia Três Pontas - Santana da Vargem, KM 06"
    },
    "segmento": "Cafeicultura, Maquinário e Tecnologia Cafeeira",
    "promotora": {
      "organizadora": "EPAMIG / Governo de Minas Gerais",
      "iniciativa": "EPAMIG",
      "site_oficial": "https://expocafe.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Indústrias de secadores, colhedoras e classificação de grãos",
      "acao_comercial": "Circuito anual Granfinale Sistemas Agrícolas"
    }
  },
  {
    "id": 29,
    "nome_evento": "Agroleite 2027",
    "sigla_ou_edicao": "27ª Edição Agroleite",
    "periodo": {
      "data_inicio": "2027-08-03",
      "data_fim": "2027-08-07",
      "duracao_dias": 5,
      "periodo_formatado": "03 a 07 de agosto de 2027",
      "dias_para_o_evento": 253
    },
    "localizacao": {
      "recinto": "Parque de Exposições Dario Macedo / Cidade do Leite",
      "cidade": "Castro",
      "estado": "PR",
      "endereco": "PR-340, KM 198"
    },
    "segmento": "Pecuária Leiteira, Genética, Ordenha e Nutrição Animal",
    "promotora": {
      "organizadora": "Castrolanda Cooperativa Agroindustrial",
      "iniciativa": "Castrolanda",
      "site_oficial": "https://www.agroleitecastrolanda.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Indústrias de ordenha, resfriamento, silos e genética bovina",
      "acao_comercial": "Atendimento à Granfinale e captação de expositores de estandes em alvenaria e marcenaria"
    }
  },
  {
    "id": 39,
    "nome_evento": "32ª ExpoCONAC 2027 (47º CONAC & 39º CONAEC)",
    "sigla_ou_edicao": "Edição Foz do Iguaçu 2027",
    "periodo": {
      "data_inicio": "2027-05-12",
      "data_fim": "2027-05-14",
      "duracao_dias": 3,
      "periodo_formatado": "12 a 14 de maio de 2027",
      "dias_para_o_evento": 170
    },
    "localizacao": {
      "recinto": "Recanto Cataratas Thermas Resort & Convention",
      "cidade": "Foz do Iguaçu",
      "estado": "PR",
      "endereco": "Av. Costa e Silva, 3500 - Parque Pres. 1"
    },
    "segmento": "Condomínios, Mercado Imobiliário, Legaltechs e Proptechs",
    "promotora": {
      "organizadora": "Comitê Organizador CONAC / ExpoCONAC",
      "iniciativa": "CONAC",
      "site_oficial": "https://www.expoconac.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Legaltechs, proptechs e tecnologia condominial",
      "acao_comercial": "Ativação de estandes customizados em Foz do Iguaçu com fábrica local própria e custo zero de frete"
    }
  },
  {
    "id": 40,
    "nome_evento": "iBusiness 2028 (Redetelesul)",
    "sigla_ou_edicao": "Edição Foz do Iguaçu 2028",
    "periodo": {
      "data_inicio": "2028-05-15",
      "data_fim": "2028-05-17",
      "duracao_dias": 3,
      "periodo_formatado": "15 a 17 de maio de 2028",
      "dias_para_o_evento": 539
    },
    "localizacao": {
      "recinto": "Centro de Convenções / Hotel de Eventos",
      "cidade": "Foz do Iguaçu",
      "estado": "PR",
      "endereco": "Foz do Iguaçu - Paraná"
    },
    "segmento": "Telecomunicações, Provedores de Internet (ISP) e Tecnologia",
    "promotora": {
      "organizadora": "Redetelesul / Camaleon Marketing",
      "iniciativa": "Redetelesul",
      "site_oficial": "https://redetelesul.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Fornecedores de telecom, fibra óptica, data centers e agências regionais",
      "acao_comercial": "Follow-up programado em fevereiro com Jociandro Almeida para fornecimento oficial de cenografia local"
    }
  },
  {
    "id": 41,
    "nome_evento": "Mercopar 2027",
    "sigla_ou_edicao": "36ª Edição",
    "periodo": {
      "data_inicio": "2027-10-19",
      "data_fim": "2027-10-22",
      "duracao_dias": 4,
      "periodo_formatado": "19 a 22 de outubro de 2027",
      "dias_para_o_evento": 330
    },
    "localizacao": {
      "recinto": "Centro de Eventos Festa da Uva",
      "cidade": "Caxias do Sul",
      "estado": "RS",
      "endereco": "R. Ludovíco Cavinato, 431 - Nossa Sra. da Saúde, Caxias do Sul - RS"
    },
    "segmento": "Inovação Industrial, Metalmecânica, Automação e Energia",
    "promotora": {
      "organizadora": "Sebrae RS / FIERGS",
      "iniciativa": "Sebrae RS",
      "site_oficial": "https://mercopar.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Média",
      "total_oportunidades_ativas": 2,
      "perfil_alvo_expositores": "Indústrias metalmecânicas, caldeiraria, inox, automação e suprimentos industriais",
      "acao_comercial": "Prospecção ativa de expositores industriais que demandam estandes construídos em marcenaria e estrutura mista"
    }
  },
  {
    "id": 42,
    "nome_evento": "Congresso Brasileiro de Dermatologia Veterinária - SBDV 2027",
    "sigla_ou_edicao": "Edição Foz do Iguaçu 2027",
    "periodo": {
      "data_inicio": "2027-04-15",
      "data_fim": "2027-04-17",
      "duracao_dias": 3,
      "periodo_formatado": "15 a 17 de abril de 2027",
      "dias_para_o_evento": 143
    },
    "localizacao": {
      "recinto": "Hotel Recanto Cataratas Thermas Resort & Convention",
      "cidade": "Foz do Iguaçu",
      "estado": "PR",
      "endereco": "Av. Costa e Silva, 3500 - Parque Pres. 1, Foz do Iguaçu - PR"
    },
    "segmento": "Medicina Veterinária, Dermatologia e Saúde Animal",
    "promotora": {
      "organizadora": "Sociedade Brasileira de Dermatologia Veterinária (SBDV)",
      "iniciativa": "SBDV",
      "site_oficial": "https://sbdv.com.br"
    },
    "estrategia_comercial": {
      "prioridade": "Alta",
      "total_oportunidades_ativas": 1,
      "perfil_alvo_expositores": "Laboratórios farmacêuticos veterinários, dermocosméticos e nutrição animal",
      "acao_comercial": "Ativação direta como montadora fabril local em Foz do Iguaçu, oferecendo custo zero de frete e assistência presencial 24h durante o congresso"
    }
  }
];

// Dados base de propostas ativas (carregamento garantido mesmo via file:///)
const DEFAULT_PROPOSTAS = [
  {
    "id_proposta": 74,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 94,
      "empresa": "MSD Saúde Animal",
      "contato_principal": "Egle",
      "cargo": "Gestão de Marketing e Feiras",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 11 9xxxx-xxxx",
      "email": "egle@merck.com"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": 72,
      "localizacao_estande": "Setor Pecuária / Aves e Suínos",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Proposta Enviada",
      "temperatura": "Quente",
      "valor_proposta": 78000,
      "probabilidade_fechamento_pct": 85,
      "valor_ponderado": 66300,
      "data_previsao_fechamento": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 92,
    "codigo_evento": 26,
    "nome_evento": "Tecnoshow Comigo 2027",
    "cliente": {
      "lead_id": 94,
      "empresa": "MSD Saúde Animal",
      "contato_principal": "Egle",
      "cargo": "Gestão de Marketing e Feiras",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 11 9xxxx-xxxx",
      "email": "egle@merck.com"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Polo CTC - Rio Verde/GO",
      "status_projeto": "Projeto 3D Apresentado - Em Revisão"
    },
    "comercial": {
      "estagio_proposta": "Estudo 3D em Revisão",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-15"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 75,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 95,
      "empresa": "Next Implementos",
      "contato_principal": "Equipe de Marketing",
      "cargo": "Trade Marketing / Eventos",
      "canal_preferencial": "E-mail",
      "telefone": "+55 45 9xxxx-xxxx",
      "email": "marketing@nextimplementos.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Pavilhão de Máquinas e Implementos",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Em Análise da Diretoria",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 65,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-05"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 4,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 6,
      "empresa": "Bianchi Lubrificantes",
      "contato_principal": "Kauany",
      "cargo": "Marketing",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 45 9xxxx-xxxx",
      "email": "marketing@bianchilubrificantes.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Setor Comercial / Automotivo",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Em Análise da Diretoria",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-11-25"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 11,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 16,
      "empresa": "Pippi Pneus",
      "contato_principal": "Stephani Simon",
      "cargo": "Marketing e Eventos",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 55 9xxxx-xxxx",
      "email": "marketing@pippipneus.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": 100,
      "localizacao_estande": "Rua Principal de Peças e Pneus",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Proposta Enviada",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 70,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-11-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 3,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 5,
      "empresa": "Bouwman",
      "contato_principal": "Luis Elicker",
      "cargo": "Gestão de Marketing / Feiras",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 42 9xxxx-xxxx",
      "email": "luis@bouwman.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Setor de Máquinas e Forrageiras",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Desqualificada",
      "temperatura": "Frio",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": null
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 5,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 7,
      "empresa": "ATM Energia",
      "contato_principal": "Felipe Carreira",
      "cargo": "Marketing",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 45 9xxxx-xxxx",
      "email": "felipe@atmenergia.com.br"
    },
    "estande": {
      "tipo_estande": "Misto (Marcenaria + Estrutura Metálica)",
      "metragem_m2": null,
      "localizacao_estande": "Pavilhão de Energia Solar e Sustentabilidade",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-10"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 91,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 35,
      "empresa": "IMEVE",
      "contato_principal": "Thais",
      "cargo": "Marketing e Eventos",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 16 9xxxx-xxxx",
      "email": "thais@imeve.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Setor Veterinário e Nutrição Animal",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Briefing em Concepção",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-15"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 19,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 19,
      "empresa": "The Group Comunicação (Conta BASF)",
      "contato_principal": "Rodrigo Barreto",
      "cargo": "Produção Executiva / Atendimento Live Marketing",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 11 9xxxx-xxxx",
      "email": "rodrigo.barreto@thegroup.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Área de Defensivos e Biotecnologia",
      "status_projeto": "Em Ajuste de Escopo"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-15"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 98,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 21,
      "empresa": "C&L Eventos (Agência Syngenta, Ourofino, NK, Nidera)",
      "contato_principal": "Pedro Cezar",
      "cargo": "Diretor de Operações e Feiras",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 19 9xxxx-xxxx",
      "email": "pedro@cleventos.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Polo de Sementes e Proteção de Cultivos",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-20"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 110,
    "codigo_evento": 34,
    "nome_evento": "EXPOMAFE 2027",
    "cliente": {
      "lead_id": 101,
      "empresa": "Brasfixo",
      "contato_principal": "Diretoria Comercial / Marketing",
      "cargo": "Diretoria",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 19 3429-xxxx",
      "email": "comercial@brasfixo.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Estande I050",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-01-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 111,
    "codigo_evento": 34,
    "nome_evento": "EXPOMAFE 2027",
    "cliente": {
      "lead_id": 102,
      "empresa": "Balmer",
      "contato_principal": "Gestão de Marketing e Vendas",
      "cargo": "Gerência de Marketing",
      "canal_preferencial": "E-mail",
      "telefone": "+55 55 3331-xxxx",
      "email": "marketing@balmer.com.br"
    },
    "estande": {
      "tipo_estande": "Misto (Marcenaria + Estrutura Metálica)",
      "metragem_m2": null,
      "localizacao_estande": "Estande D208",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-01-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 112,
    "codigo_evento": 34,
    "nome_evento": "EXPOMAFE 2027",
    "cliente": {
      "lead_id": 103,
      "empresa": "Erzinger",
      "contato_principal": "Coordenação de Marketing",
      "cargo": "Marketing",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 47 2107-xxxx",
      "email": "marketing@erzinger.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Estande H018",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-01-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 113,
    "codigo_evento": 34,
    "nome_evento": "EXPOMAFE 2027",
    "cliente": {
      "lead_id": 104,
      "empresa": "Schulz S.A.",
      "contato_principal": "Gerência de Eventos Corporativos",
      "cargo": "Eventos e Trade Marketing",
      "canal_preferencial": "E-mail",
      "telefone": "+55 47 3451-xxxx",
      "email": "eventos@schulz.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Estande D110",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-01-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 120,
    "codigo_evento": 25,
    "nome_evento": "54º Encontro Nacional de Economia (ANPEC) & 48º EBE (SBE)",
    "cliente": {
      "lead_id": 105,
      "empresa": "SRCOM (Agência Fundação Itaú)",
      "contato_principal": "Diretoria de Produção e Operações",
      "cargo": "Produção Executiva",
      "canal_preferencial": "E-mail",
      "telefone": "+55 11 3094-xxxx",
      "email": "producao@srcom.com.br"
    },
    "estande": {
      "tipo_estande": "Cenografia de Palco / Plenária",
      "metragem_m2": null,
      "localizacao_estande": "Foyer Centro de Convenções - Recanto Cataratas",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-05"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 121,
    "codigo_evento": 25,
    "nome_evento": "54º Encontro Nacional de Economia (ANPEC) & 48º EBE (SBE)",
    "cliente": {
      "lead_id": 106,
      "empresa": "AKM Performma (Agência Bradesco)",
      "contato_principal": "Equipe de Operações e Cenografia",
      "cargo": "Operações",
      "canal_preferencial": "E-mail",
      "telefone": "+55 11 3897-xxxx",
      "email": "cenografia@akmperformma.com.br"
    },
    "estande": {
      "tipo_estande": "Modular Customizado",
      "metragem_m2": null,
      "localizacao_estande": "Área de Patrocinadores - Recanto Cataratas",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-05"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 122,
    "codigo_evento": 39,
    "nome_evento": "32ª ExpoCONAC 2027 (47º CONAC & 39º CONAEC)",
    "cliente": {
      "lead_id": 107,
      "empresa": "Docket",
      "contato_principal": "Docket Marketing",
      "cargo": "Marketing e Eventos",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 11 9xxxx-xxxx",
      "email": "marketing@docket.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": 16,
      "localizacao_estande": "Pavilhão de Exposições Recanto Cataratas",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Proposta Enviada",
      "temperatura": "Quente",
      "valor_proposta": 22400,
      "probabilidade_fechamento_pct": 75,
      "valor_ponderado": 16800,
      "data_previsao_fechamento": "2026-11-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 123,
    "codigo_evento": 40,
    "nome_evento": "iBusiness 2028 (Redetelesul)",
    "cliente": {
      "lead_id": 108,
      "empresa": "Camaleon Marketing / iBusiness",
      "contato_principal": "Jociandro Almeida",
      "cargo": "Diretor / Organizador de Eventos",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 46 9xxxx-xxxx",
      "email": "jociandro@camaleonmkt.com.br"
    },
    "estande": {
      "tipo_estande": "Cenografia Customizada / Estande Institucional",
      "metragem_m2": null,
      "localizacao_estande": "Pavilhão iBusiness - Foz do Iguaçu",
      "status_projeto": "Follow-up Agendado (Fevereiro)"
    },
    "comercial": {
      "estagio_proposta": "Prospecção / Follow-up Futuro",
      "temperatura": "Morno",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 40,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-02-28"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 124,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 109,
      "empresa": "STEMAC Grupos Geradores",
      "contato_principal": "Daiane Onorato da Silva",
      "cargo": "Marketing / Analista Comercial",
      "canal_preferencial": "E-mail",
      "telefone": "+55 51 2131-3800 R: 3868",
      "email": "daiane.silva@stemac.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": 180,
      "localizacao_estande": "Área Externa - Show Rural Coopavel",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Em Análise da Diretoria",
      "temperatura": "Quente",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 75,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-05"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 125,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 110,
      "empresa": "Case IH",
      "contato_principal": "Janaina",
      "cargo": "Marketing",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 45 9xxxx-xxxx",
      "email": "janaina.marketing@caseih.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Setor de Máquinas e Equipamentos - Show Rural Coopavel",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Briefing em Concepção",
      "temperatura": "Morno",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 35,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-12-20"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 126,
    "codigo_evento": 41,
    "nome_evento": "Mercopar 2027",
    "cliente": {
      "lead_id": 111,
      "empresa": "ACZ INOX",
      "contato_principal": "Bárbara",
      "cargo": "Diretoria",
      "canal_preferencial": "E-mail",
      "telefone": "+55 54 3xxxx-xxxx",
      "email": "barbara@aczinox.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Pavilhão Mercopar - Caxias do Sul/RS",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Morno",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 30,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-04-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 127,
    "codigo_evento": 41,
    "nome_evento": "Mercopar 2027",
    "cliente": {
      "lead_id": 112,
      "empresa": "Altus Sistemas de Automação",
      "contato_principal": "Carol",
      "cargo": "Marketing / Feiras e Eventos",
      "canal_preferencial": "E-mail",
      "telefone": "+55 51 3589-9500",
      "email": "marketing@altus.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Pavilhão Mercopar - Caxias do Sul/RS",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Morno",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 30,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-04-30"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 128,
    "codigo_evento": 42,
    "nome_evento": "Congresso Brasileiro de Dermatologia Veterinária - SBDV 2027",
    "cliente": {
      "lead_id": 41,
      "empresa": "Ourofino Saúde Animal",
      "contato_principal": "Mariana de Castro Amancio",
      "cargo": "Coordenação de Eventos / Feiras e Congressos",
      "canal_preferencial": "E-mail",
      "telefone": "+55 16 3518-2000",
      "email": "mariana.amancio@ourofino.com"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Pavilhão de Exposição SBDV - Foz do Iguaçu/PR",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Morno",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 30,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2027-02-28"
    },
    "responsavel": "Augusto E. da Silva"
  },
  {
    "id_proposta": 129,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 10,
      "empresa": "Procer",
      "contato_principal": "Gabrielle Cardoso",
      "cargo": "Gestão de Eventos / Marketing",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 48 9xxxx-xxxx",
      "email": "gabrielle@procer.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": null,
      "localizacao_estande": "Setor de Armazenagem e Pós-Colheita - Show Rural Coopavel",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Perdida / Concorrente",
      "temperatura": "Frio",
      "valor_proposta": 0,
      "probabilidade_fechamento_pct": 0,
      "valor_ponderado": 0,
      "data_previsao_fechamento": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva"
  }
];

// Dados base de interações (carregamento garantido mesmo via file:///)
const DEFAULT_INTERACOES = [
  {
    "id_interacao": 1,
    "lead_id": 1,
    "codigo_evento": null,
    "id_proposta": null,
    "empresa": "FACIAP",
    "contato": "Financeiro FACIAP / Bruna Eventos",
    "data_interacao": "2026-10-15",
    "canal": "Ligação Telefônica",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Envio de Portfólio",
    "resumo": "Status: Relacionamento 2027",
    "detalhes": "Ligação realizada com Bruna: contratação do congresso 2026 ocorre no início do ano; pediu apresentação institucional.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Confirmar envio da apresentação; retomar no início de jan/2027.",
      "data_prevista": "2027-01-05"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 2,
    "lead_id": 2,
    "codigo_evento": 11,
    "id_proposta": 1,
    "empresa": "Coopavel / Show Rural",
    "contato": "Zimara Show Rural",
    "data_interacao": "2026-10-09",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Follow-up devido",
    "detalhes": "Zimara informou em 09/10 para aguardar até a semana seguinte.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Revisar exatamente a pendência do credenciamento/termo antes de contatar.",
      "data_prevista": "2026-10-16"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 3,
    "lead_id": 3,
    "codigo_evento": null,
    "id_proposta": null,
    "empresa": "Incomagri",
    "contato": "Laura — Recepção Incomagri",
    "data_interacao": "2026-10-15",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Aguardando retorno",
    "detalhes": "Mensagem de follow-up enviada em 15/10 perguntando se avançaram na avaliação das cotações.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta; se não houver retorno, novo toque curto.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 4,
    "lead_id": 4,
    "codigo_evento": 11,
    "id_proposta": 2,
    "empresa": "ProSolus",
    "contato": "Rafaela Santos",
    "data_interacao": "2026-10-15",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Retomada Show Rural e inclusão na cotação",
    "detalhes": "Augusto enviou às 12:20: Bom dia, Rafaela! Tudo bem? Quando conversamos em agosto você comentou que ainda não tinham definido os eventos de 2027. Como o planejamento do Show Rural já está avançando e as montadoras já estão se preparando para fevereiro, queria saber se a ProSolus já definiu se participará desta edição. Se estiverem trabalhando o projeto do estande, gostaria de colocar a DCarvalho novamente na cotação deste ano.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 5,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2026-10-21",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Alinhamento Telefônico",
    "resumo": "Ligação com Luis e envio de Portifolio.pdf e AGRO.pdf no WhatsApp",
    "detalhes": "Ligação em 21/10: Luis atendeu e informou que a Bouwman está iniciando a concepção do estande do Show Rural 2027. Às 15:54-15:55, Augusto enviou no WhatsApp o Portifolio.pdf (15 pág) e o AGRO.pdf (28 pág) com os projetos executados no setor agro.",
    "anexos": [
      "Portifolio.pdf",
      "AGRO.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno. Se Luis não responder, retomar contato em 8 dias para acompanhar a evolução da ideia/projeto do Show Rural 2027 e verificar abertura para cotação/montagem.",
      "data_prevista": "2026-10-29"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 6,
    "lead_id": 6,
    "codigo_evento": 11,
    "id_proposta": 4,
    "empresa": "Bianchi Lubrificantes",
    "contato": "Kauany — Marketing",
    "data_interacao": "2026-10-19",
    "canal": "Ligação Telefônica",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Alinhamento Telefônico",
    "resumo": "Status: Tentativa de ligação — sem atendimento",
    "detalhes": "Ligação em 19/10: chamou até cair e Kauany não atendeu. Não houve conversa; oportunidade continua pendente.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Tentar nova ligação mais tarde, em outro horário. Se não atender novamente, não acumular mensagens no WhatsApp hoje; manter acompanhamento do projeto/orçamento com a diretoria.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 7,
    "lead_id": 7,
    "codigo_evento": 11,
    "id_proposta": 5,
    "empresa": "ATM Energia",
    "contato": "Felipe Carreira — Marketing",
    "data_interacao": "2026-10-19",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Aguardar",
    "detalhes": "Mensagem de follow-up enviada em 19/10 perguntando se a diretoria já definiu a participação da ATM no Show Rural 2027 e, caso confirmada, se a cotação do estande já foi aberta.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retomar Felipe a partir de 05/11/2026. Prioridade: confirmar participação da ATM no Show Rural 2027 e, se confirmada, verificar se já abriu o processo de projeto/cotação do estande.",
      "data_prevista": "2026-11-05"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 8,
    "lead_id": 8,
    "codigo_evento": 11,
    "id_proposta": 6,
    "empresa": "Vaccinar",
    "contato": "Rebeca Scotta",
    "data_interacao": "2026-10-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Aguardando confirmação de encaminhamento",
    "detalhes": "Mensagem enviada em 16/10 perguntando se ela conseguiu encaminhar a DCarvalho ao time de Suprimentos; caso não, solicitado o e-mail do setor para cadastro/apresentação.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta. Não perguntar novamente sobre participação em Show Rural/C.Vale enquanto ela não responder ou surgir confirmação pública concreta.",
      "data_prevista": "2026-10-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 9,
    "lead_id": 9,
    "codigo_evento": null,
    "id_proposta": null,
    "empresa": "Feira Construir Aí",
    "contato": "Fernando Costa",
    "data_interacao": "2026-07-30",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Futuro 2027",
    "detalhes": "Material enviado ao endereço indicado; follow-up sem retorno.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retomar em janela comercial de 2027, não é prioridade para fev/2027.",
      "data_prevista": "2027-01-15"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 10,
    "lead_id": 10,
    "codigo_evento": 11,
    "id_proposta": 129,
    "empresa": "Procer",
    "contato": "Gabrielle Cardoso",
    "data_interacao": "2026-09-09",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Follow-up comercial com Gabrielle da Procer sobre definição do calendário de eventos de 2027; cliente informou adiamento para outubro",
    "detalhes": "Augusto realizou follow-up em 09/09/2026 às 16:40/16:41 perguntando: \"Ja definiram os eventos que irão participar?\". Gabrielle respondeu às 16:48: \"Nãoo, planejamento atrasou. Ficou para outubro\". Augusto respondeu às 16:49: \"Tranquilo, vamos nos falando!\". Em novembro de 2026 o contato constava com status de férias no WhatsApp.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retomar contato com Gabrielle Cardoso para verificar a conclusão da definição dos eventos de 2027 (Show Rural Coopavel 2027).",
      "data_prevista": "2026-11-25"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 11,
    "lead_id": 11,
    "codigo_evento": 11,
    "id_proposta": 7,
    "empresa": "Granfinale Sistemas Agrícolas",
    "contato": "Gislana",
    "data_interacao": "2026-09-29",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Cobrança de briefing calendário 2027",
    "detalhes": "Augusto enviou às 17:11-17:13: Boa tarde, Gislana! Tudo tranquilo? Estou aguardando o seu briefing esta semana, para os eventos que a Granfinale irá participar no calendário 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "6ª ligação da fila: ligar por telefone. Houve várias tentativas sem resposta desde o último retorno; confirmar calendário 2027 e se já abriram briefing/cotações para Show Rural/Agrishow.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 12,
    "lead_id": 12,
    "codigo_evento": 33,
    "id_proposta": 8,
    "empresa": "Show Rural Digital / Coopavel",
    "contato": "Gustavo Teixeira",
    "data_interacao": "2026-10-09",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Decisão / Fechamento",
    "resumo": "Status: Encerrado — outra montadora",
    "detalhes": "Decisão do Show Rural Digital 2027 concluída: segundo Rodrigo Rottava, a diretoria fechou a montagem com outra montadora. Motivo informado: preço.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Não cobrar Gustavo nem Rodrigo sobre esta edição. Preservar relacionamento para futuras oportunidades e usar a perda por preço como inteligência comercial.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 13,
    "lead_id": 13,
    "codigo_evento": 33,
    "id_proposta": 9,
    "empresa": "Show Rural Digital / Coopavel",
    "contato": "Rodrigo Rottava",
    "data_interacao": "2026-10-15",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encerrado — outra montadora",
    "detalhes": "Rodrigo informou que a diretoria do Show Rural Digital 2027 fechou a montagem com outra montadora. Motivo informado por Augusto em 19/10/2026: preço.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Encerrar esta edição. Manter Rodrigo como relacionamento para futuras oportunidades e registrar preço como fator de perda para revisão de estratégia comercial.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 14,
    "lead_id": 14,
    "codigo_evento": null,
    "id_proposta": null,
    "empresa": "Laboratório Prado",
    "contato": "Daniele Vicari — Marketing",
    "data_interacao": "2026-09-23",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Relacionamento futuro",
    "detalhes": "Informou que atualmente trabalha com fornecedor existente e guardaria o contato.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Monitorar novos congressos/feiras; não pressionar agora.",
      "data_prevista": "2027-01-15"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 15,
    "lead_id": 15,
    "codigo_evento": 11,
    "id_proposta": 10,
    "empresa": "MAXLOADER",
    "contato": "Bruna (Marketing) / Tilara",
    "data_interacao": "2026-09-29",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Em análise",
    "detalhes": "Responderam que ainda estavam analisando o material.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Identificar evento/participação e fazer follow-up com contexto.",
      "data_prevista": "2026-10-17"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 16,
    "lead_id": 16,
    "codigo_evento": 11,
    "id_proposta": 11,
    "empresa": "Pippi Pneus",
    "contato": "Stephani Simon",
    "data_interacao": "2026-10-02",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Status: Oportunidade ativa — briefing recebido",
    "detalhes": "Conversa revisada: Stephani confirmou a participação da Pippi Pneus no Show Rural 2027, pediu cotação do estande, enviou briefing, referências visuais e arquivos de marca. Em 02/10 informou terreno 12x20 e área de montagem 10x10. Não há registro no WhatsApp exportado de envio de projeto/orçamento até 15/10.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Priorizar elaboração/checagem interna do projeto e orçamento. Não fazer follow-up genérico; contatar Stephani para entregar proposta ou sanar dúvida objetiva do briefing.",
      "data_prevista": "2026-10-16"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 17,
    "lead_id": 17,
    "codigo_evento": 10,
    "id_proposta": 77,
    "empresa": "Carbom Brasil",
    "contato": "Cenyra Amorim Souto Domingues",
    "data_interacao": "2026-10-19",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Alinhamento Telefônico",
    "resumo": "Status: Encerrado 2026 — apresentação enviada / relacionamento 2027",
    "detalhes": "Ligação em 19/10: Cenyra informou que o contrato do estande para o Dia de Campo C.Vale 2026 já está fechado e que a análise para esse tipo de evento acontece cedo, depois de junho. Após a ligação, Augusto enviou pelo WhatsApp a apresentação da DCarvalho e a mensagem de relacionamento para o próximo ciclo.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Não insistir no C.Vale 2026. Retomar preventivamente no fim de junho/início de julho de 2027, antes da janela de análise, aplicando a premissa comercial: primeiro entender objetivo/necessidade do espaço e só depois propor projeto.",
      "data_prevista": "2027-06-30"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 18,
    "lead_id": 18,
    "codigo_evento": 11,
    "id_proposta": 12,
    "empresa": "IHARA",
    "contato": "Ubirajara (Responsável Show Rural) / Rogério Cardoso",
    "data_interacao": "2026-10-16",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encaminhamento interno",
    "detalhes": "Rogério respondeu em 16/10 que vai verificar com a pessoa responsável por esse evento e que, se necessário, ela retornará diretamente ao Augusto.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar contato da pessoa responsável pelo Dia de Campo C.Vale. Não cobrar Rogério agora; se ninguém retornar até 20/10, fazer um toque curto.",
      "data_prevista": "2026-10-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 19,
    "lead_id": 19,
    "codigo_evento": 11,
    "id_proposta": 19,
    "empresa": "The Group / BASF",
    "contato": "Rodrigo Barreto",
    "data_interacao": "2026-10-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Retomada sobre C.Vale e Show Rural",
    "detalhes": "Augusto enviou às 14:48: Boa tarde, Rodrigo! Tudo bem? Retomando meu contato de algumas semanas atrás. Como a TG já atua nos projetos da BASF no Dia de Campo C.Vale, queria verificar se vocês já estão estruturando a operação da edição de dezembro em Palotina e como está a mobilização para o próximo Show Rural em Cascavel. A DCarvalho atende a região e pode apoiar a TG como parceira local de produção e montagem, caso estejam abrindo fornecedores para essas entregas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "4ª ligação da fila: ligar por telefone. Duas abordagens sem resposta; validar se a TG já está mobilizando C.Vale/BASF e Show Rural e se há espaço para fornecedor regional.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 20,
    "lead_id": 20,
    "codigo_evento": 10,
    "id_proposta": null,
    "empresa": "ARGEPASI",
    "contato": "Bárbara — Marketing",
    "data_interacao": "2026-10-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Aguardando retorno",
    "detalhes": "Mensagem enviada em 16/10 retomando o contato e perguntando se a ARGEPASI já definiu participação no Dia de Campo C.Vale 2026 e a montagem do estande.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno. Se não houver resposta, reavaliar follow-up com base na proximidade do evento e possível participação confirmada.",
      "data_prevista": "2026-10-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 21,
    "lead_id": 21,
    "codigo_evento": 11,
    "id_proposta": 98,
    "empresa": "C&L Eventos (Agência Syngenta, Ourofino, NK, Nidera)",
    "contato": "Pedro Cezar",
    "data_interacao": "2026-10-06",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Follow-up de análise dos projetos executados",
    "detalhes": "Augusto enviou às 10:11: Bom dia, Pedro! Tudo tranquilo!? Conseguiu analisar nossos projetos executados?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Pesquisar eventos ativos da agência e retomar com oportunidade específica.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 22,
    "lead_id": 22,
    "codigo_evento": null,
    "id_proposta": null,
    "empresa": "Missner",
    "contato": "Kauana Tironi",
    "data_interacao": "2026-10-19",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Alinhamento Telefônico",
    "resumo": "Status: Tentativa de ligação — aguardando retorno",
    "detalhes": "Em 19/10 Augusto tentou contato telefônico com Kauana, mas ela não atendeu. Em seguida enviou WhatsApp: “Boa tarde, Kauana! Tudo bem? Algum retorno?”. Projeto/orçamento seguem em avaliação interna pela gestora.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno ao WhatsApp até amanhã. Não enviar nova mensagem hoje. Se não houver retorno, fazer nova tentativa de ligação em horário diferente e buscar uma definição objetiva sobre aprovação, ajustes ou perda da oportunidade.",
      "data_prevista": "2026-10-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 23,
    "lead_id": 23,
    "codigo_evento": 7,
    "id_proposta": 79,
    "empresa": "Abrasel Oeste Paraná",
    "contato": "Márcio",
    "data_interacao": "2026-10-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Status: Reunião/orçamento a agendar",
    "detalhes": "Retorno por áudio em 16/10: Márcio informou que está no Mato Grosso, estará em Foz na terça-feira e que pretende sentar com a DCarvalho para fazer o orçamento da cenografia.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar. Se ele não confirmar antes, na segunda-feira à tarde combinar o horário da conversa de terça.",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 24,
    "lead_id": 24,
    "codigo_evento": 17,
    "id_proposta": 80,
    "empresa": "Extratos Alergênicos MQ",
    "contato": "Laboratório Extratos",
    "data_interacao": "2026-10-14",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Follow-up devido",
    "detalhes": "Primeiro WhatsApp enviado e lido; sem resposta registrada.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Enviar follow-up curto pedindo a pessoa responsável por eventos/estandes.",
      "data_prevista": "2026-10-15"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 25,
    "lead_id": 25,
    "codigo_evento": 17,
    "id_proposta": 81,
    "empresa": "Immuno Vita",
    "contato": "Jorge",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encerrado",
    "detalhes": "Informou que o estande do ASBAI 2026 já havia sido contratado com a montadora oficial.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Não insistir no ASBAI 2026; manter contato para futuros congressos.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 26,
    "lead_id": 26,
    "codigo_evento": 17,
    "id_proposta": 82,
    "empresa": "Diagnóstica Brasil",
    "contato": "Fábio Arcuri",
    "data_interacao": "2026-10-13",
    "canal": "E-mail",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Aguardando retorno",
    "detalhes": "E-mail enviado apresentando a DCarvalho para o ASBAI 2026.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno e fazer acompanhamento sem excesso.",
      "data_prevista": "2026-10-17"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 27,
    "lead_id": 27,
    "codigo_evento": 17,
    "id_proposta": 83,
    "empresa": "FDA Allergenic Group",
    "contato": "José Carlos Silva",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encerrado",
    "detalhes": "Respondeu que a contratação do estande já estava concluída.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Encerrar 2026 e manter relacionamento para próximos congressos.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 28,
    "lead_id": 28,
    "codigo_evento": 17,
    "id_proposta": 84,
    "empresa": "IPI / ASAC Brasil",
    "contato": "Patricia Frosini Cambraia",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encerrado",
    "detalhes": "Contato indicado por Isamara. Orçamento do ASBAI já havia sido finalizado com a montadora oficial.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Manter Patricia como contato para eventos futuros.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 29,
    "lead_id": 29,
    "codigo_evento": 17,
    "id_proposta": 85,
    "empresa": "Salute Vita",
    "contato": "Cintia Pedrussian",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encerrado",
    "detalhes": "Informou que o stand já estava fechado com outra empresa.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Não contornar a decisão; cultivar para eventos futuros.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 30,
    "lead_id": 30,
    "codigo_evento": 17,
    "id_proposta": 86,
    "empresa": "Supri",
    "contato": "Cris — Marketing",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Status: Encerrado",
    "detalhes": "Contato encaminhado pelo WhatsApp oficial; informou por áudio que projeto e montagem já estavam fechados.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Manter relacionamento para próximos eventos.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 31,
    "lead_id": 31,
    "codigo_evento": 17,
    "id_proposta": 87,
    "empresa": "Multicare Pharma",
    "contato": "Priscila Bivanco",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Relacionamento futuro",
    "detalhes": "Informou que a Multicare não participará do ASBAI 2026 e encaminhou o e-mail aos gerentes de marketing e produto para futuras cotações.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Acompanhar oportunidades futuras; não cobrar participação no ASBAI.",
      "data_prevista": "2026-11-15"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 32,
    "lead_id": 32,
    "codigo_evento": 17,
    "id_proposta": 88,
    "empresa": "ALKO do Brasil",
    "contato": "Juliana",
    "data_interacao": "2026-10-13",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Encerrado",
    "detalhes": "Informou que fecharam com a montadora oficial poucos dias antes.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Manter contato para próximos congressos.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 33,
    "lead_id": 33,
    "codigo_evento": 17,
    "id_proposta": 89,
    "empresa": "Alergolatina / Grupo Alergofar",
    "contato": "Contato geral",
    "data_interacao": "2026-10-14",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: A confirmar",
    "detalhes": "Contato e canais localizados, mas participação no ASBAI 2026 não foi comprovada.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Pesquisar participação antes de abordar como expositor.",
      "data_prevista": "2026-10-16"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 34,
    "lead_id": 34,
    "codigo_evento": 32,
    "id_proposta": 90,
    "empresa": "Copacol",
    "contato": "Néia Pinheiro — Eventos",
    "data_interacao": "2026-10-30",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Status: Aguardar",
    "detalhes": "WhatsApp enviado em 30/10/2026 para Néia Pinheiro apresentando a DCarvalho e perguntando quem conduz o projeto e a contratação da montagem do espaço institucional da própria Copacol na Copacol Agro 2027. Até o momento, a mensagem ainda não foi entregue/recebida; pode ser apenas indisponibilidade de internet.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retomar na terça-feira, 03/11/2026. Verificar se a mensagem foi entregue e, se necessário, fazer novo toque curto. Objetivo: identificar quem define o briefing e quem conduz a contratação do estande institucional.",
      "data_prevista": "2026-11-03"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 35,
    "lead_id": 36,
    "codigo_evento": 11,
    "id_proposta": 16,
    "empresa": "De Heus",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 120 m² a 200 m². Segmento: Nutrição Animal.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear decisor de Trade Marketing / Eventos no LinkedIn/Apollo para verificar concorrência de montagem.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 36,
    "lead_id": 37,
    "codigo_evento": 11,
    "id_proposta": 17,
    "empresa": "Tortuga / dsm-firmenich",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Nutrição e Suplementação Animal.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Identificar coordenador de eventos da marca Tortuga para sondar processo de cotação do estande de pecuária.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 37,
    "lead_id": 38,
    "codigo_evento": 11,
    "id_proposta": 18,
    "empresa": "Cargill / Nutron",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 200 m². Segmento: Nutrição Animal e Premixes.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Buscar contato de compras/marketing corporativo de eventos da Nutron/Cargill.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 38,
    "lead_id": 39,
    "codigo_evento": 11,
    "id_proposta": 19,
    "empresa": "Trouw Nutrition",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 150 m². Segmento: Nutrição e Saúde Animal.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Levantar contato de eventos/marketing para apresentar portfólio fabril da DCarvalho.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 39,
    "lead_id": 40,
    "codigo_evento": 11,
    "id_proposta": 20,
    "empresa": "Matsuda",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 180 m². Segmento: Sementes para Pastagem e Nutrição Animal.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar regional de vendas/eventos do Paraná para sondar montagem do estande 2027.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 40,
    "lead_id": 41,
    "codigo_evento": 11,
    "id_proposta": 21,
    "empresa": "Ourofino Saúde Animal",
    "contato": "Mariana de Castro Amancio",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 120 m² a 200 m². Segmento: Medicamentos Veterinários e Biológicos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear analista/coordenador de eventos no LinkedIn para apresentar credenciamento DCarvalho.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 41,
    "lead_id": 42,
    "codigo_evento": 11,
    "id_proposta": 22,
    "empresa": "Premix",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 120 m². Segmento: Nutrição Animal de Precisão.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Identificar responsável comercial/eventos regional PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 42,
    "lead_id": 43,
    "codigo_evento": 11,
    "id_proposta": 23,
    "empresa": "Vetanco",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 120 m². Segmento: Saúde Animal e Aditivos Biológicos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear decisor de Trade Marketing na matriz brasileira (Chapecó/SC) com atuação no PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 43,
    "lead_id": 44,
    "codigo_evento": 11,
    "id_proposta": 24,
    "empresa": "Biocamp",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 50 m² a 80 m². Segmento: Probióticos e Vacinas Avícolas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Sondar participação no pavilhão de pecuária ou área comercial.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 44,
    "lead_id": 45,
    "codigo_evento": 11,
    "id_proposta": 25,
    "empresa": "Phibro Animal Health",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 120 m². Segmento: Saúde e Nutrição Animal.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Localizar equipe de marketing da Phibro Brasil para apresentação de proposta regional.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 45,
    "lead_id": 46,
    "codigo_evento": 11,
    "id_proposta": 26,
    "empresa": "Bransales Pneus",
    "contato": "Gabriela (Marketing) / João Paulo Gonsales (VP)",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 150 m². Segmento: Distribuição de Pneus de Carga e Agrícola.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar diretoria comercial em Cascavel/PR para oferecer projeto cenográfico completo.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 46,
    "lead_id": 47,
    "codigo_evento": 11,
    "id_proposta": 27,
    "empresa": "Titan Pneus / Goodyear Farm",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Fabricação de Pneus Agrícolas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear agência ou coordenador de feiras da Titan América Latina.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 47,
    "lead_id": 48,
    "codigo_evento": 11,
    "id_proposta": 28,
    "empresa": "Pirelli Agro / Prometeon",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Pneus Agrícolas e Transporte Pesado.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear área de feiras e trade da Prometeon Tyre Group.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 48,
    "lead_id": 49,
    "codigo_evento": 11,
    "id_proposta": 29,
    "empresa": "BKT Pneus",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 180 m². Segmento: Pneus Off-Highway e Máquinas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Identificar importador e gerente de marketing BKT Brasil.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 49,
    "lead_id": 50,
    "codigo_evento": 11,
    "id_proposta": 30,
    "empresa": "Trelleborg / Yokohama",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 150 m². Segmento: Pneus Agrícolas Especiais e Florestais.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar departamento de marketing da Trelleborg Wheel Systems.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 50,
    "lead_id": 51,
    "codigo_evento": 11,
    "id_proposta": 31,
    "empresa": "Ipiranga / Rodoil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 120 m² a 200 m². Segmento: Distribuição de Combustíveis e Lubrificantes.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear área de eventos do canal B2B/Agro da distribuidora.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 51,
    "lead_id": 52,
    "codigo_evento": 11,
    "id_proposta": 32,
    "empresa": "CASP",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 300 m². Segmento: Silos, Secadores e Equipamentos Avícolas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear gerência de marketing na matriz de Amparo/SP e filial PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 52,
    "lead_id": 53,
    "codigo_evento": 11,
    "id_proposta": 33,
    "empresa": "Kepler Weber",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 350 m². Segmento: Silos e Engenharia Pós-Colheita.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Sondar agência de montagem ou gerência de eventos da Kepler Weber.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 53,
    "lead_id": 54,
    "codigo_evento": 11,
    "id_proposta": 34,
    "empresa": "GSI Brasil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 300 m². Segmento: Armazenagem, Secagem e Confinamento (AGCO).",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Localizar setor de eventos da AGCO Grãos & Proteína em Marau/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 54,
    "lead_id": 55,
    "codigo_evento": 11,
    "id_proposta": 35,
    "empresa": "Agromarau / Cumberland",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 120 m² a 200 m². Segmento: Equipamentos para Avicultura e Suinocultura.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar coordenação de feiras em Marau/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 55,
    "lead_id": 56,
    "codigo_evento": 11,
    "id_proposta": 36,
    "empresa": "Pagé Silos",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 150 m². Segmento: Equipamentos para Armazenagem e Transporte de Grãos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar comercial de feiras em Araranguá/SC.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 56,
    "lead_id": 57,
    "codigo_evento": 11,
    "id_proposta": 37,
    "empresa": "Cool seed",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 60 m² a 100 m². Segmento: Resfriamento Artificial e Conservação de Grãos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Buscar decisor comercial na fábrica em Curitiba/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 57,
    "lead_id": 58,
    "codigo_evento": 11,
    "id_proposta": 38,
    "empresa": "Jan Implementos",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 300 m² a 600 m². Segmento: Implementos Agrícolas, Distribuidores e Carretas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear coordenação de marketing em Não-Me-Toque/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 58,
    "lead_id": 59,
    "codigo_evento": 11,
    "id_proposta": 39,
    "empresa": "Baldan",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 400 m² a 800 m². Segmento: Semeadoras, Arados e Grades.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear área de marketing de feiras em Matão/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 59,
    "lead_id": 60,
    "codigo_evento": 11,
    "id_proposta": 40,
    "empresa": "GTS do Brasil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 250 m² a 500 m². Segmento: Plataformas de Milho e Carretas Graneleiras.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing em Lages/SC.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 60,
    "lead_id": 61,
    "codigo_evento": 11,
    "id_proposta": 41,
    "empresa": "Indutar Tecno Metal",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 400 m². Segmento: Carretas Graneleiras, Rolos-Faca e Drenagem.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing da Indutar em Ibirubá/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 61,
    "lead_id": 62,
    "codigo_evento": 11,
    "id_proposta": 42,
    "empresa": "KF Implementos",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 300 m². Segmento: Semeadoras e Plantadeiras de Precisão.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar gerência de vendas e feiras em Cândido Godói/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 62,
    "lead_id": 63,
    "codigo_evento": 11,
    "id_proposta": 43,
    "empresa": "Jumil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 400 m². Segmento: Plantadeiras e Distribuidores de Adubo.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear marketing da Jumil em Batatais/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 63,
    "lead_id": 64,
    "codigo_evento": 11,
    "id_proposta": 44,
    "empresa": "Tatu Marchesan",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 300 m² a 600 m². Segmento: Implementos e Peças Agrícolas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar departamento de eventos e feiras da Marchesan em Matão/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 64,
    "lead_id": 65,
    "codigo_evento": 11,
    "id_proposta": 45,
    "empresa": "LS Tractor",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 300 m² a 600 m². Segmento: Tratores Agrícolas de Média Potência.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear setor de feiras e marketing da LS Mtron em Garuva/SC.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 65,
    "lead_id": 66,
    "codigo_evento": 11,
    "id_proposta": 46,
    "empresa": "Agrale",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 350 m². Segmento: Tratores, Chasis e Utilitários.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar setor de marketing em Caxias do Sul/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 66,
    "lead_id": 67,
    "codigo_evento": 11,
    "id_proposta": 47,
    "empresa": "São José Industrial",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Distribuidores de Adubo, Carretas e Tanques.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing da São José em São José do Inhacorá/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 67,
    "lead_id": 68,
    "codigo_evento": 11,
    "id_proposta": 48,
    "empresa": "Biotrop",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Bioinsumos e Defensivos Biológicos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear coordenação de feiras da Biotrop no LinkedIn.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 68,
    "lead_id": 69,
    "codigo_evento": 11,
    "id_proposta": 49,
    "empresa": "Timac Agro",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Fertilizantes Especiais e Bioestimulantes.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear coordenação de eventos na sede da Timac em Porto Alegre/RS.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 69,
    "lead_id": 70,
    "codigo_evento": 11,
    "id_proposta": 50,
    "empresa": "Yara Brasil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Nutrição de Plantas e Fertilizantes.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar equipe de marketing da regional Sul da Yara.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 70,
    "lead_id": 71,
    "codigo_evento": 11,
    "id_proposta": 51,
    "empresa": "Mosaic Fertilizantes",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Fertilizantes e Nutrição de Solo.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear equipe corporativa de feiras da Mosaic no Brasil.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 71,
    "lead_id": 72,
    "codigo_evento": 11,
    "id_proposta": 52,
    "empresa": "Adama Brasil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 300 m². Segmento: Defensivos Químicos e Soluções Digitais.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar gerência de comunicação/feiras em Londrina/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 72,
    "lead_id": 73,
    "codigo_evento": 11,
    "id_proposta": 53,
    "empresa": "Microgeo",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 120 m². Segmento: Biotecnologia Agrícola e Biotransformação.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Localizar setor de marketing da Microgeo em Limeira/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 73,
    "lead_id": 74,
    "codigo_evento": 11,
    "id_proposta": 54,
    "empresa": "Vittia",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 180 m². Segmento: Inoculantes, Adjuvantes e Fertilizantes Foliares.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear equipe de Trade Marketing da Vittia em São Joaquim da Barra/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 74,
    "lead_id": 75,
    "codigo_evento": 11,
    "id_proposta": 55,
    "empresa": "UPL Brasil",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 350 m². Segmento: Proteção de Cultivos e Bioestimulantes.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear agência de feiras e equipe de marketing da UPL em Campinas/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 75,
    "lead_id": 76,
    "codigo_evento": 11,
    "id_proposta": 56,
    "empresa": "FMC Agricultural Solutions",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 300 m². Segmento: Químicos e Biológicos para Proteção de Cultivos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Identificar coordenador de eventos da FMC em Campinas/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 76,
    "lead_id": 77,
    "codigo_evento": 11,
    "id_proposta": 57,
    "empresa": "Nórdica Veículos (Volvo)",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 250 m² a 400 m². Segmento: Concessionária de Caminhões Pesados e Semipesados.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar diretoria de marketing da Nórdica em Curitiba/Cascavel.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 77,
    "lead_id": 78,
    "codigo_evento": 11,
    "id_proposta": 58,
    "empresa": "Cotrasa (Scania)",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 250 m² a 400 m². Segmento: Concessionária de Caminhões Pesados Scania.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing da Cotrasa em Cascavel/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 78,
    "lead_id": 79,
    "codigo_evento": 11,
    "id_proposta": 59,
    "empresa": "Grupo Barigüi",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 300 m² a 500 m². Segmento: Concessionária Multimarcas (Picapes, Utilitários e Automóveis).",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear área de eventos do Grupo Barigüi.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 79,
    "lead_id": 80,
    "codigo_evento": 11,
    "id_proposta": 60,
    "empresa": "Fipal Concessionárias",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 300 m² a 600 m². Segmento: Rede Fiat, Jeep e RAM no Paraná.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar diretoria da Fipal em Cascavel/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 80,
    "lead_id": 81,
    "codigo_evento": 11,
    "id_proposta": 61,
    "empresa": "Grupo Open (Hyundai)",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Utilitários Comerciais Leves e HR.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar gerência regional de vendas/eventos.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 81,
    "lead_id": 82,
    "codigo_evento": 11,
    "id_proposta": 62,
    "empresa": "Divesa (Mercedes-Benz)",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 200 m² a 350 m². Segmento: Concessionária de Caminhões Mercedes-Benz.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar setor de marketing da Divesa Caminhões.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 82,
    "lead_id": 83,
    "codigo_evento": 11,
    "id_proposta": 63,
    "empresa": "L8 Energy",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 180 m². Segmento: Sistemas Fotovoltaicos, Inversores e Armazenamento.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear marketing da L8 Energy em Curitiba/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 83,
    "lead_id": 84,
    "codigo_evento": 11,
    "id_proposta": 64,
    "empresa": "Bionova Energia Solar",
    "contato": "Thiago Tomazoli / José Berta",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 150 m². Segmento: Projetos de Energia Solar Rural e Industrial.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar diretoria da Bionova no Paraná.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 84,
    "lead_id": 85,
    "codigo_evento": 11,
    "id_proposta": 65,
    "empresa": "WEG Solar / Equipamentos",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Motores, Geradores e Energia Solar.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear equipe de feiras corporativas da WEG em Jaraguá do Sul/SC.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 85,
    "lead_id": 86,
    "codigo_evento": 11,
    "id_proposta": 66,
    "empresa": "Rotoplast Climatizadores",
    "contato": "Isabela",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 60 m² a 100 m². Segmento: Climatização Evaporativa Industrial e Aviários.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing da Rotoplast em Maravilha/SC.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 86,
    "lead_id": 87,
    "codigo_evento": 11,
    "id_proposta": 67,
    "empresa": "TOTVS Agro",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 60 m² a 100 m². Segmento: Sistemas de Gestão Rural (ERP) e Usinas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear gerência de eventos da TOTVS Agro em Ribeirão Preto/São Paulo.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 87,
    "lead_id": 88,
    "codigo_evento": 11,
    "id_proposta": 68,
    "empresa": "Siagri / Aliare",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 50 m² a 80 m². Segmento: Softwares para Revendas, Armazéns e Produtores.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing do ecossistema Aliare em Goiânia/GO.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 88,
    "lead_id": 89,
    "codigo_evento": 11,
    "id_proposta": 69,
    "empresa": "Solinftec",
    "contato": "Mariana Finta (Marketing) / Camila Pedroso (Eventos)",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 80 m² a 120 m². Segmento: Inteligência Artificial, Robótica e Telemetria.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar marketing da Solinftec em Araçatuba/SP.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 89,
    "lead_id": 90,
    "codigo_evento": 11,
    "id_proposta": 70,
    "empresa": "Sensix Agro",
    "contato": "Carlos Ribeiro (CEO) / Thomaz Lemos (COO)",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 30 m² a 50 m². Segmento: Sensoriamento Remoto e Mapas de Fertilidade.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar liderança comercial da Sensix.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 90,
    "lead_id": 91,
    "codigo_evento": 11,
    "id_proposta": 71,
    "empresa": "ArPAC Drones",
    "contato": "Eduardo Goerl (CEO)",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 40 m² a 60 m². Segmento: Serviços e Equipamentos de Drones Agrícolas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Localizar setor comercial/eventos da ArPAC.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 91,
    "lead_id": 92,
    "codigo_evento": 11,
    "id_proposta": 72,
    "empresa": "Cresol",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 150 m² a 250 m². Segmento: Cooperativa de Crédito Rural.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Mapear gerência de comunicação e eventos da Cresol Central em Francisco Beltrão/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 92,
    "lead_id": 93,
    "codigo_evento": 11,
    "id_proposta": 73,
    "empresa": "BRDE",
    "contato": null,
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e qualificado para o Show Rural 2027 (Meta 20 estandes).",
    "detalhes": "Porte previsto: 100 m² a 150 m². Segmento: Banco de Desenvolvimento da Região Sul.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Contatar setor de comunicação e eventos do BRDE em Curitiba/PR.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 93,
    "lead_id": 16,
    "codigo_evento": 11,
    "id_proposta": 11,
    "empresa": "Pippi Pneus",
    "contato": "Stephani Simon",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Alinhamento Interno",
    "resumo": "Projeto em desenvolvimento interno na DCarvalho.",
    "detalhes": "Augusto confirmou que a DCarvalho está desenvolvendo ativamente o projeto cenográfico para a Pippi Pneus (10x10m em terreno 12x20m).",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Finalizar projeto e orçamento para apresentação comercial.",
      "data_prevista": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 94,
    "lead_id": 35,
    "codigo_evento": 11,
    "id_proposta": 91,
    "empresa": "IMEVE",
    "contato": "Thais",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "IMEVE vai enviar o briefing na próxima semana.",
    "detalhes": "Augusto confirmou que a equipe da IMEVE transmitirá o briefing detalhado do estande do Show Rural 2027 na semana de 23/11/2026.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Receber briefing com a Thais e iniciar estudo de layout.",
      "data_prevista": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 95,
    "lead_id": 94,
    "codigo_evento": 11,
    "id_proposta": 74,
    "empresa": "MSD Saúde Animal",
    "contato": "Egle",
    "data_interacao": "2026-11-16",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "MSD com projeto em desenvolvimento na DCarvalho.",
    "detalhes": "Augusto informou que a DCarvalho está desenvolvendo o projeto cenográfico para a MSD Saúde Animal no Show Rural 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Concluir projeto e orçamento para entrega da proposta.",
      "data_prevista": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 96,
    "lead_id": 19,
    "codigo_evento": 11,
    "id_proposta": 19,
    "empresa": "The Group / BASF",
    "contato": "Rodrigo Barreto",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Abordagem Show Rural / Conta BASF com fábrica própria",
    "detalhes": "Augusto enviou em 16/11 às 16:29-16:30: Boa tarde. Rodrigo, tudo bem? Sei que a The Group toca as feiras da BASF aqui no Sul. Como temos fábrica própria de marcenaria aqui no Oeste do Paraná (Foz e Cascavel), atendemos agências de SP como braço de montagem local, o que elimina frete de carreta e deslocamento de equipe de fora. Vocês já bateram o martelo da montagem da BASF no Show Rural ou vale cotarmos o projeto executivo de vocês aqui na região?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta; se sem retorno até 20/11, ligar por telefone.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 97,
    "lead_id": 90,
    "codigo_evento": 11,
    "id_proposta": 70,
    "empresa": "Sensix Agro",
    "contato": "Carlos Ribeiro (CEO) / Thomaz Lemos (COO)",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Primeiro contato enviado via WhatsApp corporativo.",
    "detalhes": "Augusto enviou sequência institucional profissional às 16:40-16:47 apresentando a DCarvalho, fábrica regional e consultando sobre briefing para o Show Rural 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta no WhatsApp até 20/11.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 98,
    "lead_id": 91,
    "codigo_evento": 11,
    "id_proposta": 71,
    "empresa": "ArPAC Drones",
    "contato": "Eduardo Goerl (CEO)",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Números iniciais sem WhatsApp ativo",
    "detalhes": "Augusto testou os números (14) 99772-2942 e (51) 99925-3973 no WhatsApp Web e constatou que nenhum dos dois possui conta ativa.",
    "anexos": [],
    "proxima_acao_gerada": null,
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 99,
    "lead_id": 91,
    "codigo_evento": 11,
    "id_proposta": 71,
    "empresa": "ArPAC Drones",
    "contato": "Eduardo Goerl (CEO)",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Empresa encerrou atividades",
    "detalhes": "Abordagem enviada para +55 51 9725-3973. Eduardo Goerl respondeu às 17:34 confirmando que a ArPAC fechou as portas. Lead marcado como descartado.",
    "anexos": [],
    "proxima_acao_gerada": null,
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 100,
    "lead_id": 86,
    "codigo_evento": 11,
    "id_proposta": 66,
    "empresa": "Rotoplast Climatizadores",
    "contato": "Isabela",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Mapeamento de decisora de feiras",
    "detalhes": "Augusto contatou a recepção no WhatsApp (49 98875-1588). A recepcionista direcionou o assunto Show Rural para Isabela via feiras@rotoplast.com.br.",
    "anexos": [],
    "proxima_acao_gerada": null,
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 101,
    "lead_id": 86,
    "codigo_evento": 11,
    "id_proposta": 66,
    "empresa": "Rotoplast Climatizadores",
    "contato": "Isabela",
    "data_interacao": "2026-11-16",
    "canal": "E-mail",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Envio de Proposta Financeira",
    "resumo": "E-mail institucional com portfólio para Isabela",
    "detalhes": "E-mail enviado para feiras@rotoplast.com.br citando a indicação da recepção, fábrica própria em Foz, diminuição de custo, entrega em tempo hábil e oferta de criação de projeto + orçamento sem compromisso.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Follow-up de retorno",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 102,
    "lead_id": 7,
    "codigo_evento": 11,
    "id_proposta": 5,
    "empresa": "ATM Energia",
    "contato": "Felipe Carreira — Marketing",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Felipe (Marketing) informou que aguarda retorno da diretoria para avançar",
    "detalhes": "Augusto contatou Felipe via WhatsApp as 11:16 perguntando sobre os preparativos e propondo criar o projeto para o Show Rural 2027. Felipe respondeu as 17:48: Infelizmente ainda nao tenho nenhum retorno da diretoria por aqui... Estou dependendo deles pra seguir. Augusto respondeu ficando no aguardo e destacando a importancia de ter um briefing com antecedencia para criar o projeto em tempo habil. Felipe confirmou as 17:56: Claro, pode deixar.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Acompanhar retorno do briefing pela diretoria. Se nao houver envio espontaneo, realizar novo follow-up no inicio de dezembro.",
      "data_prevista": "2026-12-01"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 103,
    "lead_id": 46,
    "codigo_evento": 11,
    "id_proposta": 26,
    "empresa": "Bransales Pneus",
    "contato": "Gabriela (Marketing) / João Paulo Gonsales (VP)",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Atendente Leonardo confirmou João Paulo e passou telefone fixo",
    "detalhes": "Augusto contatou Leonardo no WhatsApp oficial (+55 49 8831-4096). Leonardo instruiu ligar no (49) 3319-0800 e pedir para falar direto com João Paulo.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Ligar para (49) 3319-0800 e falar com João Paulo Gonsales sobre Show Rural 2027",
      "data_prevista": "2026-11-17"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 104,
    "lead_id": 46,
    "codigo_evento": 11,
    "id_proposta": 26,
    "empresa": "Bransales Pneus",
    "contato": "Gabriela (Marketing) / João Paulo Gonsales (VP)",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Envio de Portfólio",
    "resumo": "Contato com Gabriela (Marketing) e envio de portfólios no WhatsApp",
    "detalhes": "Augusto iniciou contato às 10:37: \"Bom dia, Gabriela! Tudo bem? Me chamo Augusto, sou do time comercial da DCarvalho Eventos... A Bransales está criando e orçando projetos para o próximo Show Rural?\". Às 10:42 enviou Portifolio.pdf (15 pág) e às 10:44 AGRO.pdf (28 pág): \"Trabalhamos com projetos em marcenaria, tudo construído\". Sem resposta desde 17/11.",
    "anexos": [
      "Portifolio.pdf",
      "AGRO.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Realizar ligação telefônica para a Gabriela (Marketing) / João Paulo para cobrar retorno da apresentação do Show Rural 2027 enviada em 17/11.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 105,
    "lead_id": 95,
    "codigo_evento": 11,
    "id_proposta": 75,
    "empresa": "Next Implementos",
    "contato": "Equipe de Marketing",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Recebimento de Briefing",
    "resumo": "Next Implementos enviou briefing oficial do estande por e-mail",
    "detalhes": "Augusto recebeu o briefing com anexos enviado pela equipe de Marketing da Next Implementos para o Show Rural 2027. Oportunidade confirmada para a própria Next Implementos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Analisar dimensões do lote, necessidades construtivas e passar diretrizes para Cristiano Projetista.",
      "data_prevista": "2026-11-18"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 106,
    "lead_id": 84,
    "codigo_evento": 11,
    "id_proposta": 64,
    "empresa": "Bionova Energia Solar",
    "contato": "Thiago Tomazoli / José Berta",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Abordagem no WhatsApp da Bionova Cascavel solicitando contato do Diretor Thiago Tomazoli",
    "detalhes": "Augusto enviou mensagem no WhatsApp da unidade de Cascavel ((45) 98807-9553), atendido por Isabella/Carolina. Solicitou encaminhamento direto para Thiago Tomazoli ou responsável pelo estande do Show Rural 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta da triagem no WhatsApp ou envio de e-mail direto para thiago@bionovasolar.com.br",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 107,
    "lead_id": 90,
    "codigo_evento": 11,
    "id_proposta": 70,
    "empresa": "Sensix Agro",
    "contato": "Carlos Ribeiro (CEO) / Thomaz Lemos (COO)",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Carlos Ribeiro (CEO) informou que não participam de feiras",
    "detalhes": "Carlos Ribeiro respondeu no WhatsApp informando que não têm participado de feiras nos últimos anos e que estão mais focados no marketing digital. Augusto agradeceu o retorno com elegância e deixou porta aberta para quando voltarem a expor.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Lead encerrado para o Show Rural 2027. Manter no radar apenas para futuro.",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 108,
    "lead_id": 89,
    "codigo_evento": 11,
    "id_proposta": 69,
    "empresa": "Solinftec",
    "contato": "Mariana Finta (Marketing) / Camila Pedroso (Eventos)",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Camila Pedroso respondeu no WhatsApp e forneceu e-mail para envio de apresentação",
    "detalhes": "Após abordagem de Augusto apresentando a DCarvalho para o Show Rural 2027, Camila Pedroso respondeu às 15:34-15:35: \"Olá, boa tarde! Muito prazer. Por favor, você consegue me passar as informações via e-mail ai coloco você em contato com o time responsável: camilapedroso@outras.com.br\". Augusto confirmou às 15:35: \"Sim!\".",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Disparar e-mail formal com Portifolio.pdf e AGRO.pdf para camilapedroso@outras.com.br.",
      "data_prevista": "2026-11-17"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 109,
    "lead_id": 84,
    "codigo_evento": 11,
    "id_proposta": 64,
    "empresa": "Bionova Energia Solar",
    "contato": "Thiago Tomazoli / José Berta",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Isabella compartilhou contato direto do Diretor Thiago Tomazoli",
    "detalhes": "Isabella da Bionova Cascavel respondeu no WhatsApp compartilhando o cartão de contato do Diretor-Geral Thiago Tomazoli.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Abordar Thiago Tomazoli no WhatsApp/E-mail com a ponte da Isabella",
      "data_prevista": "2026-11-18"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 110,
    "lead_id": 89,
    "codigo_evento": 11,
    "id_proposta": 69,
    "empresa": "Solinftec",
    "contato": "Mariana Finta (Marketing) / Camila Pedroso (Eventos)",
    "data_interacao": "2026-11-17",
    "canal": "E-mail",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "E-mail com portfólios institucionais enviado para Camila Pedroso às 17:34",
    "detalhes": "Augusto enviou e-mail às 17:34 com o assunto \"Stand Solinftec / Show Rural 2027\" para camilapedroso@outras.com.br, com Portifolio.pdf (5 MB) e AGRO.pdf (9 MB) anexados, solicitando se possuem briefing definido para elaboração de projeto 3D e orçamento sem compromisso.",
    "anexos": [
      "Portifolio.pdf",
      "AGRO.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Acompanhar retorno por e-mail ou WhatsApp com a Camila até 20/11/2026.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 111,
    "lead_id": 84,
    "codigo_evento": 11,
    "id_proposta": 64,
    "empresa": "Bionova Energia Solar",
    "contato": "Thiago Tomazoli / José Berta",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Sequência comercial enviada diretamente para o WhatsApp de Thiago Tomazoli",
    "detalhes": "Augusto disparou a abordagem em micro-balões para o Diretor-Geral Thiago Tomazoli após ponte da Isabella de Cascavel. Destacou proximidade geográfica, fábrica própria, mobiliário próprio, alívio de dor de cabeça e oferta de projeto/orçamento sem compromisso a partir do briefing para o Show Rural 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta no WhatsApp por 3 dias úteis. Follow-up em 20/11/2026.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 112,
    "lead_id": 15,
    "codigo_evento": 11,
    "id_proposta": 10,
    "empresa": "MAXLOADER",
    "contato": "Bruna (Marketing) / Tilara",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Tilara informou ausência de Bruna e pediu retorno na semana de 23/11; envio do AGRO.pdf",
    "detalhes": "Augusto enviou bom dia às 09:52. Tilara respondeu às 09:53: \"Tilara: Bom dia! A Bruna não está disponível essa semana, por favor, entrar em contato na próxima semana.\". Augusto enviou AGRO.pdf (28 pág - 9 MB) às 09:55: \"Estes são algumas de nossas montagens com marcas Agro. Inclusive vocês estão entre elas!!!\".",
    "anexos": [
      "AGRO.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Retomar contato com Bruna no WhatsApp hoje (23/11/2026) para alinhamento e cotação do estande do Show Rural 2027.",
      "data_prevista": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 113,
    "lead_id": 94,
    "codigo_evento": 11,
    "id_proposta": 74,
    "empresa": "MSD Saúde Animal",
    "contato": "Egle",
    "data_interacao": "2026-11-17",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Follow-up sobre aprovação da proposta de R$ 78.000,00 do Show Rural",
    "detalhes": "Augusto enviou mensagem às 17:31: 'Boa tarde! Com relação ao Show Rural algum retorno?'. Mensagem recebida e lida por Egle no WhatsApp.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno da diretoria ou nova cobrança.",
      "data_prevista": "2026-11-18"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 114,
    "lead_id": 19,
    "codigo_evento": 11,
    "id_proposta": 19,
    "empresa": "The Group / BASF",
    "contato": "Rodrigo Barreto",
    "data_interacao": "2026-09-30",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Apresentação de apoio operacional e montagem local no Paraná",
    "detalhes": "Augusto enviou: ...montagem, produção e apoio operacional no Paraná e região Sul. Vocês costumam trabalhar com fornecedores locais nesses projetos? Se fizer sentido, posso te apresentar nossa estrutura e alguns trabalhos já realizados.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno para follow-up",
      "data_prevista": "2026-10-16"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 115,
    "lead_id": 19,
    "codigo_evento": 11,
    "id_proposta": 19,
    "empresa": "The Group / BASF",
    "contato": "Rodrigo Barreto",
    "data_interacao": "2026-10-21",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Toque rápido no WhatsApp perguntando se pode falar",
    "detalhes": "Augusto enviou mensagem às 15:03: Boa tarde, Rodrigo! Pode falar?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno ou tentar ligação",
      "data_prevista": "2026-10-29"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 116,
    "lead_id": 21,
    "codigo_evento": 10,
    "id_proposta": 99,
    "empresa": "C&L Eventos (Agência Syngenta, Ourofino, NK, Nidera)",
    "contato": "Pedro Cezar",
    "data_interacao": "2026-09-30",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Apresentação de parceria regional e envio do portfólio AGRO.pdf",
    "detalhes": "Augusto contatou Pedro Cezar apresentando a DCarvalho para Dia de Campo C.Vale e Show Rural, citando as contas da C&L (Syngenta, Golden Harvest, Nidera, NK, Ourofino). Pedro solicitou portfólio. Augusto enviou o AGRO.pdf (28 pág) no WhatsApp. Pedro confirmou recebimento: Opa deu certo ver sim.",
    "anexos": [
      "AGRO.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Aguardar análise do material para follow-up",
      "data_prevista": "2026-10-06"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 117,
    "lead_id": 21,
    "codigo_evento": 11,
    "id_proposta": 98,
    "empresa": "C&L Eventos (Agência Syngenta, Ourofino, NK, Nidera)",
    "contato": "Pedro Cezar",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Solicitação de inclusão da DCarvalho nos próximos orçamentos para feiras agro",
    "detalhes": "Augusto enviou mensagem às 11:30-11:31: Bom dia, Pedro! Tudo bem!? Com relação a cotações para novas contratações para feiras agro, chegou a analisar nosso material? Seria possível incluir a DCarvalho nos seus próximos orçamentos?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta no WhatsApp por 3 a 4 dias úteis. Follow-up em 20/11/2026.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 118,
    "lead_id": 4,
    "codigo_evento": 11,
    "id_proposta": 2,
    "empresa": "ProSolus",
    "contato": "Rafaela Santos",
    "data_interacao": "2026-09-22",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Pergunta sobre definição de eventos para 2027",
    "detalhes": "Augusto enviou mensagem às 08:52-08:53: Bom dia, Rafaela! Tudo bem!? A ProSolus definiu que eventos em 2027 irão ou não participar?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-09-25"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 119,
    "lead_id": 4,
    "codigo_evento": 11,
    "id_proposta": 2,
    "empresa": "ProSolus",
    "contato": "Rafaela Santos",
    "data_interacao": "2026-09-25",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Áudio explicativo enviado no WhatsApp (0:23)",
    "detalhes": "Augusto enviou mensagem de áudio de 23 segundos às 11:35 contextualizando a atuação da DCarvalho para feiras agro de 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta",
      "data_prevista": "2026-10-15"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 120,
    "lead_id": 4,
    "codigo_evento": 11,
    "id_proposta": 2,
    "empresa": "ProSolus",
    "contato": "Rafaela Santos",
    "data_interacao": "2026-11-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Pergunta sobre organização e convite para criar projeto",
    "detalhes": "Augusto enviou mensagem às 11:18: Bom dia, Rafaela! Tudo bem? Como esta a organização para o Show Rural? Vamos criar um projeto?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno até 20/11/2026. Se não responder, follow-up telefônico.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 121,
    "lead_id": 6,
    "codigo_evento": 11,
    "id_proposta": 4,
    "empresa": "Bianchi Lubrificantes",
    "contato": "Kauany — Marketing",
    "data_interacao": "2026-09-29",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Checagem de avaliação do projeto e orçamento",
    "detalhes": "Augusto enviou mensagem às 17:03-17:04: Boa tarde, Kauany! Tudo bem? Conseguiram avaliar o projeto e o orçamento?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta",
      "data_prevista": "2026-10-16"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 122,
    "lead_id": 6,
    "codigo_evento": 11,
    "id_proposta": 4,
    "empresa": "Bianchi Lubrificantes",
    "contato": "Kauany — Marketing",
    "data_interacao": "2026-10-16",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Retomada de orçamento e disponibilidade para ajustes",
    "detalhes": "Augusto enviou às 09:41: Bom dia, Kauany! Tudo bem? Estou retomando o orçamento que te enviei para o Show Rural 2027. Você comentou que encaminharia o material para a diretoria e queria saber se já houve alguma definição ou se o projeto ainda está em análise. Caso precisem de algum ajuste no projeto ou no escopo para essa avaliação, fico à disposição.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-10-19"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 123,
    "lead_id": 6,
    "codigo_evento": 11,
    "id_proposta": 4,
    "empresa": "Bianchi Lubrificantes",
    "contato": "Kauany — Marketing",
    "data_interacao": "2026-10-28",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Decisão / Fechamento",
    "resumo": "Kauany informou que o projeto está em análise da diretoria",
    "detalhes": "Kauany respondeu às 09:11: bom dia, eles estão em analise....se o seu projeto for o escolhido, entraremos em contato...mas até o momento não tem definição. obrigada. Projeto e orçamento da DCarvalho estão na mesa da diretoria concorrendo.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar decisão e retomar preventivamente no final de novembro caso não haja retorno espontâneo.",
      "data_prevista": "2026-11-25"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 124,
    "lead_id": 11,
    "codigo_evento": 27,
    "id_proposta": 93,
    "empresa": "Granfinale Sistemas Agrícolas",
    "contato": "Gislana",
    "data_interacao": "2026-07-28",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Envio de Portfólio",
    "resumo": "Gislana pediu portfólio e confirmou calendário oficial de feiras",
    "detalhes": "Augusto contatou Gislana (Marketing). Gislana respondeu: Por enquanto ainda não cotamos! Vc tem portfólio? Augusto enviou portfólio. Gislana listou os eventos que sempre participam: Show Rural, Agrishow, Expocafé, Fenicafé e Agroleite.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Acompanhar envio de briefing para 2027",
      "data_prevista": "2026-07-30"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 125,
    "lead_id": 11,
    "codigo_evento": 11,
    "id_proposta": 7,
    "empresa": "Granfinale Sistemas Agrícolas",
    "contato": "Gislana",
    "data_interacao": "2026-07-30",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Toque de acompanhamento",
    "detalhes": "Augusto enviou mensagem às 14:36: Boa tarde, Gislana, tudo bem?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-08-27"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 126,
    "lead_id": 11,
    "codigo_evento": 11,
    "id_proposta": 7,
    "empresa": "Granfinale Sistemas Agrícolas",
    "contato": "Gislana",
    "data_interacao": "2026-08-27",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Áudio de acompanhamento (0:08)",
    "detalhes": "Augusto enviou mensagem de áudio de 8 segundos às 08:59.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar resposta",
      "data_prevista": "2026-09-22"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 127,
    "lead_id": 11,
    "codigo_evento": 27,
    "id_proposta": 93,
    "empresa": "Granfinale Sistemas Agrícolas",
    "contato": "Gislana",
    "data_interacao": "2026-09-22",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Checagem de análise de projetos e orçamentos",
    "detalhes": "Augusto enviou mensagem às 08:51-08:52: Bom dia! Estão analisando projetos e orçamentos para o Show Rural e Agrishow?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-09-29"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 128,
    "lead_id": 11,
    "codigo_evento": 11,
    "id_proposta": 7,
    "empresa": "Granfinale Sistemas Agrícolas",
    "contato": "Gislana",
    "data_interacao": "2026-10-26",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Pergunta sobre início do planejamento do Show Rural",
    "detalhes": "Augusto enviou às 10:12: Bom dia, Gislana! Tudo bem? A Granfinale começou a planejar o Show Rural?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Realizar ligação telefônica ou nova abordagem direcionada no final de novembro.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 129,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2025-11-03",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Apresentação institucional para maratona de eventos agro",
    "detalhes": "Augusto contatou Luis Elicker apresentando a DCarvalho para o Show Rural e oferecendo pacote para o calendário agro.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-07-27"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 130,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2026-07-30",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Luis respondeu e Augusto perguntou sobre análise de projetos 2027",
    "detalhes": "Após tentativas em 27 e 28/07, Luis respondeu às 14:27: Boa Tarde, tudo bem!. Augusto perguntou às 14:28: Para os eventos de 2027, estão analisando projetos?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-09-09"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 131,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2026-09-09",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Pergunta sobre definição de eventos 2027",
    "detalhes": "Augusto enviou às 16:50: Boa tarde, Luis! Tudo bem? A Bouwman tem os eventos de 2027 que irão participar definidos?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-09-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 132,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2026-09-23",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Pergunta sobre briefing do Show Rural para criação de projeto",
    "detalhes": "Augusto enviou às 13:35-13:36: Tudo bem, Luis!? Como esta? Tem algum briefing para o Show Rural para criarmos um projeto para sua análise?",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno",
      "data_prevista": "2026-10-15"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 133,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2026-10-15",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Retomada sobre fornecedores de montagem e inclusão na cotação",
    "detalhes": "Augusto enviou às 12:29: Bom dia, Luis! Tudo bem? Estou retomando nosso contato sobre o Show Rural. Sei que a Bouwman tem uma participação forte no evento e queria verificar se o projeto do estande para 2027 já está definido ou se ainda estão avaliando fornecedores para a montagem. Caso ainda esteja em aberto, gostaria de colocar a DCarvalho na cotação e desenvolver uma proposta para vocês.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Alinhar por telefone e enviar portfólio",
      "data_prevista": "2026-10-21"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 134,
    "lead_id": 101,
    "codigo_evento": 34,
    "id_proposta": 110,
    "empresa": "Brasfixo",
    "contato": "Equipe Comercial / Feiras",
    "data_interacao": "2026-11-23",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e confirmado para EXPOMAFE 2027 (Estande I050)",
    "detalhes": "Fabricante de elementos de fixação industrial e dispositivos mecânicos de Joinville/SC com estande próprio de 50m² confirmado na EXPOMAFE 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Executar triagem comercial com decisor de marketing/eventos para oferta de projeto de cenografia.",
      "data_prevista": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 135,
    "lead_id": 102,
    "codigo_evento": 34,
    "id_proposta": 111,
    "empresa": "Balmer",
    "contato": "Departamento Comercial / Marketing",
    "data_interacao": "2026-11-23",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e confirmado para EXPOMAFE 2027 (Estande D208)",
    "detalhes": "Fabricante de fontes de solda e corte plasma de Porto Alegre/RS com estande de 60m² na EXPOMAFE 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Executar triagem comercial com decisor de marketing/eventos para oferta de projeto de cenografia.",
      "data_prevista": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 136,
    "lead_id": 103,
    "codigo_evento": 34,
    "id_proposta": 112,
    "empresa": "Erzinger",
    "contato": "Comercial / Marketing",
    "data_interacao": "2026-11-23",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e confirmado para EXPOMAFE 2027 (Estande H018)",
    "detalhes": "Fabricante de linhas completas de pintura industrial de Joinville/SC com estande de 55m² na EXPOMAFE 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Executar triagem comercial com decisor de marketing/eventos para oferta de projeto de cenografia.",
      "data_prevista": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 137,
    "lead_id": 104,
    "codigo_evento": 34,
    "id_proposta": 113,
    "empresa": "Schulz S.A.",
    "contato": "Comunicação e Marketing",
    "data_interacao": "2026-11-23",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Expositor mapeado e confirmado para EXPOMAFE 2027 (Estande D110)",
    "detalhes": "Líder em compressores de ar e soluções industriais de Joinville/SC com estande de 80m² na EXPOMAFE 2027.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Executar triagem comercial com decisor de marketing/eventos para oferta de projeto de cenografia.",
      "data_prevista": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 138,
    "lead_id": 105,
    "codigo_evento": 25,
    "id_proposta": 120,
    "empresa": "SRCOM (Agência Fundação Itaú)",
    "contato": "Atendimento e Produção",
    "data_interacao": "2026-11-23",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Agência mapeada para ANPEC 2026 em Foz do Iguaçu (Conta Fundação Itaú)",
    "detalhes": "Agência de live marketing de SP/RJ responsável pela ativação institucional da Fundação Itaú no Recanto Cataratas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Abordar atendimento/produção da agência oferecendo a DCarvalho como braço fabril e operacional local em Foz.",
      "data_prevista": "2026-11-25"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 139,
    "lead_id": 106,
    "codigo_evento": 25,
    "id_proposta": 121,
    "empresa": "AKM Performma (Agência Bradesco)",
    "contato": "Atendimento e Produção",
    "data_interacao": "2026-11-23",
    "canal": "Sistema / Mapeamento Interno",
    "direcao": "Interna (Registro de Sistema)",
    "tipo_interacao": "Mapeamento / Cadastro em Funil",
    "resumo": "Agência mapeada para ANPEC 2026 em Foz do Iguaçu (Conta Bradesco)",
    "detalhes": "Agência de brand experience de SP responsável pelo estande/cenografia do Bradesco no Recanto Cataratas.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Abordar atendimento/produção da agência oferecendo a DCarvalho como braço fabril e operacional local em Foz.",
      "data_prevista": "2026-11-25"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 140,
    "lead_id": 94,
    "codigo_evento": 26,
    "id_proposta": 92,
    "empresa": "MSD Saúde Animal",
    "contato": "Egle",
    "data_interacao": "2026-11-18",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Apresentação de Projeto 3D",
    "resumo": "Apresentação das perspectivas 3D do estande de Rio Verde (Tecnoshow)",
    "detalhes": "Augusto enviou às 09:40 pacote com 5 fotos de render 3D em marcenaria com lounge, testeira verde MSD e ativação com vaca Allflex: 'Bom dia! Egle este seria o projeto para Rio Verde'.",
    "anexos": [
      "Render 3D Fachada MSD Rio Verde.jpg",
      "Render 3D Lounge Allflex.jpg"
    ],
    "proxima_acao_gerada": {
      "acao": "Aguardar avaliação do layout pela Egle.",
      "data_prevista": "2026-11-18"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 141,
    "lead_id": 94,
    "codigo_evento": 26,
    "id_proposta": 92,
    "empresa": "MSD Saúde Animal",
    "contato": "Egle",
    "data_interacao": "2026-11-18",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Negociação / Ajuste de Escopo",
    "resumo": "Feedback de Egle sobre Rio Verde: solicitou ajustes na fachada e salas",
    "detalhes": "Egle respondeu às 11:41: 'Bom dia. Não gostei da fachada, mas vou mandar como opção. Está muito aberto. Também o stand está muito igual. Dentro de cada sala tem uma imagem de produto pelo menos. Consegue mudar um pouco?'.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Alinhar com projetista os ajustes solicitados na fachada e imagens de produto nas salas.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 142,
    "lead_id": 94,
    "codigo_evento": 26,
    "id_proposta": 92,
    "empresa": "MSD Saúde Animal",
    "contato": "Egle",
    "data_interacao": "2026-11-18",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Áudio de alinhamento técnico (0:30) sobre as alterações do estande de Rio Verde",
    "detalhes": "Augusto enviou mensagem de áudio de 30 segundos às 11:43 detalhando como serão feitas as adaptações na fachada e nos fechamentos de sala.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Executar ajustes na modelagem 3D com o projetista.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 143,
    "lead_id": 94,
    "codigo_evento": 11,
    "id_proposta": 74,
    "empresa": "MSD Saúde Animal",
    "contato": "Egle",
    "data_interacao": "2026-11-18",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Retomada de status sobre a proposta do Show Rural",
    "detalhes": "Augusto enviou às 18:04 (entregue às 18:07): 'Boa tarde. E o Show Rural?'. Cobrança de retorno da diretoria da MSD.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar posicionamento final de aprovação da diretoria.",
      "data_prevista": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 144,
    "lead_id": 107,
    "codigo_evento": 39,
    "id_proposta": 122,
    "empresa": "Docket",
    "contato": "Docket Marketing",
    "data_interacao": "2026-11-20",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Recebimento de Briefing",
    "resumo": "Envio de checklist e manual de montagem da ExpoCONAC 2027",
    "detalhes": "Docket Marketing enviou no WhatsApp às 15:00 os arquivos CHECK LIST ExpoCONAC 2027.pdf (3 pág) e ManualRegulamentoMontagem ExpoCONAC 2027.pdf (14 pág).",
    "anexos": [
      "CHECK LIST ExpoCONAC 2027.pdf",
      "ManualRegulamentoMontagem ExpoCONAC 2027.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Avaliar regulamento técnico e mapear dimensões do estande.",
      "data_prevista": "2026-11-20"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 145,
    "lead_id": 107,
    "codigo_evento": 39,
    "id_proposta": 122,
    "empresa": "Docket",
    "contato": "Docket Marketing",
    "data_interacao": "2026-11-20",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Alinhamento de dimensões do estande (16m² vs 20m²)",
    "detalhes": "Augusto alinhou às 15:11: \"Ok então o de 20m terá vizinhos em todos os lados menos na entrada, certo? E as dimensões deles, você teria?...\". Docket respondeu às 15:13 que no ano anterior fizeram 16m² (4x4m). Augusto definiu projeção de 4x4m.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Encaminhar para Cristiano Projetista elaborar a modelagem 3D.",
      "data_prevista": "2026-11-23"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 146,
    "lead_id": 107,
    "codigo_evento": 39,
    "id_proposta": 122,
    "empresa": "Docket",
    "contato": "Docket Marketing",
    "data_interacao": "2026-11-23",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Apresentação de Projeto 3D",
    "resumo": "Entrega das perspectivas 3D do estande Docket para a ExpoCONAC 2027",
    "detalhes": "Augusto enviou às 13:31 4 fotos de render 3D em marcenaria azul e branca com balcão, testeira e TV: \"Poderia analisar essas imagens, se gostaria de alterar alguma coisa. Se não quiser nenhuma alteração vou providenciar o orçamento\". Docket respondeu às 13:37: \"Boa tarde. Já irei analisar\".",
    "anexos": [
      "Render 3D Estande Docket ExpoCONAC.jpg"
    ],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno de validação da Docket e calcular planilha orçamentária.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 147,
    "lead_id": 107,
    "codigo_evento": 39,
    "id_proposta": 122,
    "empresa": "Docket",
    "contato": "Docket Marketing",
    "data_interacao": "2026-11-23",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Negociação / Ajuste de Escopo",
    "resumo": "Envio de planta de referência do Conac anterior com pedido de adaptação do estande",
    "detalhes": "Docket Marketing enviou às 14:25 o arquivo Docket _ Conac planta (1).pdf (11 pág, 3 MB) com a mensagem: \"Augusto, você conseguiria deixar o máximo parecido com esse stand? Foi o que fizemos ano passado no Conac e funcionou bem.\".",
    "anexos": [
      "Docket _ Conac planta (1).pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Encaminhar planta/referência ao Cristiano Projetista para replicar o padrão do ano anterior e rodar orçamento executivo.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 148,
    "lead_id": 16,
    "codigo_evento": 11,
    "id_proposta": 11,
    "empresa": "Pippi Pneus",
    "contato": "Stephani Simon",
    "data_interacao": "2026-11-23",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Apresentação de Projeto 3D",
    "resumo": "Stephani cobrou urgência do projeto 3D para reunião de diretoria; Augusto alinhou entrega para 24/11",
    "detalhes": "Stephani Simon enviou às 09:29: \"você tem o nosso projeto? Eu vou apresentar pra minha diretoria\". Às 10:14 reforçou: \"É que amanhã vou apresentar pra minha diretoria e queria apresentar o teu\". Augusto respondeu às 10:51: \"Terei o projeto amanhã no final da tarde, e o orçamento na quarta pela manhã\". Stephani enviou figurinha de choro com \"bahhh\" e respondeu às 10:52: \"ok, obrigada\".",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Finalizar modelagem 3D com Cristiano Projetista até 24/11 no fim da tarde e planilha de custos na manhã de 25/11.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 149,
    "lead_id": 108,
    "codigo_evento": 40,
    "id_proposta": 123,
    "empresa": "Camaleon Marketing / iBusiness",
    "contato": "Jociandro Almeida",
    "data_interacao": "2026-11-23",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Programação de contato em fevereiro para o Ibusiness 2028",
    "detalhes": "Alinhamento com Jociandro Almeida (Camaleon Marketing / Pato Branco - jociandro@camaleonmkt.com.br). Augusto determinou agendamento de retorno comercial em fevereiro para estruturar a proposta de cenografia e montagem para o Ibusiness 2028.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Entrar em contato em fevereiro com Jociandro Almeida para o Ibusiness 2028.",
      "data_prevista": "2027-02-01"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 150,
    "lead_id": 109,
    "codigo_evento": 11,
    "id_proposta": 124,
    "empresa": "STEMAC Grupos Geradores",
    "contato": "Daiane Onorato da Silva / Helena / Jaqueline Rodrigues",
    "data_interacao": "2026-10-06",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Alinhamento com Jaqueline sobre solicitação de 180m² da Diane e necessidade de briefing das salas",
    "detalhes": "Augusto contatou Jaqueline Rodrigues às 10:14 questionando se Diane possui briefing para o estande de 180m² solicitado para o Show Rural 2027, destacando que em 2026 o estande da Stemac foi de 100m² (10x10m sem salas) e que provavelmente agora necessitarão de salas fechadas. Enviou prints do e-mail da Diane e do orçamento anterior de 2026. Jaqueline respondeu às 10:17: \"Vou repassar esta informação para a Diane, mas retorna via e-mail para ela e pede para ela te ligar, informa sua dificuldade de contato.\".",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retornar e-mail para Diane solicitando ligação telefônica para validar briefing e salas do estande de 180m².",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 151,
    "lead_id": 109,
    "codigo_evento": 11,
    "id_proposta": 124,
    "empresa": "STEMAC Grupos Geradores",
    "contato": "Daiane Onorato da Silva / Helena / Jaqueline Rodrigues",
    "data_interacao": "2026-11-16",
    "canal": "E-mail",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Envio de Proposta Financeira",
    "resumo": "Envio de proposta orçamentária e projeto 3D em layout PDF para Daiane (STEMAC) no Show Rural 2027",
    "detalhes": "Augusto enviou e-mail às 10:37 para daiane.silva@stemac.com.br e às 10:39 para marketing@stemac.com.br com o assunto \"Show Rural Coopavel 2027 - Orçamento DCarvalho\". Foram anexados os arquivos LAYOUT-STEMAC.pdf (4 MB) e ORÇAMENTO SHOW RURAL 2027 - STEMAC.pdf (584 KB), além do Portifolio.pdf (5 MB) enviado na cópia do marketing. No corpo do e-mail, destacou: \"Segue em anexo nosso orçamento e projeto para a Stemac no Show Rural 2027. Os CLIMATIZADORES DE AR INDUSTRIAL no projeto são meramente ilustrativos, não constando no orçamento. Aguardo retorno, Augusto E. da Silva - Gestor de Contas\".",
    "anexos": [
      "LAYOUT-STEMAC.pdf",
      "ORÇAMENTO SHOW RURAL 2027 - STEMAC.pdf",
      "Portifolio.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Acompanhar confirmação de leitura e retorno de Daiane sobre o orçamento de 180m².",
      "data_prevista": "2026-11-17"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 152,
    "lead_id": 109,
    "codigo_evento": 11,
    "id_proposta": 124,
    "empresa": "STEMAC Grupos Geradores",
    "contato": "Daiane Onorato da Silva / Helena / Jaqueline Rodrigues",
    "data_interacao": "2026-11-17",
    "canal": "E-mail",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Retorno de Daiane da STEMAC confirmando recebimento do orçamento e envio para análise interna da diretoria",
    "detalhes": "Confirmação de leitura recebida por e-mail em 17/11/2026 às 07:58 (lida por Daiane Onorato da Silva às 07:57:57). Às 09:45, Daiane respondeu formalmente ao e-mail: \"Bom dia, Augusto. Obrigada pelo envio do orçamento, vou enviar para análise e ti retorno. Atenciosamente, Daiane Onorato da Silva - Marketing / Analista Comercial, Fone: +55 (51) 2131-3800 R: 3868 - STEMAC Grupos Geradores\". Proposta em análise interna pela diretoria.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Follow-up comercial com Daiane para verificar o retorno da diretoria sobre o orçamento e projeto do Show Rural 2027.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 153,
    "lead_id": 110,
    "codigo_evento": 11,
    "id_proposta": 125,
    "empresa": "Case IH",
    "contato": "Janaina",
    "data_interacao": "2025-11-03",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Primeira abordagem comercial com Janaina para o Show Rural e maratona de eventos agro",
    "detalhes": "Augusto iniciou contato via WhatsApp em 03/11/2025 às 16:50/16:51: \"Janaina, meu nome é Augusto, sou de uma empresa que cria, fabrica e monta stands para eventos. Meu contato hoje é sobre o Show Rural, mas minha proposta é fazer um pacote para a maratona de eventos rural que teremos esse ano. Posso te enviar um portfólio nosso, para que conheça o nosso trabalho ?\". Augusto enviou novo \"Bom dia\" em 05/11/2025.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retomar contato para o ciclo de eventos e montagens de 2027.",
      "data_prevista": "2026-07-27"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 154,
    "lead_id": 110,
    "codigo_evento": 11,
    "id_proposta": 125,
    "empresa": "Case IH",
    "contato": "Janaina",
    "data_interacao": "2026-07-28",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Envio de Portfólio",
    "resumo": "Retomada de contato para o Show Rural 2027, apresentação institucional da DCarvalho e envio de portfólio para Janaina",
    "detalhes": "Em 27/07/2026 às 15:55, Augusto questionou se a Case IH está analisando e cotando projetos de montagem de estandes para 2027. Em 28/07/2026 às 09:33, Janaina respondeu: \"Bom dia tudo bem? Desculpe A sua empresa é de que?\". Às 09:34, Augusto respondeu: \"Me chamo Augusto, faço parte da equipe comercial da DCarvalho Eventos, uma empresa que cria, constrói e monta cenografias e stands para feiras, eventos e congressos.\", enviando o arquivo Portifolio.pdf (5 MB) e detalhando no WhatsApp a experiência da empresa em eventos (Show Rural atendendo MSD, ATM e IMEVE; Expodireto; Tecnoshow atendendo Maxloader e Bioma; Agrodinamica; Innovar; Expo-Hospital; Varejo Experience, entre outros).",
    "anexos": [
      "Portifolio.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Follow-up comercial para propor reunião de alinhamento do briefing.",
      "data_prevista": "2026-09-25"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 155,
    "lead_id": 110,
    "codigo_evento": 11,
    "id_proposta": 125,
    "empresa": "Case IH",
    "contato": "Janaina",
    "data_interacao": "2026-09-25",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Envio de mensagem de áudio (0:15) propondo reunião para alinhar o briefing da Case IH para 2027",
    "detalhes": "Após saudação em 30/07/2026 sem resposta, Augusto enviou uma mensagem de áudio de 0:15 em 25/09/2026 às 17:02 com a transcrição: \"Boa tarde Janaína, tudo bem? Podemos marcar uma hora pra semana que vem pra gente verificar o briefing da case? Que que tu acha? Me dá um retorno.\". Em 13/11/2026 o WhatsApp registrou alteração de código de segurança do contato. O cliente permaneceu sem dar retorno ao áudio.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Realizar ligação telefônica para Janaina (Marketing CASE IH) para retomar contato e solicitar o briefing para o Show Rural 2027.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 156,
    "lead_id": 111,
    "codigo_evento": 41,
    "id_proposta": 126,
    "empresa": "ACZ INOX",
    "contato": "Bárbara / Recepção ACZ",
    "data_interacao": "2026-08-25",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Triagem via WhatsApp com atendimento da ACZ INOX obtendo contato de e-mail da diretora Bárbara para a Mercopar 2027",
    "detalhes": "Augusto contatou a ACZ INOX via WhatsApp em 25/08/2026 às 15:16/15:17 apresentando a DCarvalho Eventos e solicitando o contato da pessoa ou setor responsável pela organização da empresa na Mercopar. Às 15:20/15:21 o atendimento respondeu: \"Boa tarde! Seria com nossa direção: barbara@aczinox.com.br\". Augusto questionou: \"Muito obrigado, só e-mail? Se eu ligar direto para a empresa, consigo falar com ela?\". O atendente respondeu de forma categórica: \"Sim!\", \"Contato com nossa diretoria somente por email!\". Augusto confirmou: \"ok\".",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Enviar e-mail formal de apresentação da DCarvalho e portfólio para barbara@aczinox.com.br referente à Mercopar 2027.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 157,
    "lead_id": 112,
    "codigo_evento": 41,
    "id_proposta": 127,
    "empresa": "Altus Sistemas de Automação",
    "contato": "Carol",
    "data_interacao": "2026-09-02",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Qualificação via WhatsApp com Carol da Altus (indicação de Nicolas) para a Mercopar 2027; solicitou portfólio por e-mail",
    "detalhes": "Augusto contatou Carol via WhatsApp em 02/09/2026 às 10:05 citando a indicação de Nicolas e apresentando a DCarvalho Eventos. Às 10:06, Carol forneceu o e-mail marketing@altus.com.br e pediu: \"por favor enviar portfólio por e-mail, havendo oportunidade lhe contato\". Augusto perguntou se ela é quem organiza a Altus em feiras e eventos, ao que Carol respondeu: \"sim, mas para este ano já está tudo 100% contratado, obrigada\". Augusto agradeceu com \"Obrigado!\" e Carol reagiu com joinha (👍). Foco comercial alinhado para o planejamento de feiras de 2027 (Mercopar 2027).",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Enviar portfólio institucional para marketing@altus.com.br referente ao calendário de feiras de 2027.",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 158,
    "lead_id": 41,
    "codigo_evento": 42,
    "id_proposta": 128,
    "empresa": "Ourofino Saúde Animal",
    "contato": "Mariana de Castro Amancio",
    "data_interacao": "2026-09-04",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Triagem via WhatsApp com SAC Ourofino obtendo contato de Mariana de Castro Amancio para o Congresso SBDV Foz do Iguaçu",
    "detalhes": "Augusto contatou o WhatsApp da Ourofino Saúde Animal em 04/09/2026 às 10:32/10:35 apresentando a DCarvalho Eventos e solicitando o contato da pessoa ou setor responsável pela organização da empresa no Congresso de Dermatologia Veterinária da SBDV em Foz do Iguaçu. A atendente Ana respondeu às 10:40/10:41 fornecendo o e-mail: \"Mariana de Castro Amancio\" <mariana.amancio@ourofino.com>. Às 12:50 o atendimento foi finalizado automaticamente.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Enviar e-mail formal de apresentação da DCarvalho com portfólio anexo para Mariana de Castro Amancio (mariana.amancio@ourofino.com).",
      "data_prevista": "2026-11-24"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 159,
    "lead_id": 10,
    "codigo_evento": 11,
    "id_proposta": 129,
    "empresa": "Procer",
    "contato": "Gabrielle Cardoso",
    "data_interacao": "2026-07-27",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Primeiro Contato",
    "resumo": "Primeira abordagem e qualificação com Gabrielle da Procer (indicação de Eduardo da Bum Agência) e envio de portfólio",
    "detalhes": "Augusto abordou Gabrielle Cardoso em 27/07/2026 às 15:41/15:43 mencionando a indicação de Eduardo da Bum Agência e perguntando se ela está à frente dos eventos da Procer. Gabrielle confirmou às 15:44 (\"Nesse momento sim, no que posso ajudar?\"). Augusto apresentou a DCarvalho, perguntou se estão orçando projetos para 2027 e enviou o Portifolio.pdf (5 MB) às 15:46 com a lista de participações da empresa. Às 15:58 Gabrielle respondeu: \"Vamos definir os eventos em setembro\". Augusto combinou retorno para setembro e Gabrielle confirmou (\"Combinadooo\").",
    "anexos": [
      "Portifolio.pdf"
    ],
    "proxima_acao_gerada": {
      "acao": "Follow-up em setembro para verificar a definição do calendário de eventos de 2027.",
      "data_prevista": "2026-09-09"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 160,
    "lead_id": 109,
    "codigo_evento": 11,
    "id_proposta": 124,
    "empresa": "STEMAC Grupos Geradores",
    "contato": "Daiane Onorato da Silva / Helena / Jaqueline Rodrigues",
    "data_interacao": "2026-11-26",
    "canal": "Ligação Telefônica",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Contato com a STEMAC referente ao Show Rural 2027; agendado retorno telefônico às 14:00 para falar com Helena",
    "detalhes": "Contato realizado hoje (26/11/2026) com a STEMAC Grupos Geradores sobre a proposta do estande de 180 m² no Show Rural Coopavel 2027. Solicitado retorno por telefone às 14:00 de hoje (26/11/2026) para falar diretamente com Helena.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retornar por telefone para a STEMAC hoje (26/11/2026) às 14:00 para falar com Helena.",
      "data_prevista": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 161,
    "lead_id": 10,
    "codigo_evento": 11,
    "id_proposta": 129,
    "empresa": "Procer",
    "contato": "Gabrielle Cardoso",
    "data_interacao": "2026-11-26",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Decisão / Fechamento",
    "resumo": "Gabrielle respondeu informando que a Procer fechou o estande do Show Rural 2027 em conjunto com a Kepler Weber (oportunidade encerrada/perdida)",
    "detalhes": "Em contato hoje (26/11/2026), Gabrielle respondeu informando que fecharam a participação no Show Rural Coopavel 2027 em conjunto com a controladora Kepler Weber (detentora de 62,6% da Procer). Oportunidade individual da Procer encerrada/marcada como fechado/perdido para o Show Rural 2027, redirecionando o alvo para a Kepler Weber (Lead 53).",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Direcionar prospecção do estande conjunto para a controladora Kepler Weber (Lead 53).",
      "data_prevista": "2026-11-26"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 162,
    "lead_id": 84,
    "codigo_evento": 11,
    "id_proposta": 64,
    "empresa": "Bionova Energia Solar",
    "contato": "Thiago Tomazoli / José Berta",
    "data_interacao": "2026-11-26",
    "canal": "Ligação Telefônica",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Alinhamento Telefônico",
    "resumo": "Ligação para Thiago Tomazoli (Bionova); deixado recado na caixa postal",
    "detalhes": "Augusto ligou hoje (26/11/2026) para Thiago Tomazoli (Diretor-Geral da Bionova Energia Solar) referente ao Show Rural Coopavel 2027, deixou recado na caixa postal e aguarda o retorno dele.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno do recado deixado na caixa postal para Thiago Tomazoli.",
      "data_prevista": "2026-11-30"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 163,
    "lead_id": 16,
    "codigo_evento": 11,
    "id_proposta": 11,
    "empresa": "Pippi Pneus",
    "contato": "Stephani Simon",
    "data_interacao": "2026-11-26",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Envio de Proposta Financeira",
    "resumo": "Projeto 3D e orçamento financeiro enviados para Stephani Simon (Pippi Pneus); aguardando retorno",
    "detalhes": "Projeto 3D e valor do orçamento do estande de 100 m² da Pippi Pneus para o Show Rural Coopavel 2027 enviados para Stephani Simon. Aguardando retorno da Stephani para dar continuidade à negociação.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno de Stephani Simon para continuidade da negociação.",
      "data_prevista": "2026-11-30"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 164,
    "lead_id": 15,
    "codigo_evento": 11,
    "id_proposta": 10,
    "empresa": "MAXLOADER",
    "contato": "Bruna (Marketing) / Tilara",
    "data_interacao": "2026-11-26",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Solicitação de Briefing",
    "resumo": "Follow-up no WhatsApp com equipe de marketing da MAXLOADER cobrando briefing do Show Rural 2027",
    "detalhes": "Em 25/11/2026 às 17:20-17:21, Augusto enviou mensagem para o grupo EQUIPE MARKETING | MAXLOADER perguntando como está a organização para o Show Rural 2027 e se já definiram algum briefing para o espaço. Hoje (26/11/2026) às 09:21 enviou \"Bom dia!!!\" e aguarda retorno.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno da equipe de marketing da MAXLOADER sobre o briefing do Show Rural 2027.",
      "data_prevista": "2026-11-30"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 165,
    "lead_id": 89,
    "codigo_evento": 11,
    "id_proposta": 69,
    "empresa": "Solinftec",
    "contato": "Mariana Finta (Marketing) / Camila Pedroso (Eventos)",
    "data_interacao": "2026-11-25",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Camila Pedroso respondeu confirmando recebimento do e-mail e encaminhamento ao time de marketing da Solinftec",
    "detalhes": "Em 25/11/2026 às 17:39, Augusto perguntou no WhatsApp se o e-mail havia chegado para Camila Pedroso. Às 17:40, Camila respondeu: \"Boa tarde! Já encaminhei ao time de mkt 🙏\". Às 17:43, Augusto respondeu: \"Obrigado, vou aguardar o contato !\".",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar contato do time de marketing da Solinftec após encaminhamento feito por Camila Pedroso.",
      "data_prevista": "2026-12-01"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 166,
    "lead_id": 107,
    "codigo_evento": 39,
    "id_proposta": 122,
    "empresa": "Docket",
    "contato": "Docket Marketing",
    "data_interacao": "2026-11-25",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Envio de Proposta Financeira",
    "resumo": "Docket enviou mapa da ExpoCONAC e Augusto enviou proposta financeira: R$ 22.400,00 (16m²) e R$ 28.000,00 (20m²)",
    "detalhes": "Em 25/11/2026 às 09:35, Docket enviou o mapa do evento ExpoCONAC 2027. Augusto confirmou às 09:37/09:41 (áudio de 0:53) que os estandes são ilhas. Às 09:47, a cliente solicitou o custo de 16m² e 20m² para aprovação com a diretoria. Às 17:07-17:09, Augusto enviou a proposta oficial: R$ 22.400,00 para 16m² e R$ 28.000,00 para 20m², baseados no projeto aprovado com lonas impressas respectivas, frigobar e balcão dentro do depósito, tomadas nos balcões e TV de 55\" na parede.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Aguardar retorno da Docket Marketing após análise da diretoria sobre os valores de 16m² (R$ 22.400,00) e 20m² (R$ 28.000,00).",
      "data_prevista": "2026-11-30"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 167,
    "lead_id": 18,
    "codigo_evento": 11,
    "id_proposta": 12,
    "empresa": "IHARA",
    "contato": "Ubirajara (Responsável Show Rural) / Rogério Cardoso",
    "data_interacao": "2026-11-24",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Follow-up Comercial",
    "resumo": "Rogério Cardoso (IHARA) informou que o responsável pelo Show Rural 2027 é Ubirajara, em férias com retorno na próxima semana",
    "detalhes": "Em 24/11/2026 às 15:50-15:51, Augusto perguntou no WhatsApp quem é o responsável pela organização da IHARA no Show Rural Coopavel 2027. Rogério respondeu às 15:51: \"Ubirajara. Ele está de férias. Retorna na próxima semana\". Às 15:52-15:53, Augusto pediu para Rogério solicitar que Ubirajara entre em contato ao retornar de férias (pedindo também o e-mail dele). Às 16:33, Rogério respondeu: \"Falo sim, claro 🙏\".",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retomar contato na próxima semana (01/12/2026) após o retorno de férias de Ubirajara.",
      "data_prevista": "2026-12-01"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 168,
    "lead_id": 95,
    "codigo_evento": 11,
    "id_proposta": 75,
    "empresa": "Next Implementos",
    "contato": "Equipe de Marketing",
    "data_interacao": "2026-11-24",
    "canal": "WhatsApp",
    "direcao": "Receptiva (Retorno do Cliente)",
    "tipo_interacao": "Mensagem de Áudio",
    "resumo": "Next Implementos respondeu por áudio (0:19) informando que analisará o projeto no fim de semana e início da próxima semana; retorno em 01/12",
    "detalhes": "Em 23/11/2026, Augusto cobrou retorno sobre o projeto 3D e o marketing da Next explicou que na sexta foi feriado e avaliaria após reunião. Em 24/11/2026 às 09:28, Augusto perguntou novamente (\"Conseguiu analisar o projeto?\") e às 09:47 a cliente respondeu com áudio de 0:19 informando que só analisará o projeto no final de semana e início da próxima semana. Retorno agendado para terça-feira, 01/12/2026.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Retornar contato com o marketing da Next Implementos na terça-feira, 01/12/2026.",
      "data_prevista": "2026-12-01"
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
  },
  {
    "id_interacao": 169,
    "lead_id": 5,
    "codigo_evento": 11,
    "id_proposta": 3,
    "empresa": "Bouwman",
    "contato": "Luis Elicker",
    "data_interacao": "2026-11-26",
    "canal": "WhatsApp",
    "direcao": "Ativa (Enviada pela DCarvalho)",
    "tipo_interacao": "Desqualificação",
    "resumo": "Bouwman possui carreta stand própria e não utiliza montadoras; não contatar para outros eventos",
    "detalhes": "Em 26/11/2026 foi registrado que a Bouwman utiliza carreta stand própria em suas participações em feiras e eventos, não contratando serviços de montadoras. Lead desqualificado permanentemente no CRM para não receber novas abordagens comerciais em outros eventos.",
    "anexos": [],
    "proxima_acao_gerada": {
      "acao": "Nenhuma ação — Não entrar mais em contato para outros eventos (possui carreta stand própria).",
      "data_prevista": null
    },
    "responsavel": "Augusto E. da Silva",
    "ativo": true
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

class PropostasStore {
  constructor() {
    this.propostas = [...DEFAULT_PROPOSTAS];
    this.listeners = [];
  }

  getPropostas() {
    return this.propostas;
  }

  getPropostasByEventoId(codigoEvento) {
    return this.propostas.filter(p => Number(p.codigo_evento) === Number(codigoEvento));
  }

  setPropostas(newPropostas) {
    if (!Array.isArray(newPropostas)) {
      throw new Error("O payload deve ser uma lista (array) de propostas.");
    }
    this.propostas = newPropostas;
    this.notifyListeners();
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.propostas));
  }
}

class InteracoesStore {
  constructor() {
    this.interacoes = [...DEFAULT_INTERACOES];
    this.listeners = [];
  }

  getInteracoes(onlyActive = true) {
    if (onlyActive) {
      return this.interacoes.filter(item => item.ativo !== false);
    }
    return this.interacoes;
  }

  /**
   * Retorna as interações filtradas para uma proposta específica
   * Conecta por id_proposta OU (lead_id + codigo_evento)
   */
  getInteracoesByProposta(prop, onlyActive = true) {
    if (!prop) return [];
    return this.getInteracoes(onlyActive).filter(item => {
      if (item.id_proposta && prop.id_proposta && Number(item.id_proposta) === Number(prop.id_proposta)) {
        return true;
      }
      if (item.lead_id && prop.cliente?.lead_id && Number(item.lead_id) === Number(prop.cliente.lead_id)) {
        if (!item.codigo_evento || Number(item.codigo_evento) === Number(prop.codigo_evento)) {
          return true;
        }
      }
      return false;
    }).sort((a, b) => (b.data_interacao || "").localeCompare(a.data_interacao || ""));
  }

  setInteracoes(newInteracoes) {
    if (!Array.isArray(newInteracoes)) {
      throw new Error("O payload deve ser uma lista (array) de interações.");
    }
    this.interacoes = newInteracoes;
    this.notifyListeners();
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.interacoes));
  }
}

window.eventStore = new EventStore();
window.propostasStore = new PropostasStore();
window.interacoesStore = new InteracoesStore();

/**
 * Carrega automaticamente os dados dos arquivos locais na pasta data/
 * - data/eventos_ativos.json
 * - data/propostas_ativas.json
 * - data/interacoes.json
 * (Funciona em servidores HTTP locais; se aberto via file:///, o navegador usa os datasets nativos acima)
 */
async function loadDataFromFiles() {
  try {
    const resEvents = await fetch("data/eventos_ativos.json");
    if (resEvents.ok) {
      const eventos = await resEvents.json();
      if (Array.isArray(eventos)) {
        window.eventStore.setEvents(eventos);
        console.log(`[DataStore] ${eventos.length} eventos carregados de data/eventos_ativos.json`);
      }
    }
  } catch (err) {
    console.info("[DataStore] Fetch local de eventos_ativos.json (navegador bloqueia CORS em file:///):", err.message);
  }

  try {
    const resPropostas = await fetch("data/propostas_ativas.json");
    if (resPropostas.ok) {
      const propostas = await resPropostas.json();
      if (Array.isArray(propostas)) {
        window.propostasStore.setPropostas(propostas);
        console.log(`[DataStore] ${propostas.length} propostas carregadas de data/propostas_ativas.json`);
      }
    }
  } catch (err) {
    console.info("[DataStore] Fetch local de propostas_ativas.json (navegador bloqueia CORS em file:///):", err.message);
  }

  try {
    const resInteracoes = await fetch("data/interacoes.json");
    if (resInteracoes.ok) {
      const interacoes = await resInteracoes.json();
      if (Array.isArray(interacoes)) {
        window.interacoesStore.setInteracoes(interacoes);
        console.log(`[DataStore] ${interacoes.length} interações carregadas de data/interacoes.json`);
      }
    }
  } catch (err) {
    console.info("[DataStore] Fetch local de interacoes.json (navegador bloqueia CORS em file:///):", err.message);
  }
}

window.loadDataFromFiles = loadDataFromFiles;
