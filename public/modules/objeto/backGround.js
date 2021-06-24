



const Background = (canvas)=>( 
{
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 205,
    x: 0,
    y: canvas.height - 204,

        desenha: (contexto, sprites, canvas) => {
            
       
         
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

               
          
            
           
            contexto.fillStyle = '#70c5ce'
            contexto.fillRect(0, 0, canvas.width + 320, canvas.height + 480)
       

    }
}
)

export default Background;