// Uma função pura é uma fução em que o valor
// de retorno é determiinado APENAS por seus valores
// de entrada, semm efeitos colaterais observáveis

// Função impura
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 60))
console.log(gerarNumeroAleatorio(1, 60))
console.log(gerarNumeroAleatorio(1, 60))
console.log(gerarNumeroAleatorio(1, 60))
console.log(gerarNumeroAleatorio(1, 60))
console.log(gerarNumeroAleatorio(1, 60))