

/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * hint: https://www.w3schools.com/jsref/jsref_join.asp
 */

 const reverse = str => str.split('').reverse().join('');

 reverse('hello world');     

/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
//  const esPalindromo = str => {
//     str = str.toLowerCase();
//     return str === str.split("").reverse().join("");
//   }
//   esPalindromo (oso)
const checkPalindrome =(string) => {

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

//const string = prompt('Ingresa una string: ');

//checkPalindrome(string);

/**
 * Escribir un arrow function que tome como parametro 2 arrays, 
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2]) 
 * -> 13
 * 
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
*/


const arrayReduce = (arrOne, arrTwo) => {
    let newArr = arrOne.concat(arrTwo)
    let arrAdd = 0
    
    // funcion tradicional
    // newArr.forEach( function (item) {
    //     arrAdd += item
    // })

    // arrow function
    newArr.forEach( value => {
        arrAdd = arrAdd + value
    })

    // newArr.forEach( value => arrAdd += value )
    return arrAdd
}


let resultado = arrayReduce( [1,2], [3] )
console.log(resultado)



// middle
// const arrayReduce = (arrOne, arrTwo) => {
//     let arrAdd =  0
//     arrOne.concat(arrTwo).forEach( item => arrAdd += item )
//     return arrAdd
// }

// short
// const arrayReduce = (arrOne, arrTwo) => {
//     let arrAdd =  0
//     return arrOne.concat(arrTwo).forEach( item => arrAdd += item )
// }

// one line solution
// const arrayReduce = (arrOne, arrTwo) => arrOne.concat(arrTwo).reduce( (acc, cv) => acc += cv )

/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array 
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]). 
 * -> [1,2]
*/

// large
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let concatArr = arrOne.concat(arrTwo)
//     let arrRepeated = []
//     concatArr.forEach((element, index) =>  {
//         // console.log( concatArr.indexOf(element), index)
//         if( concatArr.indexOf(element) !== index ) {
//             arrRepeated.push(element)
//         }
//     })
//     return arrRepeated
// }

// middle
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let arrRepeated = []
//     arrOne.concat(arrTwo).forEach((element, index) =>  {
//         concatArr.indexOf(element) !== index ? arrRepeated.push(element) : ''
//     })
//     return arrRepeated
// }


// Large filter
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let arrRepeated = []
//     arrRepeated = arrOne.concat(arrTwo).filter((element, index, arr) =>  {
//         if( arr.indexOf(element) !== index ) {
//             return element
//         }
//     })

//     return arrRepeated
// }

// short filter
// const getRepeatItems = (arrOne, arrTwo) => {
//     return arrOne.concat(arrTwo).filter((element, index,arr) =>  {
//         return arr.indexOf(element) !== index ? element : ''
//     })
// }

// one line -- not recomended
const getRepeatItems = (arrOne, arrTwo) => arrOne.concat(arrTwo).filter((item, index,arr) => arr.indexOf(item) !== index ? item : '')