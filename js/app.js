/**
 * app.js - Ponto de entrada e orquestração da aplicação
 */

document.addEventListener("DOMContentLoaded", () => {
  const monthTitleEl = document.getElementById("current-month-title");
  const prevBtn = document.getElementById("btn-prev-month");
  const nextBtn = document.getElementById("btn-next-month");
  const todayBtn = document.getElementById("btn-today");
  const importBtn = document.getElementById("btn-import-json");
  const saveJsonBtn = document.getElementById("btn-save-json");
  const jsonInputArea = document.getElementById("json-import-textarea");
  const jsonFileInput = document.getElementById("json-file-input");

  const modalManager = new window.ModalManager();

  // Iniciar calendário no mês de Maio de 2027 (mês da EXPOMAFE 2027)
  const calendar = new window.CalendarRenderer("calendar-container", {
    initialDate: new Date(2027, 4, 1),
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
    }
  });

  function updateMonthLabel() {
    if (monthTitleEl) {
      monthTitleEl.textContent = calendar.getCurrentMonthYearLabel();
    }
  }

  // Controles de Navegação
  prevBtn.addEventListener("click", () => {
    calendar.prevMonth();
    updateMonthLabel();
  });

  nextBtn.addEventListener("click", () => {
    calendar.nextMonth();
    updateMonthLabel();
  });

  todayBtn.addEventListener("click", () => {
    calendar.today();
    updateMonthLabel();
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
  updateMonthLabel();
});
