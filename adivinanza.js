let numRandom = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let respuesta = document.getElementById('respuesta')
let intento = document.getElementById('intento')
let intentos = 0

function comprobar(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos ++
    intento.textContent = intentos

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        respuesta.textContent = 'Por favor, ingrese un número válido entre 1 y 100.'
        respuesta.style.color = 'white';
        return
    }

    if(numeroIngresado === numRandom){
        respuesta.textContent = '¡Felicitaciones! ¡Has adivinado el número!';
        respuesta.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if(numeroIngresado < numRandom){
        respuesta.textContent = '¡Más alto! El número es mayor al que ingresaste.';
        respuesta.style.color = 'red';
    } else{
        respuesta.textContent = '¡Más bajo! El número es menor al que ingresaste.';
        respuesta.style.color = 'red';
    }
}
