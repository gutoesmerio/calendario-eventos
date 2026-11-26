const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const eventosPath = path.join(dataDir, 'eventos_ativos.json');
const propostasPath = path.join(dataDir, 'propostas_ativas.json');
const interacoesPath = path.join(dataDir, 'interacoes.json');

try {
  const eventos = JSON.parse(fs.readFileSync(eventosPath, 'utf8'));
  const propostas = JSON.parse(fs.readFileSync(propostasPath, 'utf8'));
  const interacoes = JSON.parse(fs.readFileSync(interacoesPath, 'utf8'));

  console.log(`\n======================================================`);
  console.log(` Sincronizador de Dados - Calendário de Eventos`);
  console.log(`======================================================`);
  console.log(` -> ${eventos.length} Eventos encontrados em eventos_ativos.json`);
  console.log(` -> ${propostas.length} Propostas encontradas em propostas_ativas.json`);
  console.log(` -> ${interacoes.length} Interações encontradas em interacoes.json`);

  const dataJsHeader = `/**\n * data.js - Repositório de dados e manipulador de eventos, propostas e interações\n */\n\n// Dados base de eventos ativos (carregamento garantido mesmo via file:///)\nconst DEFAULT_EVENTS = ` + JSON.stringify(eventos, null, 2) + `;\n\n// Dados base de propostas ativas (carregamento garantido mesmo via file:///)\nconst DEFAULT_PROPOSTAS = ` + JSON.stringify(propostas, null, 2) + `;\n\n// Dados base de interações (carregamento garantido mesmo via file:///)\nconst DEFAULT_INTERACOES = ` + JSON.stringify(interacoes, null, 2) + `;\n\n`;

  const classesAndLogic = `class EventStore {
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

  getInteracoes() {
    return this.interacoes.filter(item => item.ativo !== false);
  }

  /**
   * Retorna as interações filtradas para uma proposta específica
   * Conecta por id_proposta OU (lead_id + codigo_evento)
   */
  getInteracoesByProposta(prop) {
    if (!prop) return [];
    return this.getInteracoes().filter(item => {
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
        console.log(\`[DataStore] \${eventos.length} eventos carregados de data/eventos_ativos.json\`);
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
        console.log(\`[DataStore] \${propostas.length} propostas carregadas de data/propostas_ativas.json\`);
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
        console.log(\`[DataStore] \${interacoes.length} interações carregadas de data/interacoes.json\`);
      }
    }
  } catch (err) {
    console.info("[DataStore] Fetch local de interacoes.json (navegador bloqueia CORS em file:///):", err.message);
  }
}

window.loadDataFromFiles = loadDataFromFiles;
`;

  fs.writeFileSync(path.join(__dirname, 'js', 'data.js'), dataJsHeader + classesAndLogic, 'utf8');
  console.log(` -> js/data.js atualizado com sucesso!`);
  console.log(`======================================================\n`);
} catch (err) {
  console.error(`Erro ao sincronizar dados:`, err.message);
}
