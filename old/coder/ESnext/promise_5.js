function funcionarOuNao(valor, chanceErro) {
    console.log(valor, chanceErro)
    return new Promise((resolve, reject) => {
        console.log(reject, resolve)
        try {
            con.log('Tempo')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
                console.log(reject)
            } else {
                console.log(valor)
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log(v),
        // err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))