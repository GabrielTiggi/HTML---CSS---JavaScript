class Carrinho{
    #itens =[]

    adicionarItem(item){
        this.#itens.push(item)
    }

    get itens(){
        return Array.from(this.#itens)
    }

    removerIten(item){
        const indice = this.#obterIndice(item)
        if(indice>=0){
            this.#itens.splice(indice, 1)
        } 
    }

    #obterIndice(item){
        return this.#itens.indexOf(item)
    }

}

const carrinho = new Carrinho()
carrinho.adicionarItem("aviao")
carrinho.adicionarItem("casa")
carrinho.adicionarItem("carro")
// carrinho.removerIten("aviao")
console.log(carrinho.itens)