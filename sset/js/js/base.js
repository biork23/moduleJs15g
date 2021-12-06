// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10

const printMultiTables = (tableLimit = 10) => {
    for (i = 1; i <= tableLimit; i++) {
      for (j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
      }
    }
  }
  
  // Función 2:
  // valor por defecto 10
  // Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
  
  const addNumbersRange = (numberEnd = 10) => {
    let addRange = 0
    if (!isNaN(parseInt(numberEnd)) || (numberEnd >= 1 && numberEnd <= 100)) {
      for (i = 1; i <= numberEnd; i++) {
        addRange += i
      }
    } else {
      console.log("No es un número valido")
    }
    return addRange
  }
  
  // Función 3:
  // valor por defecto "1234"
  // Imprimir en consola la suma total de todos los digitos de una cantidad
  // p.ej. "1234" -> 10
  
  const additionNumbers = (numberValue = 1234) => {
    let numberToAdd = numberValue.toString()
    let addNumber = 0
  
    for (i = 0; i < numberToAdd.length; i++) {
      addNumber = addNumber + parseInt(numberToAdd[i])
    }
  
    return addNumber
  }
  
  // Función 4:
  // valor por defecto 3 y 5, sino el que ponga el usuario
  // Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
  // -> 233168
  
  const getMulti = (numberMulti = "default") => {
    let addMulti = 0
    if (numberMulti === "default") {
      for (i = 0; i <= 100; i++) {
        i % 3 === 0 || i % 5 === 0 ? (addMulti += i) : ""
      }
    } else {
      for (i = 0; i <= 100; i++) {
        i % numberMulti === 0 ? (addMulti += i) : ""
      }
    }
  
    return addMulti
  }
  
  /**
   * Funcion que pida el nombre al usuario
   * y lo imprima en consola
   */
  
  function getName() {
    let nameUser = prompt("Dame tu nombre", "jorge")
    console.log(nameUser)
  }
  // getName()
  
  /**
   * Funcion que reciba una palabra
   * y la retorne al revés
   */
  
  function stringReverse(stringToReverse) {
    // hola
    let stringReversed = ""
    for (let i = stringToReverse.length - 1; i >= 0; i--) {
      stringReversed += stringToReverse[i]
    }
    return stringReversed
  }
  
  // Funcion que permita convertir grados fahrenheit a celsius
  
  function toCelsius(fahrenheit) {
    let celsiusGrades = (5 / 9) * (fahrenheit - 32)
  
    // retorno de la funcion
    return celsiusGrades
  }


/**
 * arr.filter(function)
 */


/**
 * Dado un array de numeros
 * Filtrar los que son pares
 */

 let arrToFilter = [1,2,3,4,5,6,7]
 // let arrFiltered = arrToFilter.filter(item => item % 2 === 0 )
 let arrFiltered = []
 
 // arrFiltered = arrToFilter.filter( (numero) => {
 // 	if(	numero % 2 === 0 ) {
 // 		console.log(numero)
 // 		return numero
 // 	}
 // })
 
 arrFiltered = arrToFilter.filter( (numero, index, arr) => {
     if(numero % 2 === 0 ) {
         return numero
     }
 })
 
 // console.log(arrFiltered)
 
 
 /**
  * 
  * -> ['hola','mundo', 0, 5]
  * -> ['hola','mundo']
  * 1. funcion
  * 2. filtrar solo los que son de typo string
  * 
  */
 
 // const filterStrings = (arr) => {
 // 	let arrStrings = []
 // 	arrStrings = arr.filter((item) => {
 // 		if(typeof item === 'string') {
 // 			return item
 // 		}
 // 	})
 // 	return arrStrings
 // }
 
 // const filterStrings = (arr) => {
 // 	let arrStrings = []
 // 	arrStrings = arr.filter((item) => {
 // 		return typeof item === 'string' ? item : null
 // 	})
 // 	return arrStrings
 // }
 
 // filterStrings(['hola','mundo', 0, 5])
 
 const filterStrings = (arr) => {
     return arr.filter((item) => typeof item === 'string')
     .map( (item) => item.toUpperCase())
     .filter( (item ) => item.slice(0,1) === 'H')
 }
 
 const filterStringsLarge = (arr) => {
     let onlyStrings = []
     onlyStrings = arr.filter( (item) => {
         if(typeof item === 'string') {
             return item
         }
     })
 
     let toUpper = []
     toUpper = onlyStrings.map( (item) => {
         return item.toUpperCase()
     })
 
     let onlyH = []
     onlyH = toUpper.filter( (item ) => { 
         if(item.slice(0,1) === 'H') {
             return item
         }
     })
 
     return onlyH
 }
 
 
 
 let arr = [5,2,3]
 let acumulador = 0
 
 // arr.forEach( element => {
 // 	acumulador = acumulador + element
 // })
 
 // console.log(acumulador)
     
 // arr.reduce()
 let suma = arr.reduce((acc, cv, index, arr)=> {
     // console.log(acc, cv)
     return acc + cv
 }, 0 )
 
 let arrStr = ['hola', 'mundo']
 let concatStr = arrStr.reduce((acc, cv, index, arr)=> {
     console.log(acc, cv, index, arr )
     return acc + cv
 
 }, 'saludo: ')
 
 console.log(concatStr)

