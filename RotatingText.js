/**
 * RotatingText - Um componente de JavaScript puro para animar texto rotativo.
 */
class RotatingText {
    /**
     * @param {HTMLElement} container - O elemento que conterá o texto rotativo.
     * @param {Object} options - Opções de configuração.
     * @param {string[]} options.texts - Array de strings para exibir.
     * @param {number} [options.rotationInterval=3000] - Intervalo entre as rotações em ms.
     * @param {string} [options.splitBy='words'] - Como dividir o texto ('characters', 'words').
     * @param {number} [options.staggerDuration=50] - Atraso de animação entre elementos em ms.
     */
    constructor(container, options) {
        this.container = container;
        this.options = {
            texts: [],
            rotationInterval: 3000,
            splitBy: 'words',
            staggerDuration: 50,
            ...options
        };

        if (!this.container || this.options.texts.length === 0) {
            console.error('RotatingText: Container ou textos não fornecidos.');
            return;
        }

        this.currentTextIndex = 0;
        this.isAnimating = false;
        this.init();
    }

    init() {
        // Adiciona estilos CSS diretamente ao container para garantir o layout
        this.container.style.position = 'relative';
        this.container.style.display = 'inline-flex';
        this.container.style.verticalAlign = 'bottom';
        this.container.style.overflow = 'hidden'; // Evita que o texto "vaze"

        // Mostra o primeiro texto sem animação
        this.showText(this.currentTextIndex, false);

        // Inicia o intervalo de rotação
        setInterval(() => this.next(), this.options.rotationInterval);
    }

    /**
     * Divide o texto em 'palavras' ou 'caracteres'
     * @param {string} text - O texto a ser dividido.
     * @returns {string[]} - Um array de partes do texto.
     */
    splitText(text) {
        if (this.options.splitBy === 'characters') {
            return text.split('');
        }
        // Padrão para 'words': divide por espaço, mas mantém os espaços
        return text.split(/(\s+)/).filter(part => part.length > 0);
    }

    /**
     * Mostra o texto no índice especificado.
     * @param {number} index - O índice do texto a ser exibido.
     * @param {boolean} [animate=true] - Se deve animar a saída do texto antigo.
     */
    async showText(index, animate = true) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const oldSpan = this.container.querySelector('span');

        // 1. Animação de Saída (se houver um texto antigo)
        if (oldSpan && animate) {
            Array.from(oldSpan.children).forEach((char, i) => {
                char.style.transition = `transform 0.3s ease-in, opacity 0.3s ease-in`;
                char.style.transitionDelay = `${i * (this.options.staggerDuration / 3)}ms`;
                char.style.transform = 'translateY(-100%)';
                char.style.opacity = '0';
            });
            // Espera a animação de saída terminar
            await new Promise(resolve => setTimeout(resolve, 300 + oldSpan.children.length * (this.options.staggerDuration / 3)));
            oldSpan.remove();
        } else if (oldSpan) {
            oldSpan.remove();
        }

        // 2. Animação de Entrada
        const text = this.options.texts[index];
        const newSpan = document.createElement('span');
        newSpan.setAttribute('aria-hidden', 'true');
        newSpan.style.display = 'inline-block';
        newSpan.style.whiteSpace = 'pre'; // Preserva os espaços

        const elements = this.splitText(text);

        elements.forEach((part, i) => {
            const charSpan = document.createElement('span');
            charSpan.textContent = part;
            charSpan.style.display = 'inline-block';
            charSpan.style.opacity = '0';
            charSpan.style.transform = 'translateY(100%)';
            charSpan.style.transition = `transform 0.4s ease-out, opacity 0.4s ease-out`;
            charSpan.style.transitionDelay = `${i * this.options.staggerDuration}ms`;

            newSpan.appendChild(charSpan);
        });

        this.container.appendChild(newSpan);

        // Força o navegador a aplicar os estilos iniciais (opacity 0, transform 100%)
        getComputedStyle(newSpan).height;

        // Inicia a animação de entrada
        Array.from(newSpan.children).forEach(char => {
            char.style.opacity = '1';
            char.style.transform = 'translateY(0)';
        });

        // Espera a animação de entrada terminar antes de liberar a trava
        await new Promise(resolve => setTimeout(resolve, 400 + elements.length * this.options.staggerDuration));
        this.isAnimating = false;
    }

    /**
     * Avança para o próximo texto no array.
     */
    next() {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.options.texts.length;
        this.showText(this.currentTextIndex);
    }
}