/*Questão 2: Dada uma árvore binária, retorne todos os caminhos possíveis entre a raíz e as folhas.

    OBS.: você pode usar um pacote com árvores binárias prontas para testar, mas não em sua solução.

	Ex.: Árvore = [1,2,3,null,5]
        1
	      /   \
	     2     3
	      \
	       5
	       
       Output = [[1,2,5], [1,3]]
*/

class ArvoreBinaria {
  constructor() {
    this.raiz = null;
    this.esq = [];
    this.dir = [];
  }

  arrayEsquerdo(valor) {
    this.esq.push(valor);
  }

  arrayDireito(valor) {
    this.dir.push(valor);
  }

  arrayArvore() {
    const arvore = [];
    arvore.push(this.esq);
    arvore.push(this.dir);
    console.log(arvore);
  }

  inserir(value) {
    if (this.raiz == null) {
      this.raiz = value;
      this.arrayEsquerdo(this.raiz);
      this.arrayDireito(this.raiz);
    } else {
      while (true) {
        if (value <= this.raiz) {
          this.arrayEsquerdo(value);
          return;
        } else {
          this.arrayDireito(value);
          return;
        }
      }
    }
  }

  exibirArvore() {
    console.log(this.esq);
    console.log(this.dir);
  }
}

a = new ArvoreBinaria();
a.arrayEsquerdo(1);
a.arrayEsquerdo(2);
a.arrayEsquerdo(5);
a.arrayDireito(1);
a.arrayDireito(3);
a.arrayArvore();
