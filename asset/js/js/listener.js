// .addEventListener('type', callback)
// callback JS
// type: click, change, focus, mouseleave, mouseenter
/**
 * focus, focusin, focusout
 * mouseenter, mouseleave, mousemove
 * click, rightclick
 * 
 * teclado
 * keydown, keypress, keyup
 * focus
 * 
 * load, beforeload
 * 
 */

//  let buttonEvent = document.getElementById('button__eventListener')

//  const saludo = () => {
//      console.log('saludo event listener ok')
//  } 
 
//  // add event
//  // buttonEvent.addEventListener('click', saludo )
 
//  buttonEvent.addEventListener('click', () => { console.log('saludo event listener') })
 
//  // other event
//  document.getElementById('button__eventListener').addEventListener('focus', () => {
//      console.log('saludo event listener focus')
//  })
 
//  // remove event
//  buttonEvent.removeEventListener('click',saludo)
 
 
 // ejercicio
 // Agregar a 5 koders mas
 // pintarlos en el DOM
 // 1. utilizar bootstrap
 // 2. Que sea responsive
 // 3. minimo 3 cards por row
 
 let koders = [
     {
         name: 'Emilio',
         age: 30,
         city: 'Guadalajara',
         generacion: 6,
         typeKoder: 'js',
         gender: 'M',
         avatar: 'https://picsum.photos/200/200'
     },
     {
         name: 'Juan',
         age: 30,
         city: 'Ciudad de méxico',
         generacion: 6,
         typeKoder: 'iOS',
         gender: 'M',
         avatar: 'https://picsum.photos/200/200'
     },
     {
        name: 'Mike',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'Js',
        gender: 'M',
        avatar: 'https://picsum.photos/200/200'
    },
    {
        name: 'Ivonne',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://picsum.photos/200/200'
    },
    {
        name: 'Ismael',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'Js',
        gender: 'M',
        avatar: 'https://picsum.photos/200/200'
    }
 ]

 
const printKoders = () => {
    layoutKoders = ''
    koders.forEach( (koder) => {
        layoutKoders += `
        <div class="col-12 col-md-4 ">
            <div class="card align-items-center mb-4 p-3">
                <img src="${koder.avatar}" class="rounded-circle" alt="${koder.name}">
                <div class="card-body">
                    <h5 class="card-title text-center">${koder.name}</h5>
                    <p class="card-text text-center"> <b>Edad</b> ${koder.age} años </p>
                    <p class="card-text text-center"> <b>Generación </b> ${koder.generacion}  </p>
                    <p class="card-text text-center"> <b>Ciudad</b> ${koder.city} </p>
                    <p class="card-text text-center"> <b>Bootcamp</b> ${koder.typeKoder}  </p>
                </div>
            </div>
        </div>
        `
    })
    document.querySelector('.grid__koders').innerHTML = layoutKoders
}

// let trigger = document.querySelector('#show__koders')
// trigger.addEventListener('click', () => {
//     printKoders()
// } )




window.onload  = function () {
    console.log('Ya cargo la página')
    printKoders()
}
 