function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var anonascimento = window.document.getElementById('txtano')
  var resultado = window.document.getElementById('res')
  
  if(anonascimento.value.length == 0 || anonascimento.value > ano){
    window.alert('Erro, tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(anonascimento.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked) {
        genero = 'Masculino'
             if(idade >= 1 && idade < 14){
                img.setAttribute('src', 'criancah.png')
             } else if (idade >=14 && idade <18){
                img.setAttribute('src', 'adolescenteh.png')
             } else if (idade >= 18 && idade < 60){
                img.setAttribute('src', 'adulto.png')
             } else if (idade >= 60){
                img.setAttribute('src', 'idoso.png')
             } 

   } else if (fsex[1].checked){
        genero = 'Feminino'
            if (idade >= 1 && idade < 14){
                img.setAttribute('src', 'criancam.png')
             } else if (idade >=14 && idade <18){
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade >= 18 && idade < 60){
                img.setAttribute('src', 'adulta.png')
             } else if (idade >= 60){
                img.setAttribute('src', 'idosa.png')
            }
        }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos o gênero ${genero} e ${idade} anos!`
    resultado.appendChild(img)
  

  }
}