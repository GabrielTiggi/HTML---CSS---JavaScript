const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");
const dialog = document.getElementById("erro-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");

cepInput.addEventListener("input", function(){
    let cep = this.value
    cep = cep.replace("-", "").trim()

    if(cep.length === 8){
        obterEndereco(cep)
            .then(dado => {
                if(dado.erro){
                    throw Error("CEP Inválido!")
                }
                mostrarDados(dado)
            })
            .catch(err =>{
                LimparDados()
                mostrarErro()
            })

    }
})

function mostrarDados(dado){
    logradouroInput.value = dado.logradouro
    bairroInput.value = dado.bairro
    localidadeInput.value = dado.localidade
    ufInput.value = dado.uf
    ufInput.value = dado.uf
    
}

function mostrarErro(erro){
    dialog.showModal()
}

fecharDialogBtn.addEventListener("click", function(){
    dialog.close()
})

function LimparDados(){
    logradouroInput.value = ""
    bairroInput.value = ""
    localidadeInput.value = ""
    ufInput.value = ""
}


function obterEndereco(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then( res =>{
            if(!res.ok){
                throw Error(`Erro ao buscar o cep: ${cep}`)
            }
            return res.json()
        })
}
