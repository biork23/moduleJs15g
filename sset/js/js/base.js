// Ejercicio 1. .forEach()
//Dado un array con solo numeros
//Obtener el valor mas alto
//


const mostBigger = (arr) => {
    let biggest = arr[0]
    arr.forEach( (value, index, array) => {
        if(biggest < value){
            biggest = value
        }
    })
    return biggest
}

//console.log( mostBigger( [1, 4, 10] ) )

const mostSmaller = (arr) => {
    let smaller = arr[0]
    arr.forEach ( ( value) => {
        if(smaller > value){
            smaller = value
        }
    })
    return smaller
}
console.log(mostSmaller([1,5,7] ) )

//arr.map()
let result = [1,2,3,4,5].map((val, index, arr) => {
    return val * 2

})
//console.log(result)


//dado un array de numeros, 
//retornar un array con los numeros convertidos a string
//[11,2,3,10,5]
//['11','2', '3', '10', '5']


let arr1 = (arr) => arr.map(( val) => val.toString())
//console.log (arr1([11,2,3,10,5]))

// .map()
// función
// Dado unn array como parametro 
// capitalizar todos los elementos que sean strings
// typeof variable
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]

// const capitalizeArr = (arr) => {
//     let arrCapitalized = []
//     arrCapitalized = arr.map((elemnt) => {
//         if (typeof elemnt === 'string') {
//             let stringCap = `${elemnt.slice(0,1).toUpperCasse()}${elemnt.slice(1).toLowerCase()}`
//             return stringCap
//         } else {
//             return elemnt
//         }
//     }
//     )
    
	
// } 
//  capitalizeArr(['hOlA', 'mundo', 123])
// console.log(resultCap)

//let stringToCap = 'hoLA'
//let textCap = `${stringToCap.slice(0,1).toUpperCase()}${stringToCap.slice(1).toLowerCase()}`
//console.log(textCap)

// const firstAndLast = arrStrings => {
//     let arrayToFill = []
//     let resultadoMap = arrStrings.map((palabra) => {
//         let primera = palabra.slice(0,1)
//         let ultima = palabra.slice(palabra.length - 1)
//         return `${primera}${ultima}`
//     })
//     return arrayToFill
// }



// ['hOla','munDo']
// -> ['Hola','Mundo']

// const capitalizeWithMap = (arr) => {
//     let arrCapitized = []
//     arrCapitized = arr.map((element) => {
//         let capWord = `${elemnt.slice(0,1).toUpperCasse()}${elemnt.slice(1).toLowerCase()}`
//         return capWord
//     })
//     return arrCapitized


// }
// capitalizeWithMap (['hOlA', 'mundO'])


// let arrayNumbers = [1,2,3,4,5,6]
// let arrayAllenar = []
// arrayAllenar = arrayNumbers.map((numer)=>{
//     return numero * 2
// })


// const explainMap = (arr) => {
//     return arr.map((numero))
// }

/**
 * arr.filter(function)
 */

/**
 * dado un array de numeros
 * filtrar los que son pares
 */

let arrToFilter = [1,2,3,4,5,6,7]
//let arrFiltered = arrToFilter.filter(item => item % 2 ===0)
let arrFiltered = []
arrFiltered = arrToFilter.filter((numero) => {
    if(numero % 2 === 0) {
        return numero
    }
})

console.log(arrFiltered)

/**
 * ->['hola' , 'mundo' 0, 5]
 * 1. funcion
 * 2. filtrar solo los wue son de tipo string
 * 
 */
let stringTest = ['hola', 'mundo', 0, 5]
let stringFiltered = []
stringFiltered = stringTest.filter((element) => {
    if(typeof element === "string"){
        return element
    }
})
console.log(stringFiltered)
