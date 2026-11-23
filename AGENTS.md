# Calendário de Eventos Comerciais

## Visão Geral do Projeto
Aplicação web front-end de visualização de calendário responsável por consumir dados de feiras comerciais/industriais, propostas comerciais e histórico de interações com expositores a partir de arquivos JSON locais e exibi-los graficamente em uma grade de calendário interativa de alto desempenho.

* **Repositório GitHub:** [https://github.com/gutoesmerio/calendario-eventos](https://github.com/gutoesmerio/calendario-eventos)
* **Ambiente de Produção (Vercel):** [https://calendario-eventos-beige.vercel.app](https://calendario-eventos-beige.vercel.app)

Os dados são carregados automaticamente da pasta `data/`:
* **`data/eventos_ativos.json`:** Cadastro e métricas dos eventos e feiras comerciais.
* **`data/propostas_ativas.json`:** Oportunidades e propostas comerciais ativas vinculadas pelo campo relacional `codigo_evento === evento.id`.
* **`data/interacoes.json`:** Linha do tempo e histórico de conversas/contatos comerciais vinculados à proposta (`id_proposta === proposta.id_proposta` ou `lead_id + codigo_evento`).

---

## 1. Especificação da Entidade de Evento (`eventos_ativos.json`)

### Exemplo de Instância Concreta (JSON)
```json
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
}
```

### Dicionário de Dados
| Campo | Tipo | Obrigatório | Formato / Valores | Uso no Calendário |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `integer` | Sim | Auto-incremental | Identificador único do evento (indexação, chave de cor determinística e chave de relacionamento). |
| `nome_evento` | `string` | Sim | Texto livre | Nome canônico exibido diretamente nas células e faixas contínuas do calendário. |
| `sigla_ou_edicao` | `string` | Não | Texto livre | Subtítulo ou edição exibido nos modais e tooltips. |
| `periodo` | `object` | Sim | Objeto estruturado | Bloco de datas que determina o posicionamento no calendário. |
| `periodo.data_inicio` | `string` | Sim | `YYYY-MM-DD` | Data de início da cobertura visual do evento no grid. |
| `periodo.data_fim` | `string` | Sim | `YYYY-MM-DD` | Data de término da cobertura visual no grid (`data_fim >= data_inicio`). |
| `periodo.duracao_dias` | `integer` | Não | Inteiro positivo | Duração em dias corridos do evento. |
| `localizacao.cidade` | `string` | Sim | Texto livre | Cidade da montagem. |
| `localizacao.estado` | `string` | Sim | UF (2 letras) | UF do evento. |
| `segmento` | `string` | Sim | Texto livre | Segmento comercial do evento. |
| `estrategia_comercial.prioridade` | `string` | Sim | `Alta` \| `Média` \| `Baixa` | Grau de relevância comercial no funil. |

---

## 2. Especificação da Entidade de Proposta Comercial (`propostas_ativas.json`)

### Exemplo de Instância Concreta (JSON)
```json
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
    "valor_ponderado": 66300.0,
    "data_previsao_fechamento": "2026-11-28"
  },
  "responsavel": "Augusto E. da Silva"
}
```

### JSON Schema (Draft 2020-12)
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "PropostaComercialEvento",
  "type": "object",
  "required": [
    "id_proposta",
    "codigo_evento",
    "nome_evento",
    "cliente",
    "estande",
    "comercial"
  ],
  "properties": {
    "id_proposta": { "type": "integer" },
    "codigo_evento": { "type": "integer" },
    "nome_evento": { "type": "string" },
    "cliente": {
      "type": "object",
      "required": ["lead_id", "empresa"],
      "properties": {
        "lead_id": { "type": "integer" },
        "empresa": { "type": "string" },
        "contato_principal": { "type": "string" },
        "cargo": { "type": "string" },
        "canal_preferencial": { "type": "string", "enum": ["WhatsApp", "E-mail", "Telefone", "Presencial"] },
        "telefone": { "type": "string" },
        "email": { "type": "string" }
      }
    },
    "estande": {
      "type": "object",
      "properties": {
        "tipo_estande": { "type": "string" },
        "metragem_m2": { "type": ["number", "null"] },
        "localizacao_estande": { "type": "string" },
        "status_projeto": { "type": "string" }
      }
    },
    "comercial": {
      "type": "object",
      "required": ["estagio_proposta", "temperatura", "valor_proposta"],
      "properties": {
        "estagio_proposta": { "type": "string" },
        "temperatura": { "type": "string", "enum": ["Quente", "Morno", "Frio"] },
        "valor_proposta": { "type": "number", "minimum": 0 },
        "probabilidade_fechamento_pct": { "type": "integer" },
        "valor_ponderado": { "type": "number" },
        "data_previsao_fechamento": { "type": ["string", "null"], "format": "date" }
      }
    },
    "responsavel": { "type": "string" }
  }
}
```

---

## 3. Especificação da Entidade de Interações (`interacoes.json`)

### Exemplo de Instância Concreta (JSON)
```json
{
  "id_interacao": 201,
  "lead_id": 94,
  "codigo_evento": 11,
  "id_proposta": 74,
  "empresa": "MSD Saúde Animal",
  "contato": "Egle",
  "data_interacao": "2026-11-23",
  "canal": "WhatsApp",
  "direcao": "Ativa (Enviada pela DCarvalho)",
  "tipo_interacao": "Follow-up Comercial",
  "resumo": "Follow-up de aprovação final da diretoria com envio da proposta atualizada.",
  "detalhes": "Enviado o PDF com ajuste solicitado na iluminação do estande de 72m². Aguardando reunião da diretoria na quinta-feira.",
  "anexos": ["ESTANDE MSD-SHOW RURAL.pdf"],
  "proxima_acao_gerada": {
    "acao": "Reunião de alinhamento pós-diretoria",
    "data_prevista": "2026-11-27"
  },
  "responsavel": "Augusto E. da Silva"
}
```

### JSON Schema (Draft 2020-12)
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "InteracaoClienteEvento",
  "type": "object",
  "required": [
    "id_interacao",
    "lead_id",
    "codigo_evento",
    "empresa",
    "data_interacao",
    "canal",
    "tipo_interacao",
    "resumo"
  ],
  "properties": {
    "id_interacao": { "type": "integer" },
    "lead_id": { "type": "integer" },
    "codigo_evento": { "type": "integer" },
    "id_proposta": { "type": ["integer", "null"] },
    "empresa": { "type": "string" },
    "contato": { "type": "string" },
    "data_interacao": { "type": "string", "format": "date", "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$" },
    "canal": { "type": "string", "enum": ["WhatsApp", "E-mail", "Ligação Telefônica", "Presencial / Reunião", "Reunião Online"] },
    "direcao": { "type": "string", "enum": ["Ativa (Enviada pela DCarvalho)", "Receptiva (Retorno do Cliente)"] },
    "tipo_interacao": { "type": "string" },
    "resumo": { "type": "string" },
    "detalhes": { "type": "string" },
    "anexos": { "type": "array", "items": { "type": "string" } },
    "proxima_acao_gerada": {
      "type": "object",
      "properties": {
        "acao": { "type": "string" },
        "data_prevista": { "type": "string", "format": "date" }
      }
    },
    "responsavel": { "type": "string" }
  }
}
```

---

## 4. Regras de Interface e Renderização

### A. Grade do Calendário (Trilhas Contínuas e Multi-Mês)
1. **Trilhas Contínuas (Multi-Day Slots):** Faixas horizontais contínuas por linha de semana para eventos que cruzam vários dias. Altura fixa (26px em 1 Mês, 20px em Multi-Mês), espaçamento padronizado e cores determinísticas por `id`.
2. **Capacidade da Célula e Overflow (+N mais):** Células com mais faixas do que a altura permite exibem o indicador `+N mais`, que abre modal com a lista completa do dia.
3. **Modos de Visualização:**
   - **1 Mês:** Grade completa detalhada com slots fixos.
   - **3 Meses / 6 Meses:** Múltiplos meses compactos com foco em 1 clique e deslocamento contínuo de apenas 1 mês por clique nos botões de navegação (`◀` e `▶`).
   - **1 Ano:** Visão anual de 12 meses com preenchimento de dias e Timeline executiva anual cronológica.

### B. Modal de Detalhes do Evento e Propostas Comerciais
1. **Aba "Detalhes do Evento":** Período, localização, promotora, segmento e estratégia comercial.
2. **Aba "Propostas Ativas":**
   - Exibe a lista das empresas expositoras com propostas abertas naquele evento (`codigo_evento === evento.id`), com temperatura, estágio e valor total em R$.
   - Ao clicar na empresa, transiciona para a visualização da proposta detalhada com botão de retorno `◀ Voltar para lista de empresas`.

### C. Abas Internas da Proposta Comercial
Dentro da visualização da proposta, há duas abas dedicadas:
1. **`[📋 Dados da Proposta]`:**
   - Dados do cliente/contato (nome, cargo, canal preferencial, telefone, e-mail).
   - Especificações do estande (tipo, metragem m², localização física, status do 3D).
   - Situação comercial (estágio, probabilidade %, valor da proposta, valor ponderado, previsão).
   - Gestão da conta e próxima ação de follow-up.
   - Bloco colapsável com o JSON completo da proposta.
2. **`[💬 Histórico de Interações (N)]`:**
   - Linha do tempo cronológica decrescente de todas as interações vinculadas (`id_proposta` ou `lead_id + codigo_evento`).
   - Destaque visual do canal (WhatsApp com verde, E-mail com azul, etc.), sentido (Ativa vs Receptiva), tipo de interação, interlocutor, resumo, detalhes transcritos, chips de anexos (`.pdf`, etc.), caixa de próxima ação gerada e responsável.

### D. Módulo de Navegação Principal e Feed de Interações sob Demanda
1. **Botões de Navegação no Topo da Aplicação:**
   - Em vez de abas estáticas no DOM, a alternância de módulos ocorre via **botões dedicados**:
     - **`[ 📅 Calendário de Eventos ]`**
     - **`[ 💬 Interações (N) ]`**
2. **Ciclo de Vida e Descarregamento de Memória/DOM:**
   - **Na View do Calendário:** Apenas a grade e os controles de período (1m, 3m, 6m, 1y) são carregados e renderizados.
   - **Ao clicar em Interações:** A view do calendário e seus controles de período são completamente descarregados do DOM (`calendar.destroy()`), carregando dinamicamente o feed de cards de interações em ordem decrescente.
   - **Ao voltar para o Calendário:** A view de interações é descarregada (`interacoesView.destroy()`) e a grade do calendário é renderizada novamente sob demanda.
3. **Feed de Cards de Interações (Opção A):**
   - Lista completa de contatos em ordem decrescente de data (e hora/ID).
   - Cada card exibe: Data formatada, Tag do Evento associado, Canal e Direção (Ativa/Receptiva), Empresa Cliente, Interlocutor, Tipo de Contato, Resumo, Detalhes e Próxima Ação Gerada.
   - Barra de busca em tempo real (filtra por empresa, contato, evento, tipo ou assunto) e filtro por canal de comunicação.
4. **Visualização Detalhada do Cliente no Evento (Opção 2 - Modal Flutuante):**
   - Ao clicar em qualquer card do feed, abre-se o modal flutuante de tratamento comercial.
   - O modal carrega sob demanda **apenas as interações daquele cliente naquele evento específico em ordem decrescente**.
   - Exibe o cabeçalho do cliente/evento, dados da proposta comercial ativa (se houver, com valor, estágio e metragem do estande) e a linha do tempo completa para acompanhamento da negociação.

### E. Execução e Atualização de Dados
1. **Servidor Local Automático (`iniciar_servidor.bat`):**
   - Inicia servidor HTTP local em `http://localhost:8080` com zero dependências externas.
   - Lê os arquivos JSON da pasta `data/` dinamicamente a cada recarregamento de página (`F5`).
2. **Sincronização para Acesso Direto (`sincronizar_dados.bat`):**
   - Para execuções diretas por arquivo (`file:///C:/projs/CALENDÁRIO/index.html`), atualiza automaticamente o dataset base em `js/data.js` a partir dos arquivos JSON de `data/`.
