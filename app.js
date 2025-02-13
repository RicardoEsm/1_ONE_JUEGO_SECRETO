
let numeroSecreto = 0 ;
let intentos = 0 ;
let listaNumerosSorteados =[];
let numeroMaximo = 10
let intentosMaximos = 3;
 // Lista para ir almacenando los numeros que fueron sorteados.


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
 
function validarIntento(){
    let numeroDeusuario = parseInt(document.getElementById("valorDeUsuario").value);
    
    if (intentos===intentosMaximos){
        asignarTextoElemento('p','Limite maximo de intentos alcanzado');
    }else{

    
        if (numeroDeusuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste en ${intentos} ${intentos===1 ? "vez":"veces"}`); // Se usa el mismo campo donde se pide el numeropara dar el resultado.
            // Activando el boton Nuevo juego para reiniciar el juego, se usa el metodo queryselector para llamar al boton
            document.getElementById('reiniciar').removeAttribute('disabled'); // Se remueve el atributo disables del campo con la id reiniciar.
        } else{
            // El usuario no acertó
            if(numeroDeusuario>numeroSecreto){
                asignarTextoElemento('p','Numero secreto es menor');
            }else{
                asignarTextoElemento('p','Numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    }
    return;
}
// Asigna elemento al campo de texto que elija en HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); // Document es un puente entre JS y HTML. Este metodo Retorna el titulo H1 que tenemos en el HTML. En este caso la variable es un Objecto.
    elementoHTML.innerHTML = texto; 
    return;
}

// Funcion que limpia la caja de numero donde se ingresa

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value=''; // # se usa para llamar al id del input de HTML.
}

// Creando funcion que se activa cuando se hace click en nuevo juego.

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de inicio y reiniciar contandor de intentos
    condicionesIniciales();
    // Generar numero aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled','true') // Deshabilitar boton.
    
       
    
}

condicionesIniciales();




// EJEMPLOS

// ----Template Strings ----

/*
Simplifican la tarea de concatenar valores variables en una cadena, sin requerir concatenación manual de cadenas o conversiones explícitas de tipos

const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

//Salida: Hola, soy Juan y tengo 30 años.

En este ejemplo, la plantilla de cadena permite insertar dinámicamente los valores de las variables nombre y edad en la cadena de texto.

*/

/*
//EJERCICIOS

//1) Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros

let altura = 1.78;
let peso = 75;
let imc = 0;
function calcularIMC(altura,peso) {
    imc = parseInt(peso/(altura*altura).toFixed(2));    
    return imc;
}
calcularIMC(1.78,75);
console.log(`El IMC es ${imc} %`);

//2) Calcular el factorial de un numero


function calcularFactorial(numero){
    if(numero ===0 || numero === 1){
        return 1;
    }
    else {
        return numero*calcularFactorial(numero-1); // Recursividad
        
        }
    }
let numero =4;
let factorial = calcularFactorial(numero);
console.log(factorial);


// Bonus . Calcular fibonacci (Fibonacci es una serie de números donde cada número es la suma de los dos anteriores, comenzando con 0 y 1.=

function secuenciaFibonacci(numerof) {
    if (numerof === 0){
        return 0;
    }else if(numerof ===1) {
        return 1;
    }
    else{
       return secuenciaFibonacci(numerof-1) + secuenciaFibonacci(numerof-2) 
        
    }    
}

let numerof = 6;
let fibonacci = secuenciaFibonacci(numerof);
console.log(fibonacci);

// 3) Conversion dolar a real brasileño
let tipoCambioReal=4.8;
function convertirMoneda(valorDolar) {
    return valorDolar*tipoCambioReal;
}
let valorDolar = 100;
let valorEnReales =convertirMoneda(valorDolar);
console.log(`El valor en reales de ${valorDolar} es ${valorEnReales} reales`);


// 4) Funcion area y perimetro con datos de ancho y alto

function obtenerArea(alto,ancho){
    return alto*ancho;
}
function obtenerPerimetro(alto,ancho) {
    return 2*alto+2*ancho;
}

let alto = 5;
let ancho=3;
let area = obtenerArea(alto,ancho);
let perimetro = obtenerPerimetro(alto,ancho);

console.log(`El area es ${area} y el perimetro es ${perimetro}`)

// 5) Area y perimetro circulo.

let pi=3.14;
let radio = 3;

function calcularArea(radio) {
    return 2*pi*Math.pow(radio,2);
    
}

function calcularPerimetro(radio){
    return 2*pi*radio;
}

let areaCirculo  = calcularArea(radio);
let perimetroCirculo= calcularPerimetro(radio);
console.log(`El area del circulo es ${areaCirculo} y el perimetro del circulo es ${perimetroCirculo}`);

// 6) Mostrar la tabla de multiplicar de un numero dado.

    function mostrarTablaMultiplicar(numero) {
        for(var i=1; i<=10;i++){
            var resultado = numero*i;
            console.log(numero + "x" + i + "=" + resultado);
        }
    }

    let numerotabla = 7;
    mostrarTablaMultiplicar(numerotabla);



---- Calcular Promedio --


let nota1 = 4;
let nota2 = 7;
let nota3 = 6;
let nota4 = 5;
let promedio = calcularpromedio(nota1,nota2,nota3,nota4);
console.log(promedio);

function calcularpromedio(nota1,nota2,nota3,nota4) {
    return (nota1+nota2+nota3+nota4)/4;
}

function verificarAprobacion(promedio) {
    return promedio>=5 ? "Aprobado":"Reprobado";
}

console.log(verificarAprobacion(promedio));


--- Ejercicios varios Practica ---
function holaMundo(){
    console.log("Hola Mundo");
}

function mostrarNombre(nombre){
    console.log('Hola ${nombre}');
}

function dobleNumero(numero){

    return numero*2;
}

let resultadoDoble = dobleNumero(5);
console.log(resultadoDoble);

function promedioNumero(a,b,c) {
    return (a+b+c)/3;
}

let promedio = promedioNumero(4,8,9);
console.log(promedio);

function numeroMayor(a,b,c){
    let numeroMayor = Math.max(a,b,c);
    console.log(numeroMayor);
    return numeroMayor;
}


// FIN EJERCICIOS
*/

// ------ CODIGO ANTIGUO --- 

/* Reemplazado por funcion asignar Texto Elemento
let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";

let mensajeBienvenida = document.querySelector("#mensaje-bienvenida");
mensajeBienvenida.innerHTML = "Hola bienvenido al juego del numero secreto que onda wey";

let cambiarColor = document.querySelector("#titulo-seccion");
cambiarColor.innerHTML = "Bienvenido a una nueva seccion del juego";

*/


// Parametros - Son datos que se ingresan o alimentan a la funcion. Permite hacer la funcion generico.
// Se definen los parametros elemento y texto, los parametros no llevan comillas, a diferencia de cuando es algo explicito
// Mayor eficiencia de codigo.



/*
function verificarNumero(numero){
    if (numero>0) {
        alert("Numero es positivo");
    }else if(numero<0){
        alert('El numero es negativo');
    }else {alert('El numero es cero');}
  return;
}

function verificarNumeroSimple(numero){
    return numero > 0 ? "El numero es positivo" : numero<0 ? "El numero es negativo" : "El numero es cero"; // Operador ternario.
}*/