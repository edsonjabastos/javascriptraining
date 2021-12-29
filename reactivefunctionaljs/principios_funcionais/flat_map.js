const letrasAninhadas = [
  ["o", ["l"], "á"],
  [" "],
  ["m", "u", ["n", ["d"]], "o"],
  [" "],
  ["!", "?", "!", "?", "!"],
];

const letras = letrasAninhadas.flat(Infinity);

console.log(letrasAninhadas, letras);

const resultado = letras
    .flatMap((l) => [l, ','])
    .reduce((a, b) => a + b);

console.log(resultado);
