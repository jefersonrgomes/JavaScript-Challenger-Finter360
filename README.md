# CHALLENGER FINTER360
![image](https://user-images.githubusercontent.com/10172471/156168216-9a88ecfd-6dc8-470b-8cd4-443ddc80e29c.png)

# Teste de lógica de programação - F360

📰 Arqueólogos encontraram um pergaminho com os seguintes textos:
 
  📜 Texto A: https://raw.githubusercontent.com/f360-dev/provas/master/klingon-textoA.txt
  </br>  
  📜 Texto B: https://raw.githubusercontent.com/f360-dev/provas/master/klingon-textoB.txt

## PREPOSIÇÕES KLINGON 

📰 Esses pergaminhos estão no antigo e misterioso idioma Klingon. Após muitos anos de estudo, os linguistas já conhecem algumas características desse idioma.

🔎 Primeiramente, as letras Klingon são classificadas em dois grupos: 
   [x] - Tipo foo: as letras s, l, f, w e k são chamadas "letras tipo foo", 
   [x] - Tipo bar: as demais são conhecidas como "letras tipo bar".

🔎 Os linguistas descobriram que as preposições em Klingon são 
- [x] São as palavras de 3 letras que 
- [x] Terminam numa letra tipo bar, 
- [x] Onde não ocorre a letra d. 
- [x] Portanto, é fácil ver que existem 63 preposições no Texto A.

### QUESTÃO 1 - Quantas preposições existem no Texto B, 
✔ Resposta: 57 </br>
✒ Nota: No arquivo verbosKlingon.js, </br>Execute a função DecifradorKinglon(txtA).TotalPreposicoesKinglon;

![image](https://user-images.githubusercontent.com/10172471/156169993-8f53b046-5a7a-4b15-85bb-6e6c5d498d67.png)

# 

## VERBOS KLINGON

📰 Um outro fato interessante descoberto pelos linguistas é que, no Klingon, os verbos sempre são palavras de 8 ou mais letras que terminam numa letra tipo foo. Além disso, se um verbo começa com uma letra tipo bar, o verbo está em primeira pessoa.

🔎 Assim, lendo o Texto A, é possível identificar 26 verbos no texto, dos quais 23 estão em primeira pessoa.
Já no Texto B, quantos são os verbos?, E quantos verbos do Texto B estão em primeira pessoa?

   [x] - os verbos sempre são palavras de 8 ou mais letras 
   [x] - Terminam numa letra tipo foo. 
   [x] - Se um verbo começa com uma letra tipo bar, o verbo está em primeira pessoa.
   [x] - Assim, lendo o Texto A, é possível identificar 26 verbos no texto, dos quais 23 estão em primeira pessoa -> Testado!

### QUESTÃO 2: Quantos verbos existem, e quantos são em primeira pessoa no Texto B. 
✔ Resposta: 30, 25 </br>
✒ Nota: No arquivo verbosKlingon.js, </br>Execute a função DecifradorKinglon(txtB).totalVerbosKlingon; </br>Execute a função DecifradorKinglon(txtB).totalVerbosKlingonPrimeiraPessoa;

![image](https://user-images.githubusercontent.com/10172471/156169993-8f53b046-5a7a-4b15-85bb-6e6c5d498d67.png)

#

## ORDEM ALFABETICA KLINGON

📰 Um professor universitário utilizará os textos A e B para ensinar o Klingon aos alunos. 
Para ajudar os alunos a compreender o texto, esse professor precisa criar uma lista de vocabulário para cada texto, isto é, uma lista ordenada (e sem repetições) das palavras que aparecem em cada um dos textos.

🔎 Assim, ao fazer essas listas, o professor deve respeitar a ordem alfabética Klingon.
O professor preparou a lista de vocabulário para o Texto A:
https://raw.githubusercontent.com/f360-dev/provas/master/klingon-textoA-ordenado.txt

- [x] Essas listas devem estar ordenadas e não podem conter repetições de palavras. 
- [x] No Klingon, assim como no nosso alfabeto, as palavras são ordenadas lexicograficamente, mas o problema é que no Klingon, 
- [x] a ordem das letras no alfabeto é diferente da nossa. O alfabeto Klingon, em ordem, é: 
kbwrqdnfxjmlvhtcgzps. 

### QUESTÃO 3 - Como seria a lista de vocabulário do Texto B?
✔ Resposta: Respondido na execução da função criptographKlingon </br>
✒ Nota: No arquivo criptographKlingon.js, </br>Execute a função DecifradorKinglon(txtB).totalVerbosKlingon; </br>Execute a função DecifradorKinglon(txtB).totalVerbosKlingonPrimeiraPessoa;

![image](https://user-images.githubusercontent.com/10172471/156170377-44114e83-3cc4-4529-81ae-1928812ca827.png)

# 

## NUMERAIS KLINGON

📰 Mas como os Klingon escrevem números?
Bem, no Klingon, as palavras também são números dados em base 20, 
Onde cada letra é um dígito, e os dígitos são ordenados do menos significativo para o mais significativo (o inverso do nosso sistema). 
Ou seja, a primeira posição é a unidade, a segunda posição vale 20, a terceira vale 400, e assim por diante. 

🔎 Os valores das letras são dados pela ordem em que elas aparecem no alfabeto Klingon (que é diferente da nossa ordem, como vimos acima).
Por exemplo, a palavra vwv tem o valor numérico de 4852.
OBS: os números nesse problema podem ser grandes, então se você está usando um tipo de dados de tamanho limitado, tenha cuidado com possíveis overflows.
Os Klingons consideram um número bonito se ele satisfaz essas duas propriedades:
- [x] Ou seja, a primeira letra do alfabeto Klingon representa o dígito 0, a segunda representa o dígito 1, e assim por diante.
- [x] é maior ou igual a 440566
- [x] é divisível por 3

🔎 Ao consideramos o Texto A como uma lista de números (isto é, interpretando cada palavra como um número usando a convenção explicada acima), 
- [x] Notamos que existem 126 números bonitos distintos.

### QUESTÃO 4 - Qquantos números bonitos distintos existem no Texto B,
✔ Resposta: Respondido na execução da função criptographKlingon </br>
✒ Nota: No arquivo numeraisKlingon3.js, </br>
console.log(totalNumerosBonitosKlingon.length);

![image](https://user-images.githubusercontent.com/10172471/156170558-c66c89be-4300-42b0-9081-27f7d3163c94.png)

#
