// arrow function

const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = nome => console.log(`Fala ${nome}, pela orde zezim?!`)
// "Fala0" + nome + ", beleza?!"
saudacao('meu bom')

const somar = (...numeros) => { // ou somente numeros para passar array
    console.log(Array.isArray(numeros), typeof numeros)
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return console.log(total)
}


somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
somar(1, 2, 3, 4, 5, 6)
somar(1, 2, 3)

const potencia = base => exp => console.log(Math.pow(base, exp))

potencia(5)(5)

// this
// Array.prototype.log = function() { //com arrow => não funciona
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-333, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()
// numeros.log()

const subtrair = (a, b) => console.log(a - b)
subtrair(214251,36463)