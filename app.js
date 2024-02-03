/*let titulo = document.querySelector(`h1`);
titulo.innerHTML = `Juego el Número Secreto`;

let parrafo = document.querySelector(`p`);
parrafo.innerHTML = `Indica un número del 1 al 10`;

function IntentoDeUsuario(){
    //Let numeroSecreto = Math.floor(Math.random()*10 + 1);
}*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`Felicidades Acertaste el Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`, `El Número Secreto es Menor`);
        }else{
            asignarTextoElemento(`p`, `El Número Secreto es Mayor`);
        }
        intentos++;
        limpiarCaja();
    }    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroSecreto);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    
        }

    }
}

function condicionesIniciales() {
    asignarTextoElemento(`h1`,`Juego del Número Secreto!`);
    asignarTextoElemento(`p`,`Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

