 const Tela1 = (Background, flappyBird, Chao)=>({
    desenha: () => {
        Background.desenha();
        flappyBird.desenha();
        Chao.desenha();
    },
    click: () => {
        flappyBird.pula();
    },
    atualiza: () => {
        flappyBird.atualiza();

    }
})

export default Tela1;
