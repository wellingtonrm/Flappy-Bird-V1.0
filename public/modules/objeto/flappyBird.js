import fazColisao from "../action/flappyBird.colisao";
import Chao from './chao'

const flappyBird = (contexto, sprites, canvas)=>({
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
        if (fazColisao(flappyBird, Chao)) {
            return;
        }
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade
        flappyBird.y = flappyBird.y + flappyBird.velocidade
    },
    desenha: (contexto, sprites, canvas) => {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // srpite X e Y
            flappyBird.largura, flappyBird.altura, // tamanho do recorte na sprite
            flappyBird.x, flappyBird.y, // posição no canvas
            flappyBird.largura, flappyBird.altura , // tamanho da sprite no cenario canvas
        );

    }
})

export default flappyBird;