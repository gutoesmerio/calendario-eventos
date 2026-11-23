/**
 * app.js - Ponto de entrada e orquestração da aplicação
 */

document.addEventListener("DOMContentLoaded", () => {
  const periodTitleEl = document.getElementById("current-period-title");
  const prevBtn = document.getElementById("btn-prev-period");
  const nextBtn = document.getElementById("btn-next-period");
  const todayBtn = document.getElementById("btn-today");
  const importBtn = document.getElementById("btn-import-json");
  const saveJsonBtn = document.getElementById("btn-save-json");
  const jsonInputArea = document.getElementById("json-import-textarea");
  const jsonFileInput = document.getElementById("json-file-input");
  const viewBtns = document.querySelectorAll(".view-btn");

  const modalManager = new window.ModalManager();

  // Iniciar calendário no mês de Maio de 2027 (mês da EXPOMAFE 2027) com visão de 1 Mês
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

  // Controles de Navegação Anterior / Próximo
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

  // Importador de JSON
  importBtn.addEventListener("click", () => {
    const currentEvents = window.eventStore.getEvents();
    jsonInputArea.value = JSON.stringify(currentEvents, null, 2);
    modalManager.showImportModal();
  });

  saveJsonBtn.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(jsonInputArea.value);
      if (!Array.isArray(parsed)) {
        alert("O JSON deve ser uma lista (array) de eventos: [ { ... }, { ... } ]");
        return;
      }
      window.eventStore.setEvents(parsed);
      modalManager.closeAll();
      alert(`Sucesso! ${parsed.length} eventos carregados.`);
    } catch (err) {
      alert("Erro ao processar JSON: " + err.message);
    }
  });

  // Upload de arquivo JSON
  if (jsonFileInput) {
    jsonFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          jsonInputArea.value = JSON.stringify(parsed, null, 2);
        } catch (err) {
          alert("Arquivo JSON inválido: " + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  // Render inicial
  calendar.render();
  updatePeriodLabel();
});
