function gerar(){
    var txtnum = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(txtnum.ariaValueMax.length == 0){
        window.alert('Digite um número acima de 0')
    } else{
        var n = Number(txtnum.value)
        for(var c = 1; c <= 10 ; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}