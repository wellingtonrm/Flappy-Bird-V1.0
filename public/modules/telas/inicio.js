import {mudarTela }from '../telas/index'
import TelaJogo1  from './tela-1'
import Background from '../objeto/backGround'
import mensageInicio from '../objeto/mensageInicio'
import flappyBird from '../objeto/flappyBird'
import Chao from '../objeto/chao'

const Tela = {
    INICIO: {
        desenha: (contexto, sprites, canvas) => {

            Background(canvas).desenha(contexto, sprites, canvas);
            mensageInicio(contexto, sprites, canvas).desenha(contexto, sprites, canvas);
            flappyBird(contexto, sprites, canvas).desenha(contexto, sprites, canvas);
            Chao(contexto, sprites, canvas).desenha(contexto, sprites, canvas);
        },
        click: (contexto, sprites, canvas) => {
            mudarTela(TelaJogo1(contexto, sprites, canvas))
        },
        atualiza: () => { }

    }
}
export default Tela;