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
        window.location.href = "loja.html";
        return;
    }

    // 4. Preencher as informações na página
    
    // Título e Código
    document.title = `${produto.nome} - Crismon Modas`;
    document.getElementById("pdp-label-codigo").innerText = `Cód. ${productId}`;
    document.getElementById("pdp-title").innerText = produto.nome;
    
    // Preço
    document.getElementById("pdp-price").innerText = produto.preco;
    document.getElementById("pdp-installments").innerText = produto.parcelas;

    // Link do Botão WhatsApp (mantendo o link do grupo)
    const whatsappButton = document.getElementById("pdp-whatsapp-button");
    const whatsappLink = "https://chat.whatsapp.com/BS9jxBn1V2eIzFxjMFlxXG?fbclid=PAZXh0bgNhZW0CMTEAAadpgJFJx9NshdqBFCB9NrVhL5M68yZynr7unGsOEl4Qdg7ms3brQYLnPpvg5Q_aem_YoHqPQW_SD-3Awi7FhzB1Q";
    whatsappButton.href = whatsappLink;

    // Imagem Principal (carrega a primeira foto)
    const mainImage = document.getElementById("pdp-gallery-main");
    mainImage.src = produto.fotos[0];
    mainImage.alt = `Foto principal do ${produto.nome}`;

    // Galeria de Miniaturas
    const thumbnailsContainer = document.getElementById("pdp-gallery-thumbnails");
    thumbnailsContainer.innerHTML = produto.fotos.map((foto, index) => {
        // Marca a primeira miniatura como 'ativa'
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
    sizesContainer.innerHTML = produto.tamanhos.map(tamanho => {
        return `<div class="pdp-size-option">${tamanho}</div>`;
    }).join('');

    // Cores
    const colorsContainer = document.getElementById("pdp-colors");
    // Verifica se 'corNomes' existe, senão usa um array vazio
    const corNomes = produto.corNomes || []; 
    colorsContainer.innerHTML = produto.cores.map((cor, index) => {
        // Pega o nome da cor (ou usa 'Cor' como padrão)
        const nomeCor = corNomes[index] || 'Cor'; 
        return `
            <div class="pdp-color-swatch" 
                 style="background-color: ${cor}"
                 data-tooltip="${nomeCor}">
            </div>
        `;
    }).join('');


    // 5. Adicionar Interatividade
    
    // Clique nas Miniaturas
    const thumbnails = document.querySelectorAll(".pdp-gallery-thumbnail-item");
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            // Remove 'active' de todas
            thumbnails.forEach(t => t.classList.remove("active"));
            
            // Adiciona 'active' na clicada
            thumb.classList.add("active");
            
            // Troca a imagem principal
            mainImage.src = thumb.dataset.imageSrc;
        });
    });

    // Clique nos Tamanhos
    const sizeOptions = document.querySelectorAll(".pdp-size-option");
    sizeOptions.forEach(option => {
        option.addEventListener("click", () => {
            // Remove 'active' de todas
            sizeOptions.forEach(opt => opt.classList.remove("active"));
            
            // Adiciona 'active' na clicada
            option.classList.add("active");
        });
    });

});