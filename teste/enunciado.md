# Enunciado

Abaixo você pode verificar as perguntas do teste técnico.

Para **CADA** uma das questões no enunciado crie um pasta com o nome da seguinte maneira:

> Questão X: ...

> crie a pasta questaoX

> coloque sua solução dentro dela

**Só serão aceitas soluções em JavaScript.**
Não use pacotes prontos que façam o trabalho por você, crie suas próprias soluções.

## Questões

Questão 1: Escreva as expressões regulares necessárias para validar as seguintes expressões:

a - Email (com até dois elementos após o @, sem contar o *.com*, ex.: nome@elem1.elem2.com)

b - Número de celular (qualquer formato, contato que seja um número de celular brasileiro)

Questão 2: Dada uma árvore binária, retorne todos os caminhos possíveis entre a raíz e as folhas.

    OBS.: você pode usar um pacote com árvores binárias prontas para testar, mas não em sua solução.

	Ex.: Árvore = [1,2,3,null,5]
        1
	      /   \
	     2     3
	      \
	       5
	       
       Output = [[1,2,5], [1,3]]
       
Questão 3: Dado um array de inteiros e um valor "target" inteiro, retorne o menor subarray cuja soma resulte no valor target.

	Ex.: array = [1,9,5,6,2,8] ; target = 11
	Output = [5,6]
	
Questão 4: Dado quatro arrays de inteiros (X, Y, Z, W), de mesmo tamanho, calcule o número de arrays da forma [i, j, k, l] onde X[i] + Y[j] + Z[k] + W[l] = 1.

	Ex.: X = [2,1]
	     Y = [-1,0]
	     Z = [3,4]
	     W = [5,6]
	Output = 2
	
Questão 5: Dado um número inteiro N, retorne o número de possíveis configurações de um tabuleiro N x N de xadrez de maneira que seja possível colocar N rainhas (a peça de xadrez) de forma que nenhuma ameace a outra.

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
		
