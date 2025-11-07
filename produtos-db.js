/* =================================================== */
/* ==== BANCO DE DADOS DE PRODUTOS (produtos-db.js) ==== */
/* =================================================== */
/*
 * Este arquivo é o "catálogo" central do seu site.
 * Para adicionar um novo produto:
 * 1. Copie um bloco de produto (de "ID": { ... }, ).
 * 2. Cole no final, antes do último "};".
 * 3. Mude o "ID" (ex: "0900").
 * 4. Preencha as informações (nome, preco, fotos, tamanhos, cores).
 *
 * IMPORTANTE: 
 * - A primeira foto da lista "fotos" é a que vai aparecer
 * na página da loja.
 * - Use sempre vírgulas (,) depois de cada item, exceto o último.
 */
/* =================================================== */

const catalogo = {
    "0801": {
        nome: "Macacão Brenda",
        preco: "R$ 219,90",
        parcelas: "em até 3x de R$ 73,30",
        fotos: [
            "fotos/04.jpg",
            "fotos/15.jpg",
            "fotos/foto-em-pé2.jpg"
        ],
        tamanhos: ["M", "G"],
        cores: ["#F08080", "#98FB98", "#000000", "#F5F5DC", "#E6E6FA", "#FFFFE0", "#FFC0CB", "#ADD8E6"],
        corNomes: ["Salmão", "Verde Menta", "Preto", "Nude", "Lilás", "Amarelo", "Rosa BB", "Azul BB"]
    },
    "0755": {
        nome: "Vestido com cinto e plissado",
        preco: "R$ 249,90",
        parcelas: "em até 3x de R$ 83,30",
        fotos: [
            "fotos/02.jpg",
            "fotos/13.jpg",
            "fotos/foto-deitada2.png"
        ],
        tamanhos: ["U"],
        cores: ["#B2DFDB", "#D2B48C", "#FFC0CB", "#87CEEB", "#E6E6FA"],
        corNomes: ["Verde Água", "Bege", "Rosa", "Azul", "Lilás"]
    },
    "0853": {
        nome: "Vestido com cinto",
        preco: "R$ 199,90",
        parcelas: "em até 3x de R$ 66,63",
        fotos: [
            "fotos/03.jpg",
            "fotos/14.jpg",
            "fotos/foto-em-pé.jpg"
        ],
        tamanhos: ["U"],
        cores: ["#FFFFE0", "#ADD8E6", "#FFFFFF", "#98FB98", "#FFC0CB", "#E6E6FA"],
        corNomes: ["Amarelo", "Azul Claro", "Branco", "Verde", "Rosa", "Lilás"]
    },
    "0803": {
        nome: "Vestido Longo",
        preco: "R$ 229,90",
        parcelas: "em até 3x de R$ 76,63",
        fotos: [
            "fotos/01.jpg",
            "fotos/12.jpg",
            "fotos/fotoQuadrada.png"
        ],
        tamanhos: ["U"],
        cores: ["#F5F5DC", "#DC143C", "#A52A2A", "#E6E6FA", "#FFFFE0", "#90EE90", "#ADD8E6", "#FFFFFF", "#000000"],
        corNomes: ["Bege", "Vermelho", "Marrom", "Lilás", "Amarelo", "Verde", "Azul", "Branco", "Preto"]
    },
    "0651": {
        nome: "Vestido plus Midi",
        preco: "R$ 189,90",
        parcelas: "em até 3x de R$ 63,30",
        fotos: [
            "fotos/16.jpg",
            "fotos/foto-quadrada.jpg"
        ],
        tamanhos: ["G1"],
        cores: ["#000000", "#00008B", "#8B4513"],
        corNomes: ["Preto/Bege", "Azul/Bege", "Marrom/Bege"]
    },
    "0700": {
        nome: "Vestido Estampado",
        preco: "R$ 199,90",
        parcelas: "em até 3x de R$ 66,63",
        fotos: [
            "fotos/17.jpg",
            "fotos/foto-vemelha.jpg",
            "fotos/19.jpg",
            "fotos/foto-branca.jpg"
        ],
        tamanhos: ["U"],
        cores: ["#FF4500", "#F5F5DC"],
        corNomes: ["Laranja Estampado", "Bege Estampado"]
    },
    "0757": {
        nome: "Vestido Valéria",
        preco: "R$ 179,90",
        parcelas: "em até 3x de R$ 59,96",
        fotos: [
            "fotos/07.jpg",
            "fotos/foto-verde2.jpg",
            "fotos/21.jpg"
        ],
        tamanhos: ["U"],
        cores: ["#AFEEEE"],
        corNomes: ["Verde Água"]
    },
    "1051": {
        nome: "Conjunto Saia e Blusa",
        preco: "R$ 209,90",
        parcelas: "em até 3x de R$ 69,96",
        fotos: [
            "fotos/10.jpg"
        ],
        tamanhos: ["M", "G1", "G2"],
        cores: ["#F5F5DC"],
        corNomes: ["Bege com Vinho"]
    },

    /* ============================================== */
    /* ==== NOVOS PRODUTOS (SAIAS) ==== */
    /* ============================================== */

    "S001": {
        nome: "Saia Midi Plus Size Listrada",
        preco: "R$ 135,00",
        parcelas: "em até 3x de R$ 45,00",
        fotos: [
            "Fotos/SaiaPlus1.jpg",
            "Fotos/SaiaPlus2.jpg",
            "Fotos/SaiaPlus3.jpg"
        ],
        tamanhos: ["G1", "G2"],
        cores: ["#4D4D4D", "#8B4513", "#4682B4"],
        corNomes: ["Preto e Branco", "Marrom e Branco", "Azul e Branco"]
    },
    "S002": {
        nome: "Saia Midi Plus com Botões",
        preco: "R$ 135,00",
        parcelas: "em até 3x de R$ 45,00",
        fotos: [
            "Fotos/SaiaMidi17.jpg",
            "Fotos/SaiaMidi15.jpg",
            "Fotos/SaiaMidi16.jpg",
            "Fotos/SaiaMidi23.jpg",
            "Fotos/SaiaMidi24.jpg"
        ],
        tamanhos: ["G1", "G2"],
        cores: ["#000000", "#8B0000", "#FF4500", "#D2B48C", "#363636"],
        corNomes: ["Preto", "Vinho", "Laranja", "Bege Listrado", "Preto Listrado"]
    },
    "S003": {
        nome: "Saia Midi com Cinto Redondo",
        preco: "R$ 125,00",
        parcelas: "em até 3x de R$ 41,67",
        fotos: [
            "Fotos/SaiaMidi10.jpg",
            "Fotos/SaiaMidi8.jpg",
            "Fotos/SaiaMidi9.jpg",
            "Fotos/SaiaMidi11.jpg",
            "Fotos/SaiaMidi12.jpg",
            "Fotos/SaiaMidi13.jpg",
            "Fotos/SaiaMidi14.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#556B2F", "#800000", "#8B4513", "#FF0000", "#6B8E23", "#5D3954", "#808080"],
        corNomes: ["Verde Militar", "Vinho", "Marrom", "Vermelho", "Verde Oliva", "Uva", "Cinza"]
    },
    "S004": {
        nome: "Saia Midi com Cinto Fino",
        preco: "R$ 125,00",
        parcelas: "em até 3x de R$ 41,67",
        fotos: [
            "Fotos/SaiaMidi1.jpg",
            "Fotos/SaiaMidi6.jpg",
            "Fotos/SaiaMidi4.jpg",
            "Fotos/SaiaMidi5.jpg",
            "Fotos/SaiaMidi2.jpg",
            "Fotos/SaiaMidi3.jpg",
            "Fotos/SaiaMidi7.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FF4500", "#8B4513", "#F5DEB3", "#ADD8E6"],
        corNomes: ["Laranja", "Marrom", "Bege", "Azul Claro"]
    },
    "S005": {
        nome: "Saia Midi com Amarração",
        preco: "R$ 125,00",
        parcelas: "em até 3x de R$ 41,67",
        fotos: [
            "Fotos/SaiaMidi18.jpg",
            "Fotos/SaiaMidi22.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C", "#E1C699"],
        corNomes: ["Bege", "Bege Claro"]
    },
    "S006": {
        nome: "Saia Midi Plus Lisa",
        preco: "R$ 135,00",
        parcelas: "em até 3x de R$ 45,00",
        fotos: [
            "Fotos/SaiaMidi20.jpg",
            "Fotos/SaiaMidi19.jpg",
            "Fotos/SaiaMidi21.jpg"
        ],
        tamanhos: ["G1", "G2"],
        cores: ["#DC143C", "#FF4500", "#000080"],
        corNomes: ["Vermelho", "Laranja", "Azul Marinho"]
    }

};
