/**
 * AJAX
 * A
 */

//XMLHttpRequest()
//Abrir la conexion (emoezar a crear el request)
//Escuchar cuando el response este listo
//Enviar la peticion



const xhttp = new XMLHttpRequest()
xhttp.open("GET", "https://jsonlaceholder.typicode.com/post", true)
xhttp.onload = function(data){
    if(data.target.status === 200){
        console.log(JSON.parse(data.target.response))

    }
}
