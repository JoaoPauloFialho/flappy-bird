//seleção dos elementos e dição de coisas com inner
let id_cano = 0
const corpo = document.querySelector('[wm-flappy]')
const flappy = document.querySelector('.flappy')
const cenario = document.querySelector('.fase')
let canos = document.querySelectorAll('.cano')
let jogo = true


//função para descobrir X Y do objeto, e uma constante com a posição inicial do flappy
const pos = e => e.getBoundingClientRect()
const pos_inicial = pos(flappy).y


//definição de evento de click e criação das funções que controlam a gravidade
const velocidade_queda = 500
const deslocamento = 100
const pulo = 100
corpo.onclick = e => {
    flappy.style.top = `${pos(flappy).y - pulo}px`
}
const desce_passsaro = () => flappy.style.top = `${pos(flappy).y + deslocamento}px`
const gravidade = () => {
    setInterval(desce_passsaro, velocidade_queda)
}


//criacao dos canos
const coordenadas_canos = [-450, -300, -180]
const cria_cano = () => {
    let indice = Math.floor(Math.random() * coordenadas_canos.length)
    id_cano++
    let cano = document.createElement('div')
    cano.classList.add('canos_div')
    cano.style.top = `${coordenadas_canos[indice]}px`
    cano.innerHTML = `
    <img src="assets/img/cano_alto.png" id="cano_cima-${id_cano}" class="cano"
    style="width: 10rem">
    <img src="assets/img/cano_baixo.png" id="cano_baixo-${id_cano}" class="cano"
    style="width: 10rem">`
    cenario.appendChild(cano)
}
const insere_cano_dom = () => {
    setInterval(cria_cano, 2000)
}


//funções para tornar o cenário dinâmico
const velocidade_cenario = 50
const deslocamento_cenario = 20
const seleciona_canos = document.getElementsByClassName('canos_div')
const itera_canos = () =>{
    Array.from(seleciona_canos).forEach( e => movimenta_cano_esquerda(e))
}
const movimenta_cano_esquerda = (e) => e.style.left = `${pos(e).x - deslocamento_cenario}px`
const cenario_dinamico = () =>{
    setInterval(itera_canos, velocidade_cenario)
}

//função para excluir o canos que passam da borda
const checa_canos = () =>{
    let canos = document.getElementsByClassName('canos_div')
    Array.from(canos).forEach(e => {
        if(pos(e).x < -200){
            cenario.removeChild(e)
        }
    })
}
const exclui_canos = () =>{
    setInterval(checa_canos, 100)
}


//função de iniciar
const iniciar = function(){
    gravidade()
    cenario_dinamico()
    insere_cano_dom()
    exclui_canos()
}












