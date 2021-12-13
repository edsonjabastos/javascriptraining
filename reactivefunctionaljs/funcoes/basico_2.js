function bomDia() {
    console.log('Bom Dia!!!')
}

const boaTarde = function(){
    console.log('Boa Tarde!!!')
}
// 1) Passar uma função como parametro para outra
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
executarQualquerCoisa(3)

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp){
        return Math.pow(base, exp)
    }
}

console.log(potencia(2)(8))

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)