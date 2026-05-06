const modeSelect = document.getElementById('theme-mode');
const contrastSelect = document.getElementById('theme-contrast');

function updateTheme() {
  const mode = modeSelect.value;
  const contrast = contrastSelect.value;
  
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.setAttribute('data-contrast', contrast);
  
  localStorage.setItem('theme-settings', JSON.stringify({ mode, contrast }));
}

// Event Listeners
modeSelect.addEventListener('change', updateTheme);
contrastSelect.addEventListener('change', updateTheme);

// Initialize from LocalStorage or System Preference
const saved = JSON.parse(localStorage.getItem('theme-settings'));
if (saved) {
  modeSelect.value = saved.mode;
  contrastSelect.value = saved.contrast;
} else {
  // Default to system dark/light preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  modeSelect.value = prefersDark ? 'dark' : 'light';
}

updateTheme();