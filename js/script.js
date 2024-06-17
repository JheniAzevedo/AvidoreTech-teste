document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    });

    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
//simulação de compra
    checkoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert(' Sua compra foi efetuada com Sucesso! acompanhe o processo via Email.');
        cartItems.innerHTML = '';
        cartSidebar.classList.remove('open');
        overlay.classList.remove('open');
    });

    document.getElementById('adicionar-carrinho').addEventListener('click', function() {
        const produtoTitulo = document.getElementById('detalhe-titulo').textContent;
        const produtoPreco = document.getElementById('detalhe-preco').textContent;

        const li = document.createElement('li');
        li.textContent = `${produtoTitulo} - ${produtoPreco}`;
        cartItems.appendChild(li);

        cartSidebar.classList.add('open');
        overlay.classList.add('open');
    });

    document.querySelectorAll('.miniaturas img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('detalhe-imagem').src = this.dataset.src;
        });
    });

    function navigateToSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            navigateToSection(sectionId);
        });
    });


//alterações em detalhes produtos 
    document.querySelectorAll('.produto a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const produtoId = this.getAttribute('data-produto');

            const produtos = {
                1: {
                    imagem: 'img/switcholed.png',
                    miniaturas: ['img/switcholed.png', 'img/Switcholed2.png', 'img/switcholedConsole.png', 'img/switcholedCaixa.png'],
                    titulo: 'Nintendo Switch OLED',
                    descricao: 'Inovador e versátil, o Nintendo Switch OLED veio para trazer ainda mais imersão à sua experiência ao jogar. Com a tela de 7 polegadas OLED e o áudio aprimorado, você pode sentir as cores vibrarem e os sons ressoarem. Desenvolvido para ser um console portátil e doméstico, o Nintendo Switch se desdobra em 3 modos: modo TV, modo semiportátil e modo portátil. Seus controles, os Joy-Con, também são adaptáveis e podem ser compartilhados, ou explorados da melhor forma, quando você estiver jogando sozinho. A bateria do video game possui entre 4.5 horas e 9 horas de autonomia, permitindo que você aproveite cada jogo ao máximo, podendo ser carregada enquanto joga. Além disso, o armazenamento extenso, de 64GB, permite que você não limite sua biblioteca de games e experiencia o que desejar. Estão inclusos na caixa do seu Nintendo Switch: dois Joy-Con (esquerdo e direito), um suporte para Joy-Con, um console Nintendo Switch, uma base, duas alças Joy-Con e um adaptador CA.',
                    preco: 'R$ 2.099,00',
                    especificacoes: [
                        'Dimensões do produto: 23,88 x 10,16 x 1,4 cm; 1,45 kg',
                        'Tamanho da tela: 6.2 polegadas',
                        'Cor do modelo: branco'
                    ]
                },
                2: {
                    imagem: 'img/SwitchLite.png',
                    miniaturas: ['img/SwitchLite.png','img/switchLiteTraseira.png','img/SwitchLiteMao.png','img/SwitchLiteCaixa.png'],
                    titulo: 'Nintendo Switch Lite',
                    descricao: 'Nintendo Switch Lite portátil Azul 32GB. Com seu console Switch você terá entretenimento garantido todos os dias. Sua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas. Switch tornou-se um dos consoles mais versáteis do mercado graças ao seu uso portátil e desktop. A Nintendo desenvolveu este modelo com o objetivo de ter todos os confortos da tecnologia de elite em um dispositivo portátil com o qual você pode jogar e desfrutar de diversos conteúdos online. Adaptado às suas necessidades, salve as suas aplicações, fotos, vídeos e muito mais no disco rígido, que tem uma capacidade de 32 GB. Por ter um processador de 8 núcleos e um gráfico, fornecem uma experiência dinâmica, respostas ágeis e transições suaves de imagens de alta definição. Você poderá reproduzir música, assistir seus filmes e séries favoritos através dos aplicativos para download. ITENS INCLUSOS: 1 - Nintendo Switch Lite BLUE + CARREGADOR. Garantia de 3 meses direto com o vendedor.',
                    preco: 'R$ 1.899,90',
                    especificacoes: [
                        'Dimensões do produto: 7 x 19,8 x 18 cm; 500 g',
                        'Pilha(s) ou bateria(s): 1 Íon de lítio baterias necessárias. (inclusas)',
                        'Cor do modelo: Azul'
                    ]
                },
                3: {
                    imagem: 'img/pcgamer.png',
                    miniaturas: ['img/pcgamer.png','img/gabineteLateral.png','img/GabineteFrente.png','img/GabineteAberto.png'],
                    titulo: 'PC Gamer Avidore Tech',
                    descricao: 'Uma plataforma com o que há de mais atual em tecnologia, levando você ao topo. PC Gamer do jeito que você precisa. Os Computadores Avidore Tech são confeccionados com os melhores componentes do mercado de TI mundial, te proporcionando máquinas de altíssimo desempenho, performance e durabilidade. Com o processador de AMD de 5ª geração equipado com um vídeo integrado de dar inveja na concorrência, você terá possibilidade de iniciar no mundo gamer sem gastar muito.',
                    preco: 'R$ 2.399,99',
                    especificacoes: [
                        'Tipo de processador: AMD Ryzen 5 5600G',
                        'Memória RAM: 16GB',
                        'Memória interna: SSD 480GB'
                    ]
                },
                4: {
                    imagem: 'img/s23.png',
                    miniaturas: ['img/s23.png', 'img/s23Tela.png','img/s23Lateral.png','img/s23Traseira.png'],
                    titulo: 'Galaxy S23',
                    descricao: 'O Samsung Galaxy S23 é, sem dúvida, um dos smartphones Android mais avançados e abrangentes disponíveis no mercado, graças ao seu rico equipamento e recursos multimídia avançados. Tem um grande display de 6.1 polegadas com uma resolução de 2340x1080 pixel. As funcionalidades oferecidas pelo Samsung Galaxy S23 são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão.',
                    preco: 'R$ 2.590,00',
                    especificacoes: [
                        'Dimensões do produto: 15,1 x 7,1 x 0,8 cm; 168 g',
                        'Tamanho da tela: 6.1 polegadas',
                        'Cor do modelo: Preto'
                    ]
                },
                5: {
                    imagem: 'img/Fone de ouvido.png',
                    miniaturas: ['img/Fone de ouvido.png','img/FoneAberto.png','img/FoneFechado.png','img/FoneFrente.png'],
                    titulo: 'Fone Qcy T17',
                    descricao: 'O Fone de Ouvido QCY T17 TWS apresenta um design compacto e ultraleve, confortável de usar e discreto no ouvido, com design ergonômico para um ajuste confortável e seguro. Com tecnologia Bluetooth, é compatível com todos os modelos de smartphones, permitindo uso individual ou em modo estéreo. O som é marcante e amplo, com agudos dinâmicos e graves potentes. Conta com tecnologia ENC (environmental noise cancellation) para redução de ruídos em chamadas, com microfone duplo e algoritmo CVC da Qualcomm. A bateria oferece autonomia de até 7.5 horas em uso contínuo e até 26 horas com o estojo de carregamento. Possui conexão com assistentes de voz e permite gerenciamento de chamadas de forma prática.',
                    preco: 'R$ 74,50',
                    especificacoes: [
                        'Modelo: QCY-T17',
                        'Dimensões Embalagem: 125 x 85 x 35 mm',
                        'Cor: Preto'
                    ]
                },
                6: {
                    imagem: 'img/Placa de video.png',
                    miniaturas: ['img/Placa de video.png','img/PLacaVideoFrente.png','img/placavideolateral.png','img/placavideoempe.png'],
                    titulo: 'MSI RTX 3050 Ventus',
                    descricao: 'Placa de Vídeo MSI RTX 3050 Ventus 2X XS OC. Ventilador duplo: Dois ventiladores e um enorme dissipador de calor garantem uma experiência fresca e silenciosa para você.Placa traseira de reforço: A placa traseira de reforço apresenta um design de fluxo que fornece ventilação adicional.Centro MSI: O software exclusivo MSI Center permite monitorar, ajustar e otimize os produtos MSI em tempo real.',
                    preco: 'R$ 1.564,90',
                    especificacoes: [
                        'Unidade de Processamento Gráfico: NVIDIA GeForce RTXTM 3050',
                        'Aumento dos clocks principais: 1777 MHz',
                        'Memória 8GB GDDR6'
                    ]
                }
            };

 //script para detalhes produtos, minuaturas clicaveis e ateração imagem principa
            const produto = produtos[produtoId];
            if (produto) {
                document.getElementById('detalhe-imagem').src = produto.imagem;
                document.getElementById('detalhe-titulo').textContent = produto.titulo;
                document.getElementById('detalhe-preco').textContent = produto.preco;
                document.getElementById('detalhe-descricao').textContent = produto.descricao;

                const especificacoesList = document.getElementById('detalhe-especificacoes');
                especificacoesList.innerHTML = '';
                produto.especificacoes.forEach(especificacao => {
                    const li = document.createElement('li');
                    li.textContent = especificacao;
                    especificacoesList.appendChild(li);
                });

                const miniaturasContainer = document.querySelector('.miniaturas');
                miniaturasContainer.innerHTML = '';
                produto.miniaturas.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.dataset.src = src;
                    img.alt = produto.titulo;
                    miniaturasContainer.appendChild(img);
                });

                document.querySelectorAll('.miniaturas img').forEach(img => {
                    img.addEventListener('click', function() {
                        document.getElementById('detalhe-imagem').src = this.dataset.src;
                    });
                });
            }
            
            navigateToSection(sectionId);
        });
    });

    document.getElementById('voltar-produtos').addEventListener('click', function() {
        navigateToSection('produtos');
    });

//vaidação formulario de contato    
    const contatoForm = document.getElementById('contatoForm');
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos.');
            } else {
                alert('Mensagem enviada com sucesso! Te retornaremos em até 48H!');
                contatoForm.reset();
            }
        });
    }

//carrosel de imagens

    const banners = document.querySelectorAll('.banner img');
    const indicators = document.querySelectorAll('.banner .indicators span');
    let currentBanner = 0;

    function showBanner(index) {
        banners[currentBanner].classList.remove('active');
        indicators[currentBanner].classList.remove('active');
        currentBanner = index;
        banners[currentBanner].classList.add('active');
        indicators[currentBanner].classList.add('active');
    }

    document.getElementById('next').addEventListener('click', function() {
        const nextIndex = (currentBanner + 1) % banners.length;
        showBanner(nextIndex);
    });

    document.getElementById('prev').addEventListener('click', function() {
        const prevIndex = (currentBanner - 1 + banners.length) % banners.length;
        showBanner(prevIndex);
    });
    
   
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showBanner(index);
        });
    });
});