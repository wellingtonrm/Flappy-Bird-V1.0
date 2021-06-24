const mensageInicio = (contexto, sprites, canvas)=>({
    spriteX: 134,
    spriteY: 0,
    largura: 208,
    altura: 192,
    x: (canvas.width / 2) - 208 / 2,
    y: 50,
    desenha: (contexto, sprites, canvas) => {
        contexto.drawImage(
            sprites,
            mensageInicio.spriteX, mensageInicio.spriteY, // srpite X e Y
            mensageInicio.largura, mensageInicio.altura, // tamanho do recorte na sprite
            mensageInicio.x, mensageInicio.y, // posição no canvas
            mensageInicio.largura, mensageInicio.altura , // tamanho da sprite no cenario canvas
        );

    }

})
export default mensageInicio;