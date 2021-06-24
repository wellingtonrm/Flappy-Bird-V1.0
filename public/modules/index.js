const sprites = new Image();
sprites.src = 'images/sprites.png'

let frames = 0;

const som_colizao = new Audio();
som_colizao.src = 'efeitos/audio1.mp3'

const som_jogo = new Audio();
som_jogo.src = 'efeitos/audio2.mp3'


const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')


function fazColisao(flappyBird, chao) {

    const flappyBirdY = flappyBird.y + flappyBird.altura
    const chaoY = chao.y

    if (flappyBirdY >= chaoY) {
        return true
    }

    return false

}

function criaFlappyBird() {
    const flappyBird = {
        spriteX: 0,
        spriteY: 0,
        largura: 34,
        altura: 24,
        x: 10,
        y: 50,
        pulo: 4.6,
        pula: () => {

            flappyBird.velocidade = - flappyBird.pulo
        },
        gravidade: 0.25,
        velocidade: 0,

        atualiza: () => {
            if (fazColisao(flappyBird, globais.Chao)) {

                som_colizao.play();
                som_jogo.pause()
                setTimeout(() => {
                    mudarTela(Tela.INICIO)
                }, 300);
                return;
            }
            flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade
            flappyBird.y = flappyBird.y + flappyBird.velocidade
        },
        movimentos: [
            { spriteX: 0, spriteY: 0, },
            { spriteX: 0, spriteY: 26, },
            { spriteX: 0, spriteY: 52, },
        ],
        frameAtual: 0,
        atualizarFrameAtual: () => {

            const intervaloFrames = 10;
            const passouFrame = frames % intervaloFrames === 0;

            if (passouFrame) {
                const baseIncremento = 1;
                const incrimento = baseIncremento + flappyBird.frameAtual
                const baseRepeticao = flappyBird.movimentos.length
                flappyBird.frameAtual = incrimento % baseRepeticao
            }

        },
        desenha: () => {
            flappyBird.atualizarFrameAtual()
            const { spriteX, spriteY } = flappyBird.movimentos[flappyBird.frameAtual]
            contexto.drawImage(
                sprites,
                spriteX, spriteY, // srpite X e Y
                flappyBird.largura, flappyBird.altura, // tamanho do recorte na sprite
                flappyBird.x, flappyBird.y, // posição no canvas
                flappyBird.largura, flappyBird.altura , // tamanho da sprite no cenario canvas
            );

        }
    }

    return flappyBird;

}
const Background = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 205,
    x: 0,
    y: canvas.height - 204,

    desenha: () => {
        contexto.fillStyle = '#70c5ce'
        contexto.fillRect(0, 0, canvas.width, canvas.height)
        contexto.drawImage(
            sprites,
            Background.spriteX, Background.spriteY, // srpite X e Y
            Background.largura, Background.altura, // tamanho do recorte na sprite
            Background.x, Background.y, // posição no canvas
            Background.largura, Background.altura , // tamanho da sprite no cenario canvas
        );
        contexto.drawImage(
            sprites,
            Background.spriteX, Background.spriteY, // srpite X e Y
            Background.largura, Background.altura, // tamanho do recorte na sprite
            Background.x + Background.largura, Background.y, // posição no canvas
            Background.largura, Background.altura , // tamanho da sprite no cenario canvas
        );

    }
}
function criaChao() {
    const Chao = {
        spriteX: 0,
        spriteY: 609,
        largura: 224,
        altura: 113,
        x: 0,
        y: canvas.height - 113,
        atualiza: () => {
            const movimentoChao = 1
            const repeteEm = Chao.largura / 2;
            const movimentacao = Chao.x - movimentoChao
            Chao.x = movimentacao % repeteEm;
        },
        desenha: () => {
            contexto.drawImage(
                sprites,
                Chao.spriteX, Chao.spriteY, // srpite X e Y
                Chao.largura, Chao.altura, // tamanho do recorte na sprite
                Chao.x, Chao.y, // posição no canvas
                Chao.largura, Chao.altura , // tamanho da sprite no cenario canvas
            );
            contexto.drawImage(
                sprites,
                Chao.spriteX, Chao.spriteY, // srpite X e Y
                Chao.largura, Chao.altura, // tamanho do recorte na sprite
                Chao.x + Chao.largura, Chao.y, // posição no canvas
                Chao.largura, Chao.altura , // tamanho da sprite no cenario canvas
            )
        }
    }
    return Chao;
}
function criaCanos() {
    const Canos = {
        largura: 52,
        altura: 400,
        chao: {
            spriteX: 0,
            spriteY: 169
        },
        ceu: {
            spriteX: 53,
            spriteY: 169
        },
        espaco: 80,

        desenha: () => {

            Canos.pares.forEach((par) => {

                const yRandom = par.y;
                const espacamentoCanos = 90;
                const canoCeuX = par.x;
                const canoCeuY = yRandom;

                contexto.drawImage(
                    sprites,
                    Canos.ceu.spriteX, Canos.ceu.spriteY,
                    Canos.largura, Canos.altura,
                    canoCeuX, canoCeuY,
                    Canos.largura, Canos.altura,

                )

                const canoChaoX = par.x;
                const canoChaoY = Canos.altura + espacamentoCanos + yRandom;

                contexto.drawImage(
                    sprites,
                    Canos.chao.spriteX, Canos.chao.spriteY,
                    Canos.largura, Canos.altura,
                    canoChaoX, canoChaoY,
                    Canos.largura, Canos.altura,

                )
            })



        },
        pares: [],
        temColisaoCanos:(par)=>{
            const cabecaFlappy= globais.flappyBird.y;
            const peFlappy = globais.flappyBird.y + globais.flappyBird.altura

           if(globais.flappyBird.x >= par.x){
               som_colizao.play();
               som_jogo.pause()


               mudarTela(Tela.INICIO)

         

           if(cabecaFlappy <= par.canoCeuY){
               
             
               return true
           }
           if(peFlappy >= par.canoChaoY){
               return true
           }

           //return true
           } 
           return false
        },
        atualiza: () => {
            const passou100Frames = frames % 100 === 0;

            if (passou100Frames) {
               Canos.pares.push({

                   x:canvas.width,
                   
                   y: -150 * (Math.random() + 1)
               });
            }

            Canos.pares.forEach((par) => {
                par.x = par.x - 2

                if(Canos.temColisaoCanos(par)){
                    return Canos.temColisaoCanos(par);
                }

                if(par.x + Canos.largura <= 0 ){
                    
                    Canos.pares.shift()

                }
            })
        }
    }
    return Canos;
}

const mensagemGetReady = {
    spriteX: 134,
    spriteY: 0,
    largura: 208,
    altura: 192,
    x: (canvas.width / 2) - 208 / 2,
    y: 50,
    desenha: () => {
        contexto.drawImage(
            sprites,
            mensagemGetReady.spriteX, mensagemGetReady.spriteY, // srpite X e Y
            mensagemGetReady.largura, mensagemGetReady.altura, // tamanho do recorte na sprite
            mensagemGetReady.x, mensagemGetReady.y, // posição no canvas
            mensagemGetReady.largura, mensagemGetReady.altura , // tamanho da sprite no cenario canvas
        );

    }

}
let globais = {}
let telaAtiva = {}

function mudarTela(NovaTela) {
    telaAtiva = NovaTela

    if (telaAtiva.inicializa) {
        telaAtiva.inicializa();
    }
}

const Tela = {
    INICIO: {
        inicializa: () => {
            globais.flappyBird = criaFlappyBird()
            globais.Canos = criaCanos();
            globais.Chao = criaChao();
        },
        desenha: () => {

            Background.desenha();
            globais.flappyBird.desenha();
            globais.Canos.desenha(); 
            globais.Chao.desenha();
            mensagemGetReady.desenha();
            globais.Canos.desenha();
        },
        click: () => {
            mudarTela(Tela.JOGO)
            som_jogo.play()
        },
        atualiza: () => {
           
        }

    }
}
Tela.JOGO = {
    desenha: () => {
        Background.desenha();
        globais.flappyBird.desenha();
         globais.Canos.desenha();
        globais.Chao.desenha();
    },
    click: () => {
        globais.flappyBird.pula();
    },
    atualiza: () => {
        
      
           globais.Chao.atualiza()
           globais.flappyBird.atualiza();
           globais.Canos.atualiza();
       
        

    }
}

function loop() {

    telaAtiva.desenha();
    telaAtiva.atualiza();

    frames = frames + 1;

    requestAnimationFrame(loop)
}





window.addEventListener('click', () => {
    if (telaAtiva.click) {
        telaAtiva.click();
    }


})
mudarTela(Tela.INICIO)
loop();

