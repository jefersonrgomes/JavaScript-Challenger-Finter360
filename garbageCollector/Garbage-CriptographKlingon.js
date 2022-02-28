
//Texto Original Klingon em String
const textoOriginalKlingonString = txtA;
//Separando palavras em um array de Strings
const textoKlingonEmArray = textoOriginalKlingonString.split(' ');

//Array vazio para receber as frases ajustadas
let novoTextoKlingon = [];

console.log(`
TEXTO ORIGINAL SEM ALTERAÇÕES:
${textoKlingonEmArray}
`);

//recebe um Array de frase em String, o Alfabeto Comum, e o Alfabeto Antigo;
function CriptographKlingon(ArrayDefrases, alfaComun, alfaAntigo) {
  let novoArrayDeFrases = [];
  //Pega a frase da posição [i] do ArrayDeFrases
  for (let i = 0; i < ArrayDefrases.length; i++) {
    //Converte a frase em um Array de Caracteres
    let fraseArrayChar = ArrayDefrases[i].split('');
    //Checando posição de charactere e tipo;
    /* console.log(`Frase Original da posição ${i} = ${fraseArrayChar}`);
    console.log(
      `letra da Frase na posição ${i} = ${
        fraseArrayChar[i]
      } | Tipo da variavel: ${typeof fraseArrayChar[i]}`
    ); */
    fraseArrayChar = MudaAlfabeto(fraseArrayChar, alfaComun, alfaAntigo);
    /*  console.log(`Frase Transformada da posição ${i} = ${fraseArrayChar}`);
    console.log(
      `letra da Frase na posição ${i} = ${
        fraseArrayChar[i]
      } | Tipo da variavel: ${typeof fraseArrayChar[i]} \n`
    ); 
    */
    novoArrayDeFrases.push(fraseArrayChar.toString().replace(/,/g, ''));
  }

  novoArrayDeFrases = novoArrayDeFrases.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  function MudaAlfabeto(frase, alfaOriginal, alfaSubstituto) {
    for (let x = 0; x < frase.length; x++) {
      let f = frase[x].replace(/' '/g, '');

      for (let i = 0; i < alfaOriginal.length; i++) {
        if (f === alfaOriginal[i]) {
          frase[x] = alfaSubstituto[i];
        }
      }
    }
    return frase;
  }
  return novoArrayDeFrases.toString();
}
function DescriptographKlingon(ArrayDefrases, alfaComun, alfaAntigo) {
  let novoArrayDeFrases = [];
  //Pega a frase da posição [i] do ArrayDeFrases
  for (let i = 0; i < ArrayDefrases.length; i++) {
    //Converte a frase em um Array de Caracteres
    let fraseArrayChar = ArrayDefrases[i].split('');
    //Checando posição de charactere e tipo;
    /* console.log(`Frase Original da posição ${i} = ${fraseArrayChar}`);
    console.log(
      `letra da Frase na posição ${i} = ${
        fraseArrayChar[i]
      } | Tipo da variavel: ${typeof fraseArrayChar[i]}`
    ); 
    */
    fraseArrayChar = MudaAlfabetoInverso(fraseArrayChar, alfaComun, alfaAntigo);
    /*  console.log(`Frase Transformada da posição ${i} = ${fraseArrayChar}`);
    console.log(
      `letra da Frase na posição ${i} = ${
        fraseArrayChar[i]
      } | Tipo da variavel: ${typeof fraseArrayChar[i]} \n`
    ); */
    novoArrayDeFrases.push(fraseArrayChar.toString().replace(/,/g, ''));
  }

  function MudaAlfabetoInverso(frase, alfaOriginal, alfaSubstituto) {
    for (let x = 0; x < frase.length; x++) {
      let f = frase[x].replace(/' '/g, '');
      //prmeira posição = a
      for (let i = 0; i < alfaOriginal.length; i++) {
        if (f === alfaSubstituto[i]) {
          frase[x] = alfaOriginal[i];
        }
      }
    }
    return frase;
  }
  return novoArrayDeFrases.toString();
}

let teste;

teste = CriptographKlingon(textoKlingonEmArray, alfabetoKlingon, alfabetoComum);

console.log(`
TEXTO KLINGON CRIPTOGRAFADO:
${teste}
`);

let testeRetorno;

testeRetorno = DescriptographKlingon(
  teste.split(','),
  alfabetoKlingon,
  alfabetoComum
);

console.log(`
TEXTO KLINGON DESCRIPTOGRAFADO:
${testeRetorno}
`);

console.log(`

Tamanho array original: ${testeRetorno.length}
`);

function ValidandoIgualdadeTextos(textoOriginal, textoConvertido) {
  if (textoOriginal.length === textoConvertido.length) {
    for (let i = 0; i < textoOriginal.length; i++) {
      if (textoOriginal[i] === textoConvertido[i]) {
        console.log(`Valor da posição ${[i]} = verdadeiro = 
        Texto Original: ${textoOriginal[i]}| Texto Convertido ${
          textoConvertido[i]
        }`);
      } else console.log('false');
    }
  } else return false;
}
ValidandoIgualdadeTextos(txtC, testeRetorno);


//convertendo letraK em numeroK
/*
    pegar o tamanho do array da frase convertida em numeral 

    ex. valor do tamanho = 5
    numero posição 4 letra * 80000 | position * ((tamanhoArray - posicaoArray) * (10 ^ (tamanhoArray - posicaoArray))
    numero posição 3 letra * 6000
    numero posição 2 * 400
    numero posição 1 * 20
    numero posição 0

      5-1 = 4
      4*2
      multiplo de 2
      multiplo de 12    
    somar todas posições do array e atribuir valor a um novoarray.push());
    
    v | 12 |  position * ((tamanhoArray - posicaoArray) * (10 ^ (tamanhoArray - posicaoArray))
    w | 2  |
    v | 12 |  
      
  //                       base, tam-1 * 
  //   valor da letra | * | (10^tam-1) * (tam-1*2)
  //           v = 12 | * |    100     *   4 
  //           w = 2  | * |    10      *   2
  */
/*
    Ou seja, a primeira posição é a unidade, 
    a segunda posição vale 20, 
    a terceira vale 400, e assim por diante. 
  */

// v w v tem o valor numérico de 4852.
//                    base, tam-1 *
// valor da letra | * | (10^tam-1) * (tam-1*2)
//       v = 12 | * |    100     *   4
//       w = 2  | * |    10      *   2
//       v = 12 | * |    1       *   1
//v+w+v = 4852
//(taman -1) * 2
