const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = `${numero}`;
texto.innerHTML += `<p>Seu numero é ${numero}. </p>`;
texto.innerHTML += `<p>A raiz quadrada é ${Math.sqrt(numero)}. </p>`;
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando pra Baixo ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}. </p>`;

