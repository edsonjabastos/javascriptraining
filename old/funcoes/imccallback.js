/* IMC CHALLENGE
Requisitos:(Contruir!)
IMC = peso / altura²
deve retornar um único número
deve gerar um erro se receber um parâmetro não número
deve retornar erro caso não receba parâmetro
Requisitos:(Classificar!)
deve receber um número (IMC)
deve retornar um string
deve gerar um erro se receber um parâmetro não número
deve retornar erro caso não receba parâmetro
Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2
*/
function calcularIMC(weight, height, callback) {
    if (weight === undefined || height === undefined) {
        throw Error("Need two numbers (parameters): weight and height!")
    }
    let imc = weight / (height * height)
    if (typeof callback === "function") {
        return callback(imc)
    }
    return imc
}
function classificaIMC(imc) {
    if (imc <= 16.9) {
        return "muito abaixo do peso."
    } else if(imc <= 18.4) {
        return "abaixo do peso."
    } else if (imc <= 24.9) {
        return "normal."
    } else if (imc <= 29.9) {
        return "acima do peso" 
    } else if (imc <= 34.9){
        return "Obesidade 1!"
    } else if (imc <= 40) {
        return "Obesidade 2!"
    } else {
        return "Obesidade 3!"
    }
}
let imc = calcularIMC(73, 1.92)
let imc2 = calcularIMC(73, 1.92, classificaIMC)
console.log(imc)
console.log(imc2)