// FUNCTION: Rolagem suave até a página/seção desejada
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// FUNCTION: Controle de Brilho do Site
const brightnessSlider = document.getElementById('brightness');
const mainContent = document.getElementById('main-content');

brightnessSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    // Aplica o filtro de brilho apenas na área de conteúdo principal
    mainContent.style.filter = `brightness(${val})`;
});

// FUNCTION: Alternar Modo de Acessibilidade (Cores Nítidas)
function toggleAccessibility() {
    document.body.classList.toggle('accessible-mode');
    
    const btn = document.getElementById('accessibility-btn');
    if (document.body.classList.contains('accessible-mode')) {
        btn.innerText = "Modo Normal";
    } else {
        btn.innerText = "Acessibilidade (Alto Contraste)";
    }
    // Dispara o verificador de scroll para ajustar as animações com o novo modo
    checkVisibility();
}

// FUNCTION: Animação de Aparecimento Gradual ao Rolar a Tela (Scroll Animation)
const animatedElements = document.querySelectorAll('.hidden-on-scroll');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85; // Ponto de ativação na tela

    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            // Se o elemento entrou na área visível, ele aparece suavemente
            element.classList.add('visible-on-scroll');
        } else {
            // Se o usuário subir a tela novamente, ele volta a ficar invisível (efeito contínuo)
            element.classList.remove('visible-on-scroll');
        }
    });
}

// Escuta o evento de rolagem da página
window.addEventListener('scroll', checkVisibility);

// Executa uma vez ao carregar a página para exibir o que já está no topo
window.addEventListener('load', checkVisibility);
