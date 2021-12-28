
$(document).ready(function () {
    console.log('ready')
})

let lastChilds = "<li class= 'last_item'>item list ul</li>"
for(i=1; i<11; i++){
    $('ul').append(lastChilds)
}

let firstChilds = '<li class="first_items">item list ol</li>'
for( j=1; j<11; j++){
    $('ol').prepend(firstChilds)
}

$('.changedList').html('<p>Hola Koders</p>')

$('.changedList').css('color','#333')

$('.title').text('Aprendiendo JQuery')

/**
     * Agregar al strong la clase bold
     * El elemento con la clase text__container, agregar el inicio  <b>Title text</b>
     * Agregar al container la clase open
     * Por defecto el container no debe estar visible
     * cuando cambiemos la clase open, debe de mostrarse
     */

$('strong').addClass('bold')

$('.text_container').prepend('<b>Title text</b>')
$('.container').addClass('open').show().attr('id','container')