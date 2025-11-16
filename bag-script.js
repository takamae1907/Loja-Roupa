/* =================================================== */
/* ==== SCRIPT DA SACOLA DE COMPRAS (bag-script.js) ==== */
/* =================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Variáveis Globais ---
    // Coloque aqui o número de WhatsApp da dona da loja, em formato internacional (Ex: 55119XXXXXXXX)
    const NUMERO_WHATSAPP_DONA = "5561994134559"; 
    
    const bagIcon = document.getElementById("bag-icon-button");
    const bagSidebar = document.getElementById("bag-sidebar");
    const bagOverlay = document.getElementById("bag-overlay");
    const bagCloseBtn = document.getElementById("bag-close-btn");
    const bagContent = document.getElementById("bag-items-container");
    const bagCountElement = document.getElementById("bag-item-count");
    const bagCheckoutBtn = document.getElementById("bag-checkout-whatsapp");

    // --- Funções Principais da Sacola ---

    /**
     * Pega a sacola salva no navegador.
     * @returns {Array} Um array de objetos de produto.
     */
    function getBag() {
        return JSON.parse(localStorage.getItem("crismonBag")) || [];
    }

    /**
     * Salva a sacola no navegador.
     * @param {Array} bag - O array de produtos para salvar.
     */
    function saveBag(bag) {
        localStorage.setItem("crismonBag", JSON.stringify(bag));
        updateBagCount(); // Atualiza o contador sempre que salvar
        updateBagUI();    // Atualiza a UI da sacola sempre que salvar
    }

    /**
     * Adiciona um produto à sacola.
     * @param {Object} product - O objeto do produto a ser adicionado.
     */
    window.addToBag = (product) => {
        const bag = getBag();
        bag.push(product);
        saveBag(bag);
        
        // Mostra uma confirmação
        alert(`${product.nome} foi adicionado à sacola!`);
    }

    /**
     * Remove um produto da sacola pelo seu índice.
     * @param {number} index - O índice do produto a ser removido.
     */
    function removeFromBag(index) {
        const bag = getBag();
        bag.splice(index, 1); // Remove o item pelo índice
        saveBag(bag);
    }

    /**
     * Atualiza o contador de itens no ícone da sacola.
     */
    function updateBagCount() {
        const bag = getBag();
        if (bagCountElement) {
            if (bag.length > 0) {
                bagCountElement.innerText = bag.length;
                bagCountElement.style.display = "flex";
            } else {
                bagCountElement.style.display = "none";
            }
        }
    }

    /**
     * Atualiza a interface da barra lateral da sacola.
     */
    function updateBagUI() {
        const bag = getBag();
        if (bagContent) {
            if (bag.length === 0) {
                bagContent.innerHTML = '<p class="bag-empty-message">Sua sacola está vazia.</p>';
                if (bagCheckoutBtn) bagCheckoutBtn.style.display = 'none'; // Esconde o botão de finalizar
            } else {
                bagContent.innerHTML = bag.map((item, index) => `
                    <div class="bag-item">
                        <img src="${item.foto}" alt="${item.nome}" class="bag-item-img">
                        <div class="bag-item-details">
                            <div class="bag-item-name">${item.nome}</div>
                            <div class="bag-item-info">Cód: ${item.id}</div>
                            <div class="bag-item-info">Tam: ${item.tamanho} | Cor: ${item.cor}</div>
                            <div class="bag-item-price">${item.preco}</div>
                        </div>
                        <button class="bag-item-remove" data-index="${index}">&times;</button>
                    </div>
                `).join('');
                
                if (bagCheckoutBtn) bagCheckoutBtn.style.display = 'flex'; // Mostra o botão de finalizar
                
                // Adiciona os listeners para os botões de remover
                addRemoveListeners();
            }
        }
    }
    
    /**
     * Adiciona listeners de clique aos botões "remover" na sacola.
     */
    function addRemoveListeners() {
        document.querySelectorAll(".bag-item-remove").forEach(button => {
            button.addEventListener("click", () => {
                const index = parseInt(button.dataset.index);
                removeFromBag(index);
            });
        });
    }
    
    // --- Lógica do WhatsApp ---

    /**
     * Retorna a saudação correta (Bom dia, Boa tarde, Boa noite).
     * @returns {string} A saudação.
     */
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return "Bom dia";
        if (hour >= 12 && hour < 18) return "Boa tarde";
        return "Boa noite";
    }

    /**
     * Gera a mensagem final para o WhatsApp.
     */
    function generateWhatsAppMessage() {
        const bag = getBag();
        if (bag.length === 0) {
            alert("Sua sacola está vazia!");
            return;
        }

        // <-- CORREÇÃO: Removida a verificação que impedia o script de rodar com seu número
        // if (NUMERO_WHATSAPP_DONA === "5561995519612" || ... ) { ... }

        let message = `Olá, ${getGreeting()}! Tenho interesse nos seguintes produtos:\n\n`;
        
        bag.forEach(item => {
            message += `*${item.nome}* (Cód: ${item.id})\n`;
            message += `Preço: ${item.preco}\n`;
            message += `Tamanho: ${item.tamanho}\n`;
            message += `Cor: ${item.cor}\n`;
            message += `------------------------\n`;
        });

        message += `*Total de itens: ${bag.length}*\n\n`;
        message += `Aguardo seu retorno para finalizar o pedido!`;

        // Codifica a mensagem para a URL
        const encodedMessage = encodeURIComponent(message);
        
        // Abre o link do WhatsApp
        // <-- CORREÇÃO: Usando a variável NUMERO_WHATSAPP_DONA em vez de um número fixo
        const whatsappURL = `https://wa.me/${NUMERO_WHATSAPP_DONA}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }

    // --- Listeners da UI da Sacola ---
    if (bagIcon) {
        bagIcon.addEventListener("click", () => {
            bagSidebar.classList.add("open");
            bagOverlay.classList.add("open");
            updateBagUI(); // Atualiza a sacola sempre que abrir
        });
    }

    if (bagCloseBtn) {
        bagCloseBtn.addEventListener("click", () => {
            bagSidebar.classList.remove("open");
            bagOverlay.classList.remove("open");
        });
    }
    
    if (bagOverlay) {
        bagOverlay.addEventListener("click", () => {
            bagSidebar.classList.remove("open");
            bagOverlay.classList.remove("open");
        });
    }
    
    if (bagCheckoutBtn) {
        bagCheckoutBtn.addEventListener("click", generateWhatsAppMessage);
    }
    
    // --- Inicialização ---
    updateBagCount(); // Atualiza o contador assim que a página carrega

});