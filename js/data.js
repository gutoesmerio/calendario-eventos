/**
 * data.js - Repositório de dados e manipulador de eventos e propostas ativas
 */

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
      "total_oportunidades_ativas": 74,
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
  }
];

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
      "metragem_m2": 72.0,
      "localizacao_estande": "Setor Pecuária / Aves e Suínos",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Proposta Enviada",
      "temperatura": "Quente",
      "valor_proposta": 78000.0,
      "probabilidade_fechamento_pct": 85,
      "valor_ponderado": 66300.0
    },
    "follow_up": {
      "proxima_acao": "Follow-up de aprovação final da diretoria com Egle (documento ESTANDE MSD-SHOW RURAL.pdf)",
      "data_proxima_acao": "2026-11-23",
      "dias_para_follow_up": 0,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 60.0,
      "localizacao_estande": "Polo CTC - Rio Verde/GO",
      "status_projeto": "Modelagem 3D em Elaboração"
    },
    "comercial": {
      "estagio_proposta": "Briefing em Concepção",
      "temperatura": "Quente",
      "valor_proposta": 65000.0,
      "probabilidade_fechamento_pct": 70,
      "valor_ponderado": 45500.0
    },
    "follow_up": {
      "proxima_acao": "Alinhar e renderizar projeto 3D do estande de Rio Verde com Cristiano Projetista para apresentação à Egle",
      "data_proxima_acao": "2026-11-24",
      "dias_para_follow_up": 1,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 50.0,
      "localizacao_estande": "Pavilhão de Máquinas e Implementos",
      "status_projeto": "Briefing Recebido"
    },
    "comercial": {
      "estagio_proposta": "Briefing em Concepção",
      "temperatura": "Quente",
      "valor_proposta": 45000.0,
      "probabilidade_fechamento_pct": 65,
      "valor_ponderado": 29250.0
    },
    "follow_up": {
      "proxima_acao": "Estruturar memorial descritivo com base nos anexos recebidos por e-mail e encaminhar ao projetista 3D",
      "data_proxima_acao": "2026-11-24",
      "dias_para_follow_up": 1,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 45.0,
      "localizacao_estande": "Setor Comercial / Automotivo",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Em Análise da Diretoria",
      "temperatura": "Quente",
      "valor_proposta": 52000.0,
      "probabilidade_fechamento_pct": 65,
      "valor_ponderado": 33800.0
    },
    "follow_up": {
      "proxima_acao": "Follow-up de alinhamento com Kauany sobre a análise da diretoria e ajustes de escopo",
      "data_proxima_acao": "2026-11-25",
      "dias_para_follow_up": 2,
      "responsavel": "Augusto E. da Silva"
    }
  },
  {
    "id_proposta": 14,
    "codigo_evento": 11,
    "nome_evento": "Show Rural Coopavel 2027",
    "cliente": {
      "lead_id": 14,
      "empresa": "Pippi Pneus",
      "contato_principal": "Stephani Simon",
      "cargo": "Marketing e Eventos",
      "canal_preferencial": "WhatsApp",
      "telefone": "+55 55 9xxxx-xxxx",
      "email": "marketing@pippipneus.com.br"
    },
    "estande": {
      "tipo_estande": "Construído em Marcenaria",
      "metragem_m2": 40.0,
      "localizacao_estande": "Rua Principal de Peças e Pneus",
      "status_projeto": "Projeto 3D Apresentado"
    },
    "comercial": {
      "estagio_proposta": "Em Análise da Diretoria",
      "temperatura": "Quente",
      "valor_proposta": 48000.0,
      "probabilidade_fechamento_pct": 60,
      "valor_ponderado": 28800.0
    },
    "follow_up": {
      "proxima_acao": "Retomada com Stephani Simon para verificar deliberação final da diretoria sobre orçamento apresentado",
      "data_proxima_acao": "2026-11-24",
      "dias_para_follow_up": 1,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 60.0,
      "localizacao_estande": "Setor de Máquinas e Forrageiras",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 55000.0,
      "probabilidade_fechamento_pct": 50,
      "valor_ponderado": 27500.0
    },
    "follow_up": {
      "proxima_acao": "Follow-up no WhatsApp com Luis para receber medidas do espaço e criar projeto 3D gratuito",
      "data_proxima_acao": "2026-11-24",
      "dias_para_follow_up": 1,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 35.0,
      "localizacao_estande": "Pavilhão de Energia Solar e Sustentabilidade",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 38000.0,
      "probabilidade_fechamento_pct": 50,
      "valor_ponderado": 19000.0
    },
    "follow_up": {
      "proxima_acao": "Retomada agendada com Felipe após reunião com a diretoria (Helton) para recebimento do briefing",
      "data_proxima_acao": "2026-12-01",
      "dias_para_follow_up": 8,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 40.0,
      "localizacao_estande": "Setor Veterinário e Nutrição Animal",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Briefing em Concepção",
      "temperatura": "Quente",
      "valor_proposta": 42000.0,
      "probabilidade_fechamento_pct": 55,
      "valor_ponderado": 23100.0
    },
    "follow_up": {
      "proxima_acao": "Cobrar briefing oficial e medidas de planta com Thais para início da modelagem 3D",
      "data_proxima_acao": "2026-11-24",
      "dias_para_follow_up": 1,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 80.0,
      "localizacao_estande": "Área de Defensivos e Biotecnologia",
      "status_projeto": "Em Ajuste de Escopo"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 68000.0,
      "probabilidade_fechamento_pct": 50,
      "valor_ponderado": 34000.0
    },
    "follow_up": {
      "proxima_acao": "Acompanhar batida de martelo da montagem da BASF no Show Rural para cotar o projeto executivo local",
      "data_proxima_acao": "2026-11-25",
      "dias_para_follow_up": 2,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 100.0,
      "localizacao_estande": "Polo de Sementes e Proteção de Cultivos",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 75000.0,
      "probabilidade_fechamento_pct": 50,
      "valor_ponderado": 37500.0
    },
    "follow_up": {
      "proxima_acao": "Acompanhar inclusão da DCarvalho nas cotações de montagem para as contas atendidas pela agência",
      "data_proxima_acao": "2026-11-25",
      "dias_para_follow_up": 2,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 40.0,
      "localizacao_estande": "Estande I050",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 38000.0,
      "probabilidade_fechamento_pct": 45,
      "valor_ponderado": 17100.0
    },
    "follow_up": {
      "proxima_acao": "Abordagem com oferta de projeto 3D gratuito antecipado para o estande confirmado I050 no São Paulo Expo",
      "data_proxima_acao": "2026-11-26",
      "dias_para_follow_up": 3,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 60.0,
      "localizacao_estande": "Estande D208",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 50000.0,
      "probabilidade_fechamento_pct": 45,
      "valor_ponderado": 22500.0
    },
    "follow_up": {
      "proxima_acao": "Propor estudo cenográfico para área de soldagem ao vivo no estande D208 com fechamento anti-faísca",
      "data_proxima_acao": "2026-11-26",
      "dias_para_follow_up": 3,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 50.0,
      "localizacao_estande": "Estande H018",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 44000.0,
      "probabilidade_fechamento_pct": 45,
      "valor_ponderado": 19800.0
    },
    "follow_up": {
      "proxima_acao": "Apresentação institucional e oferta de cenografia e sala de reuniões privativa para o estande H018",
      "data_proxima_acao": "2026-11-26",
      "dias_para_follow_up": 3,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 80.0,
      "localizacao_estande": "Estande D110",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Oportunidade Mapeada",
      "temperatura": "Quente",
      "valor_proposta": 65000.0,
      "probabilidade_fechamento_pct": 40,
      "valor_ponderado": 26000.0
    },
    "follow_up": {
      "proxima_acao": "Contato com setor de feiras para participar da concorrência de montagem do estande D110",
      "data_proxima_acao": "2026-11-26",
      "dias_para_follow_up": 3,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 30.0,
      "localizacao_estande": "Foyer Centro de Convenções - Recanto Cataratas",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 32000.0,
      "probabilidade_fechamento_pct": 50,
      "valor_ponderado": 16000.0
    },
    "follow_up": {
      "proxima_acao": "Abordagem da agência como braço operacional fabril local em Foz para montagem de lounge e painéis",
      "data_proxima_acao": "2026-11-27",
      "dias_para_follow_up": 4,
      "responsavel": "Augusto E. da Silva"
    }
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
      "metragem_m2": 25.0,
      "localizacao_estande": "Área de Patrocinadores - Recanto Cataratas",
      "status_projeto": "Aguardando Briefing"
    },
    "comercial": {
      "estagio_proposta": "Alinhamento Inicial / Triagem",
      "temperatura": "Quente",
      "valor_proposta": 28000.0,
      "probabilidade_fechamento_pct": 50,
      "valor_ponderado": 14000.0
    },
    "follow_up": {
      "proxima_acao": "Oferta de estrutura de cenografia e mobiliário próprio com custo zero de frete pesado interestadual",
      "data_proxima_acao": "2026-11-27",
      "dias_para_follow_up": 4,
      "responsavel": "Augusto E. da Silva"
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

window.eventStore = new EventStore();
window.propostasStore = new PropostasStore();
