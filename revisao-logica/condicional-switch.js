let diaSemana = 5
if (diaSemana === 0) {
    console.log("hoje é domingo.")
} else if (diaSemana === 1) {
    console.log("hoje é segunda-feira.")
} else if (diaSemana === 2) {
    console.log("hoje é terça-feira.")
} else if (diaSemana === 3) {
    console.log("hoje é quarta-feira.")
} else if (diaSemana === 4) {
    console.log("hoje é quinta-feira.")
} else if (diaSemana === 5) {
    console.log("hoje é sexta-feira.")
} else if (diaSemana === 6) {
    console.log("hoje é sábado.")
} else {
    console.log("hoje é --")
}

let dia = 3
switch (dia) {
    case 0:
        dia = "domingo"
        break
    case 1:
        dia = "segunda"
        break
    case 2:
        dia = "terça"
        break
    case 3:
        dia = "quarta"
        break
    case 4:
        dia = "quinta"
        break
    case 5:
        dia = "sexta"
        break
    case 6:
        dia = "sábado"
        break
    default:
        dia = "--"
}
console.log(`hoje é dia ${dia}`)