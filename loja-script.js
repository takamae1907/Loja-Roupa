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
        
        // Função para animar a entrada no Desktop (MODIFICADA)
        function runDesktopEntryAnimation() {
            if (window.innerWidth > 768) {
                // setNavState(true); // <-- REMOVIDO: Impede que o menu abra sozinho
                navCards.forEach((card, index) => {
                    card.style.transitionDelay = `${0.15 + index * 0.1}s`;
                });
            }
        }
        // Roda a animação de entrada do desktop (agora apenas para delays)
        setTimeout(runDesktopEntryAnimation, 100);
    }
    
    /* ======================================================== */
    /* ==== SEÇÃO 2: LÓGICA DA SACOLA (Combinada e Corrigida) ==== */
    /* ======================================================== */

    // (Esta seção é opcional, mas está aqui caso você a tenha)
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('cart-close-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if(openCartBtn && cartSidebar && cartOverlay){
        function openCart() {
            if (cartSidebar) cartSidebar.classList.add('open');
            if (cartOverlay) cartOverlay.classList.add('open');
        }

        function closeCart() {
            if (cartSidebar) cartSidebar.classList.remove('open');
            if (cartOverlay) cartOverlay.classList.remove('open');
        }
        
        openCartBtn.addEventListener('click', openCart);
        if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
        if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    }
    
    
    /* ======================================================== */
    /* ==== SEÇÃO 5: LÓGICA DE FILTRO (BUSCA + TABS + SIDEBAR) ==== */
    /* ======================================================== */
    
    const filterTabsContainer = document.getElementById('filter-tabs');
    const productGrid = document.getElementById('product-grid');
    const searchBar = document.getElementById('search-bar'); // Pega a barra de busca
    
    if (filterTabsContainer && productGrid) {
        const filterTabs = filterTabsContainer.querySelectorAll('.filter-tab-btn');
        const productCards = productGrid.querySelectorAll('.product-card');
        const sidebarCheckboxes = document.querySelectorAll('.sub-filter-checkbox');
        
        // NOVO: Pega os swatches de cor
        const colorSwatches = document.querySelectorAll('.color-filter-swatch');

        function filterProducts() {
            // 1. Get o termo de busca (NOVO)
            const searchTerm = searchBar ? searchBar.value.toLowerCase() : '';

            // 2. Get o filtro principal (Abas)
            const activeTab = filterTabsContainer.querySelector('.filter-tab-btn.active');
            const mainCategory = activeTab ? activeTab.dataset.filter : 'destaques';

            // 3. Get os sub-filtros (Sidebar Checkboxes)
            const activeSubFilters = [];
            sidebarCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    activeSubFilters.push(checkbox.value);
                }
            });
            
            // NOVO: 4. Get os filtros de cor
            const activeColorFilters = [];
            colorSwatches.forEach(swatch => {
                if (swatch.classList.contains('selected')) {
                    activeColorFilters.push(swatch.dataset.colorName);
                }
            });


            // 5. Itera sobre os cards e aplica a lógica
            productCards.forEach(card => {
                const cardCategories = card.dataset.category || 'destaques';
                const cardColorNames = card.dataset.colorNames || ''; // Pega os nomes das cores do card
                
                // Pega o texto do card para a busca (NOVO)
                const productName = (card.querySelector('h3 a') ? card.querySelector('h3 a').textContent : '').toLowerCase();
                const productCode = (card.querySelector('.product-card-label') ? card.querySelector('.product-card-label').textContent : '').toLowerCase();

                // Lógica do Filtro Principal
                const showsMain = (mainCategory === 'destaques') || cardCategories.includes(mainCategory);
                
                // Lógica do Sub-Filtro (Checkboxes)
                const showsSub = (activeSubFilters.length === 0) || activeSubFilters.some(sub => cardCategories.includes(sub));

                // Lógica da Busca (NOVO)
                const showsSearch = (searchTerm === '') || productName.includes(searchTerm) || productCode.includes(searchTerm);
                
                // NOVO: Lógica do Filtro de Cor
                // Se nenhum filtro de cor estiver ativo, mostra (true)
                // Se houver filtros, verifica se o cardColorNames inclui PELO MENOS UM (some) dos activeColorFilters
                const showsColor = (activeColorFilters.length === 0) || activeColorFilters.some(colorName => cardColorNames.includes(colorName));


                // 6. Mostra ou esconde o card (ADICIONADO O showsColor)
                if (showsMain && showsSub && showsSearch && showsColor) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Adiciona o clique em cada aba principal
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterProducts();
            });
        });

        // Adiciona o clique em cada checkbox da sidebar
        sidebarCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                filterProducts();
            });
        });

        // NOVO: Adiciona o clique em cada swatch de cor
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                // Alterna a classe 'selected'
                swatch.classList.toggle('selected');
                // Roda o filtro novamente
                filterProducts();
            });
        });

        // Adiciona o listener para a barra de busca (NOVO)
        if (searchBar) {
            searchBar.addEventListener('input', () => {
                filterProducts();
            });
        }

        // Roda o filtro uma vez no carregamento
        filterProducts();
    }


    /* ======================================================== */
    /* ==== SEÇÃO 6: LÓGICA DA SIDEBAR DE FILTRO (NOVA) ==== */
    /* ======================================================== */
    
    const openSubFilterBtn = document.getElementById('open-subfilter-btn');
    const closeSubFilterBtn = document.getElementById('sub-filter-close-btn');
    const subFilterSidebar = document.getElementById('sub-filter-sidebar');
    const subFilterOverlay = document.getElementById('sub-filter-overlay');

    function openSubFilter() {
        if (subFilterSidebar) subFilterSidebar.classList.add('open');
        if (subFilterOverlay) subFilterOverlay.classList.add('open');
    }

    function closeSubFilter() {
        if (subFilterSidebar) subFilterSidebar.classList.remove('open');
        if (subFilterOverlay) subFilterOverlay.classList.remove('open');
    }

    if (openSubFilterBtn) openSubFilterBtn.addEventListener('click', openSubFilter);
    if (closeSubFilterBtn) closeSubFilterBtn.addEventListener('click', closeSubFilter);
    if (subFilterOverlay) subFilterOverlay.addEventListener('click', closeSubFilter);


}); // Fim do 'DOMContentLoaded'

// Este script executa assim que a página "loja.html" carrega
document.addEventListener('DOMContentLoaded', function() {

  // --- 1. LER A URL ---
  // Pega os parâmetros da URL (ex: ?categoria=vestido)
  const urlParams = new URLSearchParams(window.location.search);
  
  // Pega o valor do parâmetro "categoria"
  // Se não houver, usa "todos" como padrão
  const filtroDaURL = urlParams.get('categoria') || 'todos';

  // --- 2. ENCONTRAR OS ELEMENTOS ---
  const todosProdutos = document.querySelectorAll('.item-produto');
  const botoesFiltro = document.querySelectorAll('.btn-categoria');

  // --- 3. ATUALIZAR OS BOTÕES ---
  botoesFiltro.forEach(function(botao) {
    // Limpa a classe "ativo" de todos
    botao.classList.remove('ativo');
    
    // Pega o "data-filtro" do botão (ex: "vestido")
    const filtroDoBotao = botao.getAttribute('data-filtro');
    
    // Se o filtro do botão for igual ao filtro da URL...
    if (filtroDoBotao === filtroDaURL) {
      // ...adiciona a classe "ativo" nele
      botao.classList.add('ativo');
    }
  });

  // --- 4. FILTRAR OS PRODUTOS ---
  todosProdutos.forEach(function(produto) {
    // Pega a categoria do produto (ex: "saia")
    const categoriaProduto = produto.getAttribute('data-categoria');

    // Se o filtro for "todos" OU a categoria do produto bater...
    if (filtroDaURL === 'todos' || categoriaProduto === filtroDaURL) {
      // Mostra o produto
      produto.classList.remove('escondido');
    } else {
      // Esconde o produto
      produto.classList.add('escondido');
    }
  });
});