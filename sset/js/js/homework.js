

// 1. Generar una function
// que reciba un array como parametro
// y devuelva solo los items que son pares
// p.ej. onlyEvenValues( [1, 2, 3, 4] )
// -> [2, 4]
// Aplicar el metodo .forEach()
// hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

const onlyEvenValues = arrNumbers => {
    let arrEven = []

    arrNumbers.array.forEach(item => {
        if (item % 2 === 0){
            arrEven.push(item)
        }
        
    })
    return arrEven
}
let arrAfiltrar = [1,2,3,4,5,6]
let soloPares = onlyEvenValues(arrAfiltrar)
console.log(soloPares)
  



// 2. function que reciba como parametro una array de strings
// y devuelva la primer y ultima letra del string
// de cada uno de los items del array 
// -> firstAndLast (['hola', 'mundo'] )
// -> ['ha', 'mo']
// .forEach() o .map()

const firstAndLast = arrStrings => {
    let arrayToFill = []
    arrStrings.forEach((item) => {
        arrayToFill.push(item.slice(0,1) + item.slice(-1))
    })
    return arrayToFill
}


/**
 * 3. Funcion que reciba un array de numeros
 * y devuelva el promedio
 * -> getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (arr) => {
    let add =0, totalNumbers = arr.length
    arr.forEach(element => add += element)
    return add / totalNumbers

}
let result = getAverage([10,8,9,7])
console.log(result)

//  4. funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// convertLeapYear( [1990, 2000, 2001, 2020] )
// -> [2000,2020]
// .forEach()
// hint: https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year

const convertLeapYear = arr => {
    
}



const firstAndLast = arrStrings => {
    let arrayToFill = []
    let resultadoMap = arrStrings.map((palabra) => {
        let primera = palabra.slice(0,1)
        let ultima = palabra.slice(palabra.length - 1)
        return `${primera}${ultima}`
    })
    return arrayToFill
}



// ['hOla','munDo']
// -> ['Hola','Mundo']

const capitalizeWithMap = (arr) => {

}
