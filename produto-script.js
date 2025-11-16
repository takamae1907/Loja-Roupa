/* =================================================== */
/* ==== SCRIPT DA PÁGINA DE PRODUTO (produto-script.js) ==== */
/* =================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Encontrar o ID do produto na URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // 2. Buscar o produto no "banco de dados" (catalogo)
    // (O 'catalogo' vem do arquivo 'produtos-db.js' carregado antes)
    const produto = catalogo[productId];

    // 3. Se o produto não existir, volta para a loja
    if (!produto) {
        console.error("Produto não encontrado!");

        const container = document.querySelector(".pdp-layout");

        if (container) container.style.display = 'none';

        // Simulação de um container de erro
        if (container) {
            const erro = document.createElement('div');
            erro.innerHTML = `
                <div style="text-align: center; padding: 4rem 1rem;">
                    <h2>Oops! Produto não encontrado.</h2>
                    <p>O produto que você está procurando (Cód: ${productId}) não existe ou foi removido.</p>
                    <a href="loja.html" class="pdp-whatsapp-button" style="text-decoration: none; max-width: 300px; margin: 0 auto; background-color: var(--color-accent);">
                        Ver todos os produtos
                    </a>
                </div>`;
            container.parentElement.appendChild(erro);
        }

        return;
    }

    // --- Variáveis para guardar a seleção do usuário ---
    let selectedSize = null;
    let selectedColor = null; // Código Hex (ex: #FFFFFF)
    let selectedColorName = null; // Nome da Cor (ex: "Branco")


    // 4. Preencher as informações na página

    // Título e Código
    document.title = `${produto.nome} - Crismon Modas`;
    document.getElementById("pdp-label-codigo").innerText = `Cód. ${productId}`;
    document.getElementById("pdp-title").innerText = produto.nome;

    // Preço
    document.getElementById("pdp-price").innerText = produto.preco;
    document.getElementById("pdp-installments").innerText = produto.parcelas;

    // Link do Botão WhatsApp (Pedido direto)
    const whatsappButton = document.getElementById("pdp-whatsapp-button");

    // <-- MUDANÇA: Removida a definição de link estático
    // const whatsappLink = "https://chat.whatsapp.com/BS9jxBn1V2eIzFxjMFlxXG?fbclid=...";
    // whatsappButton.href = whatsappLink;

    // Imagem Principal (carrega a primeira foto)
    const mainImage = document.getElementById("pdp-gallery-main");
    mainImage.src = produto.fotos[0];
    mainImage.alt = `Foto principal do ${produto.nome}`;

    // Galeria de Miniaturas
    const thumbnailsContainer = document.getElementById("pdp-gallery-thumbnails");
    thumbnailsContainer.innerHTML = produto.fotos.map((foto, index) => {
        const activeClass = (index === 0) ? 'active' : '';
        return `
            <div class="pdp-gallery-thumbnail-item ${activeClass}" 
                 style="background-image: url('${foto}')"
                 data-image-src="${foto}">
            </div>
        `;
    }).join('');

    // Tamanhos
    const sizesContainer = document.getElementById("pdp-sizes");
    sizesContainer.innerHTML = produto.tamanhos.map((tamanho, index) => {
        // Se só tiver um tamanho, já deixa pré-selecionado
        const activeClass = (produto.tamanhos.length === 1) ? 'active' : '';
        if (produto.tamanhos.length === 1) {
            selectedSize = tamanho;
        }
        return `<div class="pdp-size-option ${activeClass}">${tamanho}</div>`;
    }).join('');

    // Cores
    const colorsContainer = document.getElementById("pdp-colors");
    const corNomes = produto.corNomes || [];
    colorsContainer.innerHTML = produto.cores.map((cor, index) => {
        const nomeCor = corNomes[index] || 'Cor';

        // Se só tiver uma cor, já deixa pré-selecionada
        const activeClass = (produto.cores.length === 1) ? 'active' : '';
        if (produto.cores.length === 1) {
            selectedColor = cor;
            selectedColorName = nomeCor;
        }

        return `
            <div class="pdp-color-swatch ${activeClass}" 
                 style="background-color: ${cor}"
                 data-tooltip="${nomeCor}"
                 data-color-hex="${cor}"
                 data-color-name="${nomeCor}">
            </div>
        `;
    }).join('');


    // 5. Adicionar Interatividade

    // Clique nas Miniaturas
    const thumbnails = document.querySelectorAll(".pdp-gallery-thumbnail-item");
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            thumbnails.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            mainImage.src = thumb.dataset.imageSrc;
        });
    });

    // Clique nos Tamanhos
    const sizeOptions = document.querySelectorAll(".pdp-size-option");
    sizeOptions.forEach(option => {
        option.addEventListener("click", () => {
            sizeOptions.forEach(opt => opt.classList.remove("active"));
            option.classList.add("active");
            // Atualiza a variável de seleção
            selectedSize = option.innerText;
        });
    });

    // Clique nas Cores
    const colorSwatches = document.querySelectorAll(".pdp-color-swatch");
    colorSwatches.forEach(swatch => {
        swatch.addEventListener("click", () => {
            colorSwatches.forEach(opt => opt.classList.remove("active"));
            swatch.classList.add("active");
            // Atualiza as variáveis de seleção
            selectedColor = swatch.dataset.colorHex;
            selectedColorName = swatch.dataset.colorName;
        });
    });

    // <-- NOVO: Funções para o Pedido Direto no WhatsApp -->

    /**
     * Retorna a saudação correta (Bom dia, Boa tarde, Boa noite).
     */
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return "Bom dia";
        if (hour >= 12 && hour < 18) return "Boa tarde";
        return "Boa noite";
    }

    /**
     * Manipula o clique no botão "Pedir no WhatsApp"
     */
    function handleDirectWhatsAppOrder(e) {
        e.preventDefault(); // Impede o link de navegar

        // 1. Validação (igual ao da sacola)
        if (!selectedSize) {
            alert("Por favor, selecione um tamanho.");
            return;
        }
        if (!selectedColorName) {
            alert("Por favor, selecione uma cor.");
            return;
        }

        // 2. Número (pegar do bag-script, mas por segurança vamos definir aqui também)
        // 2. Número (pegar do bag-script, mas por segurança vamos definir aqui também)
        const numeroWhatsapp = "5561994134559";

        // 3. Montar a mensagem
        let message = `Olá, ${getGreeting()}! Tenho interesse neste produto:\n\n`;
        message += `*${produto.nome}* (Cód: ${productId})\n`;
        message += `Preço: ${produto.preco}\n`;
        message += `Tamanho: ${selectedSize}\n`;
        message += `Cor: ${selectedColorName}\n\n`;
        message += `Aguardo seu retorno para finalizar o pedido!`;

        // 4. Codificar e abrir o link
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${numeroWhatsapp}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }

    // <-- MUDANÇA: Adiciona o listener de clique ao botão do WhatsApp -->
    if (whatsappButton) {
        whatsappButton.addEventListener('click', handleDirectWhatsAppOrder);
    }


    // Clique no botão "Adicionar à Sacola"
    const addToBagButton = document.getElementById("pdp-add-to-bag-button");
    if (addToBagButton) {
        addToBagButton.addEventListener("click", () => {

            // 1. Validação
            if (!selectedSize) {
                alert("Por favor, selecione um tamanho.");
                return;
            }
            if (!selectedColorName) {
                alert("Por favor, selecione uma cor.");
                return;
            }

            // 2. Monta o objeto do produto
            const productToAdd = {
                id: productId,
                nome: produto.nome,
                preco: produto.preco,
                foto: produto.fotos[0], // Pega a primeira foto como miniatura
                tamanho: selectedSize,
                cor: selectedColorName
            };

            // 3. Adiciona à sacola (a função está no bag-script.js)
            if (window.addToBag) {
                window.addToBag(productToAdd);
            } else {
                console.error("A função addToBag() não foi encontrada. Verifique se 'bag-script.js' está carregado.");
            }
        });
    }

});