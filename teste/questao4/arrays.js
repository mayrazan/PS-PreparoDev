/*Questão 4: Dado quatro arrays de inteiros (X, Y, Z, W), de mesmo tamanho, calcule o número de arrays da forma [i, j, k, l] onde X[i] + Y[j] + Z[k] + W[l] = 1.
 
Ex.: X = [2,1]
    Y = [-1,0]
    Z = [3,4]
    W = [5,6]
Output = 2
*/

function calculaArrays(x, y, z, w) {
  var tamanhoX, tamanhoY, tamanhoZ, tamanhoW;
  for (let i = 0; i < x.length; i++) {
    tamanhoX = x.length;
  }
  for (let j = 0; j < y.length; j++) {
    tamanhoY = y.length;
  }
  for (let k = 0; k < z.length; k++) {
    tamanhoZ = z.length;
  }
  for (let l = 0; l < w.length; l++) {
    tamanhoW = w.length;
  }
  if (
    tamanhoX == tamanhoY &&
    tamanhoX == tamanhoZ &&
    tamanhoX == tamanhoW &&
    tamanhoY == tamanhoZ &&
    tamanhoY == tamanhoW &&
    tamanhoZ == tamanhoW
  ) {
    return (tamanhoX + tamanhoY + tamanhoZ + tamanhoW) / 4;
  } else {
    console.log("arrays de tamanhos diferentes");
  }
}

X = [2, 1];
Y = [-1, 0];
Z = [3, 4];
W = [5, 6];

console.log("Output = ", calculaArrays(X, Y, Z, W));
