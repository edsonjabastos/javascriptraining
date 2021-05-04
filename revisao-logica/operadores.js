// + (MAIS), - (MENOS), * (MULTIPLICAÇÃO), / (DIVISÃO),
// % (MOD OU RESTO DA DIVISÃO), ** (POTENCIAÇÃO)
let _10 = 10
let _20 = 20
let _5 = 5
_5 = _5 + 5
console.log(_5)
_5 = _5 - 5
console.log(_5)
_5 = _5 * 5
console.log(_5)
_5 = _5 / 5
console.log(_5)
_5 = _5 % 5
console.log(_5)
_5 = _5 ** 5
console.log(_5)
console.log(_10 + _20)
console.log(_10 - _20)
console.log(_10 * _20)
console.log(_10 / _20)
console.log(_10 % _20)
console.log(_10 ** _20)
// OPERADORES DE ATRIBUIÇÃO
let _11 = 10
_11 += 2
console.log(_11)
let _12 = 10
_12 -= 2
console.log(_12)
let _13 = 10
_13 %= 2
console.log(_13)
let _14 = 10
_14 *= 2
console.log(_14)
let _15 = 10
_15 /= 2
console.log(_15)
let _16 = 10
_16 **= 2
console.log(_16)
// INCREMENTO E DECREMENTO
let i = 0
i++
console.log(i)
i = 0
console.log(++i)
i = 0
console.log(--i)
i = 0
console.log(i++)
console.log(i)
i = 0
console.log(++i, --i, i++, i--)
console.log(i)
i = 0
--i
console.log(i)
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
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar}`)
v1 = 2
v2 = 10
v3 = 20
let media0 = (v1 + v2 + v3) / 3
let media1 = (v1 + v2) / 2
console.log(`media entre v1, v2 ,v3: ${media0}`)
console.log(`media entre v1 e v2: ${media1}`)
console.log((3 * 2) ** 2)