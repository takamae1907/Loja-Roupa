/* =================================================== */
/* ==== BANCO DE DADOS DE PRODUTOS (produtos-db.js) ==== */
/* =================================================== */

const catalogo = {
    "0801": {
        nome: "Macacão Brenda",
        preco: "R$ 219,90",
        parcelas: "em até 3x de R$ 73,30",
        fotos: [
            "Fotos/04.jpg",
            "Fotos/15.jpg",
            "Fotos/foto-em-pé2.jpg"
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
            "Fotos/02.jpg",
            "Fotos/13.jpg",
            "Fotos/foto-deitada2.png"
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
            "Fotos/03.jpg",
            "Fotos/14.jpg",
            "Fotos/foto-em-pé.jpg"
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
            "Fotos/01.jpg",
            "Fotos/12.jpg",
            "Fotos/fotoQuadrada.png"
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
            "Fotos/16.jpg",
            "Fotos/foto-quadrada.jpg"
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
            "Fotos/17.jpg",
            "Fotos/foto-vemelha.jpg",
            "Fotos/19.jpg",
            "Fotos/foto-branca.jpg"
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
            "Fotos/07.jpg",
            "Fotos/foto-verde2.jpg",
            "Fotos/21.jpg"
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
            "Fotos/10.jpg"
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
    },
    "S007": {
        nome: "Saia Tule Bordado Floral 3D",
        preco: "R$ 80,00",
        parcelas: "em até 3x de R$ 26,67",
        fotos: [
            "Fotos/SaiaTule8.jpg",
            "Fotos/SaiaTule5.jpg",
            "Fotos/SaiaTule2.jpg",
            "Fotos/SaiaTule4.jpg"
        ],
        tamanhos: ["P", "M", "G", "GGG"],
        cores: ["#FFFFFF", "#F5F5DC", "#FFC0CB", "#8B4513", "#000000"],
        corNomes: ["Branco", "Bege", "Rosa", "Marrom", "Preto"]
    },
    "S008": {
        nome: "Saia Tule com Pérolas",
        preco: "R$ 79,90",
        parcelas: "em até 3x de R$ 26,63",
        fotos: [
            "Fotos/SaiaTule9.jpg"
        ],
        tamanhos: ["P", "M", "G", "GGG"],
        cores: ["#FFFFFF", "#F5F5DC", "#FFC0CB", "#D2B48C", "#000000"],
        corNomes: ["Branco", "Bege", "Rosa", "Nude", "Preto"]
    },
    "S009": {
        nome: "Saia Tule Plissada Lisa",
        preco: "R$ 69,90",
        parcelas: "em até 3x de R$ 23,30",
        fotos: [
            "Fotos/SaiaTule10.jpg"
        ],
        tamanhos: ["P", "M", "G"],
        cores: ["#000000", "#FFFFFF", "#ADD8E6", "#F5F5DC", "#8B4513"],
        corNomes: ["Preto", "Branco", "Azul", "Bege", "Marrom"]
    },
    "S010": {
        nome: "Saia Tule com Lantejoulas",
        preco: "R$ 85,00",
        parcelas: "em até 3x de R$ 28,33",
        fotos: [
            "Fotos/SaiaTule7.jpg"
        ],
        tamanhos: ["P", "M", "G", "GGG"],
        cores: ["#F5F5DC", "#8B4513", "#000000"],
        corNomes: ["Bege", "Marrom", "Preto"]
    },
    "S011": {
        nome: "Saia Tule Longa Camadas",
        preco: "R$ 110,00",
        parcelas: "em até 3x de R$ 36,67",
        fotos: [
            "Fotos/SaiaTule6.jpg",
            "Fotos/SaiaTule3.jpg"
        ],
        tamanhos: ["U"],
        cores: ["#808080", "#DC143C"],
        corNomes: ["Cinza", "Vermelho"]
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
        preco: "R$ 99,90",
        parcelas: "em até 3x de R$ 33,30",
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
        preco: "R$ 55,00",
        parcelas: "em até 3x de R$ 18,33",
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
    /* ==== NOVOS PRODUTOS (CALÇAS) ==== */
    /* ============================================== */
    "C001": {
        nome: "Calça Alfaiataria Plus Size",
        preco: "R$ 119,90",
        parcelas: "em até 3x de R$ 39,97",
        fotos: [
            "Fotos/Calças1.jpg",
            "Fotos/Calças2.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#000000", "#FF1493", "#ADD8E6", "#A0522D", "#F5F5DC", "#000080", "#8B0000", "#D2691E"],
        corNomes: ["Preto", "Pink", "Azul Claro", "Cáqui", "Bege", "Azul Marinho", "Vinho", "Telha"]
    },
    "C002": {
        nome: "Calça Sarja Plus Size com Cinto",
        preco: "R$ 129,90",
        parcelas: "em até 3x de R$ 43,30",
        fotos: [
            "Fotos/Calças3.jpg",
            "Fotos/Calças4.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#000000", "#800080", "#F5F5DC", "#FF4500", "#9ACD32", "#556B2F", "#FFC0CB", "#D2B48C", "#A52A2A", "#808080"],
        corNomes: ["Preto", "Roxo", "Bege", "Laranja", "Verde", "Verde Musgo", "Rosa", "Cáqui", "Marrom", "Cinza"]
    },
    "C003": {
        nome: "Calça Sarja com Cinto Elástico",
        preco: "R$ 99,90",
        parcelas: "em até 3x de R$ 33,30",
        fotos: [
            "Fotos/Calças5.jpg",
            "Fotos/Calças6.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#000000", "#556B2F", "#D2B48C", "#8B4513", "#ADD8E6", "#F5F5DC", "#FF4500", "#808080"],
        corNomes: ["Preto", "Verde Musgo", "Cáqui", "Marrom", "Azul Claro", "Bege", "Telha", "Cinza"]
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
    },
    "V012": {
        nome: "Vestido Longo com Viés",
        preco: "R$ 189,90",
        parcelas: "em até 3x de R$ 63,30",
        fotos: [
            "Fotos/Vestido189.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#000000", "#ADD8E6", "#98FB98", "#FFC0CB", "#FFFFE0", "#FFFFFF", "#006400"],
        corNomes: ["Preto", "Azul Claro", "Verde Menta", "Rosa", "Amarelo", "Branco", "Verde Escuro"]
    },
    "V013": {
        nome: "Vestido Midi Plus Botões",
        preco: "R$ 195,00",
        parcelas: "em até 3x de R$ 65,00",
        fotos: [
            "Fotos/VestidoPlus195.jpg"
        ],
        tamanhos: ["G1", "G2", "G3"],
        cores: ["#808000"],
        corNomes: ["Verde Oliva"]
    },
    "V014": {
        nome: "Vestido Longo Vermelho com Fenda",
        preco: "R$ 210,00",
        parcelas: "em até 3x de R$ 70,00",
        fotos: [
            "Fotos/VestidoVermelho.jpg"
        ],
        tamanhos: ["U"],
        cores: ["#FF0000"],
        corNomes: ["Vermelho"]
    },
    "V015": {
        nome: "Vestido Linho Manga Curta",
        preco: "R$ 199,90",
        parcelas: "em até 3x de R$ 66,63",
        fotos: [
            "Fotos/Vestidos.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#98FB98", "#F5F5DC", "#ADD8E6", "#000000", "#FFFFE0", "#FFC0CB"],
        corNomes: ["Verde Menta", "Bege", "Azul Claro", "Preto", "Amarelo", "Rosa"]
    },

    /* ============================================== */
    /* ==== NOVOS PRODUTOS (FARDAMENTOS) ==== */
    /* ============================================== */
    "F001": {
        nome: "Fardamento Renda Verde",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento1.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#98FB98"],
        corNomes: ["Verde Menta"]
    },
    "F002": {
        nome: "Fardamento Tule Pink",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento2.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#FF00FF"],
        corNomes: ["Pink"]
    },
    "F003": {
        nome: "Fardamento Notas Musicais",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento3.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "F004": {
        nome: "Fardamento Floral Rosa",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento4.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#FFC0CB"],
        corNomes: ["Rosa"]
    },
    "F005": {
        nome: "Fardamento Floral Bege",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento5.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#F5F5DC"],
        corNomes: ["Bege"]
    },
    "F006": {
        nome: "Fardamento Longo Vinho",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento6.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#8B0000"],
        corNomes: ["Vinho"]
    },
    "F007": {
        nome: "Fardamento Salmão",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento7.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#FA8072"],
        corNomes: ["Salmão"]
    },
    "F008": {
        nome: "Fardamento Saia Plissada",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento8.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#006400", "#000000"],
        corNomes: ["Verde e Preto"]
    },
    "F009": {
        nome: "Fardamento Verde Musgo",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento9.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#556B2F"],
        corNomes: ["Verde Musgo"]
    },
    "F010": {
        nome: "Fardamento Preto e Branco",
        preco: "Sob Orçamento",
        parcelas: "Peça uma cotação",
        fotos: [
            "Fotos/fardamento10.jpg"
        ],
        tamanhos: ["Sob Medida"],
        cores: ["#000000"],
        corNomes: ["Preto"]
    },

    /* ============================================== */
    /* ==== NOVOS PRODUTOS (CAMISETAS) - CORRIGIDO ==== */
    /* ============================================== */
    "T001": {
        nome: "Camiseta Sorria Vigiado",
        preco: "R$ 65,00",
        parcelas: "em até 3x de R$ 21,67",
        fotos: [
            "Fotos/CamisaA1.png"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "T002": {
        nome: "Camiseta Meu Alvo é Cristo",
        preco: "R$ 65,00",
        parcelas: "em até 3x de R$ 21,67",
        fotos: [
            "Fotos/CamisaB2.png",
            "Fotos/CamisaB1.png"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "T003": {
        nome: "Camiseta Deus é Bom Demais",
        preco: "R$ 65,00",
        parcelas: "em até 3x de R$ 21,67",
        fotos: [
            "Fotos/CamisaC2.png",
            "Fotos/CamisaC1.png"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "T004": {
        nome: "Camiseta Sagrado Coração",
        preco: "R$ 65,00",
        parcelas: "em até 3x de R$ 21,67",
        fotos: [
            "Fotos/CamisaD1.png",
            "Fotos/CamisaD2.png"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "T005": {
        nome: "Camiseta Espírito Santo",
        preco: "R$ 65,00",
        parcelas: "em até 3x de R$ 21,67",
        fotos: [
            "Fotos/CamisaE1.png",
            "Fotos/CamisaE2.png"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },
    "T006": {
        nome: "Camiseta Não Reclame, Clame, Ame",
        preco: "R$ 65,00",
        parcelas: "em até 3x de R$ 21,67",
        fotos: [
            "Fotos/CamisaF2.png",
            "Fotos/CamisaF1.png"
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFFFFF"],
        corNomes: ["Branco"]
    },

    /* ============================================== */
    /* ==== ADICIONADOS: VESTIDOS DO PRINT ==== */
    /* ============================================== */
    
    // Grupo A-F: R$ 235,00
    "V016": {
        nome: "Vestido Elegance A",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: ["Fotos/VestidoA.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C"], corNomes: ["Variadas"]
    },
    "V017": {
        nome: "Vestido Elegance B",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: ["Fotos/VestidoB.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C"], corNomes: ["Variadas"]
    },
    "V018": {
        nome: "Vestido Elegance C",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: ["Fotos/VestidoC.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C"], corNomes: ["Variadas"]
    },
    "V019": {
        nome: "Vestido Elegance D",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: ["Fotos/VestidoD.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C"], corNomes: ["Variadas"]
    },
    "V020": {
        nome: "Vestido Elegance E",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: ["Fotos/VestidoE.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C"], corNomes: ["Variadas"]
    },
    "V021": {
        nome: "Vestido Elegance F",
        preco: "R$ 235,00",
        parcelas: "em até 3x de R$ 78,33",
        fotos: ["Fotos/VestidoF.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#D2B48C"], corNomes: ["Variadas"]
    },

    // Grupo 350: R$ 350,00 (Assumido pelo nome/contexto, parcela de 116,66)
    "V022": {
        nome: "Vestido Luxo 350 A",
        preco: "R$ 350,00",
        parcelas: "em até 3x de R$ 116,66",
        fotos: ["Fotos/Vestido350A.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFC0CB"], corNomes: ["Variadas"]
    },
    "V023": {
        nome: "Vestido Luxo 350 B",
        preco: "R$ 350,00",
        parcelas: "em até 3x de R$ 116,66",
        fotos: ["Fotos/Vestido350B.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFC0CB"], corNomes: ["Variadas"]
    },
    "V024": {
        nome: "Vestido Luxo 350 C",
        preco: "R$ 350,00",
        parcelas: "em até 3x de R$ 116,66",
        fotos: ["Fotos/Vestido350C.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFC0CB"], corNomes: ["Variadas"]
    },
    "V025": {
        nome: "Vestido Luxo 350 D",
        preco: "R$ 350,00",
        parcelas: "em até 3x de R$ 116,66",
        fotos: ["Fotos/Vestido350D.jpg"],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["#FFC0CB"], corNomes: ["Variadas"]
    },

    // Grupo 180: R$ 180,00 (Parcela de 60,00)
    "V026": {
        nome: "Vestido Casual 180 A",
        preco: "R$ 180,00",
        parcelas: "em até 3x de R$ 60,00",
        fotos: ["Fotos/Vestido180A.jpg"],
        tamanhos: ["P", "M", "G"],
        cores: ["#ADD8E6"], corNomes: ["Variadas"]
    },
    "V027": {
        nome: "Vestido Casual 180 B",
        preco: "R$ 180,00",
        parcelas: "em até 3x de R$ 60,00",
        fotos: ["Fotos/Vestido180B.jpg"],
        tamanhos: ["P", "M", "G"],
        cores: ["#ADD8E6"], corNomes: ["Variadas"]
    },
    "V028": {
        nome: "Vestido Casual 180 C",
        preco: "R$ 180,00",
        parcelas: "em até 3x de R$ 60,00",
        fotos: ["Fotos/Vestido180C.jpg"],
        tamanhos: ["P", "M", "G"],
        cores: ["#ADD8E6"], corNomes: ["Variadas"]
    },
    "V029": {
        nome: "Vestido Casual 180 D",
        preco: "R$ 180,00",
        parcelas: "em até 3x de R$ 60,00",
        fotos: ["Fotos/Vestido180D.jpg"],
        tamanhos: ["P", "M", "G"],
        cores: ["#ADD8E6"], corNomes: ["Variadas"]
    },
    "V030": {
        nome: "Vestido Casual 180 E",
        preco: "R$ 180,00",
        parcelas: "em até 3x de R$ 60,00",
        fotos: ["Fotos/Vestido180E.jpg"],
        tamanhos: ["P", "M", "G"],
        cores: ["#ADD8E6"], corNomes: ["Variadas"]
    },
    "V031": {
        nome: "Vestido Casual 180 F",
        preco: "R$ 180,00",
        parcelas: "em até 3x de R$ 60,00",
        fotos: ["Fotos/Vestido180F.jpg"],
        tamanhos: ["P", "M", "G"],
        cores: ["#ADD8E6"], corNomes: ["Variadas"]
    }
};