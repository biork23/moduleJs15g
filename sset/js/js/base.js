// Propiedades
// key: valor
let carObject = {
  modelo: 'jetta',
  marca: 'VW',
  color: 'rojo',
  year: 2020,
  tenencias: [2019, 2020, 2021]
}


// Objeto Koder
let koder = {
  name: 'jorge luis',
  lastName: 'Camarillo',
  age: 30,
  generation: 6,
  modulos: ['js','node js', 'cloud'],
}


// Create
// koder['isMentorCorchete'] = false
// koder.modulos = ['js','node js', 'cloud']
koder.ismentor = true

// Read
// console.log(koder.isMentor)
// console.log(koder.name.toUpperCase())

// Update
koder.name = 'juan'
koder.modulos.push('otro item')

// Delete
// delete object.propiedad
delete koder.age




// [].forEach((value, index, array) => {})
// [].filter((value, index, array) => {})
// [].map((value, index, array) => {})
// [].reduce((acc, value, index, array) => {})

let cities = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain"
}

for (let city in cities) {
  // console.log(city)
}

// for in
for(let propiedad in koder) {
  // console.log( propiedad , koder[propiedad] )
}

// 1. name : jorge luis
// 2. lastName : Camarillo
// ...

let counter = 1

for(let propiedad in koder) {
  //inicio de cada ciclo
  // console.log(`${counter}. ${propiedad} : ${koder[propiedad]}`)
  counter++
  // fin de cada ciclo
}

// Ejercios
/**
* Del siguiente objeto
* 1. Contar el numero de empleados
* 2. Suma total a pagar
* -> Son 3 empleados y el total es 130000
*/

let salarios = {
  'juan': 30000,
  'Albert': 50000,
  'jorge': 50000
}

let total = 0
let employes = 0

for(salario in salarios) {
  // console.log(salario, salarios[salario])
  total += salarios[salario]
  employes++
}

// console.log(`Son ${employes} empleados y el total es ${total}`)





/**
* Arrow function
* Recibir un objeto
* Devolver un array con todas las propiedadades que son un string
* Entrada: objOnlyStrings
* [modelo,marca,color, version, orige]
*/

const filterStringObject = (obj) => {
  let onlyStrArr = []
  for(propiedad in obj){
      if(typeof obj[propiedad] === 'string'){
          onlyStrArr.push(propiedad)
      }
  }
  return onlyStrArr
}

let objOnlyStrings =  {
  modelo: 'jetta',
  marca: 'VW',
  color: 'rojo',
  year: 2020,
  tenencias: [2019, 2020, 2021],
  version: 'sport',
  origen: 'México'
}

// console.log(filterStringObject(objOnlyStrings))
// -> [modelo,marca,color, version, origen]


// [1,2,3,4,5,'hola', false, [1,2,3,4], {}, {}, {}]

// [ {}, {}, {}]

// [1,2,3,4,5]

// Array de objetos
let koders =  [
  {
      name: 'jorge luis',
      lastName: 'Camarillo',
      age: 30,
      generation: 6,
      modulos: ['js','node js', 'cloud'],
  },
  {
      name: 'Erik',
      lastName: 'Gutierrez',
      age: 20,
      generation: 15,
      modulos: ['js'],
  },
  {
      name: 'Sara',
      lastName: 'Reveles',
      age: 24,
      generation: 12,
      modulos: ['js'],
  }
]

koders.forEach((element, index, array) => {
  // console.log(element.lastName)
  // console.log(element.age)
  // console.log(element.generation)
  // console.log(element.modulos)
  console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
})

/**
* 1. Hacer una funcion que reciba un objeto de koders
* 2. Obtener la suma de todas las edades
* 3. Retornar el total
* hint: .forEach() .reduce()
*/

const getTotalAge = (obj) => {
  let totalAge = 0
  totalAge = obj.reduce( (acc, currentValue) => {
      acc += currentValue.age
      return acc
  }, 0)
  return totalAge
}
console.log(getTotalAge(koders))

const getTotalAgeForEach = (obj) => {
  let totalAge = 0
  obj.forEach( (cv) => {
      totalAge += cv.age
  })
  return totalAge
}
console.log(getTotalAgeForEach(koders))

const getTotalAgeOneLine = (obj) => obj.reduce( (acc, cv) => acc += cv.age, 0)
console.log(getTotalAgeOneLine(koders))