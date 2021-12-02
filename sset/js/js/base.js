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

const capitalizeArr = (arr) => {
    let arrCapitalized = []
    arrCapitalized = arr.map((elemnt) => {
        if (typeof elemnt === 'string') {
            let stringCap = `${elemnt.slice(0,1).toUpperCasse()}${elemnt.slice(1).toLowerCase()}`
            return stringCap
        } else {
            return elemnt
        }
    }
    )
    
	
} 
 capitalizeArr(['hOlA', 'mundo', 123])
console.log(resultCap)

//let stringToCap = 'hoLA'
//let textCap = `${stringToCap.slice(0,1).toUpperCase()}${stringToCap.slice(1).toLowerCase()}`
//console.log(textCap)
