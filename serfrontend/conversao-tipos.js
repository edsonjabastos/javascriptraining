let n1 = 10.634643
// n1 = parseInt(n1)  // para converter um numero com casas decimais em inteiro
n1 = parseFloat(n1) // para converter em um numero real com casa decimais precisamos converter para float
// let n2 = '20' // os métodos parseInt e parseFloat conseguem converter um número com caracteres não numericos
let n2 = '20a' // se começar com numeros ele lê até o primeiro não numérico e ignora daí pra frente
n2 = Number(n2) // sempre que tivermos caractéres não numerico o contrutor number não vai converter e retorna um NaN
// '21424fasjhfk42412' => consegue converter (ignorando da primeira letra pra frente)'a8912478924' => não consegue converter
let n3 = n1 * n2// o interpretador do JS é inteligente o suficiente pra saber quando uma string
console.log(n3, typeof n3) //  tem número e faz a conversão implicíta para realizar a operação
console.log(n1 + n2, typeof n1, typeof n2) // ATENÇÃO o sinal + é usado também na concatenação logo temos um resultado inesperado
// 'oi' ? 2 => não conseguimos fazer este tipo de operação, retornará um NaN e com o + isa concatenar retonando 'oi2'
n1 = 'oi', n2 = 123
console.log(n1 + n2, n1 * n2)
n2 = n2 + '' // podemos converter um numero em string apenas concatenando com uma string vazia
console.log(n2, typeof n2)
let n4 = 123 // a método específico de converter numero em string é o toString
n4 = n4.toString(16) // que também é usado para converter entre bases númericas passando a base como parametro
console.log(n4, typeof n4)