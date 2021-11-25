
/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
const userNumber = parseInt(prompt("Dame un numero entre 1 y 100"))
if (!isNaN(userNumber) && userNumber > 0 && userNumber <= 100){
    if (userNumber % 2 === 0){
        console.log(`${userNumber} es par`)
    } else {
         console.log(`${userNumber} es impar`)
    }         
} else {
    console.error("Valor no aceptado")
}
    /**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
 const weekDays = prompt("Que dia de la semana es hoy?")
 switch (weekDays){
    case "Lunes":
    case "LUNES":
    case "lunes":
        console.log(`${day} es el dia 1`)
        break
    case "Martes":  
    case "MARTES": 
    case "martes":
        console.log(`${day} es el dia 2`)
        break
    case "Miercoles": 
    case "Miércoles":
    case "MIÉRCOLES":
    case "MIERCOLES":
    case "miercoles": 
    case "miércoles": 
        console.log(`${day} es el dia 3`)
        break
    case "Jueves":
    case "JUEVES":
    case "jueves":  
        console.log(`${day} es el dia 4`)
        break
    case "Viernes":
    case "VIERNES":
    case "viernes":
        console.log(`${day} es el dia 5`)
        break
    case "Sabado":
    case "Sábado":
    case "SABADO":
    case "SÁBADO":
    case "sabado":
    case "sábado":
        console.log(`${day} es el dia 6`)
        break
    case "Domingo":
    case "DOMINGO":
    case "domingo":
        console.log(`${day} es el ia 7`) 
        break
    default:
        console.log(`Es un dia invalido`)
        break                                                  

 }

/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

const number1 = parseInt(prompt("Ingresa el valor de tu primer numero"))
const number2 = parseInt(prompt("Ingresa el valor de tu segundo numero"))

if ( !isNaN(number1) && !isNaN(number2) ) {
    if (number1 === number2) {
        console.log(`Los numeros son iguales`)
    } else if (number1 > number2 ){
        console.log(`El numero ${number1} es el mayor`)
        console.log(`El numero ${number2} es el mayor`)
    } else (number1 < number2);{
        console.log(`El numero ${number2} es el mayor`)
        console.log(`El numero ${number1} es el menor `)
    }
}else {
    console.error("Algunis valores no son numericos")
}