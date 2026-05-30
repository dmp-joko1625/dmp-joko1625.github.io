/// Dictionary for translations
const translations = {
    th: {
        // Titles
        about_title: 'About this Page',
        about_desc: 'ยินดีต้อนรับสู่หน้าโฮมเพจส่วนตัวของฉัน! เว็บไซต์นี้เป็นสนามทดลองสำหรับฉันในการทดลองพัฒนาเว็บและออกแบบ ที่นี่คุณสามารถสำรวจได้อย่างอิสระ [Ai-Translation]',
        bio_desc: '<strong>ชื่อ:</strong> โจโกะ<br><strong>อายุ:</strong> ไม่ระบุ<br><strong>เพศ:</strong> ผู้หญิง<br><strong>ประเทศ:</strong> ไทย<br><strong>วันเกิด:</strong> 6/10/ไม่ระบุ<br><span class="tag">Ambivert</span>',

        // Categories

        // Descriptions

        // Button Text
        btn_toggle: 'TH'
    },
    en: {
        // Titles
        about_title: 'About this Page',
        about_desc: 'Welcome to my personal homepage! This site is a playground for me to experiment with web development and design. Here, feel free to explore',
        bio_desc: '<strong>Name:</strong> Joko<br><strong>Age:</strong> Secret<br><strong>Gender:</strong> Female<br><strong>Country:</strong> Thailand<br><strong>Birthday:</strong> 6/10/Secret<br><span class="tag">Ambivert</span>',

        // Categories

        // Descriptions

        // Button Text
        btn_toggle: 'EN'
    }
};

// Language handling
let currentLang = 'en'; // Default language
function toggleLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-1625]');
    elements.forEach(el => {
        const key = el.getAttribute('data-1625');
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