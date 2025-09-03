(function (){
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const form = document.querySelector(".formCadastro")

    form.addEventListener("submit",function(e) {
        if (!txtTitulo.value){
            showalertmessage("Precisa digitar algo", function(){
                txtTitulo.focus()
            })
            e.preventDefault()
        }
    }) 

    const fdback = document.getElementById("feedbackMessage")
    function showalertmessage (message, cb) {
        fdback.classList.add("show")
        fdback.getElementsByTagName("p")[0].textContent = message

        if (typeof cb === "function"){
            cb()
        }
       
    }

    const fecharBotao = fdback.getElementsByTagName("button")[0]
    fecharBotao.addEventListener("click", function(){
        fdback.classList.remove("show")

    })


    const txtDescricao = document.getElementById("txtDescricao")
    const contador = document.getElementById("contador")
    const resta = contador.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    resta.textContent = maxima


    contador.style.display = "block"

    txtDescricao.addEventListener("input", function () {
        let qtdLetrasDigitadas = this.value.length
        let letrasRestantes = parseInt(maxima) - parseInt(qtdLetrasDigitadas)
        resta.textContent = letrasRestantes
    })

    btn.disabled = true

    const chk = document.getElementById("chkAceito")
    chk.addEventListener("change", function (){
        btn.disabled = !this.checked
    })
})()