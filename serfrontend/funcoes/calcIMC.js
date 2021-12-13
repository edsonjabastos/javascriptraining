function calIMC(peso, altura) {
    if((typeof peso == 'string') || (typeof altura == 'string')) {
        console.log('peso e altura devem ser números')
    } else {
        return peso / altura
    }
}

console.log(calIMC(98, 1.93))