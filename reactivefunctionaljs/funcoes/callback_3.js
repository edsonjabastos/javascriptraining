const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length
// const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Dai', 'Edi', 'Rafa', 'Criolo', 'Froid', 'QotsA']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)
// console.log(nomes.map(primeiraLetra))

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// const nomesItems = obj1 => obj1.nome
// const nomeItemsCarrinho = carrinho.map(nomesItems)
// console.log(nomeItemsCarrinho)

// const qtdeXValor = qtdeXValor => qtdeXValor.qtde * qtdeXValor.preco
// const qtdeXValorCarrinho = carrinho.map(qtdeXValor)
// console.log(qtdeXValorCarrinho)


Array.prototype.meuMap = function(fn) {
    const arrayMeuMap = []
    for(let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        // arrayMeuMap.push(resultado)
        // arrayMeuMap.push(fn(this[i], i, this))
        arrayMeuMap.push(`@.@ ==> ${resultado}`)
    }
    return arrayMeuMap
    // for(let el of this){
    //     fn(el)
    // }
}

const nomesItems = obj1 => obj1.nome
const nomeItemsCarrinho = carrinho.meuMap(nomesItems)
console.log(nomeItemsCarrinho)

const qtdeXValor = qtdeXValor => qtdeXValor.qtde * qtdeXValor.preco
const qtdeXValorCarrinho = carrinho.meuMap(qtdeXValor)
console.log(qtdeXValorCarrinho)
