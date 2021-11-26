


let saludo = 'hola' 
 for(i = 0; i < saludo.length; i++ ) {
     console.log(saludo[i])
}

//  pedir al usuario un string
//  contar las vocales y las consonantes
// imprimir en consola
// 2 vocales y 2 consonantes

const userWord = prompt('Dame una palabra')
 let vowels = 0
 let consonant = 0

 if(userWord.length > 0){
    
     for(i = 0; i < userWord.length; i++ ) {
         let letter = userWord[i].toLowerCase()
         if(letter !== ' '){
             if(
                 letter === 'a' ||
                 letter === 'e' ||
                 letter === 'i' ||
                 letter === 'o' ||
                 letter === 'u' ||
                 letter === 'á' ||
                 letter === 'é' ||
                 letter === 'í' ||
                 letter === 'ó' ||
                 letter === 'ú'
             ) {
                 //vowels = vowels + 1
                 //vowels += 1
                 vowels++
             } else {
                 consonant++
             }
         }
     }
    
     console.log(`${vowels} vocales y ${consonant} consonantes`)
 } else {
     console.log('Inserta una palabra por favor')
 }



 //pedir una palanbra con espacio al inicio y al final
 //contar las letras "a" y "e", 
 //Contar numero de espacios, sin contar los espacios
 //al inicio y al final

 const userWord = prompt('Dame una palabra').toLowerCase().trim()
 console.log(userWord)
 let letterA = 0
 let letterE = 0
 let spaces = 0

 if(userWord.length > 0){
     for(i = 0; i < userWord.length; i++ ) {
         let letter = userWord[i].toLowerCase()
         if(letter !== ' '){
             if(letter === 'a' || letter === 'á') {
                 letterA++
             } else if(letter === 'e' || letter === 'é') {
                 letterE++
             }
         } else {
             spaces++
         }
     }
     console.log(`${letterA} "A" y ${letterE} "E"`)
 } else {
     console.log('Inserta una palabra por favor') }


// ciclos

// inicio
// fin
// incremento

 for( i= 1; i <= 10; i++){
     console.log(`5 x ${i} = ${5 * i}`)
 }

// Pedir el usuario 1 numero entre 1 y 100
// sumar todos los numeros entre el 1 y este numero
// Mandar un alert con el  total

// 10
// 1+2+3+4+5+6+7+8+9+10
// total -> ?
 const numberUser = parseInt(prompt('Dame un numero entre 1 y 100'))
 let suma = 0
 if(!isNaN(numberUser)){
    
     for( i = 1; i <= numberUser; i++){
         suma += i
     }
     alert(`La suma es: ${suma}`)
 } else {
     console.log('No es un numero valido')
 }



// inicio
// fin
// incremento

// while(condition){
//     // sentences
// }

 const numberUser = parseInt(prompt('Dame un numero entre 1 y 100'))
 let suma = 0
 let counter = 1

 if(!isNaN(numberUser) && numberUser > 0 &&  numberUser <= 100){  
     while(counter <= numberUser){
         // sentencias
         suma = suma + counter

         // incremento
         counter = counter + 1

     }
    
     alert(`La suma es: ${suma}`)

 } else {
     console.error('No es un numero valido')
 }

 //do {
     // sentences
// } while(condition)


// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo



// For solution
const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

let wordWithoutSpace = ''
let wordReversed = ''

if(wordUser != ''){
    // Remove White space
    for(i = 0; i < wordUser.length; i++){
        if(wordUser[i] !== ' '){
            wordWithoutSpace = wordWithoutSpace +  wordUser[i]
        }
    }
    console.log(wordWithoutSpace)

    // word reversed  
    for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
        wordReversed = wordReversed + wordWithoutSpace[j]
    } 
    console.log(wordReversed)

    wordWithoutSpace === wordReversed ?
        console.log(`La palabra "${wordUser}" es un palindromo`)
    :
        console.log(`La palabra "${wordUser}" No es un palindromo`)

} else {
    console.log('Inserta una palabra valida')
}