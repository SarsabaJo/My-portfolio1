document.addEventListener('DOMContentLoaded', () => {
    const typedEl = document.querySelector('.typed-text');
    let cursorEl = document.querySelector('.cursor');
  
    if (!typedEl) {
      console.warn('Typing animation: .typed-text element not found.');
      return;
    }
  
    if (!cursorEl) {
      cursorEl = document.createElement('span');
      cursorEl.className = 'cursor';
      cursorEl.textContent = '|';
      typedEl.insertAdjacentElement('afterend', cursorEl);
    }
  
    const words = ["a Student", "Trying to be a Developer", "a Sheesh"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingDelay = 90;
    const erasingDelay = 45;
    const newWordDelay = 1400;
  
    function type() {
      if (charIndex < words[wordIndex].length) {
        typedEl.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newWordDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedEl.textContent = words[wordIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingDelay + 200);
      }
    }
  
    if (words.length) setTimeout(type, newWordDelay + 200);
  });
  

document.addEventListener("DOMContentLoaded", function () {
  if (words.length) setTimeout(type, newWordDelay + 250);
});
