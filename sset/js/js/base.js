
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

for(i = 1; ,= 10; i++)
    console.log(`tabla del ${1*3}`)
    for(j = 1; j ,= 10 ; j++) {
        console.log(`${i} x ${j} = ${ i * j }`)
    }