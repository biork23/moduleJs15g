

// ir por los datos del post
// window.addEventListener('load', () => {
//     console.log('ready')
//     let idPost = location.search.slice(8)
//     const xhttp = new XMLHttpRequest()
//     xhttp.open( "GET" , `https://ismael-15gjs-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
//     xhttp.onload = function(data) {
//         if(data.target.status === 200) {
//             let {title, author, timetoread,resume } = JSON.parse(data.target.response)

//             document.querySelector('.card-title').innerText = title
//             document.querySelector('.card__author').innerText = author
//             document.querySelector('.card__timetoread').innerText = timetoread + ' min'
//             document.querySelector('.card__resume').innerText = resume

//         }
//     }
//     xhttp.send()
// })

// ir por los datos del post
window.addEventListener('load', () => {

    let idPost = location.search.slice(8)
    console.log(idPost)
    fetch(
        `https://ismael-15gjs-default-rtdb.firebaseio.com/posts/${idPost}.json`)
    
    .then( (res) => {
        return res.json()
    })
    .then( (view) => {
       for(post in view){
        console.log(post)
        document.querySelector('.card-title').innertext = view.title
       // document.querySelector('.card-author').innertext = view.author
        // document.querySelector('card-timetoread').innertext = view.timetoread = 'min'
        // document.querySelector('card-resume').innertext = view.resume
       }
    })
})
// let backButton = document.querySelector('.back__button')
// backButton.addEventListener('click', ()=> {
//     location.replace('http://127.0.0.1:5500/')
// })
