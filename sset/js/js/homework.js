
 const dayWeek = prompt("Que dia de la semana es hoy?")
 dayWeek = dayWeek.toLowerCase();
 switch (dayWeek){
    case "Lunes":
        console.log(`${day} es el dia 1`)
        break
    case "Martes":  
        console.log(`${day} es el dia 2`)
        break
    case "Miercoles": 
    case "Miércoles":

        console.log(`${day} es el dia 3`)
        break
    case "Jueves":
    
        console.log(`${day} es el dia 4`)
        break
    case "Viernes":
    
        console.log(`${day} es el dia 5`)
        break
    case "Sabado":
    case "Sábado":
   
        console.log(`${day} es el dia 6`)
        break
    case "Domingo":
   
        console.log(`${day} es el ia 7`) 
        break
    default:
        console.log(`Es un dia invalido`)
        break                                                  
 }