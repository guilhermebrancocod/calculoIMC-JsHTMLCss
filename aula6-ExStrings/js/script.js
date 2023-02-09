const nome = prompt ('Digite seu nome completo: ');

document.body.innerHTML = `O seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome: ${nome.slice(1,2)}<br />`;
document.body.innerHTML += `Qual o primeiro índece da letra a no seu nome: ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra a no sei nome: ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split("")}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleLowerCase()}`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLocaleLowerCase()}`;


//console.log (nome);
//console.log (nome.length);
//console.log (nome.slice(1,2));
//console.log(nome.indexOf('a'));
//console.log(nome.lastIndexOf('a'));
//console.log(nome.split(""));
//console.log(nome.toLocaleLowerCase());
//console.log(nome.toLocaleUpperCase());



