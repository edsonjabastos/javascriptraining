let v1 = 2
let v2 = 10
let v3 = 20
let media0 = (v1 + v2 + v3) / 3
let media1 = (v1 + v2) / 2
console.log(`media entre v1, v2 ,v3: ${media0}`)
console.log(`media entre v1 e v2: ${media1}`)
console.log((3 * 2) ** 2)
let idade = 17
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar}`)
if (!comprouBilhete) {
    console.log(`Não comprou o blihete`)
} else {
    if (idade >= 18) {
        console.log(`É menor de idade`)
    } else {
        console.log(`É menor de idade!`)
    }
}
