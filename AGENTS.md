# Calendário de Eventos

## Visão Geral do Projeto
Aplicação de visualização de calendário responsável por consumir um payload JSON com dados de eventos e exibi-los graficamente em uma grade de calendário.

As definições e gerações dos payloads JSON provêm de outro projeto/serviço. Aqui, o foco é a fidelidade no consumo da entidade e clareza na renderização visual.

---

## Especificação da Entidade de Evento

### 1. Exemplo de Instância Concreta (JSON)
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

---

### 2. Dicionário de Dados (Data Dictionary)

| Campo | Tipo | Obrigatório | Formato / Valores | Uso no Calendário |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `integer` | Sim | Auto-incremental | Identificador único do evento (usado para indexação, chaves de renderização e chave de cor). |
| `nome_evento` | `string` | Sim | Texto livre (3-100 car.) | Nome canônico exibido diretamente nas células/barras do calendário. |
| `sigla_ou_edicao` | `string` | Não | Texto livre | Subtítulo ou edição exibido em detalhes/tooltip do evento. |
| `periodo` | `object` | Sim | Objeto estruturado | Bloco de datas que determina o posicionamento no calendário. |
| `periodo.data_inicio` | `string` | Sim | `YYYY-MM-DD` (ISO-8601) | Data de início da cobertura visual do evento no grid. |
| `periodo.data_fim` | `string` | Sim | `YYYY-MM-DD` (ISO-8601) | Data de término da cobertura visual no grid (`data_fim >= data_inicio`). |
| `periodo.duracao_dias` | `integer` | Não | Inteiro positivo (`>= 1`) | Total de dias corridos do evento. |
| `periodo.periodo_formatado` | `string` | Não | Formato amigável | Texto para exibição no card de detalhes ou tooltip. |
| `periodo.dias_para_o_evento`| `integer` | Não | Inteiro | Contagem regressiva de dias. |
| `localizacao.recinto` | `string` | Não | Texto livre | Local específico (exibido em detalhes). |
| `localizacao.cidade` | `string` | Sim | Texto livre | Cidade (exibida no card de detalhes). |
| `localizacao.estado` | `string` | Sim | UF (2 letras) | Estado / UF. |
| `segmento` | `string` | Sim | Texto livre | Segmento comercial do evento. |
| `promotora.organizadora` | `string` | Não | Texto livre | Organizadora do evento. |
| `estrategia_comercial.prioridade` | `string` | Sim | `Alta` \| `Média` \| `Baixa` | Nível de prioridade comercial. |

---

### 3. Validação JSON Schema (Draft 2020-12)
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "EventoComercial",
  "type": "object",
  "required": ["id", "nome_evento", "periodo", "localizacao", "segmento"],
  "properties": {
    "id": { "type": "integer" },
    "nome_evento": { "type": "string" },
    "sigla_ou_edicao": { "type": "string" },
    "periodo": {
      "type": "object",
      "required": ["data_inicio", "data_fim"],
      "properties": {
        "data_inicio": { "type": "string", "format": "date", "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$" },
        "data_fim": { "type": "string", "format": "date", "pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$" },
        "duracao_dias": { "type": "integer", "minimum": 1 },
        "periodo_formatado": { "type": "string" },
        "dias_para_o_evento": { "type": "integer" }
      }
    },
    "localizacao": {
      "type": "object",
      "required": ["cidade", "estado"],
      "properties": {
        "recinto": { "type": "string" },
        "cidade": { "type": "string" },
        "estado": { "type": "string", "pattern": "^[A-Z]{2}$" },
        "endereco": { "type": "string" }
      }
    },
    "segmento": { "type": "string" },
    "promotora": {
      "type": "object",
      "properties": {
        "organizadora": { "type": "string" },
        "iniciativa": { "type": "string" },
        "site_oficial": { "type": "string" }
      }
    },
    "estrategia_comercial": {
      "type": "object",
      "properties": {
        "prioridade": { "type": "string", "enum": ["Alta", "Média", "Baixa"] },
        "perfil_alvo_expositores": { "type": "string" },
        "acao_comercial": { "type": "string" }
      }
    }
  }
}
```

---

## Regras de Renderização no Calendário (Padrão de Trilhas / Slots Fixos)

1. **Sistema de Trilhas Contínuas (Multi-Day Slots):**
   - Para cada evento, o grid identifica o intervalo entre `periodo.data_inicio` e `periodo.data_fim` (inclusive).
   - Eventos de múltiplos dias são renderizados em **faixas horizontais contínuas** que atravessam os dias da semana na mesma trilha/linha.
   - Cada faixa possui **altura fixa** (ex: 24px a 28px) e espaçamento vertical fixo entre trilhas (gap de ~4px), garantindo alinhamento visual perfeito e eliminando variações bruscas de espessura entre dias vizinhos.

2. **Área Reservada do Dia:**
   - O topo de cada célula do dia (primeiros ~24px) é reservado para exibição do número do dia (ex: `"04"`, `"05"`). As faixas de eventos são empilhadas abaixo dessa área.

3. **Capacidade da Célula e Overflow (+N mais):**
   - Caso um dia possua mais eventos do que a altura máxima visível da célula comporta, o calendário renderiza as primeiras faixas e um botão/link indicador (ex: `"+2 mais"`).
   - Ao clicar no indicador de excesso, abre-se um popover ou modal com a listagem completa dos eventos daquele dia.

4. **Identificação Visual, Cores e Tipografia:**
   - Cada evento possui uma cor distinta e consistente (calculada com base no seu `id` ou paleta predefinida).
   - O `nome_evento` é exibido dentro da faixa com contraste adequado de cor de texto.
   - Textos que ultrapassarem a largura do bloco devem ser truncados com reticências (`text-overflow: ellipsis`).

5. **Detalhamento (Card / Tooltip / Modal):**
   - Ao interagir com o evento (hover ou clique na faixa), exibir popover/card contendo os detalhes complementares:
     - Nome e edição (`sigla_ou_edicao`)
     - Período formatado (`periodo.periodo_formatado` ou cálculo com `duracao_dias`)
     - Localização (`recinto`, `cidade`/`estado`)
     - Segmento e Prioridade (`estrategia_comercial.prioridade`)

---

## Diretrizes Técnicas para Agentes
- **Operação Direta:** Desenvolvimento sem necessidade de governança ou Oráculo externo.
- **Isolamento de Responsabilidade:** Tratar o payload como fonte de verdade de dados. O projeto não gera e nem altera o schema original, apenas valida e renderiza as entidades recebidas.
