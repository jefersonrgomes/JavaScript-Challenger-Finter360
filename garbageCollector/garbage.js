/*  
for (i = 0; i < texto2.length; i++) {
  const a = 'k b w r q d n f x j m l v h t c g z p s'.split(' ');
  const an = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20'.split(' ');
  let temp = texto2[i].split(' ');
  console.log('Original String: ' + temp);
  temp = Replaced(temp, an, a);
  //console.log('Replaced String: ' + temp);
  temp = _.replace(temp, /,/g, '');
  //console.log('Verifiando novoTexto: ' + temp + '\n');
  texto3.push(temp);
}
*/

/* console.log('Novo Texto tamanho: ' + novoTexto.length);
console.log('Antigo Texto tamanho: ' + antigoTexto.length);

.replace(/,/g, ''));
console.log('verifiando novoTexto: ' + novoTexto);
console.log('Original String: ' + temp);
console.log('replaced String: ' + Replaced(temp, a, an));
console.log('reconvertString: ' + Replaced(temp, an, a) + '\n');

temp = temp.toString();
console.log('teste: ' + temp.split(',')); 

novoTexto = novoTexto.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
*/



function CriptographKlingon(textArray, alfabetKlingon, numberReplace, type) {
  for (let x = 0; x < textArray.length; x++) {
    let i = 0;
    while (i < 20) {
      //val[x] = val[x].replace(org[i], rep[i]);
      if (type === 1) {
        if (textArray[x] === alfabetKlingon[i]) textArray[x] = numberReplace[i];
        textArray[i] = parseInt(textArray[i], 10);
      } else if (type === 2) {
        if (textArray[x] === numberReplace[i]) textArray[x] = alfabetKlingon[i];
        textArray[i] = toString(textArray[i]);
      }
      i++;
    }
  }
  return textArray;
}
