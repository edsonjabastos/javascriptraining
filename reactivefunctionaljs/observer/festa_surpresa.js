const readline = require("readline");

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

obterResposta("que treta").then(console.log);
