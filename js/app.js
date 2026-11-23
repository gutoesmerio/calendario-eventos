/**
 * app.js - Ponto de entrada e orquestração da aplicação
 * Gerencia a alternância de views sob demanda (Calendário vs Interações)
 */

document.addEventListener("DOMContentLoaded", async () => {
  // Elementos de Navegação Principal no Topo
  const navBtnCalendar = document.getElementById("nav-btn-calendar");
  const navBtnInteracoes = document.getElementById("nav-btn-interacoes");
  const navInteracoesCount = document.getElementById("nav-interacoes-count");
  const calendarControlsWrapper = document.getElementById("calendar-header-controls");

  const calendarContainer = document.getElementById("calendar-container");
  const interacoesContainer = document.getElementById("interacoes-container");

  // Elementos de Controle do Calendário
  const periodTitleEl = document.getElementById("current-period-title");
  const prevBtn = document.getElementById("btn-prev-period");
  const nextBtn = document.getElementById("btn-next-period");
  const todayBtn = document.getElementById("btn-today");
  const viewBtns = document.querySelectorAll(".view-btn");

  // Gerenciadores de Modais e Views
  const modalManager = new window.ModalManager();

  let activeAppView = "calendar"; // 'calendar' ou 'interacoes'

  // Instância do Mecanismo de Renderização do Calendário
  const calendar = new window.CalendarRenderer("calendar-container", {
    initialDate: new Date(2027, 4, 1), // Maio de 2027
    initialView: "1m",
    maxVisibleTracks: 3,
    onEventClick: (event) => {
      // Carrega sob demanda somente os dados daquele evento no modal
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

  // Instância do Gerenciador de Interações
  const interacoesView = new window.InteracoesViewManager({
    onCardClick: (interacaoItem) => {
      // Abre o modal flutuante com a linha do tempo do cliente naquele evento específico
      modalManager.showClienteInteracoesModal(interacaoItem);
    }
  });

  function updatePeriodLabel() {
    if (periodTitleEl && calendar) {
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

  function updateNavBadge() {
    if (navInteracoesCount && window.interacoesStore) {
      const total = window.interacoesStore.getInteracoes().length;
      navInteracoesCount.textContent = total;
    }
  }

  /**
   * Alterna entre as views principais com ciclo de vida sob demanda (carregamento e descarregamento)
   */
  function switchAppView(targetView) {
    if (activeAppView === targetView) return;

    activeAppView = targetView;

    if (activeAppView === "calendar") {
      // 1. Atualizar botões de navegação no topo
      navBtnCalendar.classList.add("active");
      navBtnInteracoes.classList.remove("active");

      // 2. Reexibir a barra de controles de período e visualização do calendário
      if (calendarControlsWrapper) {
        calendarControlsWrapper.style.display = "flex";
      }

      // 3. Descarregar completamente a view de interações do DOM
      interacoesView.destroy();

      // 4. Carregar e renderizar a view do calendário
      calendar.render();
      updatePeriodLabel();
    } else if (activeAppView === "interacoes") {
      // 1. Atualizar botões de navegação no topo
      navBtnInteracoes.classList.add("active");
      navBtnCalendar.classList.remove("active");

      // 2. Ocultar controles exclusivos do calendário
      if (calendarControlsWrapper) {
        calendarControlsWrapper.style.display = "none";
      }

      // 3. Descarregar completamente a view do calendário do DOM
      calendar.destroy();

      // 4. Carregar e renderizar a view dos cards de interações em ordem decrescente
      interacoesView.render(interacoesContainer);
    }
  }

  // Event Listeners dos Botões de Navegação no Topo
  navBtnCalendar.addEventListener("click", () => {
    switchAppView("calendar");
  });

  navBtnInteracoes.addEventListener("click", () => {
    switchAppView("interacoes");
  });

  // Controles de Navegação Anterior / Próximo do Calendário
  prevBtn.addEventListener("click", () => {
    if (activeAppView === "calendar") {
      calendar.prev();
      updatePeriodLabel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (activeAppView === "calendar") {
      calendar.next();
      updatePeriodLabel();
    }
  });

  todayBtn.addEventListener("click", () => {
    if (activeAppView === "calendar") {
      calendar.today();
      updatePeriodLabel();
    }
  });

  // Alternância de Visões do Calendário (1 Mês, 3 Meses, 6 Meses, 1 Ano)
  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (activeAppView === "calendar") {
        const selectedView = btn.getAttribute("data-view");
        calendar.setView(selectedView);
        updatePeriodLabel();
      }
    });
  });

  // Inscrições reativas nas Stores de dados
  window.eventStore.subscribe(() => {
    if (activeAppView === "calendar") {
      calendar.render();
    }
  });

  window.propostasStore.subscribe(() => {
    if (modalManager.currentEvent) {
      modalManager.showEventDetails(modalManager.currentEvent);
    }
  });

  window.interacoesStore.subscribe(() => {
    updateNavBadge();
    if (activeAppView === "interacoes") {
      interacoesView.renderCardsOnly();
    }
  });

  // Render inicial: Calendário ativo
  updateNavBadge();
  calendar.render();
  updatePeriodLabel();

  // Carregar dados de arquivos locais se disponível
  if (typeof window.loadDataFromFiles === "function") {
    await window.loadDataFromFiles();
    updateNavBadge();
    if (activeAppView === "calendar") {
      updatePeriodLabel();
    }
  }
});
