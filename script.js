// Espera o HTML carregar para rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // =================================================================
    // ==== 1. LÓGICA DO CARROSSEL DE TEXTO (HERO) - (CORRIGIDO) ====
    // =================================================================
    // **** CORREÇÃO: Envolvido em try...catch ****
    // Isso garante que, se o RotatingText falhar, o resto do script 
    // (incluindo o menu/barra) continue funcionando.
    try {
        const rotatingTextContainer = document.getElementById('hero-rotating-text');
        if (rotatingTextContainer) {
            new RotatingText(rotatingTextContainer, {
                texts: [
                    ' Inverno',
                    ' Verão',
                    ' Outono'
                ],
                rotationInterval: 3000, // Intervalo de 3 segundos
                splitBy: 'characters', // Animar por letras
                staggerDuration: 50 // Atraso de 50ms entre as letras
            });
        }
    } catch (e) {
        // Se der erro, avisa no console, mas não para o script.
        console.error("Falha ao iniciar o RotatingText:", e);
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

        if (productCard && prevBtn && nextBtn) {
            const cardWidth = productCard.offsetWidth;
            const gap = 16;
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
    // ==== 4. LÓGICA DO STEPPER (MODIFICADA) ====
    // ===================================================
    const stepper = document.querySelector('.stepper-outer-container');

    if (stepper) {
        const indicatorRow = stepper.querySelector('.stepper-indicator-row');
        const contents = stepper.querySelectorAll('.stepper-content');
        const contentWrapper = stepper.querySelector('.stepper-content-wrapper');

        const nextBtn = document.getElementById('stepper-next');
        const backBtn = document.getElementById('stepper-back');

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
            if (!indicatorRow) return;
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
                if (contentWrapper) {
                    // Recalcula a altura caso o conteúdo tenha mudado (ex: remoção do input)
                    contentWrapper.style.height = 'auto';
                    const newHeight = newContent.offsetHeight;
                    contentWrapper.style.height = newHeight + 'px';
                }
            }
            if (backBtn) {
                backBtn.style.display = (currentStep === 1) ? 'none' : 'inline-flex';
            }
            if (navContainer) {
                navContainer.classList.toggle('end', currentStep === 1);
            }
            if (nextBtn) {
                // MODIFICADO: Muda o texto do botão final
                nextBtn.textContent = (currentStep === totalSteps) ? 'Chamar Agora' : 'Próximo';
            }
        }

        if (nextBtn && backBtn) {
            nextBtn.addEventListener('click', () => {
                // MODIFICADO: Ação do botão final
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateStepper();
                } else {
                    // Ação final: Abrir o WhatsApp
                    window.open('https://chat.whatsapp.com/BS9jxBn1V2eIzFxjMFlxXG?fbclid=PAZXh0bgNhZW0CMTEAAadpgJFJx9NshdqBFCB9NrVhL5M68yZynr7unGsOEl4Qdg7ms3brQYLnPpvg5Q_aem_YoHqPQW_SD-3Awi7FhzB1Q', '_blank');
                }
            });
            backBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateStepper();
                }
            });
        }

        initializeIndicators();
        const firstContent = stepper.querySelector(`.stepper-content[data-step="1"]`);
        if (firstContent && contentWrapper) {
            contentWrapper.style.height = firstContent.offsetHeight + 'px';
        }
        
        // Adiciona um listener de resize para ajustar a altura do stepper
        window.addEventListener('resize', () => {
             const activeContent = stepper.querySelector('.stepper-content.active');
             if(activeContent && contentWrapper) {
                contentWrapper.style.height = 'auto'; // Reseta
                const newHeight = activeContent.offsetHeight;
                contentWrapper.style.height = newHeight + 'px'; // Aplica nova altura
             }
        });
    }


    // =============================================
    // ==== 5. LÓGICA DO NOVO DOCK MÓVEL (Liquid) ====
    // =============================================
    const dockPanel = document.getElementById('dock-panel');
    const dockItems = document.querySelectorAll('.dock-item');

    if (dockPanel && dockItems.length > 0) {
        dockPanel.addEventListener('mousemove', e => {
            const mouseX = e.pageX;

            dockItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + window.scrollX + itemRect.width / 2;
                const distance = Math.abs(mouseX - itemCenter);

                let scale = 1;
                if (distance < 100) { // magnificationRange
                    const proximity = (100 - distance) / 100;
                    scale = 1 + (1.6 - 1) * proximity; // maxMagnification
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

    // ==================================================
    // ==== 6. LÓGICA DO HEADER (CardNav) - CORRIGIDA ====
    // ==================================================
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('card-nav');
    const navContent = document.getElementById('card-nav-content');
    
    if (hamburger && nav && navContent) {
        const navCards = navContent.querySelectorAll('.nav-card');
        if (navCards.length > 0) {
            let isNavOpen = false; // Começa fechado por padrão

            // Função para calcular a altura do conteúdo (usada apenas no mobile)
            function getMobileNavContentHeight() {
                let height = 0;
                const gap = 8;
                navCards.forEach(card => {
                    height += card.offsetHeight;
                });
                height += (navCards.length - 1) * gap;
                const contentStyle = getComputedStyle(navContent);
                height += parseFloat(contentStyle.paddingTop) + parseFloat(contentStyle.paddingBottom);
                return height;
            }

            // Função para ABRIR ou FECHAR o menu
            function setNavState(isOpen) {
                isNavOpen = isOpen;
                hamburger.classList.toggle('open', isOpen);
                nav.classList.toggle('open', isOpen);

                if (isOpen) {
                    // ABRE O MENU
                    const topBarHeight = 60;
                    let contentHeight;

                    if (window.innerWidth > 768) {
                        contentHeight = 200; // Altura fixa no Desktop
                    } else {
                        contentHeight = getMobileNavContentHeight(); // Altura calculada no Mobile
                    }

                    nav.style.height = topBarHeight + contentHeight + 'px';
                    nav.setAttribute('aria-hidden', 'false');
                } else {
                    // FECHA O MENU
                    nav.style.height = '60px'; // Retorna à altura fina
                    nav.setAttribute('aria-hidden', 'true');
                }
            }

            // Evento de CLIQUE no Hamburger
            hamburger.addEventListener('click', () => {
                setNavState(!isNavOpen); // Inverte o estado atual
            });

            // Evento de REDIMENSIONAR a tela
            window.addEventListener('resize', () => {
                // Se o menu estiver aberto, recalcula a altura
                if (isNavOpen) {
                    const topBarHeight = 60;
                    let contentHeight;
                    if (window.innerWidth > 768) {
                        contentHeight = 200;
                    } else {
                        contentHeight = getMobileNavContentHeight();
                    }
                    nav.style.height = topBarHeight + contentHeight + 'px';
                } else {
                    // Se estiver fechado, apenas garante que está 60px
                    nav.style.height = '60px';
                }
            });

            // Função para animar a entrada no Desktop (MODIFICADA)
            function runDesktopEntryAnimation() {
                if (window.innerWidth > 768) {
                    // Força o menu a ABRIR no desktop ao carregar a spágina
                    setNavState(true);

                    // Aplica a animação de entrada escalonada (o CSS cuida da animação)
                    navCards.forEach((card, index) => {
                        card.style.transitionDelay = `${0.15 + index * 0.1}s`;
                    });
                }
            }

            // Roda a animação de entrada do desktop (que agora abre o menu)
            setTimeout(runDesktopEntryAnimation, 100);
        }
    }
    
    
    // =============================================
    // ==== 7. LÓGICA DA SACOLA (REMOVIDA) ====
    // =============================================
    // Todo o bloco de código da sacola foi removido.


    // ========================================================
    // ==== 8. LÓGICA DO HERO CHROMA-GRID (REMOVIDA) ====
    // ========================================================
    // A lógica que estava aqui foi removida para desativar o efeito.


}); // Fim do 'DOMContentLoaded'