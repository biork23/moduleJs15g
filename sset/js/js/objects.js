
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
console.log(Object.keys(salarios))
 
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
console.log(totalSalarios(salarios))

 const sumarSalarios =(obj) =>{
     let suma = 0
     suma = Object.keys(obj).reduce((acc, key) => {
         return acc + obj[key]
     }, 0)
     return suma

 }
 console.log(totalSalarios(salarios))

 const addArrOneLine = (obj) => Object.values(obj).reduce((acc, cv) => acc += cv, 0 )
 console.log(addArrOneLine(salarios))

 let obj1 = {
     nombre: 'Ismael'
 }
 let obj2 ={
     apellido: 'Monfil'
 }
 Object.assign(obj1,obj2)
 console.log(obj1)

 console.log(Object.entries(obj1))
 
 Object.freeze(obj1)

 //Destructuracion de arrays
 let newArr = [10, 20, 30, 40, 50]
 let [a, b, c, d, e] = newArr
 console.log(a,b,c,d)
 
 //let [a,b, ...rest] = [10, 20, 30, 40, 50]
 //console.log(a)
 //console.log(b)
 //console.log(...rest)
 
let [firstName, lastName, age] = ['ismael', 'Monfil', 40]
console.log(firstName,lastName,age)

//destructuracion de objetos
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
}
const{ name, realName} = hero
console.log(hero)



 




 