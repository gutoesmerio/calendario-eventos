/**
 * modal.js - Gerenciamento de modais com Abas de Detalhes do Evento e Propostas Comerciais Ativas
 */

class ModalManager {
  constructor() {
    this.eventDetailModal = document.getElementById("event-detail-modal");
    this.dayEventsModal = document.getElementById("day-events-modal");

    this.currentEvent = null;
    this.initCloseTriggers();
  }

  initCloseTriggers() {
    document.querySelectorAll(".modal-backdrop, .modal-close-btn").forEach(el => {
      el.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("modal-close-btn")) {
          this.closeAll();
        }
      });
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAll();
      }
    });
  }

  closeAll() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
  }

  showModal(modalEl) {
    if (modalEl) {
      this.closeAll();
      modalEl.classList.add("active");
    }
  }

  formatCurrency(value) {
    if (value === undefined || value === null) return "R$ 0,00";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }

  formatDateBR(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  /**
   * Exibe o modal do evento com abas [Detalhes do Evento] e [Propostas Ativas]
   */
  showEventDetails(event) {
    if (!this.eventDetailModal) return;
    this.currentEvent = event;

    const colors = window.getEventColor(event.id);
    const propostas = window.propostasStore ? window.propostasStore.getPropostasByEventoId(event.id) : [];
    const container = this.eventDetailModal.querySelector(".modal-body");

    const prioridadeClass = {
      "Alta": "priority-high",
      "Média": "priority-medium",
      "Baixa": "priority-low"
    }[event.estrategia_comercial?.prioridade] || "priority-default";

    container.innerHTML = `
      <!-- Cabeçalho do Evento com Indicador de Cor -->
      <div class="event-detail-header" style="border-left: 6px solid ${colors.bg};">
        <div class="event-detail-title-row">
          <h2 class="event-title">${this.escapeHtml(event.nome_evento)}</h2>
          <span class="priority-badge ${prioridadeClass}">
            ${event.estrategia_comercial?.prioridade ? `Prioridade ${event.estrategia_comercial.prioridade}` : "Prioridade N/D"}
          </span>
        </div>
        ${event.sigla_ou_edicao ? `<p class="event-subtitle">${this.escapeHtml(event.sigla_ou_edicao)}</p>` : ""}
      </div>

      <!-- Barra de Abas (Tabs) -->
      <div class="modal-tabs-nav">
        <button id="tab-btn-detalhes" class="modal-tab-btn active" data-tab="detalhes">
          <span>ℹ️</span> Detalhes do Evento
        </button>
        <button id="tab-btn-propostas" class="modal-tab-btn" data-tab="propostas">
          <span>💼</span> Propostas Ativas <span class="tab-badge">${propostas.length}</span>
        </button>
      </div>

      <!-- Conteúdo da Aba 1: Detalhes do Evento -->
      <div id="tab-pane-detalhes" class="modal-tab-pane active">
        <div class="detail-grid">
          <div class="detail-section">
            <h3>📅 Período & Duração</h3>
            <p><strong>Datas:</strong> ${event.periodo.periodo_formatado || `${event.periodo.data_inicio} até ${event.periodo.data_fim}`}</p>
            <p><strong>Duração:</strong> ${event.periodo.duracao_dias ? `${event.periodo.duracao_dias} dias corridos` : "N/D"}</p>
            ${event.periodo.dias_para_o_evento !== undefined ? `<p><strong>Contagem Regressiva:</strong> ${event.periodo.dias_para_o_evento} dias restantes</p>` : ""}
          </div>

          <div class="detail-section">
            <h3>📍 Localização</h3>
            ${event.localizacao.recinto ? `<p><strong>Recinto:</strong> ${this.escapeHtml(event.localizacao.recinto)}</p>` : ""}
            <p><strong>Cidade / UF:</strong> ${this.escapeHtml(event.localizacao.cidade)} - ${this.escapeHtml(event.localizacao.estado)}</p>
            ${event.localizacao.endereco ? `<p><strong>Endereço:</strong> ${this.escapeHtml(event.localizacao.endereco)}</p>` : ""}
          </div>

          <div class="detail-section">
            <h3>🏷️ Segmento & Promotora</h3>
            <p><strong>Segmento:</strong> ${this.escapeHtml(event.segmento)}</p>
            ${event.promotora?.organizadora ? `<p><strong>Organizadora:</strong> ${this.escapeHtml(event.promotora.organizadora)}</p>` : ""}
            ${event.promotora?.iniciativa ? `<p><strong>Iniciativa:</strong> ${this.escapeHtml(event.promotora.iniciativa)}</p>` : ""}
            ${event.promotora?.site_oficial ? `<p><strong>Site Oficial:</strong> <a href="${this.escapeHtml(event.promotora.site_oficial)}" target="_blank" rel="noopener noreferrer">${this.escapeHtml(event.promotora.site_oficial)}</a></p>` : ""}
          </div>

          <div class="detail-section">
            <h3>💼 Estratégia Comercial do Evento</h3>
            ${event.estrategia_comercial?.perfil_alvo_expositores ? `<p><strong>Perfil Alvo:</strong> ${this.escapeHtml(event.estrategia_comercial.perfil_alvo_expositores)}</p>` : ""}
            ${event.estrategia_comercial?.acao_comercial ? `<p><strong>Ação Comercial:</strong> ${this.escapeHtml(event.estrategia_comercial.acao_comercial)}</p>` : ""}
          </div>
        </div>

        <div class="detail-json-toggle">
          <details>
            <summary>Ver JSON Completo do Evento</summary>
            <pre class="json-code"><code>${this.escapeHtml(JSON.stringify(event, null, 2))}</code></pre>
          </details>
        </div>
      </div>

      <!-- Conteúdo da Aba 2: Propostas Ativas -->
      <div id="tab-pane-propostas" class="modal-tab-pane">
        <div id="propostas-container">
          <!-- Preenchido via renderPropostasList ou renderPropostaDetails -->
        </div>
      </div>
    `;

    // Listeners das Abas
    const tabBtns = container.querySelectorAll(".modal-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        tabBtns.forEach(b => b.classList.remove("active"));
        container.querySelectorAll(".modal-tab-pane").forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        const pane = container.querySelector(`#tab-pane-${tab}`);
        if (pane) pane.classList.add("active");

        if (tab === "propostas") {
          this.renderPropostasList(propostas);
        }
      });
    });

    this.showModal(this.eventDetailModal);
  }

  /**
   * Renderiza a lista de empresas com propostas ativas
   */
  renderPropostasList(propostas) {
    const container = document.getElementById("propostas-container");
    if (!container) return;

    if (!propostas || propostas.length === 0) {
      container.innerHTML = `
        <div class="empty-propostas-state">
          <span style="font-size: 2rem;">📭</span>
          <p>Nenhuma proposta ativa vinculada a este evento no momento.</p>
        </div>
      `;
      return;
    }

    const totalValor = propostas.reduce((sum, p) => sum + (p.comercial?.valor_proposta || 0), 0);
    const totalPonderado = propostas.reduce((sum, p) => sum + (p.comercial?.valor_ponderado || 0), 0);

    let html = `
      <div class="propostas-summary-bar">
        <div>
          <span class="summary-label">Total de Empresas:</span>
          <strong>${propostas.length}</strong>
        </div>
        <div>
          <span class="summary-label">Volume Total:</span>
          <strong class="text-success">${this.formatCurrency(totalValor)}</strong>
        </div>
        <div>
          <span class="summary-label">Ponderado:</span>
          <strong>${this.formatCurrency(totalPonderado)}</strong>
        </div>
      </div>

      <div class="propostas-list-title">
        <span>Selecione uma empresa para visualizar a proposta completa:</span>
      </div>

      <div class="propostas-list">
    `;

    propostas.forEach((prop, index) => {
      const tempClass = {
        "Quente": "temp-hot",
        "Morno": "temp-warm",
        "Frio": "temp-cold"
      }[prop.comercial?.temperatura] || "temp-default";

      html += `
        <div class="proposta-company-card" data-index="${index}">
          <div class="proposta-company-main">
            <div class="proposta-company-header">
              <h4 class="company-name">${this.escapeHtml(prop.cliente.empresa)}</h4>
              <span class="temp-badge ${tempClass}">
                🔥 ${prop.comercial?.temperatura || "N/D"}
              </span>
            </div>
            <div class="proposta-company-meta">
              <span>👤 ${this.escapeHtml(prop.cliente.contato_principal)} (${this.escapeHtml(prop.cliente.cargo || "Contato")})</span>
              ${prop.estande?.localizacao_estande ? `<span>📍 ${this.escapeHtml(prop.estande.localizacao_estande)}</span>` : ""}
              <span>📊 ${this.escapeHtml(prop.comercial.estagio_proposta)}</span>
            </div>
          </div>
          <div class="proposta-company-action">
            <span class="proposta-value">${this.formatCurrency(prop.comercial?.valor_proposta)}</span>
            <button class="btn btn-sm btn-outline">Ver Proposta →</button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Listeners de clique nas empresas
    container.querySelectorAll(".proposta-company-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = card.getAttribute("data-index");
        this.renderPropostaDetails(propostas[idx], propostas);
      });
    });
  }

  /**
   * Renderiza os dados detalhados da proposta de uma empresa específica com abas de Dados e Interações
   */
  renderPropostaDetails(prop, propostasList) {
    const container = document.getElementById("propostas-container");
    if (!container) return;

    const tempClass = {
      "Quente": "temp-hot",
      "Morno": "temp-warm",
      "Frio": "temp-cold"
    }[prop.comercial?.temperatura] || "temp-default";

    const interacoes = window.interacoesStore ? window.interacoesStore.getInteracoesByProposta(prop) : [];

    container.innerHTML = `
      <div class="proposta-detail-wrapper">
        <!-- Botão de Voltar para lista de empresas -->
        <button id="btn-back-to-propostas" class="btn btn-sm btn-outline btn-back">
          ◀ Voltar para lista de empresas
        </button>

        <!-- Cabeçalho da Proposta -->
        <div class="proposta-header-card">
          <div class="proposta-header-info">
            <span class="proposta-id-badge">Proposta #${prop.id_proposta}</span>
            <h3 class="proposta-company-title">${this.escapeHtml(prop.cliente.empresa)}</h3>
            <p class="proposta-event-name">Evento: ${this.escapeHtml(prop.nome_evento)}</p>
          </div>
          <div class="proposta-header-commercial">
            <span class="temp-badge ${tempClass}">Temperatura: ${prop.comercial?.temperatura || "N/D"}</span>
            <span class="proposta-big-value">${this.formatCurrency(prop.comercial?.valor_proposta)}</span>
            <span class="proposta-prob">Probabilidade: ${prop.comercial?.probabilidade_fechamento_pct || 0}% (Ponderado: ${this.formatCurrency(prop.comercial?.valor_ponderado)})</span>
          </div>
        </div>

        <!-- Abas Internas da Proposta (Dados Comerciais vs Interações) -->
        <div class="proposta-tabs-nav">
          <button class="prop-tab-btn active" data-proptab="dados">
            <span>📋</span> Dados da Proposta
          </button>
          <button class="prop-tab-btn" data-proptab="interacoes">
            <span>💬</span> Histórico de Interações <span class="tab-badge">${interacoes.length}</span>
          </button>
        </div>

        <!-- ABA 1: Dados da Proposta -->
        <div id="prop-tab-pane-dados" class="prop-tab-pane active">
          <div class="detail-grid">
            <!-- 1. Dados do Cliente / Lead -->
            <div class="detail-section">
              <h3>👤 Dados do Cliente / Contato</h3>
              <p><strong>Empresa:</strong> ${this.escapeHtml(prop.cliente.empresa)}</p>
              <p><strong>Contato Principal:</strong> ${this.escapeHtml(prop.cliente.contato_principal || "N/D")}</p>
              ${prop.cliente.cargo ? `<p><strong>Cargo:</strong> ${this.escapeHtml(prop.cliente.cargo)}</p>` : ""}
              ${prop.cliente.canal_preferencial ? `<p><strong>Canal Preferencial:</strong> ${this.escapeHtml(prop.cliente.canal_preferencial)}</p>` : ""}
              ${prop.cliente.telefone ? `<p><strong>Telefone:</strong> ${this.escapeHtml(prop.cliente.telefone)}</p>` : ""}
              ${prop.cliente.email ? `<p><strong>E-mail:</strong> <a href="mailto:${this.escapeHtml(prop.cliente.email)}">${this.escapeHtml(prop.cliente.email)}</a></p>` : ""}
            </div>

            <!-- 2. Dados do Estande -->
            <div class="detail-section">
              <h3>🏗️ Especificações do Estande</h3>
              <p><strong>Tipo:</strong> ${this.escapeHtml(prop.estande?.tipo_estande || "A definir")}</p>
              <p><strong>Metragem:</strong> ${prop.estande?.metragem_m2 ? `${prop.estande.metragem_m2} m²` : "A definir"}</p>
              ${prop.estande?.localizacao_estande ? `<p><strong>Localização / Número:</strong> ${this.escapeHtml(prop.estande.localizacao_estande)}</p>` : ""}
              ${prop.estande?.status_projeto ? `<p><strong>Status do Projeto 3D:</strong> <span class="badge-status">${this.escapeHtml(prop.estande.status_projeto)}</span></p>` : ""}
            </div>

            <!-- 3. Situação Comercial -->
            <div class="detail-section">
              <h3>📊 Status Comercial</h3>
              <p><strong>Estágio da Proposta:</strong> ${this.escapeHtml(prop.comercial?.estagio_proposta || "N/D")}</p>
              <p><strong>Valor Proposta:</strong> ${this.formatCurrency(prop.comercial?.valor_proposta)}</p>
              <p><strong>Probabilidade de Fechamento:</strong> ${prop.comercial?.probabilidade_fechamento_pct || 0}%</p>
              <p><strong>Valor Ponderado:</strong> ${this.formatCurrency(prop.comercial?.valor_ponderado)}</p>
              ${prop.comercial?.data_previsao_fechamento ? `<p><strong>Previsão de Fechamento:</strong> ${this.formatDateBR(prop.comercial.data_previsao_fechamento)}</p>` : ""}
            </div>

            <!-- 4. Responsável e Gestão -->
            <div class="detail-section">
              <h3>👔 Gestão da Conta</h3>
              <p><strong>Responsável:</strong> ${this.escapeHtml(prop.responsavel || "Augusto E. da Silva")}</p>
              <p><strong>Status do Relacionamento:</strong> ${prop.comercial?.temperatura ? `Oportunidade ${prop.comercial.temperatura}` : "Ativa"}</p>
              ${interacoes.length > 0 && interacoes[0].proxima_acao_gerada?.acao ? `
                <div class="next-action-box" style="margin-top: 0.5rem;">
                  <strong>⏰ Próxima Ação:</strong> ${this.escapeHtml(interacoes[0].proxima_acao_gerada.acao)}
                  ${interacoes[0].proxima_acao_gerada.data_prevista ? `<br><small>Previsão: ${this.formatDateBR(interacoes[0].proxima_acao_gerada.data_prevista)}</small>` : ""}
                </div>
              ` : ""}
            </div>
          </div>

          <!-- JSON Completo da Proposta -->
          <div class="detail-json-toggle">
            <details>
              <summary>Ver JSON Completo da Proposta Comercial</summary>
              <pre class="json-code"><code>${this.escapeHtml(JSON.stringify(prop, null, 2))}</code></pre>
            </details>
          </div>
        </div>

        <!-- ABA 2: Histórico de Interações (Timeline) -->
        <div id="prop-tab-pane-interacoes" class="prop-tab-pane">
          ${this.renderInteracoesTimeline(interacoes)}
        </div>
      </div>
    `;

    // Listener do botão de voltar
    document.getElementById("btn-back-to-propostas").addEventListener("click", () => {
      this.renderPropostasList(propostasList);
    });

    // Listeners das Abas Internas da Proposta
    const propTabBtns = container.querySelectorAll(".prop-tab-btn");
    propTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-proptab");
        propTabBtns.forEach(b => b.classList.remove("active"));
        container.querySelectorAll(".prop-tab-pane").forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        const pane = container.querySelector(`#prop-tab-pane-${tab}`);
        if (pane) pane.classList.add("active");
      });
    });
  }

  /**
   * Renderiza a Timeline cronológica das interações de uma proposta
   */
  renderInteracoesTimeline(interacoes) {
    if (!interacoes || interacoes.length === 0) {
      return `
        <div class="empty-propostas-state">
          <span style="font-size: 2rem;">💬</span>
          <p>Nenhuma interação registrada para esta proposta até o momento.</p>
        </div>
      `;
    }

    const channelIcons = {
      "WhatsApp": "🟢 WhatsApp",
      "E-mail": "✉️ E-mail",
      "Ligação Telefônica": "📞 Ligação Telefônica",
      "Presencial / Reunião": "👥 Presencial / Reunião",
      "Reunião Online": "💻 Reunião Online"
    };

    let html = `
      <div class="interacoes-timeline-header">
        <span class="timeline-count-badge">${interacoes.length} interações registradas</span>
      </div>
      <div class="interacoes-timeline">
    `;

    interacoes.forEach(item => {
      const isReceptiva = item.direcao && item.direcao.includes("Receptiva");
      const direcaoClass = isReceptiva ? "dir-inbound" : "dir-outbound";
      const canalLabel = channelIcons[item.canal] || item.canal || "Contato";

      html += `
        <div class="timeline-interaction-card">
          <div class="interaction-top-bar">
            <div class="interaction-meta">
              <span class="interaction-channel">${canalLabel}</span>
              <span class="interaction-date">📅 ${this.formatDateBR(item.data_interacao)}</span>
              <span class="interaction-dir ${direcaoClass}">${this.escapeHtml(item.direcao || "Contato")}</span>
            </div>
            <span class="interaction-type-badge">${this.escapeHtml(item.tipo_interacao || "Interação")}</span>
          </div>

          ${item.contato ? `<p class="interaction-contact">👤 <strong>Interlocutor:</strong> ${this.escapeHtml(item.contato)}</p>` : ""}

          <div class="interaction-body">
            <h4 class="interaction-summary">${this.escapeHtml(item.resumo)}</h4>
            ${item.detalhes ? `<p class="interaction-details">${this.escapeHtml(item.detalhes)}</p>` : ""}
          </div>

          ${item.anexos && item.anexos.length > 0 ? `
            <div class="interaction-attachments">
              <span class="attach-label">📎 Anexos:</span>
              ${item.anexos.map(anexo => `<span class="attach-chip">${this.escapeHtml(anexo)}</span>`).join("")}
            </div>
          ` : ""}

          ${item.proxima_acao_gerada && item.proxima_acao_gerada.acao ? `
            <div class="interaction-next-action">
              <span class="next-action-title">⏰ Próxima Ação Gerada:</span>
              <p class="next-action-text">${this.escapeHtml(item.proxima_acao_gerada.acao)}</p>
              ${item.proxima_acao_gerada.data_prevista ? `<span class="next-action-date">Previsão: ${this.formatDateBR(item.proxima_acao_gerada.data_prevista)}</span>` : ""}
            </div>
          ` : ""}

          <div class="interaction-footer">
            <small class="interaction-author">Responsável: ${this.escapeHtml(item.responsavel || "Augusto E. da Silva")}</small>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  /**
   * Exibe a lista de todos os eventos de um dia específico
   */
  showDayEvents(dateStr, events) {
    if (!this.dayEventsModal) return;

    const [y, m, d] = dateStr.split("-");
    const formattedDate = `${d}/${m}/${y}`;

    const titleEl = this.dayEventsModal.querySelector(".modal-title");
    titleEl.textContent = `Eventos em ${formattedDate} (${events.length})`;

    const container = this.dayEventsModal.querySelector(".modal-body");
    container.innerHTML = "";

    if (events.length === 0) {
      container.innerHTML = `<p class="empty-state">Nenhum evento registrado para esta data.</p>`;
    } else {
      const list = document.createElement("div");
      list.className = "day-events-list";

      events.forEach(ev => {
        const colors = window.getEventColor(ev.id);
        const card = document.createElement("div");
        card.className = "day-event-card";
        card.style.borderLeftColor = colors.bg;

        card.innerHTML = `
          <div class="day-event-info">
            <h4 class="day-event-title">${this.escapeHtml(ev.nome_evento)}</h4>
            <span class="day-event-period">${this.escapeHtml(ev.periodo.periodo_formatado || `${ev.periodo.data_inicio} até ${ev.periodo.data_fim}`)}</span>
            <span class="day-event-loc">${this.escapeHtml(ev.localizacao.cidade)}/${this.escapeHtml(ev.localizacao.estado)}</span>
          </div>
          <button class="btn-sm btn-outline">Ver Detalhes</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
          this.showEventDetails(ev);
        });

        list.appendChild(card);
      });

      container.appendChild(list);
    }

    this.showModal(this.dayEventsModal);
  }

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

window.ModalManager = ModalManager;
