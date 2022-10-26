//const arrayString = ["banana", "mamao", "amora" ];
/* console.log("Tamanho do arrayString : ",arrayString.length, "posicoes");
console.log(arrayString);
console.log("Posicao 0 do arrayString: ",arrayString[0]);
console.log("Posicao 1 do arrayString: ",arrayString[1]);
console.log("Posicao 2 do arrayString: ",arrayString[2]);  */
//const variavelNormal = "banana, mamao, amora" <-- variavel normal, diferente de array
 /* console.log("-----------------------------------")

const arrayNumber = [7, 2, 4];
console.log("-----------------------------------")

const arraySortido = ["banana", 12 , true];
console.log("O item 12 do arraySortido existe ?",arraySortido.includes(12));
console.log("O item laranja do arraySortido existe ?",arraySortido.includes("laranja"));
console.log("-----------------------------------")

const arrayNum = [20];
console.log("O valor do arrayNum: ",arrayNum);
console.log("Length do arrayNum: ",arrayNum.length);
console.log("-----------------------------------")

const arrayVazio = [];
console.log("conteudo do arrayVazio: ",arrayVazio);
console.log("Tamanho do arrayVazio: ",arrayVazio.length);
console.log("-----------------------------------")

const nome = "Anderson";
console.log("length do nome: ",nome.length);
console.log("-----------------------------------") */ 

//const copiaArrayString = arrayString.slice();//<--- copia o array em questao
//copiaArrayString.push("novaString");
//console.log(copiaArrayString.pop()); <--- remove o ultimo elemento
//console.log("Copia arrayString: ",copiaArrayString);
//copiaArrayString.splice(1,3); // <---- a partir do indice 1 remove 3 itens

//arrayString.push("maca");
//console.log("Copia arrayString com splice: ",copiaArrayString);
//console.log("arrayString original: ",arrayString);
//copiaArrayString.sort();
/* console.log("copiaArrayString ordenado: ", copiaArrayString);
console.log("-----------------------------------")
const arrayNumber = [7, 2, 4];
console.log("arrayNumber original: ",arrayNumber);
arrayNumber.sort(); <---- ordena de forma numerica ou alfabetica o array
console.log("arrayNumber ordenado: ",arrayNumber); */

const novoArray = [1, 9, 5, 4, 2, 7];
const copiaNovoArray = novoArray.slice();
copiaNovoArray.pop();
copiaNovoArray.push(6);
copiaNovoArray.splice(2,1);
copiaNovoArray.sort();
console.log("Array original: ",novoArray);
console.log("Copia do array: ",copiaNovoArray, "ordenado");







