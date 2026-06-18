// ================================
// ROLAGEM SUAVE
// ================================
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// ================================
// CONTROLE DE BRILHO
// ================================
const brightnessSlider = document.getElementById('brightness');
const mainContent = document.getElementById('main-content');

if (brightnessSlider && mainContent) {
    brightnessSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        mainContent.style.filter = `brightness(${val})`;
    });
}

// ================================
// MODO ACESSIBILIDADE
// ================================
function toggleAccessibility() {
    document.body.classList.toggle('accessible-mode');

    const btn = document.getElementById('accessibility-btn');

    if (btn) {
        btn.innerText = document.body.classList.contains('accessible-mode')
            ? "Modo Normal"
            : "Acessibilidade (Alto Contraste)";
    }

    checkVisibility();
}

// ================================
// ANIMAÇÃO SCROLL (OTIMIZADA)
// ================================
const animatedElements = document.querySelectorAll('.hidden-on-scroll');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.classList.add('visible-on-scroll');
        } else {
            el.classList.remove('visible-on-scroll');
        }
    });
}

// otimização: evita excesso de chamadas no scroll
let scrollTimeout = false;

window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = true;

        requestAnimationFrame(() => {
            checkVisibility();
            scrollTimeout = false;
        });
    }
});

// ================================
// INICIALIZAÇÃO
// ================================
window.addEventListener('load', () => {
    checkVisibility();
});
