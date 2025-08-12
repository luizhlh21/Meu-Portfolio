// Alternância de tema claro/escuro
const themeBtn = document.getElementById('toggle-theme');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    themeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Detecta preferência do usuário
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
} else {
  setTheme('light');
}

themeBtn.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Interatividade nos cards de projetos
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('click', (e) => {
    // Evita conflito se clicar no link
    if (e.target.classList.contains('project-link')) return;
    const link = card.getAttribute('data-link');
    if (link) window.open(link, '_blank');
  });
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 32px rgba(56,189,248,0.18)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});
