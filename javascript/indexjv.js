const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para atualizar ícone
function updateIcon() {
    const isLight = body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '🌙' : '☀️';
}

// Verifica preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}
updateIcon();

// Alterna tema ao clicar
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    updateIcon();
});