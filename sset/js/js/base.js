let number1 = parseInt(prompt('Ingresa tu primer numero'))
let number2 = parseInt(prompt('Ingresa tu segundo numero'))
let number3 = parseInt(prompt('Ingresa tu tercer numero'))
if ( !isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    if( number1 === number2 && number1 === number3) {
        console.log(`Los numeros son iguales`)
    }else if(number1 > number2 && number1 > number3) {
        console.log(`El numero ${number1} es el mayor`)
    }else if(number2 > number1 && number2 > number3) {
        console.log(`El numero ${number2} es el mayor`)
    }else {
        console.log(`El numero ${number3} es el mayor`)
    }
} else {
    console.error('algunos valores no son numericos')
}


const weather = prompt('Por favor ingresa como esta el clima de tu ciudad \n 1. Soleado \n 2. Lluvioso \n 3. Nevando \n 4. Nublado')
const temp = parseInt(prompt('Ingresa la temperatura en Celcius'))

if(!isNaN(temp)){
    let farenheitGrade = ( temp * 9/5) + 32
    switch (weather){
        case 'Soleado':
            console.log( `En tu ciudad, el dia esta 'Soleado' con una temperatura de ${farenheitGrade}°F`)
            break
        case 'Lluvioso':
            console.log(`En tu ciudad, el dia esta 'Lluvioso' con una temperatura de ${farenheitGrade}°F`)
            break
        case 'Nevando':
            console.log(`En tu ciudad, el dia esta 'Nevando' con una temperatura de ${farenheitGrade}°F`) 
            break
        case 'Nublado':
            console.log(`En tu ciudad, el dia esta 'Nublado' con una temperatura de ${farenheitGrade}°F`) 
            break
            default:
                console.log('No entiendo cual es tu clima')          
    }
}
