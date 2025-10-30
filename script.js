// Espera o HTML carregar para rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // ==== 1. LÓGICA DA AURORA (WebGL) ====
    // =============================================

    const VERT = `#version 300 es
    in vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
    `;

    const FRAG = `#version 300 es
    precision highp float;
    uniform float uTime;
    uniform float uAmplitude;
    uniform vec3 uColorStops[3];
    uniform vec2 uResolution;
    uniform float uBlend;
    out vec4 fragColor;
    vec3 permute(vec3 x) {
      return mod(((x * 34.0) + 1.0) * x, 289.0);
    }
    float snoise(vec2 v){
      const vec4 C = vec4(
          0.211324865405187, 0.366025403784439,
          -0.577350269189626, 0.024390243902439
      );
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(
          permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0)
      );
      vec3 m = max(
          0.5 - vec3(
              dot(x0, x0),
              dot(x12.xy, x12.xy),
              dot(x12.zw, x12.zw)
          ), 
          0.0
      );
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    struct ColorStop {
      vec3 color;
      float position;
    };
    #define COLOR_RAMP(colors, factor, finalColor) { \
      int index = 0; \
      for (int i = 0; i < 2; i++) { \
        ColorStop currentColor = colors[i]; \
        bool isInBetween = currentColor.position <= factor; \
        index = int(mix(float(index), float(i), float(isInBetween))); \
      } \
      ColorStop currentColor = colors[index]; \
      ColorStop nextColor = colors[index + 1]; \
      float range = nextColor.position - currentColor.position; \
      float lerpFactor = (factor - currentColor.position) / range; \
      finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
    }
    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      ColorStop colors[3];
      colors[0] = ColorStop(uColorStops[0], 0.0);
      colors[1] = ColorStop(uColorStops[1], 0.5);
      colors[2] = ColorStop(uColorStops[2], 1.0);
      vec3 rampColor;
      COLOR_RAMP(colors, uv.x, rampColor);
      float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
      height = exp(height);
      height = (uv.y * 2.0 - height + 0.2);
      float intensity = 0.6 * height;
      float midPoint = 0.20;
      float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
      vec3 auroraColor = intensity * rampColor;
      fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
    }
    `;

    // Configurações da Aurora
    const auroraConfig = {
        colorStops: ['#FFF5F7', '#FFC0CB', '#FFFFFF'],
        amplitude: 1.0,
        blend: 0.5,
        speed: 1.0
    };

    const ctn = document.getElementById('home');
    // Verifica se a OGL foi carregada antes de usá-la
    if (ctn && typeof ogl !== 'undefined') {
        const { Renderer, Program, Mesh, Color, Triangle } = ogl;
        const renderer = new Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: true
        });
        const gl = renderer.gl;

        gl.canvas.style.position = 'absolute';
        gl.canvas.style.top = '0';
        gl.canvas.style.left = '0';
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        gl.canvas.style.zIndex = '1';

        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        let program;

        function resize() {
            if (!ctn) return;
            const width = ctn.offsetWidth;
            const height = ctn.offsetHeight;
            renderer.setSize(width, height);
            if (program) {
                program.uniforms.uResolution.value = [width, height];
            }
        }
        window.addEventListener('resize', resize);

        const geometry = new Triangle(gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }

        const colorStopsArray = auroraConfig.colorStops.map(hex => {
            const c = new Color(hex);
            return [c.r, c.g, c.b];
        });

        program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: auroraConfig.amplitude },
                uColorStops: { value: colorStopsArray },
                uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                uBlend: { value: auroraConfig.blend }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });
        ctn.appendChild(gl.canvas);

        let animateId = 0;
        const update = (t) => {
            animateId = requestAnimationFrame(update);
            const time = t * 0.0001;
            program.uniforms.uTime.value = time * auroraConfig.speed * 0.1;
            program.uniforms.uAmplitude.value = auroraConfig.amplitude;
            program.uniforms.uBlend.value = auroraConfig.blend;
            renderer.render({ scene: mesh });
        };
        animateId = requestAnimationFrame(update);
        resize();
    }


    // =============================================
    // ==== 2. LÓGICA DO SPOTLIGHT CARD ====
    // =============================================

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


    // ========================================================
    // ==== 3. LÓGICA DO CARROSSEL DE PRODUTOS (ROSA) ====
    // ========================================================

    const productTrack = document.querySelector('.product-carousel-track');

    if (productTrack) {
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        const productCard = productTrack.querySelector('.product-carousel-card');

        if (productCard) {
            const cardWidth = productCard.offsetWidth;
            const gap = 16; // 1rem
            const scrollAmount = cardWidth + gap;

            nextBtn.addEventListener('click', () => {
                productTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                productTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    }


    // =============================================
    // ==== 4. LÓGICA DO STEPPER (com Glass Icons) ====
    // =============================================

    const stepper = document.querySelector('.stepper-outer-container');

    if (stepper) {
        const indicatorRow = stepper.querySelector('.stepper-indicator-row');
        const contents = stepper.querySelectorAll('.stepper-content');
        const contentWrapper = stepper.querySelector('.stepper-content-wrapper');
        const nextBtn = stepper.querySelector('.stepper-button-next');
        const backBtn = stepper.querySelector('.stepper-button-back');
        const navContainer = stepper.querySelector('.stepper-nav');

        let currentStep = 1;
        const totalSteps = contents.length;

        // --- HTML para o ícone de Check (Glass sem fundo) ---
        const checkIconHTML = `
            <div class="icon-btn icon-btn--small">
                <span class="icon-btn__back"></span>
                <span class="icon-btn__front">
                    <span class="icon-btn__icon"><i class="fas fa-check"></i></span>
                </span>
                <span class="icon-btn__label">Feito</span>
            </div>`;

        // --- HTML para o ícone de Número (Glass Inativo) ---
        function getNumberIconHTML(num) {
            return `
            <div class="icon-btn icon-btn--small">
                <span class="icon-btn__back"></span>
                <span class="icon-btn__front">
                    <span class="icon-btn__icon" style="font-size: 1.2em;">${num}</span>
                </span>
                <span class="icon-btn__label">Etapa ${num}</span>
            </div>`;
        }

        // --- HTML para o ícone Ativo (Glass) ---
        function getActiveIconHTML(num) {
            return `
            <div class="icon-btn icon-btn--small">
                <span class="icon-btn__back"></span>
                <span class="icon-btn__front">
                    <span class="icon-btn__icon" style="font-size: 1.2em;">${num}</span>
                </span>
                <span class="icon-btn__label">Etapa ${num}</span>
            </div>`;
        }

        // --- Função para Gerar os Indicadores na Linha ---
        function initializeIndicators() {
            indicatorRow.innerHTML = ''; // Limpa
            for (let i = 1; i <= totalSteps; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('stepper-indicator');
                indicator.dataset.step = i;

                if (i === 1) {
                    indicator.classList.add('active');
                    indicator.innerHTML = getActiveIconHTML(i);
                } else {
                    indicator.classList.add('inactive');
                    indicator.innerHTML = getNumberIconHTML(i);
                }

                indicatorRow.appendChild(indicator);

                if (i < totalSteps) {
                    const connector = document.createElement('div');
                    connector.classList.add('stepper-connector');
                    connector.innerHTML = '<div class="stepper-connector-inner"></div>';
                    indicatorRow.appendChild(connector);
                }
            }
        }

        function updateStepper() {
            const indicators = stepper.querySelectorAll('.stepper-indicator');

            // 1. Atualiza Indicadores
            indicators.forEach((indicator, index) => {
                const stepNum = index + 1;
                indicator.classList.remove('active', 'complete', 'inactive');

                if (stepNum < currentStep) {
                    indicator.classList.add('complete');
                    indicator.innerHTML = checkIconHTML;
                } else if (stepNum === currentStep) {
                    indicator.classList.add('active');
                    indicator.innerHTML = getActiveIconHTML(stepNum);
                } else {
                    indicator.classList.add('inactive');
                    indicator.innerHTML = getNumberIconHTML(stepNum);
                }
            });

            // 2. Atualiza Conteúdo
            const newContent = stepper.querySelector(`.stepper-content[data-step="${currentStep}"]`);
            const oldContent = stepper.querySelector('.stepper-content.active');

            if (oldContent) {
                oldContent.classList.remove('active');
                oldContent.classList.add('exiting');
                setTimeout(() => oldContent.classList.remove('exiting'), 400);
            }
            if (newContent) {
                newContent.classList.add('active');
                contentWrapper.style.height = newContent.offsetHeight + 'px';
            }

            // 3. Atualiza Botões
            backBtn.style.display = (currentStep === 1) ? 'none' : 'block';
            navContainer.classList.toggle('end', currentStep === 1);
            nextBtn.textContent = (currentStep === totalSteps) ? 'Finalizar' : 'Próximo';
        }

        // Event Listeners
        nextBtn.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStepper();
            } else {
                alert('Pedido Finalizado!');
            }
        });
        backBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStepper();
            }
        });

        // Inicializa o stepper
        initializeIndicators();
        // Define a altura inicial correta
        const firstContent = stepper.querySelector(`.stepper-content[data-step="1"]`);
        if (firstContent) {
            contentWrapper.style.height = firstContent.offsetHeight + 'px';
        }
    }


    // =============================================
    // ==== 5. LÓGICA DO DOCK MÓVEL ====
    // =============================================

    const dockItems = document.querySelectorAll('.dock-item');
    if (dockItems.length > 0) {
        function setActiveItem(event) {
            dockItems.forEach(item => {
                item.classList.remove('active');
            });
            // 'this' é o <a>, que é o .dock-item
            this.classList.add('active');
        }
        dockItems.forEach(item => {
            // Adiciona o listener no <a>
            item.addEventListener('click', setActiveItem);
        });
    }

}); // Fim do 'DOMContentLoaded'