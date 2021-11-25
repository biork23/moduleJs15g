
const a = parseInt(prompt(" dame el valor de A"))
const b = parseInt(prompt("dame el valor de B"))
console.log(isNaN(a), isNaN(b))

if(isNaN(a) === false && isNaN(b) === false){
    if(a>b){
        console.log(a/b)
    } else if(a<b){
        console.log(a+b)
    } else if(a === b){
        console.log(a * b)
    }
} else {
    console.error('algunos de los caracteres no son numeros')
}

for(i = 1; j <= 10; i++)
    console.log(`tabla del ${1*3}`)
    for(j = 1; j = 10 ; j++) {
        console.log(`${i} x ${j} = ${ i * j }`)
    }

/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */