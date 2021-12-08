
// /** 
//  * Dado un arreglo con nombres de personas, 
//  * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
//  * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
//  * -> ['Ana','Ivan','Oscar']
//  */

let onlyNamesVowels = (arr) => {
    let toUpper = []
    toUpper =arr.map( item => {
        return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()
    })

   let vowelNames = /^[aeiou]/i
   let result = toUpper.filter(str => vowelNames.test(str))
     return result
}
vowels = onlyNamesVowels ( ['jorge','ana','ivan','sergio','luis','oscar' ] )
console.log(vowels)


 

/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 **/


additionMultiArr = ( [ [1,2,3] , [1,3,2] , [3,2,1] ])

additionMultiArr.map(y => y.reduce((a, b) => a+b))

console.log(additionMultiArr)
//  x.map(function(y){
//     return y.reduce(function(a,b){
//         return a+b;
//     });
//   });
//x.map(y => y.reduce((a, b) => a+b));