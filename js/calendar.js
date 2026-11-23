/**
 * calendar.js - Mecanismo de renderização de calendário com trilhas contínuas (Multi-Day Slots)
 */

class CalendarRenderer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.maxVisibleTracks = options.maxVisibleTracks || 3;
    this.currentDate = options.initialDate || new Date(2027, 4, 1); // Maio de 2027 como padrão da feira
    this.onEventClick = options.onEventClick || (() => {});
    this.onMoreClick = options.onMoreClick || (() => {});
    this.onDayClick = options.onDayClick || (() => {});
  }

  setDate(date) {
    this.currentDate = new Date(date);
    this.render();
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.render();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.render();
  }

  today() {
    this.currentDate = new Date();
    this.render();
  }

  getCurrentMonthYearLabel() {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return `${months[this.currentDate.getMonth()]} de ${this.currentDate.getFullYear()}`;
  }

  /**
   * Converte string YYYY-MM-DD em objeto Date UTC local
   */
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

  /**
   * Constrói a matriz de semanas para exibição do mês
   */
  buildWeeks() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Começar no Domingo da primeira semana
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    // Terminar no Sábado da última semana
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

    const events = window.eventStore.getEvents();
    const weeks = this.buildWeeks();
    const today = new Date();

    // Renderiza a estrutura do calendário
    this.container.innerHTML = "";

    // 1. Cabeçalho dos dias da semana
    const headerRow = document.createElement("div");
    headerRow.className = "calendar-weekdays";
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    weekdays.forEach(day => {
      const col = document.createElement("div");
      col.className = "calendar-weekday";
      col.textContent = day;
      headerRow.appendChild(col);
    });
    this.container.appendChild(headerRow);

    // 2. Container das semanas
    const weeksContainer = document.createElement("div");
    weeksContainer.className = "calendar-weeks";

    weeks.forEach((weekDays, weekIndex) => {
      const weekRow = this.renderWeek(weekDays, events, today);
      weeksContainer.appendChild(weekRow);
    });

    this.container.appendChild(weeksContainer);
  }

  /**
   * Renderiza uma semana com fundo de células e camadas de faixas horizontais
   */
  renderWeek(weekDays, events, today) {
    const weekEl = document.createElement("div");
    weekEl.className = "calendar-week-row";

    const weekStart = weekDays[0];
    const weekEnd = weekDays[6];

    // Mapeamento dos eventos que ocorrem nesta semana
    const weekEvents = events.filter(ev => {
      const start = this.parseLocalDate(ev.periodo.data_inicio);
      const end = this.parseLocalDate(ev.periodo.data_fim);
      return start <= weekEnd && end >= weekStart;
    });

    // Ordenar eventos para atribuir trilhas de forma estável:
    // Mais longos primeiro; em empate, menor data de início; em empate, ID
    weekEvents.sort((a, b) => {
      const durA = a.periodo.duracao_dias || 1;
      const durB = b.periodo.duracao_dias || 1;
      if (durB !== durA) return durB - durA;
      const startA = this.parseLocalDate(a.periodo.data_inicio).getTime();
      const startB = this.parseLocalDate(b.periodo.data_inicio).getTime();
      if (startA !== startB) return startA - startB;
      return a.id - b.id;
    });

    // Algoritmo de empacotamento de trilhas (Track allocation)
    // tracks[trackIndex] = array de 7 booleanos (true se ocupado no dia da semana)
    const tracks = [];
    const eventSpans = [];

    weekEvents.forEach(ev => {
      const evStart = this.parseLocalDate(ev.periodo.data_inicio);
      const evEnd = this.parseLocalDate(ev.periodo.data_fim);

      // Calcular o índice de início e fim dentro dos dias da semana (0 a 6)
      let startCol = 0;
      let endCol = 6;

      for (let i = 0; i < 7; i++) {
        if (this.isSameDay(weekDays[i], evStart)) startCol = i;
        if (this.isSameDay(weekDays[i], evEnd)) endCol = i;
      }

      if (evStart > weekStart) {
        startCol = weekDays.findIndex(d => this.isSameDay(d, evStart));
      } else {
        startCol = 0;
      }

      if (evEnd < weekEnd) {
        endCol = weekDays.findIndex(d => this.isSameDay(d, evEnd));
      } else {
        endCol = 6;
      }

      if (startCol === -1) startCol = 0;
      if (endCol === -1) endCol = 6;

      // Encontrar a primeira trilha onde as colunas startCol..endCol estejam livres
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

      // Marcar colunas como ocupadas nessa trilha
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

    // Contagem de eventos por coluna para overflow (+N mais)
    const dayEventCount = new Array(7).fill(0);
    eventSpans.forEach(span => {
      for (let c = span.startCol; c <= span.endCol; c++) {
        dayEventCount[c]++;
      }
    });

    // 1. Grid de fundo dos dias
    const bgGrid = document.createElement("div");
    bgGrid.className = "week-bg-grid";

    weekDays.forEach((day, colIdx) => {
      const cell = document.createElement("div");
      cell.className = "calendar-day-cell";
      
      const isOtherMonth = day.getMonth() !== this.currentDate.getMonth();
      const isToday = this.isSameDay(day, today);

      if (isOtherMonth) cell.classList.add("other-month");
      if (isToday) cell.classList.add("today");

      // Cabeçalho da célula (número do dia)
      const dayHeader = document.createElement("div");
      dayHeader.className = "day-cell-header";

      const dayNumber = document.createElement("span");
      dayNumber.className = "day-cell-number";
      dayNumber.textContent = String(day.getDate()).padStart(2, "0");
      dayHeader.appendChild(dayNumber);

      // Overflow indicator (+N mais) se houver mais que maxVisibleTracks
      const overflowCount = dayEventCount[colIdx] - this.maxVisibleTracks;
      if (overflowCount > 0) {
        const moreBtn = document.createElement("button");
        moreBtn.className = "day-cell-more-btn";
        moreBtn.textContent = `+${overflowCount} mais`;
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

    // 2. Camada das Faixas Horizontais de Eventos (Event Bars Layer)
    const eventsLayer = document.createElement("div");
    eventsLayer.className = "week-events-layer";

    // Calcular altura total necessária para a camada baseado nas trilhas visíveis
    const visibleTracksCount = Math.min(tracks.length, this.maxVisibleTracks);
    // Cada trilha tem altura de 26px + 4px de gap
    eventsLayer.style.setProperty("--visible-tracks", visibleTracksCount);

    eventSpans.forEach(span => {
      // Se a trilha do evento for >= maxVisibleTracks, ela é ocultada para dar lugar ao "+N mais"
      if (span.trackIndex >= this.maxVisibleTracks) {
        return;
      }

      const bar = document.createElement("div");
      bar.className = "event-bar-slot";
      
      if (span.continuesFromPrevWeek) bar.classList.add("continues-prev");
      if (span.continuesToNextWeek) bar.classList.add("continues-next");

      const colors = window.getEventColor(span.event.id);
      bar.style.backgroundColor = colors.bg;
      bar.style.borderColor = colors.border;
      bar.style.color = colors.text;

      // Posicionamento no CSS Grid
      // Colunas: 1 a 7 (startCol + 1 até endCol + 2)
      bar.style.gridColumn = `${span.startCol + 1} / ${span.endCol + 2}`;
      bar.style.gridRow = `${span.trackIndex + 1}`;

      // Conteúdo da barra
      const titleSpan = document.createElement("span");
      titleSpan.className = "event-bar-title";
      titleSpan.textContent = span.event.nome_evento;
      bar.appendChild(titleSpan);

      // Tooltip rápido nativo
      bar.title = `${span.event.nome_evento} (${span.event.periodo.periodo_formatado || span.event.periodo.data_inicio})`;

      // Evento de clique para detalhes
      bar.addEventListener("click", (e) => {
        e.stopPropagation();
        this.onEventClick(span.event);
      });

      eventsLayer.appendChild(bar);
    });

    weekEl.appendChild(eventsLayer);

    return weekEl;
  }
}

window.CalendarRenderer = CalendarRenderer;
