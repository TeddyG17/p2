const textArray = ["Bienvenue ici !", "Effet de machine à écrire", "JavaScript est cool !"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById("typed-text");

function typewriterEffect() {
  const currentText = textArray[textIndex];
  const typingSpeed = isDeleting ? 50 : 100; // Vitesse d'effacement et de frappe

  if (isDeleting) {
    // Effacement des caractères
    typedTextElement.textContent = currentText.slice(0, charIndex--);
  } else {
    // Ajout des caractères
    typedTextElement.textContent = currentText.slice(0, charIndex++);
  }

  // Pause après avoir tapé tout le texte
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typewriterEffect, 1000); // Pause avant d'effacer
  } 
  // Passer au texte suivant après tout avoir effacé
  else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Boucle sur les textes
  }

  setTimeout(typewriterEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typewriterEffect);





