// ui-helpers.js - controle de menu e modais
export function initUI() {
  const menuBtn = document.getElementById('menu-hamburguer');
  const nav = document.getElementById('nav-menu');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('ativo');
      menuBtn.classList.toggle('ativo');
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('ativo');
      menuBtn.classList.remove('ativo');
    }));
  }

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove('ativo');
      menuBtn.classList.remove('ativo');
    }
  });
}
