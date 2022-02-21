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

function namorada() {
  setTimeout(() => {
    console.log("N: Pedir silêncio");
    console.log("N: Apagar as luzes");
    console.log("N: Surpresa");
  }, 2000);
}

// obterResposta("que treta").then(console.log);
