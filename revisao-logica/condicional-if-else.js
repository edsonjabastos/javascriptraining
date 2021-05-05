//let v1 = 2
//let v2 = 10
//let v3 = 20
//let media0 = (v1 + v2 + v3) / 3
//let media1 = (v1 + v2) / 2
//console.log(`media entre v1, v2 ,v3: ${media0}`)
//console.log(`media entre v1 e v2: ${media1}`)
//console.log((3 * 2) ** 2)
// console.log(`Pode viajar: ${podeViajar}`)
let comprouBilhete = true ? `Bilhete validado!` : `Sem bilhete, sem viagem!`
console.log(comprouBilhete)
let idade = 0                    // OPERADORES TERNÁRIOS \/ /\
let msgMaiorIdade = (idade >= 18) ? `É maior de idade.` : `É menor de idade.`
console.log(msgMaiorIdade)
let paisPresentes = true
    if ((idade < 18) && paisPresentes == true) {
        console.log(`Acompanhado do pais!`)
    } else {
        paisPresentes != true
        console.log(`Necessita ampanhamento!`)
    }
    const podeViajar = ((idade >= 18 || paisPresentes) && comprouBilhete) ? "Pode viajar." : "Não pode viajar."
    console.log(podeViajar)
//if (podeViajar == true) {
//    console.log(`Pode viajar ${podeViajar}`)
//} else {
//    podeViajar == false
//    console.log(`Não pode viajar`)
//}
//
//idade = 15
//comprouBilhete = true
//paisPresentes = true
//msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade"
//if (!comprouBilhete && (idade >= 18)) {
//        console.log(`Não comprou o bilhete`)
//    } else {
//        console.log(msgMaiorIdade)
//        }
//if (idade >= 18) {
//    msgMaiorIdade = "É maior de idade"
//    console.log(msgMaiorIdade)
//} else {
//    msgMaiorIdade = "É menor de idade"
//    console.log(msgMaiorIdade)
//}
//if (!comprouBilhete) {
//    console.log(`Não comprou o blihete`)
//} else {
//    if (idade >= 18) {
//        console.log(`É menor de idade`)
//    } else {
//        console.log(`É menor de idade!`)
//    }
//}
//v1 = 6
//v2 = 0
//media = (v1 + v2) / 2
//console.log(`media: ${media}`)
//if (v1 === 0 || v2 === 0) {
//    console.log(`Reprovado!`)
//} else if (media < 7) {
//    console.log(`Reprovador. Mas há como recuperar.`)
//} else {
//    console.log(`Aprovado!`)
//}
//console.log(`saiu do bloco if`)