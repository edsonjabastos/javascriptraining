// Uma função pura é uma fução em que o valor
// de retorno é determiinado APENAS por seus valores
// de entrada, semm efeitos colaterais observáveis

// const PI = 3.141592;

// a função abaixo é pura ou impura?
function areaCirc(raio) {
  return raio * raio * Math.PI; // estável
} // impura pois depende de um valor externo

console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))

//pura
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))
console.log(Math.PI)