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
xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts", true)

// Escuchar cuando el response este listo
xhttp.onload = function(data) {

    if(data.target.status === 200){
        let objResp = JSON.parse(data.target.response)
        console.log(objResp)
        // imprimir en DOM
        let templateUser = ''
        objResp.forEach( (post) => {

            templateUser += `
            <div class="col-12 col-md-4 mb-4">
                <div class="card bg-light" >
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            </div>
            `
        })
        document.querySelector('.grid__posts').innerHTML = templateUser
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


// https://jsonplaceholder.typicode.com/posts/1 {}  
// https://jsonplaceholder.typicode.com/posts/1/comments [{},{}]

