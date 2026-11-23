/**
 * colors.js - Paleta determinística e acessível para eventos
 */

const EVENT_PALETTE = [
  { bg: "#2563EB", border: "#1D4ED8", text: "#FFFFFF" }, // Blue
  { bg: "#059669", border: "#047857", text: "#FFFFFF" }, // Emerald
  { bg: "#7C3AED", border: "#6D28D9", text: "#FFFFFF" }, // Purple
  { bg: "#D97706", border: "#B45309", text: "#FFFFFF" }, // Amber / Orange
  { bg: "#DC2626", border: "#B91C1C", text: "#FFFFFF" }, // Red
  { bg: "#0891B2", border: "#0E7490", text: "#FFFFFF" }, // Cyan
  { bg: "#DB2777", border: "#BE185D", text: "#FFFFFF" }, // Pink
  { bg: "#4F46E5", border: "#4338CA", text: "#FFFFFF" }, // Indigo
  { bg: "#16A34A", border: "#15803D", text: "#FFFFFF" }, // Green
  { bg: "#EA580C", border: "#C2410C", text: "#FFFFFF" }, // Orange-Red
  { bg: "#9333EA", border: "#7E22CE", text: "#FFFFFF" }, // Violet
  { bg: "#0284C7", border: "#0369A1", text: "#FFFFFF" }, // Light Blue
];

/**
 * Retorna as cores calculadas de forma determinística para um evento com base no ID.
 * @param {number} id 
 * @returns {{bg: string, border: string, text: string}}
 */
function getEventColor(id) {
  const index = Math.abs(id) % EVENT_PALETTE.length;
  return EVENT_PALETTE[index];
}

window.getEventColor = getEventColor;
