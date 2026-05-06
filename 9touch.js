const modeSwitch = document.getElementById('theme-toggle');
const contrastSelect = document.getElementById('theme-contrast');

function applyTheme() {
  // If switch is 'selected', it's dark mode. Otherwise, light.
  const mode = modeSwitch.selected ? 'dark' : 'light';
  const contrast = contrastSelect.value;
  
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.setAttribute('data-contrast', contrast);
  
  localStorage.setItem('theme', mode);
  localStorage.setItem('contrast', contrast);
}

// Listen for the 'change' event on the switch
modeSwitch.addEventListener('change', applyTheme);
contrastSelect.addEventListener('change', applyTheme);

// Load saved settings
const savedMode = localStorage.getItem('theme') || 'dark';
const savedContrast = localStorage.getItem('contrast') || 'sc';

// Set initial states
modeSwitch.selected = (savedMode === 'light');
contrastSelect.value = savedContrast;

// Run once on load to apply the colors from your JSON
applyTheme();