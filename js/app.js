/**
 * app.js - Ponto de entrada e orquestração da aplicação
 */

document.addEventListener("DOMContentLoaded", async () => {
  const periodTitleEl = document.getElementById("current-period-title");
  const prevBtn = document.getElementById("btn-prev-period");
  const nextBtn = document.getElementById("btn-next-period");
  const todayBtn = document.getElementById("btn-today");
  const viewBtns = document.querySelectorAll(".view-btn");

  const modalManager = new window.ModalManager();

  // Iniciar calendário no mês de Maio de 2027 com visão de 1 Mês
  const calendar = new window.CalendarRenderer("calendar-container", {
    initialDate: new Date(2027, 4, 1),
    initialView: "1m",
    maxVisibleTracks: 3,
    onEventClick: (event) => {
      modalManager.showEventDetails(event);
    },
    onMoreClick: ({ dateStr, events }) => {
      modalManager.showDayEvents(dateStr, events);
    },
    onDayClick: ({ dateStr, events }) => {
      if (events.length > 0) {
        modalManager.showDayEvents(dateStr, events);
      }
    },
    onViewChange: (viewMode) => {
      updateActiveViewButton(viewMode);
      updatePeriodLabel();
    }
  });

  function updatePeriodLabel() {
    if (periodTitleEl) {
      periodTitleEl.textContent = calendar.getCurrentPeriodLabel();
    }
  }

  function updateActiveViewButton(viewMode) {
    viewBtns.forEach(btn => {
      if (btn.getAttribute("data-view") === viewMode) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Controles de Navegação Anterior / Próximo (move 1 mês por clique em 1m, 3m e 6m)
  prevBtn.addEventListener("click", () => {
    calendar.prev();
    updatePeriodLabel();
  });

  nextBtn.addEventListener("click", () => {
    calendar.next();
    updatePeriodLabel();
  });

  todayBtn.addEventListener("click", () => {
    calendar.today();
    updatePeriodLabel();
  });

  // Alternância de Visões (1 Mês, 3 Meses, 6 Meses, 1 Ano)
  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedView = btn.getAttribute("data-view");
      calendar.setView(selectedView);
      updatePeriodLabel();
    });
  });

  // Re-renderizar ao atualizar a store de eventos
  window.eventStore.subscribe(() => {
    calendar.render();
  });

  // Re-renderizar modal se a store de propostas for atualizada
  window.propostasStore.subscribe(() => {
    if (modalManager.currentEvent) {
      modalManager.showEventDetails(modalManager.currentEvent);
    }
  });

  // Render inicial com a base disponível
  calendar.render();
  updatePeriodLabel();

  // Carregar dados automaticamente dos arquivos data/eventos_ativos.json e data/propostas_ativas.json
  if (typeof window.loadDataFromFiles === "function") {
    await window.loadDataFromFiles();
    updatePeriodLabel();
  }
});
