/* =================================================== */
/* ==== BANCO DE DADOS DE PRODUTOS (produtos-db.js) ==== */
/* =================================================== */

const catalogo = {


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
    },

    /* ============================================== */
    /* ==== NOVOS PRODUTOS (BLUSAS) ==== */
    /* ============================================== */
    "B001": {
        nome: "Blusa Crepe com Abertura",
        preco: "R$ 49,90",
        parcelas: "em até 3x de R$ 16,63",
        fotos: [
            "Fotos/blusa1.jpg",
            "Fotos/blusa2.jpg",
            "Fotos/blusa3.jpg",
            "Fotos/blusa4.jpg",
            "Fotos/blusa5.jpg",
            "Fotos/blusa6.jpg",
            "Fotos/blusa7.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#E0BBAA", "#E6A8B1", "#3EB489", "#DDAF91", "#36454F", "#3090C7", "#D2691E"],
        corNomes: ["Salmão", "Rosa", "Verde", "Laranja", "Marinho", "Azul", "Terra"]
    },
    "B002": {
        nome: "Blusa Polo com Lenço",
        preco: "R$ 75,00",
        parcelas: "em até 3x de R$ 25,00",
        fotos: [
            "Fotos/Blusa8.jpg"
        ],
        tamanhos: ["M", "G", "GG"],
        cores: ["#FFFFFF", "#000000", "#F5F5DC", "#ADD8E6", "#FFFFE0", "#98FB98"],
        corNomes: ["Branco", "Preto", "Creme", "Azul", "Amarelo", "Verde"]
    },
    "B003": {
        nome: "Blusa Plus com Renda",
        preco: "R$ 84,00",
        parcelas: "em até 3x de R$ 28,00",
        fotos: [
            "Fotos/BlusaPlus.jpg",
            "Fotos/BlusaPlus.png"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#FFC0CB", "#FFFFFF", "#8B4513", "#ADD8E6", "#F5F5DC"],
        corNomes: ["Rosa", "Branco", "Marrom", "Azul", "Bege"]
    },
    "B004": {
        nome: "Blusa Listrada Canelada",
        preco: "R$ 69,90",
        parcelas: "em até 3x de R$ 23,30",
        fotos: [
            "Fotos/BlusaListrada.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFC0CB", "#000080", "#006400", "#000000", "#8B4513"],
        corNomes: ["Rosa", "Marinho", "Verde", "Preto", "Marrom"]
    },
    "B005": {
        nome: "Blusa Poá Manga Longa",
        preco: "R$ 75,00",
        parcelas: "em até 3x de R$ 25,00",
        fotos: [
            "Fotos/BlusaBolinha.jpg",
            "Fotos/BlusaBolinha2.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#000000", "#F5F5DC", "#ADD8E6"],
        corNomes: ["Branco", "Preto", "Creme", "Azul"]
    },
    "B006": {
        nome: "Blusa T-Shirt Bordada",
        preco: "R$ 75,00",
        parcelas: "em até 3x de R$ 25,00",
        fotos: [
            "Fotos/Blusa75.jpg",
            "Fotos/Blusa75-1.jpg"
        ],
        tamanhos: ["M", "G", "GG"],
        cores: ["#FFFFE0", "#FFFFFF", "#ADD8E6", "#98FB98", "#000000", "#F5F5DC", "#D2B48C"],
        corNomes: ["Amarelo", "Branco", "Azul", "Verde", "Preto", "Bege", "Ocre"]
    },
    "B007": {
        nome: "Blusa T-Shirt Bordado Étnico",
        preco: "R$ 79,00",
        parcelas: "em até 3x de R$ 26,33",
        fotos: [
            "Fotos/Blusa79.jpg"
        ],
        tamanhos: ["M", "G", "GG"],
        cores: ["#FFFFFF", "#98FB98", "#000000", "#F5F5DC", "#FFFFE0", "#ADD8E6"],
        corNomes: ["Branco", "Verde", "Preto", "Bege", "Amarelo", "Azul"]
    },
    "B008": {
        nome: "Blusa T-Shirt Renda Manga",
        preco: "R$ 79,00",
        parcelas: "em até 3x de R$ 26,33",
        fotos: [
            "Fotos/Blusa79-1.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#8B4513", "#FFFFE0", "#ADD8E6", "#000000", "#FFC0CB", "#98FB98"],
        corNomes: ["Branco", "Marrom", "Amarelo", "Azul", "Preto", "Rosa", "Verde"]
    },
    "B009": {
        nome: "T-Shirt Plus Bordado Manga",
        preco: "R$ 79,00",
        parcelas: "em até 3x de R$ 26,33",
        fotos: [
            "Fotos/Blusa79-2.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#D2B48C", "#ADD8E6", "#98FB98", "#FFFFFF", "#F5F5DC", "#000000"],
        corNomes: ["Ocre", "Azul", "Verde", "Branco", "Bege", "Preto"]
    },
    "B010": {
        nome: "Blusa Lese com Forro",
        preco: "R$ 95,00",
        parcelas: "em até 3x de R$ 31,67",
        fotos: [
            "Fotos/Blusa95.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#FFFFE0", "#ADD8E6", "#FFC0CB", "#98FB98"],
        corNomes: ["Branco", "Amarelo", "Azul", "Rosa", "Verde"]
    },
    "B011": {
        nome: "Blusa Linho Bordada",
        preco: "R$ 89,90",
        parcelas: "em até 3x de R$ 29,97",
        fotos: [
            "Fotos/Blusa89.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#F5F5DC", "#98FB98", "#FFC0CB", "#ADD8E6", "#D2B48C"],
        corNomes: ["Branco", "Bege", "Verde", "Salmão", "Azul", "Marrom"]
    },
    "B012": {
        nome: "Blusa Canelada Regata",
        preco: "R$ 49,90",
        parcelas: "em até 3x de R$ 16,63",
        fotos: [
            "Fotos/Blusa49.jpg"
        ],
        tamanhos: ["P", "M", "G"],
        cores: ["#808080", "#FFFFFF", "#D2B48C", "#2E8B57", "#000000", "#A0522D"],
        corNomes: ["Cinza", "Branco", "Caramelo", "Verde", "Preto", "Telha"]
    },
    "B013": {
        nome: "Blusa Manga Longa Laço",
        preco: "R$ 89,90",
        parcelas: "em até 3x de R$ 29,97",
        fotos: [
            "Fotos/BlusaMangaLonga.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#006400", "#8B0000", "#FF4500"],
        corNomes: ["Branco", "Verde", "Vinho", "Laranja"]
    },
    "B014": {
        nome: "Blusa Manga Curta Laço",
        preco: "R$ 89,90",
        parcelas: "em até 3x de R$ 29,97",
        fotos: [
            "Fotos/BlusaMangaCurta.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#000000", "#98FB98", "#FFC0CB"],
        corNomes: ["Branco Poá", "Preto Poá", "Verde Poá", "Rosa Poá"]
    },
    "B015": {
        nome: "Blusa Viscose Linho Bordada",
        preco: "R$ 99,00",
        parcelas: "em até 3x de R$ 33,00",
        fotos: [
            "Fotos/Blusa9.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF", "#000000", "#F5F5DC", "#98FB98", "#ADD8E6", "#D2B48C"],
        corNomes: ["Branco", "Preto", "Creme", "Verde", "Azul", "Ocre"]
    },

    /* ============================================== */
    /* ==== NOVOS PRODUTOS (VESTIDOS) ==== */
    /* ============================================== */
    "V001": {
        nome: "Vestido Bordado Borboletas",
        preco: "R$ 245,00",
        parcelas: "em até 3x de R$ 81,67",
        fotos: [
            "Fotos/Vestido1.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFC0CB"],
        corNomes: ["Rosa"]
    },
    "V002": {
        nome: "Vestido Estampado Vermelho",
        preco: "R$ 245,00",
        parcelas: "em até 3x de R$ 81,67",
        fotos: [
            "Fotos/Vestido2.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#DC143C"],
        corNomes: ["Vermelho"]
    },
    "V003": {
        nome: "Vestido Laise Azul",
        preco: "R$ 265,00",
        parcelas: "em até 3x de R$ 88,33",
        fotos: [
            "Fotos/Vestido3.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#4169E1"],
        corNomes: ["Azul Royal"]
    },
    "V004": {
        nome: "Vestido Estampado Vermelho",
        preco: "R$ 265,00",
        parcelas: "em até 3x de R$ 88,33",
        fotos: [
            "Fotos/Vestido4.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#DC143C"],
        corNomes: ["Vermelho Estampado"]
    },
    "V005": {
        nome: "Vestido Bordado Laranja",
        preco: "R$ 245,00",
        parcelas: "em até 3x de R$ 81,67",
        fotos: [
            "Fotos/Vestido5.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FF4500"],
        corNomes: ["Laranja"]
    },
    "V006": {
        nome: "Vestido Bordado Marinho",
        preco: "R$ 245,00",
        parcelas: "em até 3x de R$ 81,67",
        fotos: [
            "Fotos/Vestido6.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#000080"],
        corNomes: ["Azul Marinho"]
    },
    "V007": {
        nome: "Vestido Bordado Marrom",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: [
            "Fotos/vestido7.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#8B4513"],
        corNomes: ["Marrom"]
    },
    "V008": {
        nome: "Vestido Bordado Rosa Plus",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: [
            "Fotos/vestido8.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#FFC0CB"],
        corNomes: ["Rosa"]
    },
    "V009": {
        nome: "Vestido Bordado Azul Plus",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: [
            "Fotos/vestido9.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#ADD8E6"],
        corNomes: ["Azul Claro"]
    },
    "V010": {
        nome: "Vestido Bordado Branco Plus",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: [
            "Fotos/vestido10.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "V011": {
        nome: "Vestido Bordado Bege Plus",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: [
            "Fotos/vestido11.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#F5F5DC"],
        corNomes: ["Bege"]
    }
};