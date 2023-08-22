// Lista degli studenti
let students = ['Fabio', 'Michele', 'Margherita', 'Filippo', /*...*/];

// Lista degli studenti selezionati
let selected_students = [];

// Funzione per verificare se uno studente è presente in classe
function isStudentPresent(student) {
  // Qui dovresti implementare la logica per verificare se uno studente è presente in classe.
  // Per ora, supponiamo che tutti gli studenti siano sempre presenti.
  return true;
}

// Funzione per selezionare uno studente a caso
function selectRandomStudent() {
  if (students.length === 0) {
    // Se tutti gli studenti sono stati già selezionati, ricominciamo da capo
    students = [...selected_students];
    selected_students = [];
  }

  let randomIndex;
  let selectedStudent;

  do {
    randomIndex = Math.floor(Math.random() * students.length);
    selectedStudent = students[randomIndex];
  } while (!isStudentPresent(selectedStudent));

  // Rimuoviamo lo studente selezionato dalla lista degli studenti
  students.splice(randomIndex, 1);

  // Aggiungiamo lo studente selezionato alla lista degli studenti selezionati
  selected_students.push(selectedStudent);

  return selectedStudent;
}