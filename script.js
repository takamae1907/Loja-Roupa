// Espera o HTML carregar para rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // ==== 1. LÓGICA DO CARROSSEL DE TEXTO (HERO) ====
    // =============================================
    const textSlides = document.querySelectorAll('.hero-text-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        textSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % textSlides.length;
        showSlide(currentSlide);
    }

    // Navegação por bolinhas
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.dataset.slide);
            showSlide(currentSlide);
        });
    });

    // Troca automática
    if (textSlides.length > 0) {
        setInterval(nextSlide, 5000); // Troca a cada 5 segundos
    }


    // =============================================
    // ==== 2. LÓGICA DO SPOTLIGHT CARD (MANTIDA) ====
    // =============================================
    const spotlightCards = document.querySelectorAll('.product-card');

    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    // ========================================================
    // ==== 3. LÓGICA DO CARROSSEL DE PRODUTOS (MANTIDA) ====
    // ========================================================
    const productTrack = document.querySelector('.product-carousel-track');

    if (productTrack) {
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        const productCard = productTrack.querySelector('.product-carousel-card');

        if (productCard) {
            const cardWidth = productCard.offsetWidth;
            const gap = 16; // 1rem
            const scrollAmount = cardWidth + gap;

            nextBtn.addEventListener('click', () => {
                productTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                productTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    }


    // ===================================================
    // ==== 4. LÓGICA DO STEPPER (MANTIDA) ====
    // ===================================================
    const stepper = document.querySelector('.stepper-outer-container');

    if (stepper) {
        const indicatorRow = stepper.querySelector('.stepper-indicator-row');
        const contents = stepper.querySelectorAll('.stepper-content');
        const contentWrapper = stepper.querySelector('.stepper-content-wrapper');
        const nextBtn = stepper.querySelector('.stepper-button-next');
        const backBtn = stepper.querySelector('.stepper-button-back');
        const navContainer = stepper.querySelector('.stepper-nav');
        let currentStep = 1;
        const totalSteps = contents.length;
        const checkIconHTML = `
            <div class="icon-btn icon-btn--small">
                <span class="icon-btn__back"></span>
                <span class="icon-btn__front">
                    <span class="icon-btn__icon"><i class="fas fa-check"></i></span>
                </span>
                <span class="icon-btn__label">Feito</span>
            </div>`;
        function getNumberIconHTML(num) {
            return `
            <div class="icon-btn icon-btn--small">
                <span class="icon-btn__back"></span>
                <span class="icon-btn__front">
                    <span class="icon-btn__icon" style="font-size: 1.2em;">${num}</span>
                </span>
                <span class="icon-btn__label">Etapa ${num}</span>
            </div>`;
        }
        function getActiveIconHTML(num) {
            return `
            <div class="icon-btn icon-btn--small">
                <span class="icon-btn__back"></span>
                <span class="icon-btn__front">
                    <span class="icon-btn__icon" style="font-size: 1.2em;">${num}</span>
                </span>
                <span class="icon-btn__label">Etapa ${num}</span>
            </div>`;
        }
        function initializeIndicators() {
            indicatorRow.innerHTML = '';
            for (let i = 1; i <= totalSteps; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('stepper-indicator');
                indicator.dataset.step = i;
                if (i === 1) {
                    indicator.classList.add('active');
                    indicator.innerHTML = getActiveIconHTML(i);
                } else {
                    indicator.classList.add('inactive');
                    indicator.innerHTML = getNumberIconHTML(i);
                }
                indicatorRow.appendChild(indicator);
                if (i < totalSteps) {
                    const connector = document.createElement('div');
                    connector.classList.add('stepper-connector');
                    connector.innerHTML = '<div class="stepper-connector-inner"></div>';
                    indicatorRow.appendChild(connector);
                }
            }
        }
        function updateStepper() {
            const indicators = stepper.querySelectorAll('.stepper-indicator');
            indicators.forEach((indicator, index) => {
                const stepNum = index + 1;
                indicator.classList.remove('active', 'complete', 'inactive');
                if (stepNum < currentStep) {
                    indicator.classList.add('complete');
                    indicator.innerHTML = checkIconHTML;
                } else if (stepNum === currentStep) {
                    indicator.classList.add('active');
                    indicator.innerHTML = getActiveIconHTML(stepNum);
                } else {
                    indicator.classList.add('inactive');
                    indicator.innerHTML = getNumberIconHTML(stepNum);
                }
            });
            const newContent = stepper.querySelector(`.stepper-content[data-step="${currentStep}"]`);
            const oldContent = stepper.querySelector('.stepper-content.active');
            if (oldContent) {
                oldContent.classList.remove('active');
                oldContent.classList.add('exiting');
                setTimeout(() => oldContent.classList.remove('exiting'), 400);
            }
            if (newContent) {
                newContent.classList.add('active');
                contentWrapper.style.height = newContent.offsetHeight + 'px';
            }
            backBtn.style.display = (currentStep === 1) ? 'none' : 'block';
            navContainer.classList.toggle('end', currentStep === 1);
            nextBtn.textContent = (currentStep === totalSteps) ? 'Finalizar' : 'Próximo';
        }
        nextBtn.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStepper();
            } else {
                alert('Pedido Finalizado!');
            }
        });
        backBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStepper();
            }
        });
        initializeIndicators();
        const firstContent = stepper.querySelector(`.stepper-content[data-step="1"]`);
        if (firstContent) {
            contentWrapper.style.height = firstContent.offsetHeight + 'px';
        }
    }


    // =============================================
    // ==== 5. LÓGICA DO NOVO DOCK MÓVEL (Liquid) ====
    // =============================================
    const dockPanel = document.getElementById('dock-panel');
    const dockItems = document.querySelectorAll('.dock-item');

    if (dockPanel && dockItems.length > 0) {
        const baseSize = 48;
        const maxMagnification = 1.6;
        const magnificationRange = 100;

        dockPanel.addEventListener('mousemove', e => {
            const mouseX = e.pageX;

            dockItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + window.scrollX + itemRect.width / 2;
                const distance = Math.abs(mouseX - itemCenter);

                let scale = 1;
                if (distance < magnificationRange) {
                    const proximity = (magnificationRange - distance) / magnificationRange;
                    scale = 1 + (maxMagnification - 1) * proximity;
                }
                const icon = item.querySelector('.dock-icon');
                if (icon) {
                    icon.style.transform = `scale(${scale})`;
                }
            });
        });

        dockPanel.addEventListener('mouseleave', () => {
            dockItems.forEach(item => {
                const icon = item.querySelector('.dock-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }

    // =============================================
    // ==== 6. LÓGICA DO HEADER (CardNav) COM ANIMAÇÃO ====
    // =============================================
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('card-nav');
    const navContent = document.getElementById('card-nav-content');
    const navCards = navContent.querySelectorAll('.nav-card');

    if (hamburger && nav && navContent) {
        let isNavOpen = false;

        // Função para calcular a altura do conteúdo no mobile
        function getNavContentHeight() {
            let height = 0;
            const gap = 8; // 8px gap
            navCards.forEach(card => {
                height += card.offsetHeight;
            });
            height += (navCards.length - 1) * gap;
            const contentStyle = getComputedStyle(navContent);
            height += parseFloat(contentStyle.paddingTop) + parseFloat(contentStyle.paddingBottom);
            return height;
        }

        // --- Lógica para Mobile (Click) ---
        hamburger.addEventListener('click', () => {
            isNavOpen = !isNavOpen;
            hamburger.classList.toggle('open', isNavOpen);
            nav.classList.toggle('open', isNavOpen);

            if (isNavOpen) {
                const topBarHeight = 60;
                const contentHeight = getNavContentHeight();
                nav.style.height = topBarHeight + contentHeight + 'px';
                nav.setAttribute('aria-hidden', 'false');
            } else {
                nav.style.height = '60px';
                nav.setAttribute('aria-hidden', 'true');
            }
        });

        // --- Lógica para Desktop (Animação de Entrada) ---
        function runDesktopEntryAnimation() {
            if (window.innerWidth > 768) {
                // 1. Anima a altura do container
                nav.style.height = '260px';

                // 2. Anima os cards com delay
                navCards.forEach((card, index) => {
                    card.style.transitionDelay = `${0.15 + index * 0.1}s`;
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                });
            }
        }

        // --- Lógica de Redimensionamento ---
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                // Ao redimensionar PARA desktop
                nav.style.height = '260px'; // Garante que fique aberto
                navCards.forEach((card, index) => {
                    card.style.transitionDelay = '0s'; // Remove delay para reajuste
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                });
                nav.classList.remove('open');
                hamburger.classList.remove('open');
                isNavOpen = false;
            } else {
                // Ao redimensionar PARA mobile
                // Reseta estilos dos cards para o estado inicial (oculto)
                navCards.forEach(card => {
                    card.style.transform = 'translateY(30px)';
                    card.style.opacity = '0';
                    card.style.transitionDelay = '0s';
                });

                if (isNavOpen) {
                    // Se estava aberto, recalcula a altura
                    const topBarHeight = 60;
                    const contentHeight = getNavContentHeight();
                    nav.style.height = topBarHeight + contentHeight + 'px';
                } else {
                    // Se estava fechado, força 60px
                    nav.style.height = '60px';
                }
            }
        });

        // Roda a animação de entrada do desktop (se aplicável)
        // Adiciona um pequeno delay para garantir que o CSS foi carregado
        setTimeout(runDesktopEntryAnimation, 100);
    }

}); // Fim do 'DOMContentLoaded'