
// Array de cores hex
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Pegando o nosso btn do click
const btn = document.getElementById('btn');

// Pegando o texto de cor
const color = document.querySelector('.color');


btn.addEventListener('click', function() {

  // hexColor variavel
  let hexColor = '#';

  // Criando um loop e gerando numeros aleatorios 6 vezes
  for(let i = 0; i < 6; i++) {

    // Pegando o valor do hex(array de hexadecimal) e usando a funcao de numeros aleatorios, depois adicionando o valor a nossa variavel de hexColor(valor final da cor em hexadicimal)
    hexColor += hex[GetRandomNumber()]
  }

  // Mudando o background color
  document.body.style.backgroundColor = hexColor;

  // Mundo o texto para o codigo da cor
  color.innerHTML = hexColor;

  // Mudando a cor do texto para a cor atual
  color.style.color = hexColor;


})

// gerando numero aleatorio
function GetRandomNumber() {
  
  return Math.floor(Math.random() * hex.length);

}
