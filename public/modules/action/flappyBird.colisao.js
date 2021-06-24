

export default function fazColisao(flappyBird, chao) {

    const flappyBirdY = flappyBird.y + flappyBird.altura
    const chaoY = chao.y

    if (flappyBirdY >= chaoY) {
        return true
    }

    return false

}