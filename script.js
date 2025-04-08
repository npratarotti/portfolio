// Alternar tema (claro/escuro)
const themeSwitch = document.getElementById('themeSwitch');
const htmlElement = document.documentElement;

themeSwitch.addEventListener('change', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  htmlElement.setAttribute(
    'data-theme',
    currentTheme === 'dark' ? 'light' : 'dark'
  );
});

// Carrossel infinito (duplicação)
const track = document.getElementById('carouselTrack');
const icons = [...track.children];

// Clonar os ícones para continuidade visual
icons.forEach(icon => {
  const clone = icon.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.appendChild(clone);
});

// Mostrar timeline com efeito ao rolar
const revealElements = document.querySelectorAll('.timeline-item');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
