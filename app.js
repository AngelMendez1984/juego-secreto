let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados=[];
let numeroMaximo=10;

condicionesIniciales();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Hola sauria');
    asignarTextoElemento('p', `Escribe un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    limpiarCampo();
    intentos = 1; 

}

function verificarIntento(){
    
    let numeroUsuario = parseInt (document.getElementById('valorUsuario').value);
    
    if (numeroUsuario===numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else{
            //No se acierta el número
            if(numeroUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El número secreto es menor');
            } 
            else{
                if(numeroUsuario < numeroSecreto){
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
            }
            intentos++;
            limpiarCampo();
        }
    return;
}

function nuevoJuego (){
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
    function limpiarCampo(){
   document.querySelector('#valorUsuario').value= '';
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(numerosSorteados)
    //Si se han sorteado todos los números posibles
    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Se han sorteado todos los números posibles');
    }else
        if (numerosSorteados.includes(numeroGenerado)){
            //Si el numero sorteado ya está incluido en la lista
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}