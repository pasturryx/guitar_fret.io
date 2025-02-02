// Definición de notas y colores
const notesEnglish = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
const notesSpanish = ['Do', 'Do#/Reb', 'Re', 'Re#/Mib', 'Mi', 'Fa', 'Fa#/Solb', 'Sol', 'Sol#/Lab', 'La', 'La#/Sib', 'Si'];
const noteColors = {
  'C': '#FF0000',
  'C#/Db': '#FF69B4',
  'D': '#00FF00',
  'D#/Eb': '#FFA500',
  'E': '#0000FF',
  'F': '#008000',
  'F#/Gb': '#00FF00',
  'G': '#8B008B',
  'G#/Ab': '#4169E1',
  'A': '#FFD700',
  'A#/Bb': '#FF4500',
  'B': '#00FFFF'
};
const tuningEnglish = ['E', 'A', 'D', 'G', 'B', 'E'];
const tuningSpanish = ['Mi', 'La', 'Re', 'Sol', 'Si', 'Mi'];
let isMarking = false;
let isEnglishNotation = true;
let isMultiSelect = false;
let selectedNotes = new Set();

// Funciones y lógica (mantén el código JavaScript que ya tienes)
// ...