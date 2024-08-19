function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#0287e0'

    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fdbe15'

    } else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#064e7c'
    }
}
