function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("ERRO: Verifique os dados e tente novamente")
    } 
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            gênero = "Homem"
            if ( idade >= 0 && idade < 10){
                img.setAttribute("src", "bebe menino.png")
            }
            else if(idade < 21){
                img.setAttribute("src", "menino jovem.png")
            }
            else if(idade <65){
                img.setAttribute("src", "adulto.png")
            }
            else{
                img.setAttribute("src", "idoso.png")
            }
        } else if(fsex[1].checked){
                gênero = "Mulher"
            if( idade >= 0 && idade < 10){
                img.setAttribute("src", "bebe menina.png")
            }
            else if(idade < 21){
                img.setAttribute("src", "menina jovem.png")
            }
            else if(idade <65){
                img.setAttribute("src", "adulta.png")
            }
            else{
                img.setAttribute("src", "idosa.png")
            }
        }
            res.style.textAlign = "center"
            res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos!</p>`
            res.appendChild(img)    
}