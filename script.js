// Espera o HTML carregar para rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // =================================================================
    // ==== 1. LÓGICA DO CARROSSEL DE TEXTO (HERO) - EFEITO ROTATING ====
    // =================================================================
    const heroContent = document.querySelector('.hero-text-content');

    if (heroContent) {
        const staticWordEl = heroContent.querySelector('.static-word');
        const rotatingWrapper = heroContent.querySelector('.rotating-word-wrapper');
        const subtitleEl = heroContent.querySelector('.hero-animated-subtitle');
        const dots = document.querySelectorAll('.dot');

        const slidesData = [
            { static: "Coleção", rotating: "Essencial", subtitle: "Elegância e conforto para o seu dia a dia." },
            { static: "Moda", rotating: "Inverno", subtitle: "As peças mais quentes para a estação." },
            { static: "Moda", rotating: "Verão", subtitle: "Leveza e estilo para aproveitar o sol." }
        ];
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            const slide = slidesData[index];

            if (staticWordEl) {
                staticWordEl.textContent = slide.static;
            }

            if (rotatingWrapper) {
                const oldWord = rotatingWrapper.querySelector('.rotating-word');
                if (oldWord) {
                    oldWord.classList.add('exiting');
                    oldWord.addEventListener('transitionend', () => {
                        if (oldWord) oldWord.remove();
                    }, { once: true });
                }

                const newWord = document.createElement('span');
                newWord.className = 'rotating-word';
                newWord.textContent = slide.rotating;
                rotatingWrapper.appendChild(newWord);

                void newWord.offsetWidth;
                newWord.classList.add('entering');
            }

            if (subtitleEl) {
                subtitleEl.textContent = slide.subtitle;
            }

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slidesData.length;
            showSlide(currentSlide);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const newIndex = parseInt(dot.dataset.slide);
                if (newIndex !== currentSlide) {
                    currentSlide = newIndex;
                    showSlide(currentSlide);
                    clearInterval(slideInterval);
                    slideInterval = setInterval(nextSlide, 5000);
                }
            });
        });

        showSlide(0);
        slideInterval = setInterval(nextSlide, 5000);
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
    // ==== 4. LÓGICA DO STEPPER (CORRIGIDA) ====
    // ===================================================
    const stepper = document.querySelector('.stepper-outer-container');

    if (stepper) {
        const indicatorRow = stepper.querySelector('.stepper-indicator-row');
        const contents = stepper.querySelectorAll('.stepper-content');
        const contentWrapper = stepper.querySelector('.stepper-content-wrapper');

        // **** A CORREÇÃO ESTÁ AQUI ****
        // Buscando botões por ID em vez de classe
        const nextBtn = document.getElementById('stepper-next');
        const backBtn = document.getElementById('stepper-back');

        const navContainer = stepper.querySelector('.stepper-nav');
        let currentStep = 1;
        const totalSteps = contents.length;

        // O restante da lógica do stepper (HTML dos ícones, etc.)
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
                    contentWrapper.style.height = newContent.offsetHeight + 'px';
                }
            }
            if (backBtn) {
                backBtn.style.display = (currentStep === 1) ? 'none' : 'inline-flex';
            }
            if (navContainer) {
                navContainer.classList.toggle('end', currentStep === 1);
            }
            if (nextBtn) {
                nextBtn.textContent = (currentStep === totalSteps) ? 'Finalizar' : 'Próximo';
            }
        }

        // Adiciona event listeners APENAS se os botões existirem
        if (nextBtn && backBtn) {
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
        }

        initializeIndicators();
        const firstContent = stepper.querySelector(`.stepper-content[data-step="1"]`);
        if (firstContent && contentWrapper) {
            contentWrapper.style.height = firstContent.offsetHeight + 'px';
        }
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
    // ==== 6. LÓGICA DO HEADER (CardNav) - AGORA FUNCIONANDO ====
    // ==================================================
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('card-nav');
    const navContent = document.getElementById('card-nav-content');
    const navCards = navContent.querySelectorAll('.nav-card');

    if (hamburger && nav && navContent && navCards.length > 0) {
        let isNavOpen = false;

        function getNavContentHeight() {
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

        hamburger.addEventListener('click', () => {
            isNavOpen = !isNavOpen;
            hamburger.classList.toggle('open', isNavOpen);
            nav.classList.toggle('open', isNavOpen);

            if (isNavOpen) {
                // ABRE O MENU
                const topBarHeight = 60;
                const contentHeight = getNavContentHeight();
                nav.style.height = topBarHeight + contentHeight + 'px';
                nav.setAttribute('aria-hidden', 'false');
            } else {
                // FECHA O MENU (A CORREÇÃO QUE VOCÊ PEDIU)
                nav.style.height = '60px'; // Retorna à altura fina
                nav.setAttribute('aria-hidden', 'true');
            }
        });

        function runDesktopEntryAnimation() {
            if (window.innerWidth > 768) {
                nav.style.height = '260px';
                navCards.forEach((card, index) => {
                    card.style.transitionDelay = `${0.15 + index * 0.1}s`;
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                });
            }
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.style.height = '260px';
                navCards.forEach((card, index) => {
                    card.style.transitionDelay = '0s';
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                });
                nav.classList.remove('open');
                hamburger.classList.remove('open');
                isNavOpen = false;
            } else {
                navCards.forEach(card => {
                    card.style.transform = 'translateY(30px)';
                    card.style.opacity = '0';
                    card.style.transitionDelay = '0s';
                });

                if (isNavOpen) {
                    const topBarHeight = 60;
                    const contentHeight = getNavContentHeight();
                    nav.style.height = topBarHeight + contentHeight + 'px';
                } else {
                    nav.style.height = '60px';
                }
            }
        });

        setTimeout(runDesktopEntryAnimation, 100);
    }

}); // Fim do 'DOMContentLoaded'