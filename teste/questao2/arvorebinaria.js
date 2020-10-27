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

class No {
  constructor(valor, esquerda, direita) {
    this.valor = valor;
    this.esquerda = esquerda;
    this.direita = direita;
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = new No(null, null, null);
    this.raiz = null;
  }

  setEsquerda(valor) {
   // const arvore = [];
    this.esquerda = valor;
   // arvore.push(this.esquerda);
    //if (valor) {
      //valor.esquerda = this;
   // }
  }

  setDireita(valor) {
    this.direita = valor;
  }

  getEsquerda() {
    return this.arvore;
  }

  getDireita() {
    return this.direita;
  }

  inserir(value) {
    let novo = new No(value, null, null);
    if (this.raiz == null) {
      this.raiz = novo;
    } else {
      let atual = this.raiz;
      while (true) {
        let anterior = atual;
        if (value <= atual.valor) {
          atual = atual.esquerda;
          this.setEsquerda(atual);
          if (atual == null) {
            anterior.esquerda = novo;
            this.setEsquerda(anterior.esquerda);
            return;
          }
        } else {
          atual = atual.direita;
          this.setDireita(atual);
          if (atual == null) {
            anterior.direita = novo;
            this.setDireita(anterior.direita);
            return;
          }
        }
      }
    }
  }

  exibirArvore() {
    let valor = this.raiz;
    if (valor != null) {
      console.log(valor.esquerda);
      console.log(valor.valor);
      console.log(valor.direita);
    }
  }
}

a = new ArvoreBinaria();
a.inserir(8);
a.inserir(6);
a.inserir(9);
a.inserir(5);
a.inserir(4);
a.exibirArvore();
