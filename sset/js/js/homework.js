// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10 
function tables(a=10){
    for(i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}
tables(10)

// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100

// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10



// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario 
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

function factors(a=3, b=5) {
    let counterMulti = 0
    for(i = 1; i <= 100; i++){
        i % 3 === 0 || i % 5 === 0 ? counterMulti += i : ''
    }   
}
factors(3, 5)

// invertigar Arrow functions