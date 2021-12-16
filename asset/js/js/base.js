
// /**
//  * Selecionar elementos
//  * 
//  * 1. Selecionar por ID
//  */

// //  1. Selecionar por ID
// document.getElementById('head__title') 
// document.getElementsByTagName('li')
// document.getElementsByClassName('link__menu')

// document.querySelector('#head__title')
// document.querySelector('li')
// document.querySelector('.link__menu')
// document.querySelectorAll('.link__menu')
// // document.querySelectorAll('')

// /**
//  * Obtener atributos
//  * Setear atributos
//  */

// // get
// let title = document.querySelector('#head__title').getAttribute('data-title')
// let level = document.querySelector('#head__title').getAttribute('data-level')

// // set
// document.querySelector('#head__title').setAttribute('data-custom','random')
// // reemplazando clases 
// document.querySelector('#head__title').setAttribute('class','trees cuatro')

// // Agregar clases
// document.querySelector('#head__title').classList.add('clase3')
// // remover clases
// document.querySelector('#head__title').classList.remove('clase2')

// // comprobar si existe un atributo
// document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */


if(document.querySelector('#head__title').hasAttribute('class') == true &&
document.querySelector('#head__title').hasAttribute('class1', 'class2') == true){
    document.querySelector('#head__title').classList.add('class3')
}else{
    document.querySelector('#head__title').classList.add('custom')
}


//createElemnt('tag')
//textContent
//appendChild

// createElement('tag')
// textContent
// appendChild

let ulElement = document.createElement('ul')
// <ul></ul>

let liFirst = document.createElement('li')
// <li></li>
liFirst.textContent = 'item 1'
// <li>item 1</li>
ulElement.appendChild(liFirst)
// <ul> <li>item 1</li> </ul>

let liSecond = document.createElement('li')
// <li></li>
liSecond.textContent = 'item 2'
// <li>item 2</li>
ulElement.appendChild(liSecond)
// <ul> <li>item 1</li> <li>item 2</li> </ul>

document.getElementsByTagName('body')[0].appendChild(ulElement)
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul>

let ulMenu = document.createElement('ul')
ulMenu.classList.add('id__menu')

let liMenuHome = document.createElement('li')
liMenuHome.classList.add('item__menu')
liMenuHome.textContent = 'Home'
ulMenu.appendChild(liMenuHome)

let liMenuProducts = document.createElement('li')
liMenuHome.classList.add('item__menu')
liMenuProducts.textContent = 'Products'
ulMenu.appendChild(liMenuProducts)

let liMenuAboutUs = document.createElement('li')
liMenuAboutUs.classList.add('item__menu')
liMenuAboutUs.textContent = 'About us'
ulMenu.appendChild(liMenuAboutUs)

document.getElementsByTagName('body')[0].appendChild(ulMenu)
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul>


/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */


    let ulMenu = document.createElement('ul')
    ulMenu.classList.add('menu')
    ulMenu.setAttribute('id','menu')
    
    let liMenuHome = document.createElement('li')
    liMenuHome.classList.add('item__menu')
    liMenuHome.textContent = 'Home'
    ulMenu.appendChild(liMenuHome)
    
    let liMenuProducts = document.createElement('li')
    liMenuProducts.classList.add('item__menu')
    liMenuProducts.textContent = 'Products'
    ulMenu.appendChild(liMenuProducts)
    
    let liMenuAboutUs = document.createElement('li')
    liMenuAboutUs.classList.add('item__menu')
    liMenuAboutUs.textContent = 'About Us'
    ulMenu.appendChild(liMenuAboutUs)
    
    document.getElementById('body').appendChild(ulMenu)
    






