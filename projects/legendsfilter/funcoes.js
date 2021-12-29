const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho).map((arquivo) => {
        return path.join(caminho, arquivo);
      });
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual));
  };
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      return simbolos.reduce((acumulador, simbolo) => {
        return acumulador.split(simbolo).join("");
      }, el);
      // let textoSemSimbolos = el;
      // simbolos.forEach((simbolo) => {
      //   textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      // });
      // return textoSemSimbolos;
    });
  };
}

function mesclarElementos(array) {
  return array.join(" ");
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acumulador, palavra) => {
      const el = palavra.toLowerCase();
      const qtd = acumulador[el] ? acumulador[el].qtd + 1 : 1;
      acumulador[el] = { elemento: el, qtd };
      return acumulador;
    }, {})
  );
}

function ordernarPorAtributoNumerico(atributo, ordem = "asc") {
  return function (array) {
    const asc = (obj1, obj2) => obj1[atributo] - obj2[atributo];
    const desc = (obj1, obj2) => obj2[atributo] - obj1[atributo];
    return [...array].sort(ordem === "asc" ? asc : desc);
  };
}

function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}

module.exports = {
  composicao,
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtributoNumerico,
};
