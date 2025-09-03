 class Produto{
    #itensEstoque
    #contador

    constructor(nome, itensEstoque){
        this.nome = nome
        this.#contador = 0
        this.#itensEstoque = (typeof itensEstoque === "number" && itensEstoque >0) ? itensEstoque :0
    }

    get itensEstoque(){
        console.log(`Compra realizada com sucesso de ${this.nome}: ${this.#contador}`)
        return this.#itensEstoque
    }

    comprar(quantidade){ // Método que verifica se o estoque é valido e adiciona ao contador e retira estoque.
        if(typeof quantidade !== "number" || quantidade <= 0){
            console.log("Quantidade invalida")
            return
        }
        if(quantidade > this.#itensEstoque){
            console.log("Estoque insuficiente")
            return
        }
        this.#contador ++
        this.#itensEstoque -= quantidade
    }

    adicionarEstoque(quantidade){
        if(typeof quantidade === "number" && quantidade > 0){
            this.#itensEstoque += quantidade
        }else{
            console.log("Quantidade inválida!")
        }
    }
 }

 const lapis = new Produto("Lápis")
 const shorts = new Produto("shorts", 20)


 // testes

 lapis.adicionarEstoque(20)
 lapis.comprar(30)
 lapis.comprar(5)
 console.log(lapis.itensEstoque)


 shorts.comprar(10)
 shorts.adicionarEstoque(15)
 shorts.comprar(20)
 console.log(shorts.itensEstoque)