/**
 * calendar.js - Mecanismo de renderização de calendário com suporte a 1 Mês, 3 Meses, 6 Meses e 1 Ano
 */

class CalendarRenderer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.maxVisibleTracks = options.maxVisibleTracks || 3;
    this.currentDate = options.initialDate || new Date(2027, 4, 1); // Padrão Maio de 2027
    this.currentView = options.initialView || "1m"; // "1m", "3m", "6m", "1y"
    
    this.onEventClick = options.onEventClick || (() => {});
    this.onMoreClick = options.onMoreClick || (() => {});
    this.onDayClick = options.onDayClick || (() => {});
    this.onViewChange = options.onViewChange || (() => {});
  }

  setView(viewMode) {
    this.currentView = viewMode;
    this.render();
    if (this.onViewChange) {
      this.onViewChange(this.currentView);
    }
  }

  setDate(date) {
    this.currentDate = new Date(date);
    this.render();
  }

  prev() {
    if (this.currentView === "1y") {
      this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
    } else {
      // Nas visualizações de 1 mês, 3 meses e 6 meses, o período se move apenas 1 mês
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    }
    this.render();
  }

  next() {
    if (this.currentView === "1y") {
      this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
    } else {
      // Nas visualizações de 1 mês, 3 meses e 6 meses, o período se move apenas 1 mês
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
    this.render();
  }

  today() {
    this.currentDate = new Date(2027, 4, 1); // Fixando no ano do mock (ou new Date())
    this.render();
  }

  getMonthName(monthIndex) {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[monthIndex];
  }

  getCurrentPeriodLabel() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    if (this.currentView === "1m") {
      return `${this.getMonthName(month)} de ${year}`;
    }

    if (this.currentView === "3m") {
      const endMonthDate = new Date(year, month + 2, 1);
      const endMonth = endMonthDate.getMonth();
      const endYear = endMonthDate.getFullYear();
      if (year === endYear) {
        return `${this.getMonthName(month)} – ${this.getMonthName(endMonth)} de ${year}`;
      }
      return `${this.getMonthName(month)}/${year} – ${this.getMonthName(endMonth)}/${endYear}`;
    }

    if (this.currentView === "6m") {
      const endMonthDate = new Date(year, month + 5, 1);
      const endMonth = endMonthDate.getMonth();
      const endYear = endMonthDate.getFullYear();
      if (year === endYear) {
        return `${this.getMonthName(month)} – ${this.getMonthName(endMonth)} de ${year}`;
      }
      return `${this.getMonthName(month)}/${year} – ${this.getMonthName(endMonth)}/${endYear}`;
    }

    if (this.currentView === "1y") {
      return `Ano de ${year}`;
    }

    return `${this.getMonthName(month)} de ${year}`;
  }

  parseLocalDate(dateStr) {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  buildWeeksForMonth(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    const endDate = new Date(lastDayOfMonth);
    endDate.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

    const weeks = [];
    let currentDay = new Date(startDate);

    while (currentDay <= endDate) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
      }
      weeks.push(week);
    }

    return weeks;
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = "";

    const events = window.eventStore.getEvents();

    if (this.currentView === "1m") {
      this.renderSingleMonthView(this.currentDate.getFullYear(), this.currentDate.getMonth(), events);
    } else if (this.currentView === "3m") {
      this.renderMultiMonthView(3, events);
    } else if (this.currentView === "6m") {
      this.renderMultiMonthView(6, events);
    } else if (this.currentView === "1y") {
      this.renderYearView(this.currentDate.getFullYear(), events);
    }
  }

  /**
   * VISÃO 1 MÊS - Detalhada com Trilhas de Slots Fixos
   */
  renderSingleMonthView(year, month, events) {
    const card = document.createElement("div");
    card.className = "calendar-card single-month-card";

    // Cabeçalho dos dias da semana
    const headerRow = document.createElement("div");
    headerRow.className = "calendar-weekdays";
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    weekdays.forEach(day => {
      const col = document.createElement("div");
      col.className = "calendar-weekday";
      col.textContent = day;
      headerRow.appendChild(col);
    });
    card.appendChild(headerRow);

    const weeksContainer = document.createElement("div");
    weeksContainer.className = "calendar-weeks";

    const weeks = this.buildWeeksForMonth(year, month);
    const today = new Date();

    weeks.forEach(weekDays => {
      const weekRow = this.createWeekRow(weekDays, year, month, events, today, {
        maxTracks: 3,
        slotHeight: 26,
        isCompact: false
      });
      weeksContainer.appendChild(weekRow);
    });

    card.appendChild(weeksContainer);
    this.container.appendChild(card);
  }

  /**
   * VISÃO 3 E 6 MESES - Grade Multi-Mês com Faixas Compactas
   */
  renderMultiMonthView(monthCount, events) {
    const gridContainer = document.createElement("div");
    gridContainer.className = `multi-month-grid count-${monthCount}`;

    const startYear = this.currentDate.getFullYear();
    const startMonth = this.currentDate.getMonth();
    const today = new Date();

    for (let i = 0; i < monthCount; i++) {
      const targetDate = new Date(startYear, startMonth + i, 1);
      const y = targetDate.getFullYear();
      const m = targetDate.getMonth();

      const monthCard = document.createElement("div");
      monthCard.className = "calendar-card multi-month-card";

      // Cabeçalho do Card do Mês
      const monthHeader = document.createElement("div");
      monthHeader.className = "multi-month-header";
      
      const monthTitle = document.createElement("h3");
      monthTitle.className = "multi-month-title";
      monthTitle.textContent = `${this.getMonthName(m)} ${y}`;
      monthTitle.title = "Clique para abrir este mês no modo 1 Mês";
      monthTitle.addEventListener("click", () => {
        this.currentDate = new Date(y, m, 1);
        this.setView("1m");
      });
      monthHeader.appendChild(monthTitle);

      const expandBtn = document.createElement("button");
      expandBtn.className = "btn-sm btn-outline";
      expandBtn.textContent = "Focar Mês ↗";
      expandBtn.addEventListener("click", () => {
        this.currentDate = new Date(y, m, 1);
        this.setView("1m");
      });
      monthHeader.appendChild(expandBtn);

      monthCard.appendChild(monthHeader);

      // Dias da semana
      const headerRow = document.createElement("div");
      headerRow.className = "calendar-weekdays compact-weekdays";
      const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
      weekdays.forEach(day => {
        const col = document.createElement("div");
        col.className = "calendar-weekday";
        col.textContent = day;
        headerRow.appendChild(col);
      });
      monthCard.appendChild(headerRow);

      // Semanas
      const weeksContainer = document.createElement("div");
      weeksContainer.className = "calendar-weeks compact-weeks";

      const weeks = this.buildWeeksForMonth(y, m);
      weeks.forEach(weekDays => {
        const weekRow = this.createWeekRow(weekDays, y, m, events, today, {
          maxTracks: 2,
          slotHeight: 20,
          isCompact: true
        });
        weeksContainer.appendChild(weekRow);
      });

      monthCard.appendChild(weeksContainer);
      gridContainer.appendChild(monthCard);
    }

    this.container.appendChild(gridContainer);
  }

  /**
   * VISÃO ANUAL (12 MESES) + Timeline de Eventos
   */
  renderYearView(year, events) {
    const yearWrapper = document.createElement("div");
    yearWrapper.className = "year-view-wrapper";

    // 1. Grade de 12 meses
    const monthsGrid = document.createElement("div");
    monthsGrid.className = "year-months-grid";
    const today = new Date();

    for (let m = 0; m < 12; m++) {
      const monthCard = document.createElement("div");
      monthCard.className = "year-month-card";

      // Header com link para o mês
      const header = document.createElement("div");
      header.className = "year-month-header";
      header.textContent = this.getMonthName(m);
      header.title = `Abrir ${this.getMonthName(m)} em detalhes`;
      header.addEventListener("click", () => {
        this.currentDate = new Date(year, m, 1);
        this.setView("1m");
      });
      monthCard.appendChild(header);

      // Mini-semana cabeçalho
      const weekHeader = document.createElement("div");
      weekHeader.className = "year-mini-weekdays";
      ["D", "S", "T", "Q", "Q", "S", "S"].forEach(d => {
        const s = document.createElement("span");
        s.textContent = d;
        weekHeader.appendChild(s);
      });
      monthCard.appendChild(weekHeader);

      // Mini grade de dias
      const daysGrid = document.createElement("div");
      daysGrid.className = "year-mini-days-grid";

      const weeks = this.buildWeeksForMonth(year, m);
      weeks.forEach(week => {
        week.forEach(day => {
          const dayCell = document.createElement("div");
          dayCell.className = "year-mini-day";
          
          const isCurrentMonth = day.getMonth() === m;
          const isToday = this.isSameDay(day, today);

          if (!isCurrentMonth) {
            dayCell.classList.add("other-month");
          }
          if (isToday) {
            dayCell.classList.add("today");
          }

          dayCell.textContent = day.getDate();

          // Verificar se há eventos cobrindo este dia
          const dayDateStr = this.formatDateKey(day);
          const dayEvents = events.filter(ev => {
            return ev.periodo.data_inicio <= dayDateStr && ev.periodo.data_fim >= dayDateStr;
          });

          if (isCurrentMonth && dayEvents.length > 0) {
            dayCell.classList.add("has-events");
            // Usa a cor do evento principal
            const primaryColor = window.getEventColor(dayEvents[0].id);
            dayCell.style.backgroundColor = primaryColor.bg;
            dayCell.style.color = "#FFFFFF";
            dayCell.style.fontWeight = "700";

            // Se tiver múltiplos eventos
            if (dayEvents.length > 1) {
              dayCell.classList.add("multiple-events");
            }

            dayCell.title = `${dayDateStr}: ${dayEvents.map(e => e.nome_evento).join(" | ")}`;
            dayCell.addEventListener("click", () => {
              this.onDayClick({ date: day, dateStr: dayDateStr, events: dayEvents });
            });
          } else {
            dayCell.addEventListener("click", () => {
              this.currentDate = new Date(year, m, 1);
              this.setView("1m");
            });
          }

          daysGrid.appendChild(dayCell);
        });
      });

      monthCard.appendChild(daysGrid);
      monthsGrid.appendChild(monthCard);
    }

    yearWrapper.appendChild(monthsGrid);

    // 2. Timeline Anual de Eventos
    const timelineSection = document.createElement("section");
    timelineSection.className = "year-timeline-section";

    const timelineTitle = document.createElement("h2");
    timelineTitle.className = "year-timeline-title";
    timelineTitle.innerHTML = `<span>📋</span> Calendário Oficial de Feiras & Eventos de ${year}`;
    timelineSection.appendChild(timelineTitle);

    // Filtrar e ordenar eventos do ano
    const yearEvents = events.filter(ev => {
      const startYear = parseInt(ev.periodo.data_inicio.split("-")[0]);
      const endYear = parseInt(ev.periodo.data_fim.split("-")[0]);
      return startYear === year || endYear === year;
    });

    yearEvents.sort((a, b) => a.periodo.data_inicio.localeCompare(b.periodo.data_inicio));

    if (yearEvents.length === 0) {
      timelineSection.innerHTML += `<p class="empty-state">Nenhum evento registrado para o ano de ${year}.</p>`;
    } else {
      const list = document.createElement("div");
      list.className = "year-timeline-list";

      yearEvents.forEach(ev => {
        const colors = window.getEventColor(ev.id);
        const item = document.createElement("div");
        item.className = "year-timeline-item";
        item.style.borderLeftColor = colors.bg;

        const prioridadeClass = {
          "Alta": "priority-high",
          "Média": "priority-medium",
          "Baixa": "priority-low"
        }[ev.estrategia_comercial?.prioridade] || "priority-default";

        item.innerHTML = `
          <div class="timeline-date-col">
            <span class="timeline-month">${ev.periodo.periodo_formatado || ev.periodo.data_inicio}</span>
            <span class="timeline-duration">${ev.periodo.duracao_dias ? `${ev.periodo.duracao_dias} dias` : ""}</span>
          </div>
          <div class="timeline-info-col">
            <div class="timeline-title-row">
              <h4 class="timeline-event-name">${this.escapeHtml(ev.nome_evento)}</h4>
              <span class="priority-badge ${prioridadeClass}">${ev.estrategia_comercial?.prioridade ? `Prioridade ${ev.estrategia_comercial.prioridade}` : ""}</span>
            </div>
            <p class="timeline-loc">📍 ${this.escapeHtml(ev.localizacao.cidade)}/${this.escapeHtml(ev.localizacao.estado)} ${ev.localizacao.recinto ? `• ${this.escapeHtml(ev.localizacao.recinto)}` : ""}</p>
            <p class="timeline-segment">🏷️ ${this.escapeHtml(ev.segmento)}</p>
          </div>
          <div class="timeline-action-col">
            <button class="btn btn-sm btn-outline">Ver Detalhes</button>
          </div>
        `;

        item.querySelector("button").addEventListener("click", () => {
          this.onEventClick(ev);
        });

        list.appendChild(item);
      });

      timelineSection.appendChild(list);
    }

    yearWrapper.appendChild(timelineSection);
    this.container.appendChild(yearWrapper);
  }

  /**
   * Cria uma linha de semana com fundo de células e faixas de eventos
   */
  createWeekRow(weekDays, monthYear, monthIndex, events, today, options) {
    const { maxTracks, slotHeight, isCompact } = options;

    const weekEl = document.createElement("div");
    weekEl.className = `calendar-week-row ${isCompact ? "compact-row" : ""}`;

    const weekStart = weekDays[0];
    const weekEnd = weekDays[6];

    // Filtrar eventos da semana
    const weekEvents = events.filter(ev => {
      const start = this.parseLocalDate(ev.periodo.data_inicio);
      const end = this.parseLocalDate(ev.periodo.data_fim);
      return start <= weekEnd && end >= weekStart;
    });

    weekEvents.sort((a, b) => {
      const durA = a.periodo.duracao_dias || 1;
      const durB = b.periodo.duracao_dias || 1;
      if (durB !== durA) return durB - durA;
      const startA = this.parseLocalDate(a.periodo.data_inicio).getTime();
      const startB = this.parseLocalDate(b.periodo.data_inicio).getTime();
      if (startA !== startB) return startA - startB;
      return a.id - b.id;
    });

    // Alocação de trilhas
    const tracks = [];
    const eventSpans = [];

    weekEvents.forEach(ev => {
      const evStart = this.parseLocalDate(ev.periodo.data_inicio);
      const evEnd = this.parseLocalDate(ev.periodo.data_fim);

      let startCol = 0;
      let endCol = 6;

      if (evStart > weekStart) {
        startCol = weekDays.findIndex(d => this.isSameDay(d, evStart));
      }
      if (evEnd < weekEnd) {
        endCol = weekDays.findIndex(d => this.isSameDay(d, evEnd));
      }

      if (startCol === -1) startCol = 0;
      if (endCol === -1) endCol = 6;

      let assignedTrack = -1;
      for (let t = 0; t < tracks.length; t++) {
        let fits = true;
        for (let col = startCol; col <= endCol; col++) {
          if (tracks[t][col]) {
            fits = false;
            break;
          }
        }
        if (fits) {
          assignedTrack = t;
          break;
        }
      }

      if (assignedTrack === -1) {
        assignedTrack = tracks.length;
        tracks.push(new Array(7).fill(false));
      }

      for (let col = startCol; col <= endCol; col++) {
        tracks[assignedTrack][col] = true;
      }

      const continuesFromPrevWeek = evStart < weekStart;
      const continuesToNextWeek = evEnd > weekEnd;

      eventSpans.push({
        event: ev,
        startCol,
        endCol,
        trackIndex: assignedTrack,
        continuesFromPrevWeek,
        continuesToNextWeek
      });
    });

    const dayEventCount = new Array(7).fill(0);
    eventSpans.forEach(span => {
      for (let c = span.startCol; c <= span.endCol; c++) {
        dayEventCount[c]++;
      }
    });

    // 1. Grid de fundo
    const bgGrid = document.createElement("div");
    bgGrid.className = "week-bg-grid";

    weekDays.forEach((day, colIdx) => {
      const cell = document.createElement("div");
      cell.className = "calendar-day-cell";
      
      const isOtherMonth = day.getMonth() !== monthIndex;
      const isToday = this.isSameDay(day, today);

      if (isOtherMonth) cell.classList.add("other-month");
      if (isToday) cell.classList.add("today");

      const dayHeader = document.createElement("div");
      dayHeader.className = "day-cell-header";

      const dayNumber = document.createElement("span");
      dayNumber.className = "day-cell-number";
      dayNumber.textContent = String(day.getDate()).padStart(2, "0");
      dayHeader.appendChild(dayNumber);

      const overflowCount = dayEventCount[colIdx] - maxTracks;
      if (overflowCount > 0) {
        const moreBtn = document.createElement("button");
        moreBtn.className = "day-cell-more-btn";
        moreBtn.textContent = `+${overflowCount}`;
        moreBtn.title = "Ver todos os eventos deste dia";
        moreBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const dayDateStr = this.formatDateKey(day);
          const allDayEvents = events.filter(ev => {
            return ev.periodo.data_inicio <= dayDateStr && ev.periodo.data_fim >= dayDateStr;
          });
          this.onMoreClick({ date: day, dateStr: dayDateStr, events: allDayEvents });
        });
        dayHeader.appendChild(moreBtn);
      }

      cell.appendChild(dayHeader);

      cell.addEventListener("click", () => {
        const dayDateStr = this.formatDateKey(day);
        const allDayEvents = events.filter(ev => {
          return ev.periodo.data_inicio <= dayDateStr && ev.periodo.data_fim >= dayDateStr;
        });
        this.onDayClick({ date: day, dateStr: dayDateStr, events: allDayEvents });
      });

      bgGrid.appendChild(cell);
    });

    weekEl.appendChild(bgGrid);

    // 2. Camada das Faixas Horizontais
    const eventsLayer = document.createElement("div");
    eventsLayer.className = `week-events-layer ${isCompact ? "compact-events-layer" : ""}`;

    eventSpans.forEach(span => {
      if (span.trackIndex >= maxTracks) {
        return;
      }

      const bar = document.createElement("div");
      bar.className = `event-bar-slot ${isCompact ? "compact-bar" : ""}`;
      
      if (span.continuesFromPrevWeek) bar.classList.add("continues-prev");
      if (span.continuesToNextWeek) bar.classList.add("continues-next");

      const colors = window.getEventColor(span.event.id);
      bar.style.backgroundColor = colors.bg;
      bar.style.borderColor = colors.border;
      bar.style.color = colors.text;

      bar.style.gridColumn = `${span.startCol + 1} / ${span.endCol + 2}`;
      bar.style.gridRow = `${span.trackIndex + 1}`;

      const titleSpan = document.createElement("span");
      titleSpan.className = "event-bar-title";
      titleSpan.textContent = span.event.nome_evento;
      bar.appendChild(titleSpan);

      bar.title = `${span.event.nome_evento} (${span.event.periodo.periodo_formatado || span.event.periodo.data_inicio})`;

      bar.addEventListener("click", (e) => {
        e.stopPropagation();
        this.onEventClick(span.event);
      });

      eventsLayer.appendChild(bar);
    });

    weekEl.appendChild(eventsLayer);

    return weekEl;
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

window.CalendarRenderer = CalendarRenderer;
