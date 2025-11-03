/* ============================================== */
/* ==== BANCO DE DADOS DE PRODUTOS ==== */
/* ============================================== */
// Este é o seu catálogo central.
// Para adicionar um novo produto, basta copiar um bloco
// (do "XXXX": { ... },) e colar, mudando o código e as infos.

const catalogo = {

    "0801": {
        cod: "0801",
        nome: "Macacão Brenda",
        preco: "R$ 219,90",
        installments: "em até 3x de R$ 73,30",
        // Lista de fotos: a primeira é a principal
        photos: [
            "fotos/04.jpg",
            "fotos/15.jpg"
        ],
        // Lista de tamanhos
        sizes: ["M", "G"],
        // Lista de cores (em código hexadecimal)
        colors: ["#F08080", "#98FB98", "#000000"]
    },

    "0755": {
        cod: "0755",
        nome: "Vestido com cinto e plissado",
        preco: "R$ 249,90",
        installments: "em até 3x de R$ 83,30",
        photos: [
            "fotos/foto-em-pé.jpg",
            "fotos/02.jpg",
            "fotos/13.jpg",
            "fotos/foto-deitada2.png"
        ],
        sizes: ["U"],
        colors: ["#B2DFDB", "#D2B48C", "#FFC0CB"]
    },

    "0853": {
        cod: "0853",
        nome: "Vestido com cinto",
        preco: "R$ 199,90",
        installments: "em até 3x de R$ 66,63",
        photos: [
            "fotos/foto-em-pé2.jpg",
            "fotos/03.jpg",
            "fotos/14.jpg"
        ],
        sizes: ["U"],
        colors: ["#FFFFE0", "#ADD8E6"]
    },

    "0803": {
        cod: "0803",
        nome: "Vestido Longo",
        preco: "R$ 229,90",
        installments: "em até 3x de R$ 76,63",
        photos: [
            "fotos/foto-preta.jpg",
            "fotos/01.jpg",
            "fotos/12.jpg",
            "fotos/fotoQuadrada.png"
        ],
        sizes: ["U"],
        colors: ["#F5F5DC", "#DC143C"]
    },
    
    "0651": {
        cod: "0651",
        nome: "Vestido plus Midi",
        preco: "R$ 189,90",
        installments: "em até 3x de R$ 63,30",
        photos: [
            "fotos/foto-vemelha.jpg",
            "fotos/16.jpg",
            "fotos/foto-quadrada.jpg"
        ],
        sizes: ["G1"],
        colors: ["#000000"]
    },

    "0700": {
        cod: "0700",
        nome: "Vestido Estampado",
        preco: "R$ 199,90",
        installments: "em até 3x de R$ 66,63",
        photos: [
            "fotos/foto-verde.jpg",
            "fotos/17.jpg",
            "fotos/19.jpg",
            "fotos/foto-branca.jpg"
        ],
        sizes: ["U"],
        colors: ["#FF4500"]
    },
    
    "0757": {
        cod: "0757",
        nome: "Vestido Valéria",
        preco: "R$ 179,90",
        installments: "em até 3x de R$ 59,96",
        photos: [
            "fotos/foto-verde2.jpg",
            "fotos/07.jpg",
            "fotos/21.jpg"
        ],
        sizes: ["U"],
        colors: ["#AFEEEE"]
    },
    
    "1051": {
        cod: "1051",
        nome: "Conjunto Saia e Blusa",
        preco: "R$ 209,90",
        installments: "em até 3x de R$ 69,96",
        photos: [
            "fotos/foto1.PNG",
            "fotos/10.jpg"
        ],
        sizes: ["M", "G1", "G2"],
        colors: ["#F5F5DC"]
    }

};