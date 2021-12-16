
//elemento.metodo(parametro)
//Object.keys(obj)

let salarios = {
    'jorge': 3000,
    'juan': 7000,
    'Pedro': 9000

}
let empleados = []
for( item in salarios){
    empleados.push(item)
}
//console.log(Object.keys(salarios))
 
// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach
 const totalSalarios = (obj) => {
     let suma = 0
     Object.keys(obj).forEach((empleado ) =>{
         console.log(obj[empleado])
         suma = suma + obj[empleado]
     })
     return suma
 }
//console.log(totalSalarios(salarios))

 const sumarSalarios =(obj) =>{
     let suma = 0
     suma = Object.keys(obj).reduce((acc, key) => {
         return acc + obj[key]
     }, 0)
     return suma

 }
//  console.log(totalSalarios(salarios))

//  const addArrOneLine = (obj) => Object.values(obj).reduce((acc, cv) => acc += cv, 0 )
//  console.log(addArrOneLine(salarios))

 let obj1 = {
     nombre: 'Ismael'
 }
 let obj2 ={
     apellido: 'Monfil'
 }
//  Object.assign(obj1,obj2)
//  console.log(obj1)

//  console.log(Object.entries(obj1))
 
//  Object.freeze(obj1)

 //Destructuracion de arrays
 let newArr = [10, 20, 30, 40, 50]
 let [a, b, c, d, e] = newArr
 //console.log(a,b,c,d)
 
 //let [a,b, ...rest] = [10, 20, 30, 40, 50]
 //console.log(a)
 //console.log(b)
 //console.log(...rest)
 
let [firstName, lastName, age] = ['ismael', 'Monfil', 40]
//console.log(firstName,lastName,age)

//destructuracion de objetos
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
}
const{ name, realName} = hero
//console.log(hero)



 
// Metodos de objetos

//
// console.log(this)
// console.log(this.alert)

let koder = {
    name:"Ismael",
    lastName:"Monfil",
    age: 40,
    average: [10, 10, 10, 8, 9],
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
    setAge: function(age = 10){
        this.age = age
    }   
}
console.log(koder)

koder.setAge()



koder.getFullName = function () {
    console.log(this)
    return `${ this.name } ${ this.lastName } ${this.age}`
}

//'console.log(koder.getFullName())

//console.log(koder.getAverage())
// -> 9.4


koder.getAverage = function () {
    let sum = this.average.reduce (( acc, cv) => acc += cv, 0)
    let total = this.average.length
    let av = sum / total
    return av
}
console.log(koder.getAverage() )

koder.setAverage = function (totalAverage) {
    this.totalAverage = this.getAverage()
    
}
//koder.setAverage()

// Agregar un metodo para calcular el IMC


koder.setGetIMC = function (height, weigth) {
}

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function () {
    
}


// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function () {
    
}
 