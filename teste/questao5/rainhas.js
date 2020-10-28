/*Questão 5: Dado um número inteiro N, retorne o número de possíveis configurações de um tabuleiro N x N de xadrez de maneira que seja possível colocar N rainhas (a peça de xadrez) de forma que nenhuma ameace a outra.
 
OBS.: nenhuma outra peça está contida no tabuleiro
OBS.: printar as possíveis configurações do tabuleiro não é obrigatório, mas será bem rainhas visto.
 
Ex.: Input = 6
Output = 4
Casos:
  [[".Q....",
    "...Q..",
    ".....Q",
    "Q.....",
    "..Q...",
    "....Q."],
  ["..Q...",
   ".....Q",
   ".Q....",
   "....Q.",
   "Q.....",
   "...Q.."],
  ["...Q..",
   "Q.....",
   "....Q.",
   ".Q....",
   ".....Q",
   "..Q..."],
  ["....Q.",
   "..Q...",
   "Q.....",
   ".....Q",
   "...Q..",
   ".Q...."]]
*/

function tabuleiro(numero) {
  const rainha = "Q";
  const preencher = ".";
  const array = [];
  for (let i = 0; i < numero; i++) {
    const linha = [];
    for (let j = 1; j < numero; j++) {
      linha.push(preencher);
    }
    linha.push(rainha)
    array.push(linha);
  }
  return array;
}

console.log(tabuleiro(6));
