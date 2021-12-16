/**
 * AJAX
 * Asynchronous JavaScript And XML
 * Metodología
 * 
 * xmlhttprequest
 * .fetch()
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */

// cliente
// armar el request
// enviar la peticion http
// verbos http
// POST, GET, PUT, PATCH, DELETE
// 
// server
// status code
// entender la peticion
// armar la respuesta
// enviar la respuesta

// XMLHttpRequest()
/**
 * Declarar un objeto XMLHttpRequest
 * Abrir la conexion (empezar a creat el request)
 * Escuchar cuando el response este listo
 * Enviar la peticion
 * 
 */

//  Declarar un objeto XMLHttpRequest
const xhttp = new XMLHttpRequest()
// Abrir la conexion (empezar a creat el request)
// xhttp.open(metodo, url)
xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1", true)

// Escuchar cuando el response este listo
xhttp.onload = function(data) {

    if(data.target.status === 200){
        let res = data.target.response
        let objResp = JSON.parse(res)
        // imprimir en DOM
        let templateUser = ''
        templateUser = `
        <div>
            <h2>${objResp.title}</h2>
            <p>${objResp.body}</p>
        </div>
        `
        document.querySelector('.container').innerHTML = templateUser
    }
    
}

// Enviar la peticion
xhttp.send()
console.log('espera terminada')

/**
 * 
 * 
 * 
 */

// objeto a texto JSON.stringify(obj)
// texto a objeto JSON.parse(text)

// APi fetch

// fetch()

