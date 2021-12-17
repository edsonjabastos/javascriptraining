// Uma função pura é uma fução em que o valor
// de retorno é determiinado APENAS por seus valores
// de entrada, semm efeitos colaterais observávei

let qtdeExecucoes = 0;

function somar(a, b) {
  qtdeExecucoes++;
  return a + b;
}
console.log(qtdeExecucoes);
console.log(somar(10, 10));
console.log(somar(10, 10));
console.log(somar(10, 10));
console.log(somar(10, 10));
console.log(somar(10, 10));
console.log(somar(10, 10));
console.log(qtdeExecucoes);
