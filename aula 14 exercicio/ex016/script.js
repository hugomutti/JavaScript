function contar(){
    var txtn1 = window.document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtpasso = document.getElementById('passo')
    var res = document.getElementById ('res')
    if(txtn1.value.length == 0 || txtn2.value.length == 0 || txtpasso.value.length == 0){
        window.alert('Está faltando algum número.')
        res.innerHTML= 'Impossível contar...'
    } else{
        res.innerHTML = 'Contando: <br>'
        var n1 = Number(txtn1.value)
        var n2 = Number(txtn2.value)
        var passo = Number(txtpasso.value)

            if (passo <= 0){
                passo =1
            }

            if(n1 < n2){
            for(let c = n1; c <= n2; c += passo){
                res.innerHTML += `${c} \u{27A1} `
                 }
            } else {
                for(let c = n1; c >= n2; c-= passo){
                    res.innerHTML += ` ${c} \u{2B05}`
                }
               
            }
            res.innerHTML += `\u{1F3C1}`



    }
}