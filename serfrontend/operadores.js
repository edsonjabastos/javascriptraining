let n1 = 10
let n2 = 5
// OPERADORES ARITMÉTICOS
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2) // muito usado para verificar se um número é impar ou par
console.log(n1 ** n2)
// OPERADOES DE ATRIBUIÇÃO
let n3 = 25
console.log(n3 += 2) 
console.log(n3 -= 2) // ATENÇÃO COM REGRA DE PRECEDENCIA DOS OPERADORES
console.log(n3 *= 2) // podemos de usar parenteses para consertar as operações
console.log(n3 /= 2)
console.log(n3 %= 2)
n3 = 25
console.log(n3 **= 2)
// INCREMENTO E DECREMENTO
let i = 0
console.log(++i, i++) // pre icremento faz a operação antes
console.log(--i, i--) // pós incremento faz a operação depois
console.log(i)
// operadores de atribuição (relacionais)
// COMPARAÇÃO
// igualdade de valor == igualdade de valor e tipo ===
// < (MENOR), > (MAIOR), <= (MENOR OU IGUAL), >= (MAIOR OU IGUAL)
// != valores diferentes !== valores e tipos diferentes
let v1 = 10
let v2 = "10"
let v3 = 11
console.log(v1 == 10, v1 == v2, v1 == v3)
console.log(v1 === 10, v1 === v2, v1 === v3)
console.log(v1 <=10, v1 <= v2, v1 <= v3)
console.log(v1 >= 10, v1 >= v2, v1 >= v3)
console.log(v1 != 10, v1 != v2, v1 != v3)
console.log(v1 !== 10, v1 !== v2, v1 !== v3)
// OPERADORES LÓGICOS
// Para uma pessoa viajar para o exterior:
//    precisa ser maior de 18 anos      observar
//                OU                        a
//     acompannhado dos pais          precedência
//                E                        de
//        comprar o bilhete              valores
let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete // ATENÇÃO COM AS RECGRAS DE PRECENDENCIA DOS OPERADORES
console.log(`Pode viajar: ${podeViajar}`) // && tem preferencia sobre ||
v1 = 2
v2 = 10
v3 = 20
let media0 = (v1 + v2 + v3) / 3
let media1 = (v1 + v2) / 2
console.log(`media entre v1, v2 ,v3: ${media0}`)
console.log(`media entre v1 e v2: ${media1}`)
console.log((3 * 2) ** 2)