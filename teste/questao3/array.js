/*Questão 3: Dado um array de inteiros e um valor "target" inteiro, retorne o menor subarray cuja soma resulte no valor target.
 
Ex.: array = [1,9,5,6,2,8] ; target = 11
Output = [5,6]
*/

function soma(array, valor) {
  var total = 0;
  var lista = [];
  var aux;
  var ini = 0;
  var fim = array.length;
  for (var i = 0; i < array.length; i++) {
    var meio = parseInt((ini + fim) / 2);
    aux = array[i];
    total = array[meio] + aux;

    if (total == valor) {
      lista.push(aux);
      lista.push(array[meio]);
      return lista;
    } else if (ini <= array.length) {
      ini = meio + 1;
      aux = array[i + 1];
    }
    if (fim <= array.length) {
      fim = meio - 1;
      aux = array[i + 1];
    }
  }
  return lista;
}

const array = [1, 9, 5, 6, 2, 8];
console.log(soma(array, 11));
