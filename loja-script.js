/*
 * SCRIPT DA LOJA (loja-script.js)
 */
document.addEventListener("DOMContentLoaded", () => {

    /* ============================================= */
    /* ==== SEÇÃO 1: LÓGICA DO script.js (MENU, DOCK, ETC) ==== */
    /* ============================================= */

    // LÓGICA DO SPOTLIGHT CARD (Seção 2 do script.js)
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

    // LÓGICA DO DOCK MÓVEL (Seção 5 do script.js)
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
                if (distance < 100) {
                    const proximity = (100 - distance) / 100;
                    scale = 1 + (1.6 - 1) * proximity;
                }
                const icon = item.querySelector('.dock-icon');
                if (icon) icon.style.transform = `scale(${scale})`;
            });
        });
        dockPanel.addEventListener('mouseleave', () => {
            dockItems.forEach(item => {
                const icon = item.querySelector('.dock-icon');
                if (icon) icon.style.transform = 'scale(1)';
            });
        });
    }

    // LÓGICA DO HEADER/NAV (Seção 6 do script.js)
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('card-nav');
    const navContent = document.getElementById('card-nav-content');
    
    if (hamburger && nav && navContent) {
        const navCards = navContent.querySelectorAll('.nav-card');
        let isNavOpen = false; 

        function getMobileNavContentHeight() {
            let height = 0;
            const gap = 8;
            navCards.forEach(card => { height += card.offsetHeight; });
            height += (navCards.length - 1) * gap;
            const contentStyle = getComputedStyle(navContent);
            height += parseFloat(contentStyle.paddingTop) + parseFloat(contentStyle.paddingBottom);
            return height;
        }

        function setNavState(isOpen) {
            isNavOpen = isOpen;
            hamburger.classList.toggle('open', isOpen);
            nav.classList.toggle('open', isOpen);
            if (isOpen) {
                const topBarHeight = 60;
                let contentHeight = (window.innerWidth > 768) ? 200 : getMobileNavContentHeight();
                nav.style.height = topBarHeight + contentHeight + 'px';
                nav.setAttribute('aria-hidden', 'false');
            } else {
                nav.style.height = '60px'; 
                nav.setAttribute('aria-hidden', 'true');
            }
        }
        hamburger.addEventListener('click', () => setNavState(!isNavOpen));
        window.addEventListener('resize', () => {
            if (isNavOpen) {
                let contentHeight = (window.innerWidth > 768) ? 200 : getMobileNavContentHeight();
                nav.style.height = 60 + contentHeight + 'px';
            } else {
                nav.style.height = '60px';
            }
        });
        function runDesktopEntryAnimation() {
            if (window.innerWidth > 768) {
                setNavState(true);
                navCards.forEach((card, index) => {
                    card.style.transitionDelay = `${0.15 + index * 0.1}s`;
                });
            }
        }
        setTimeout(runDesktopEntryAnimation, 100);
    }
    
    /* ======================================================== */
    /* ==== SEÇÃO 2: LÓGICA DA SACOLA (Combinada e Corrigida) ==== */
    /* ======================================================== */

    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('cart-close-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const addCartButtons = document.querySelectorAll('.btn-add-cart');
    const cartBody = document.getElementById('cart-items-list'); 
    const cartCountBadge = document.getElementById('cart-count-badge');
    const emptyMessageHTML = '<p class="cart-empty-message">Sua sacola está vazia.</p>';
    let cart = JSON.parse(localStorage.getItem('lojaCart')) || [];

    function openCart() {
        if (cartSidebar) cartSidebar.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
    }

    function closeCart() {
        if (cartSidebar) cartSidebar.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
    }

    function saveCart() {
        localStorage.setItem('lojaCart', JSON.stringify(cart));
        updateCartUI();
    }

    function addItemToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push(item); 
        }
        saveCart();
        openCart(); 
    }

    function removeItemFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        saveCart();
    }

    function updateCartUI() {
        if (!cartBody || !cartCountBadge) return; 
        cartBody.innerHTML = '';
        if (cart.length === 0) {
            cartBody.innerHTML = emptyMessageHTML;
        } else {
            cart.forEach(item => {
                const itemHTML = `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div>
                                <p class="cart-item-name">${item.name}</p>
                                <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                                <p class="cart-item-quantity">Quantidade: ${item.quantity}</p>
                            </div>
                            <button class="cart-item-remove" data-id="${item.id}">Remover</button>
                        </div>
                    </div>
                `;
                cartBody.innerHTML += itemHTML;
            });
        }
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartCountBadge.textContent = totalItems;
            cartCountBadge.classList.add('visible');
        } else {
            cartCountBadge.classList.remove('visible');
            cartCountBadge.textContent = '0';
        }
        
        addRemoveListeners();
    }
    
    function addRemoveListeners() {
        const removeButtons = cartBody.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.dataset.id;
                removeItemFromCart(itemId);
            });
        });
    }

    if (openCartBtn) openCartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    if (addCartButtons.length > 0) {
        addCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const productData = e.currentTarget.dataset;
                const item = {
                    id: productData.id,
                    name: productData.name,
                    price: parseFloat(productData.price),
                    image: productData.image,
                    quantity: 1
                };
                addItemToCart(item);
            });
        });
    }

    updateCartUI();
    
    
    /* ======================================================== */
    /* ==== SEÇÃO 5: LÓGICA DE FILTRO DE TABS (NOVO) ==== */
    /* ======================================================== */
    
    const filterTabs = document.querySelectorAll('.filter-tab-btn');
    const productCards = document.querySelectorAll('.product-grid .product-card');

    function filterProducts(category, activeTab) {
        // 1. Gerencia o estado ativo da aba
        filterTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        activeTab.classList.add('active');

        // 2. Filtra os cards
        productCards.forEach(card => {
            const cardCategories = card.dataset.category || 'destaques';

            // O card deve ser mostrado se:
            // 1. A categoria for 'destaques' (mostra todos)
            // 2. As categorias do card incluírem a categoria do filtro
            if (category === 'destaques' || cardCategories.includes(category)) {
                card.style.display = 'flex'; // 'flex' é o display original do card
            } else {
                card.style.display = 'none'; // Esconde o card
            }
        });
    }

    // Adiciona o clique em cada aba
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.filter;
            filterProducts(category, tab);
        });
    });


}); // Fim do 'DOMContentLoaded'
