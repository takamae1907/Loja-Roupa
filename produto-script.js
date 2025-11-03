/* ============================================== */
/* ==== SCRIPT DA PÁGINA DE PRODUTO (PDP) ==== */
/* ============================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Pegar o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Encontrar o produto no "Banco de Dados" (catalogo)
    //    (A variável 'catalogo' vem do arquivo 'produtos-db.js')
    const product = catalogo[productId];

    // 3. Selecionar os elementos "placeholder" da página
    const container = document.getElementById('pdp-container');
    const errorContainer = document.getElementById('pdp-error');
    
    if (!product) {
        // 4. Se o produto NÃO for encontrado, mostra o erro
        container.style.display = 'none';
        errorContainer.style.display = 'block';
        return; // Para a execução
    }

    // 5. Se o produto FOI encontrado, preenche a página
    
    // --- Preenche Informações Básicas ---
    document.title = `${product.nome} - Crismon Modas`;
    document.getElementById('pdp-cod').textContent = `Cód ${product.cod}`;
    document.getElementById('pdp-title').textContent = product.nome;
    document.getElementById('pdp-price').textContent = product.preco;
    document.getElementById('pdp-installments').textContent = product.installments;

    // --- Preenche o Botão WhatsApp ---
    // (Link fixo para o grupo, já que não podemos pré-preencher)
    const whatsappButton = document.getElementById('pdp-whatsapp-button');
    whatsappButton.href = "https://chat.whatsapp.com/BS9jxBn1V2eIzFxjMFlxXG?fbclid=PAZXh0bgNhZW0CMTEAAadpgJFJx9NshdqBFCB9NrVhL5M68yZynr7unGsOEl4Qdg7ms3brQYLnPpvg5Q_aem_YoHqPQW_SD-3Awi7FhzB1Q";


    // --- Preenche a Galeria de Fotos ---
    const mainImageContainer = document.getElementById('pdp-main-image');
    const thumbnailsContainer = document.getElementById('pdp-thumbnails');

    // Cria a imagem principal (com a primeira foto)
    const mainImage = document.createElement('img');
    mainImage.src = product.photos[0];
    mainImage.alt = product.nome;
    mainImageContainer.appendChild(mainImage);

    // Cria as miniaturas (thumbnails)
    product.photos.forEach((photoSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = photoSrc;
        thumb.alt = `Miniatura ${index + 1} de ${product.nome}`;
        thumb.classList.add('pdp-thumbnail-img');
        
        // Marca a primeira como "ativa"
        if (index === 0) {
            thumb.classList.add('active');
        }

        // Adiciona o clique para trocar a imagem principal
        thumb.addEventListener('click', () => {
            mainImage.src = photoSrc; // Troca a imagem
            
            // Atualiza qual thumbnail está "ativa"
            thumbnailsContainer.querySelector('.active').classList.remove('active');
            thumb.classList.add('active');
        });

        thumbnailsContainer.appendChild(thumb);
    });

    // --- Preenche os Tamanhos ---
    const sizesContainer = document.getElementById('pdp-sizes');
    product.sizes.forEach(size => {
        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'size-option'; // Reutiliza o estilo do loja-style.css
        sizeSpan.textContent = size;
        sizesContainer.appendChild(sizeSpan);
    });

    // --- Preenche as Cores ---
    const colorsContainer = document.getElementById('pdp-colors');
    product.colors.forEach(colorHex => {
        const colorSpan = document.createElement('span');
        colorSpan.className = 'color-swatch'; // Reutiliza o estilo do loja-style.css
        colorSpan.style.backgroundColor = colorHex;
        colorsContainer.appendChild(colorSpan);
    });

});