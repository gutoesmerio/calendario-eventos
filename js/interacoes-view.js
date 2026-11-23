/**
 * interacoes-view.js - Gerenciador da visualização do feed de interações
 * Renderiza os cards de interações em ordem decrescente com suporte a descarregamento sob demanda
 */

class InteracoesViewManager {
  constructor(options = {}) {
    this.container = null;
    this.onCardClick = options.onCardClick || null;
    this.searchQuery = "";
    this.filterCanal = "todos";
    this.boundSearchHandler = null;
    this.boundCanalHandler = null;
  }

  /**
   * Resolve o nome amigável do evento vinculado a uma interação
   */
  resolveNomeEvento(item) {
    if (!item.codigo_evento) {
      return "Relacionamento Institucional / Geral";
    }

    if (window.eventStore) {
      const ev = window.eventStore.getEventById(item.codigo_evento);
      if (ev && ev.nome_evento) return ev.nome_evento;
    }

    if (window.propostasStore) {
      const props = window.propostasStore.getPropostasByEventoId(item.codigo_evento);
      if (props.length > 0 && props[0].nome_evento) {
        return props[0].nome_evento;
      }
    }

    return `Evento #${item.codigo_evento}`;
  }

  /**
   * Formata data para o padrão brasileiro DD/MM/AAAA
   */
  formatDateBR(dateStr) {
    if (!dateStr) return "N/D";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  /**
   * Escapa caracteres HTML
   */
  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Obtém todas as interações ordenadas em ordem decrescente por data e ID
   */
  getAllInteracoesSorted() {
    const interacoes = window.interacoesStore ? window.interacoesStore.getInteracoes() : [];
    return [...interacoes].sort((a, b) => {
      const dataDiff = (b.data_interacao || "").localeCompare(a.data_interacao || "");
      if (dataDiff !== 0) return dataDiff;
      return (b.id_interacao || 0) - (a.id_interacao || 0);
    });
  }

  /**
   * Filtra as interações de acordo com busca por texto e canal selecionado
   */
  getFilteredInteracoes() {
    const all = this.getAllInteracoesSorted();
    const q = this.searchQuery.trim().toLowerCase();
    const canal = this.filterCanal;

    return all.filter(item => {
      // Filtro de canal
      if (canal !== "todos" && item.canal !== canal) {
        return false;
      }

      // Filtro de busca textual
      if (!q) return true;

      const nomeEvento = this.resolveNomeEvento(item).toLowerCase();
      const empresa = (item.empresa || "").toLowerCase();
      const contato = (item.contato || "").toLowerCase();
      const resumo = (item.resumo || "").toLowerCase();
      const tipo = (item.tipo_interacao || "").toLowerCase();
      const detalhes = (item.detalhes || "").toLowerCase();

      return empresa.includes(q) ||
             nomeEvento.includes(q) ||
             contato.includes(q) ||
             resumo.includes(q) ||
             tipo.includes(q) ||
             detalhes.includes(q);
    });
  }

  /**
   * Renderiza a View completa no container especificado
   */
  render(container) {
    this.container = container;
    if (!this.container) return;

    const allInteracoes = this.getAllInteracoesSorted();

    // Monta o esqueleto da toolbar e da lista
    this.container.innerHTML = `
      <section class="interacoes-feed-wrapper">
        <!-- Barra de ferramentas e busca -->
        <div class="interacoes-toolbar">
          <div class="interacoes-toolbar-info">
            <h2 class="interacoes-view-title">
              <span>💬</span> Linha de Interações com Expositores
            </h2>
            <p class="interacoes-view-subtitle">
              Feed cronológico em ordem decrescente de contatos comerciais, briefings e follow-ups.
            </p>
          </div>

          <div class="interacoes-toolbar-controls">
            <div class="interacoes-search-box">
              <span class="search-icon">🔍</span>
              <input 
                type="search" 
                id="input-interacoes-search" 
                class="interacoes-search-input" 
                placeholder="Filtrar por empresa, evento, contato ou assunto..." 
                value="${this.escapeHtml(this.searchQuery)}"
              />
            </div>

            <div class="interacoes-filter-box">
              <select id="select-interacoes-canal" class="interacoes-select-filter">
                <option value="todos" ${this.filterCanal === "todos" ? "selected" : ""}>Todos os Canais</option>
                <option value="WhatsApp" ${this.filterCanal === "WhatsApp" ? "selected" : ""}>🟢 WhatsApp</option>
                <option value="E-mail" ${this.filterCanal === "E-mail" ? "selected" : ""}>✉️ E-mail</option>
                <option value="Ligação Telefônica" ${this.filterCanal === "Ligação Telefônica" ? "selected" : ""}>📞 Ligação Telefônica</option>
                <option value="Presencial / Reunião" ${this.filterCanal === "Presencial / Reunião" ? "selected" : ""}>👥 Presencial</option>
                <option value="Reunião Online" ${this.filterCanal === "Reunião Online" ? "selected" : ""}>💻 Reunião Online</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicador de total de registros -->
        <div class="interacoes-status-bar">
          <span id="interacoes-counter" class="interacoes-counter-badge">
            Exibindo ${allInteracoes.length} interações
          </span>
          <span class="interacoes-hint-text">
            💡 Dica: Clique em qualquer card para abrir o histórico completo do cliente no evento específico.
          </span>
        </div>

        <!-- Grid de Cards de Interações -->
        <div id="interacoes-cards-container" class="interacoes-cards-grid">
          <!-- Cards renderizados dinamicamente -->
        </div>
      </section>
    `;

    // Conectar listeners de busca e filtro
    const searchInput = this.container.querySelector("#input-interacoes-search");
    if (searchInput) {
      this.boundSearchHandler = (e) => {
        this.searchQuery = e.target.value;
        this.renderCardsOnly();
      };
      searchInput.addEventListener("input", this.boundSearchHandler);
    }

    const selectCanal = this.container.querySelector("#select-interacoes-canal");
    if (selectCanal) {
      this.boundCanalHandler = (e) => {
        this.filterCanal = e.target.value;
        this.renderCardsOnly();
      };
      selectCanal.addEventListener("change", this.boundCanalHandler);
    }

    // Renderizar os cards
    this.renderCardsOnly();
  }

  /**
   * Renderiza apenas os cards (para atualização rápida ao filtrar sem rebuild do DOM da toolbar)
   */
  renderCardsOnly() {
    const cardsContainer = this.container?.querySelector("#interacoes-cards-container");
    const counterEl = this.container?.querySelector("#interacoes-counter");
    if (!cardsContainer) return;

    const filtered = this.getFilteredInteracoes();

    if (counterEl) {
      counterEl.textContent = `Exibindo ${filtered.length} de ${this.getAllInteracoesSorted().length} interações`;
    }

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `
        <div class="interacoes-empty-state">
          <span class="empty-icon">🔍</span>
          <h3>Nenhuma interação encontrada</h3>
          <p>Tente ajustar os termos da busca ou selecione outro canal de contato.</p>
        </div>
      `;
      return;
    }

    const channelIcons = {
      "WhatsApp": "🟢 WhatsApp",
      "E-mail": "✉️ E-mail",
      "Ligação Telefônica": "📞 Ligação Telefônica",
      "Presencial / Reunião": "👥 Presencial / Reunião",
      "Reunião Online": "💻 Reunião Online"
    };

    let html = "";
    filtered.forEach((item, index) => {
      const nomeEvento = this.resolveNomeEvento(item);
      const isReceptiva = item.direcao && item.direcao.includes("Receptiva");
      const direcaoClass = isReceptiva ? "dir-inbound" : "dir-outbound";
      const canalLabel = channelIcons[item.canal] || item.canal || "Contato";

      html += `
        <article class="interacao-feed-card" data-index="${index}">
          <!-- Cabeçalho do Card: Data, Evento e Canal -->
          <div class="card-meta-header">
            <span class="card-date-badge">📅 ${this.formatDateBR(item.data_interacao)}</span>
            <span class="card-event-badge" title="Evento associado">${this.escapeHtml(nomeEvento)}</span>
            <div class="card-meta-right">
              <span class="card-channel-pill">${canalLabel}</span>
              <span class="card-dir-pill ${direcaoClass}">${isReceptiva ? "Receptiva" : "Ativa"}</span>
            </div>
          </div>

          <!-- Corpo do Card: Empresa Cliente, Contato e Resumo -->
          <div class="card-content-body">
            <div class="card-company-row">
              <h3 class="card-company-name">${this.escapeHtml(item.empresa)}</h3>
              <span class="card-type-tag">${this.escapeHtml(item.tipo_interacao || "Interação")}</span>
            </div>

            ${item.contato ? `
              <p class="card-contact-name">
                <span>👤</span> <strong>Contato:</strong> ${this.escapeHtml(item.contato)}
              </p>
            ` : ""}

            <p class="card-summary-text">${this.escapeHtml(item.resumo)}</p>

            ${item.detalhes ? `
              <p class="card-details-snippet">${this.escapeHtml(item.detalhes)}</p>
            ` : ""}

            ${item.proxima_acao_gerada && item.proxima_acao_gerada.acao ? `
              <div class="card-next-action-callout">
                <span class="action-tag">⏰ Próxima Ação:</span>
                <span class="action-desc">${this.escapeHtml(item.proxima_acao_gerada.acao)}</span>
                ${item.proxima_acao_gerada.data_prevista ? `<small>(${this.formatDateBR(item.proxima_acao_gerada.data_prevista)})</small>` : ""}
              </div>
            ` : ""}
          </div>

          <!-- Rodapé de Ação com convite de clique -->
          <div class="card-action-footer">
            <span class="card-author-info">Responsável: ${this.escapeHtml(item.responsavel || "Augusto E. da Silva")}</span>
            <button class="btn btn-sm btn-primary btn-open-history">
              Ver histórico deste cliente no evento →
            </button>
          </div>
        </article>
      `;
    });

    cardsContainer.innerHTML = html;

    // Conectar eventos de clique nos cards
    const cards = cardsContainer.querySelectorAll(".interacao-feed-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const idx = card.getAttribute("data-index");
        const item = filtered[idx];
        if (typeof this.onCardClick === "function" && item) {
          this.onCardClick(item);
        }
      });
    });
  }

  /**
   * Descarrega e limpa completamente a view do DOM
   */
  destroy() {
    if (this.container) {
      // Remove listeners
      const searchInput = this.container.querySelector("#input-interacoes-search");
      if (searchInput && this.boundSearchHandler) {
        searchInput.removeEventListener("input", this.boundSearchHandler);
      }

      const selectCanal = this.container.querySelector("#select-interacoes-canal");
      if (selectCanal && this.boundCanalHandler) {
        selectCanal.removeEventListener("change", this.boundCanalHandler);
      }

      // Descarrega o DOM
      this.container.innerHTML = "";
      this.container = null;
    }
  }
}

window.InteracoesViewManager = InteracoesViewManager;
