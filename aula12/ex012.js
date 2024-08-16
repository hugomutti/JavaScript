var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} horas!`)
if (hora >= 5 && hora < 12){
    console.log(`Tenha um bom dia!`)
} else if (hora >= 12 && hora <= 17){
    console.log(`Tenha uma boa tarde`)
} else if (hora >=18 && hora <= 23) {
    console.log(`Tenha uma noite`)
} else if (hora >= 0 && hora < 5){
    console.log(`Tenha uma boa madrugada`)
}