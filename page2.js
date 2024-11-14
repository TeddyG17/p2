const text = "Services";
let index = 0;
let isDeleting = false;

function typeAndDelete() {
  const typedTextElement = document.getElementById("typed-text");

  if (!isDeleting) {
    // Ajout des lettres une par une
    typedTextElement.textContent = text.slice(0, index++);
    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeAndDelete, 1000); // Pause avant de commencer l'effacement
    } else {
      setTimeout(typeAndDelete, 100); // Vitesse de frappe
    }
  } else {
    // Suppression des lettres une par une
    typedTextElement.textContent = text.slice(0, index--);
    if (index < 0) {
      isDeleting = false;
      setTimeout(typeAndDelete, 500); // Pause avant de recommencer la frappe
    } else {
      setTimeout(typeAndDelete, 70); // Vitesse d'effacement
    }
  }
}

document.addEventListener("DOMContentLoaded", typeAndDelete);
