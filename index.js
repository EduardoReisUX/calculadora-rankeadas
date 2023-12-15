'use strict';

const ranks_disponiveis = {
  10: "Ferro",
  20: "Bronze",
  50: "Prata",
  80: "Ouro",
  90: "Diamante",
  100: "Lendário",
}

/**
 *
 * @param {number} vitorias número de vitórias 
 * @param {number} derrotas número de derrotas
 * @returns {string}
 */
function calcularRank(vitorias, derrotas) {
  if (typeof vitorias !== 'number' || typeof derrotas !== 'number') {
    return 'Os parâmetros vitorias ou derrotas não são números'
  }

  const saldoVitorias = vitorias - derrotas

  for (const rank in ranks_disponiveis) {
    if (saldoVitorias < rank)
      return ranks_disponiveis[rank]
  }

  return "Imortal"
}

/**
 *
 * @param saldoVitorias {string}
 * @param nivel {string} Nível do herói
 * @returns {string}
 */
function exibir(saldoVitorias, nivel) {
  return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

let nome = 'fulano';
let vitorias = 103;
let derrotas = 1;

let nivel = calcularRank(vitorias, derrotas);
console.log(exibir(nome, nivel));
