/// Dictionary for translations
const translations = {
    th: {
        // Titles
        about_title: 'About this Page',

        // Categories

        // Descriptions

        // Button Text
        btn_toggle: 'View this page in English'
    },
    en: {
        // Titles
        about_title: 'About this Page',
        about_desc: 'Welcome to my personal homepage! This site is a playground for me to experiment with web development and design. Here, feel free to explore',

        // Categories

        // Descriptions

        // Button Text
        btn_toggle: 'กดที่นี่เพื่อดูเว็บภาษาไทย'
    }
};

// Language handling
let currentLang = 'en'; // Default language
function toggleLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key === 'system_online') {
            el.innerHTML = translations[currentLang][currentStatusKey] || translations[currentLang]['system_normal'];
        } else if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) btn.innerText = translations[currentLang].btn_toggle;
}

// Theme handling
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
const savedMode = localStorage.getItem('theme') || 'light';
const savedContrast = localStorage.getItem('contrast') || 'sc';

// Set initial states
modeSwitch.selected = (savedMode === 'dark');
contrastSelect.value = savedContrast;

// Run once on load to apply the colors from your JSON
applyTheme();