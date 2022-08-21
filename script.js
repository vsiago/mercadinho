let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');


function bemVindo(nome, idade){
    console.log(`Bem-vindo, ${nome}. Você tem ${idade} anos, parabéns!`);
};

console.log(bemVindo(nome, idade));