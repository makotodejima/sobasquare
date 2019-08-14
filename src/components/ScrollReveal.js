import ScrollReveal from 'scrollreveal';

function initSr(container, item) {
  const config = {
    duration: 800,
    opacity: 0,
    scale: 0.4,
    easing: 'ease-out',
    reset: true,
    container,
  };

  ScrollReveal().reveal(item, config);
}

export default initSr;
