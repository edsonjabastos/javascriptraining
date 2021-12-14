const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
  .then((arquivos) => fn.elementosTerminadosCom(arquivos, ".srt"))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(conteudos => conteudos.join('\n'))
  .then(todConteudo => todConteudo.split('\n'))
  .then(linhas => fn.removerSeVazio(linhas))
  .then(linhas => fn.removerSeIncluir(linhas, '-->'))
  .then(console.log);
