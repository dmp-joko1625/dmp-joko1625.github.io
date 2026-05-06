const modeSelect = document.getElementById('theme-mode');
const contrastSelect = document.getElementById('theme-contrast');

function applyTheme() {
  const mode = modeSelect.value;
  const contrast = contrastSelect.value;
  
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.setAttribute('data-contrast', contrast);
  
  localStorage.setItem('theme', mode);
  localStorage.setItem('contrast', contrast);
}

modeSelect.addEventListener('change', applyTheme);
contrastSelect.addEventListener('change', applyTheme);

// Load saved settings
const savedMode = localStorage.getItem('theme') || 'dark';
const savedContrast = localStorage.getItem('contrast') || 'sc';

modeSelect.value = savedMode;
contrastSelect.value = savedContrast;
applyTheme();