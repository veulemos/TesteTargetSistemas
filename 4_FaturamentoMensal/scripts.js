/** 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule 
o percentual de representação que cada estado teve dentro 
do valor total mensal da distribuidora. */

/** 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

//Este programa vai pegar os dados do arquivo Json sem utilizar o servidor
//vai fazer o parse Json para o objeto
const fs = require('fs');
const objData = fs.readFileSync('./package.json', 'utf-8');
console.log(typeof objData);
console.log(objData);
const obj = JSON.parse(objData);
//console.log(typeof obj);
//console.log(obj);

//ter somente um objeto de valores
var valores =[...new Set(obj.map(faturamento => faturamento.valor))];
//console.log(valores);
//console.log(typeof valores);
//console.log("");

//ter somente os estados
var estados =[...new Set(obj.map(sigla => sigla.estado))];
//console.log(estados);
//console.log(typeof estados);
//console.log("");

//calcular os valores percentuais
function total(arr) {
  var soma = 0;
  for(var i = 0; i < valores.length; i++){
  soma = soma + valores[i];
  }
  return soma;
}
var resultSoma = total(valores);
  //console.log(total(resultSoma));
//console.log("");

function percentual(arr, rs) {
  var percent = new Array();
  var p;
  for(var i = 0; i < arr.length; i++){ 
    p = Math.floor((arr[i]/rs)*100);
    percent.push(p);
  }
  return percent;
}

const p = percentual(valores, resultSoma);

//Apresentação do percentual
console.log("Percentual de representação de cada estado:");
function percentualEstados (p, e){
  for (let i = 0; i < p.length; i++) {
    console.log("O percentual de " + e[i] + " é de : " + p[i] +"%");
  }
}
percentualEstados(p, estados);
