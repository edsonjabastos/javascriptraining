class Produto {
    constructor(nome, preco, desc = 0.1) {
        this.nome = nome
        this.desc = desc
        this.preco = preco
    }
    
    get nome() {
        return `Price of this thing ==> ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if(novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 78.90)
p1.preco = 7777
console.log(p1.precoFinal)
p1.preco = -7777
p1.nome = 'catreta'
console.log(p1.nome)
console.log(p1.precoFinal)


const p2 = new Produto('Gold', 781.90)
console.log(p2.nome)
console.log(p2.precoFinal)