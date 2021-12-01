

console.log('funciones')

function suma(){
    console.log('2 + 2')
    
}

suma()

//funcion con parametros
function suma(a, b) {
    console.log(a + b)
}

suma (9, 3)

function toCelcius(farenheit){
    console.log( (5 / 9) * (farenheit - 32) )
} 
 toCelcius(100)

//funcion que pida el nombre al ususario
// y lo imprima en cosola

/**
 * Funcion que reciba una palabra 
 * y la retorne al reves
 */

function askName (firstName) {
    console.log(firstName)
}

askName(prompt('Escribe tu nombre'))

function reverseWord (word){
    let wordReversed = ''
    for(j = word.length - 1; j >= 0 ; j--){
        wordReversed  += wordReversed[j]
    } 
    return wordReversed   
}
let nombreAlReves = reverseWord
console.log(nombreAlReves)


//Función 1:
//Imprimir en consola las tablas de multiplicar del 1 al 10 
function tables(){
    for(i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}
tables()
//Función 2:
//Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100


//Función 3:
//Imprimir en consola si una oración es un palindromo (puede contener espacios)
//anita lava la tina -> True

function checkPalindrome(string) {

    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('Es palindromo');
    }
    else {
        console.log('No es palindromo');
    }
}

const string = prompt('Ingresa una string: ');

checkPalindrome(string);

//Función 4:
//Imprimir en consola la suma total de todos los digitos de una cantidad 
//p.ej. "1234" -> 10

// Función 5:
//Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
//-> 233168*/
function factors() {
    let counterMulti = 0
    for(i = 1; i <= 100; i++){
        i % 3 === 0 || i % 5 === 0 ? counterMulti += i : ''
    }   
}
factors()


//ejercicio

function sumNumbers(a, b = 5){
    let suma = a + b
    return suma
}
let resultado = sumNumbers(4)


const tablasArrow = (j = 10) => {
    for (i = 1; i <= 10; i++){
        console.log(`Tabla del ${i}`)
        for (j = 1; j<= 10; j++){
             console.log(`${i} * ${j} = ${i*j}`)
        }
    }
   return tablasArrow
}

tablasArrow()





const sumasRow = (newNum = 10) =>{
    let resultado = 0
    for (i = 0; i <= newNum; i++){
        resultado = resultado + i
    }
    return console.log(resultado)
}
sumasRow()






const sumaDigitosRow = (cantidad = '1234') => {
    for (i = 0; i < cantidad.length; i++){
        sumatoria += parseInt(cantidad[i])
    }     return console.log(sumatoria)
}
let digitos = prompt('Introduce una cantidad')
let sumatoria = 0

sumaDigitosRow(digitos)






const sumaMultiplosRow = (j = 3, k = 5) => {
    let multiplos = 0
    for (i = 100; i >= 1; i--){        
        if (i % 3 === 0 && i % 5 ===0){
            multiplos = multiplos + i
        }
    }
   return console.log(`La suma total de los multiplos es: ${multiplos}`)	
}
sumaMultiplosRow()
