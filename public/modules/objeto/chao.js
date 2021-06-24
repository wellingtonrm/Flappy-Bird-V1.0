


const Chao = (contexto,sprites, canvas)=>({
    spriteX: 0,
    spriteY: 609,
    largura: 224,
    altura: 113,
    x: 0,
    y: canvas.height - 112,
    desenha: (contexto, sprites, canvas) => {
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
})
export default Chao;