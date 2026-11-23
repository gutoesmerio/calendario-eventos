/**
 * modal.js - Gerenciamento de modais (Detalhes do Evento, Lista do Dia e Importador JSON)
 */

class ModalManager {
  constructor() {
    this.eventDetailModal = document.getElementById("event-detail-modal");
    this.dayEventsModal = document.getElementById("day-events-modal");
    this.importJsonModal = document.getElementById("import-json-modal");

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

    // Fechar ao pressionar ESC
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

  /**
   * Exibe o card com os dados completos da entidade de evento
   */
  showEventDetails(event) {
    if (!this.eventDetailModal) return;

    const colors = window.getEventColor(event.id);
    const container = this.eventDetailModal.querySelector(".modal-body");

    const prioridadeClass = {
      "Alta": "priority-high",
      "Média": "priority-medium",
      "Baixa": "priority-low"
    }[event.estrategia_comercial?.prioridade] || "priority-default";

    container.innerHTML = `
      <div class="event-detail-header" style="border-left: 6px solid ${colors.bg};">
        <div class="event-detail-title-row">
          <h2 class="event-title">${this.escapeHtml(event.nome_evento)}</h2>
          <span class="priority-badge ${prioridadeClass}">
            ${event.estrategia_comercial?.prioridade ? `Prioridade ${event.estrategia_comercial.prioridade}` : "Prioridade N/D"}
          </span>
        </div>
        ${event.sigla_ou_edicao ? `<p class="event-subtitle">${this.escapeHtml(event.sigla_ou_edicao)}</p>` : ""}
      </div>

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
          <h3>💼 Estratégia Comercial</h3>
          ${event.estrategia_comercial?.perfil_alvo_expositores ? `<p><strong>Perfil Alvo:</strong> ${this.escapeHtml(event.estrategia_comercial.perfil_alvo_expositores)}</p>` : ""}
          ${event.estrategia_comercial?.acao_comercial ? `<p><strong>Ação Comercial:</strong> ${this.escapeHtml(event.estrategia_comercial.acao_comercial)}</p>` : ""}
        </div>
      </div>

      <div class="detail-json-toggle">
        <details>
          <summary>Ver JSON Completo da Entidade</summary>
          <pre class="json-code"><code>${this.escapeHtml(JSON.stringify(event, null, 2))}</code></pre>
        </details>
      </div>
    `;

    this.showModal(this.eventDetailModal);
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

  showImportModal() {
    this.showModal(this.importJsonModal);
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
