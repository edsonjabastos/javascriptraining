const pessoa = {
    saudacao = 'bomdia!',
    falar() {
        console.log(pessoa.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()