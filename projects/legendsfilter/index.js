const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "legendas");

const simbolos = [
  ".",
  "?",
  "!",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

const palavrasMaisUsadas = fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom(".srt"),
  fn.lerArquivos,
  fn.mesclarElementos,
  fn.separarTextoPor("\n"),
  fn.removerElementosSeVazio,
  fn.removerElementosSeIncluir("-->"),
  fn.removerElementosSeApenasNumero,
  fn.removerSimbolos(simbolos),
  fn.mesclarElementos,
  fn.separarTextoPor(" "),
  fn.removerElementosSeVazio,
  fn.removerElementosSeApenasNumero,
  fn.agruparElementos,
  fn.ordernarPorAtributoNumerico("qtd", "desc")
);

palavrasMaisUsadas(caminho).then(console.log)

// fn.lerDiretorio(caminho)
//   .then(fn.elementosTerminadosCom(".srt"))
//   .then(fn.lerArquivos)
//   .then(fn.mesclarElementos)
//   .then(fn.separarTextoPor("\n"))
//   .then(fn.removerElementosSeVazio)
//   .then(fn.removerElementosSeIncluir("-->"))
//   .then(fn.removerElementosSeApenasNumero)
//   .then(fn.removerSimbolos(simbolos))
//   .then(fn.mesclarElementos)
//   .then(fn.separarTextoPor(" "))
//   .then(fn.removerElementosSeVazio)
//   .then(fn.removerElementosSeApenasNumero)
//   .then(fn.agruparElementos)
//   .then(fn.ordernarPorAtributoNumerico("qtd", "desc"))
//   .then(console.log);
