function verificar(){
    var data = new Date()
    var anohoje = data.getFullYear()
    var anonasc = document.getElementById('txtano')
    var sex = document.getElementsByName('radsex')
    var idade = anohoje - Number(anonasc.value)
    var res = document.getElementById('res')
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if(anonasc.lenght == 0 || anonasc.value > anohoje){
        window.alert('Dados incorretos, tente novamente.')
    } else{
        if(sex[0].checked){
            genero = "masculino"
            if(idade >=1 && idade <12){
                img.setAttribute('src', 'criancah.png')
            } else if (idade >=12 && idade < 18){
                img.setAttribute('src', 'adolescenteh.png')
            } else if( idade >= 18 && idade < 59){
                img.setAttribute('src', 'adulto.png')
            } else if (idade > 60){
                img.setAttribute('src', 'idoso.png')
            }
        }
        if(sex[1].checked){
            genero='feminino'
            if(idade >=1 && idade <12){
                img.setAttribute('src', 'criancam.png')
            } else if (idade >=12 && idade < 18){
                img.setAttribute('src', 'adolescentem.png')
            } else if( idade >= 18 && idade < 59){
                img.setAttribute('src', 'adulta.png')
            } else if(idade > 60){
                img.setAttribute('src', 'idosa.png')
            }
        } 
    
    res.style.textAlign = 'center'   
    res.innerHTML= `O gênero é ${genero} e tem ${idade} anos!`
    res.appendChild(img)
    }  
}