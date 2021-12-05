const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]
//Solução 1
// const media = carrinho
// .filter(item => item.fragil)
// .map(item => item.qtde *  item.preco)
//     .reduce((acc, el) => {
//         const novaQtde = acc.qtde + 1
//         const novoTotal = acc.total + el
//         console.log(acc, el)
//         return {
//             qtde: novaQtde,
//             total: novoTotal,
//             media: novoTotal / novaQtde
//         }
//     }, {qtde: 0, total: 0, media: 0})
    
//     console.log(media)

//Solução 2

const isFragil = item => item.fragil
const totalPrecoPorItem = item => item.qtde *  item.preco
const totalPrecoProdutos = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0){
            acc = this[i]
        } else {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}

const mediaInicial = { qtde: 0, total: 0, media: 0}
const media = carrinho
    .filter(isFragil)
    .map(totalPrecoPorItem)
    .meuReduce(totalPrecoProdutos, mediaInicial)
    .media

console.log(`A media é ===> ${media}.`)
// const fragilOuNão = item => item.fragil ? true : false
    
// const osFrageis = carrinho.filter(fragilOuNão)

// const totalValorXProduto = item => item.qtde * item.preco

// const totalDosFrageis = osFrageis.map(totalValorXProduto)

// const dividirPelaQtde = (acc, el) => acc / el.length

// const mediaDosTotaisFrageis = (acc, i) => acc / i.length

// const mediaTotalProdutos = totalDosFrageis.reduce(dividirPelaQtde) 

// console.log()