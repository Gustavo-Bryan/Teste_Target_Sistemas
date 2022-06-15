// Exercício 1
// Observe o trecho de código abaixo:
// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}
console.log(soma); // Resposta do exercício 1: 91

// -------------------------------------------------------------------------
//Exercício 2
//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function seqFibonacci(numero) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= 100; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    if (fibonacci.includes(numero)) {
      console.log(`Sim, o Número ${numero} pertence a sequência de Fibonacci.`);
      break;
    } else if (fibonacci[fibonacci.length - 1] > numero) {
      console.log(
        `Não, o Número ${numero} NÃO pertence a sequência de Fibonacci.`
      );
      break;
    }
  }
}
seqFibonacci(35);
seqFibonacci(55);

// -------------------------------------------------------------------------
// Exercicio 3
// Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___ Resposta: 9
// b) 2, 4, 8, 16, 32, 64, ____ Resposta: 128
// c) 0, 1, 4, 9, 16, 25, 36, ____ Resposta: 49
// d) 4, 16, 36, 64, ____ Resposta: 100
// e) 1, 1, 2, 3, 5, 8, ____ Resposta: 13
// f) 2,10, 12, 16, 17, 18, 19, ____ Resposta: 200

// -------------------------------------------------------------------------
// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
// IMPORTANTE:
// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.
// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
// c) Explique como chegou no resultado.
// Resposta: Ambos estarão a mesma distância da cidade. Porque se eles vão se cruzar na rodovia, então estarão um ao lado do outro (em sentindo opostos, mas um ao lado do outro), logo será mesma distância de Ribeirão Preto.

// -------------------------------------------------------------------------
// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function reverterPalavra(palavra) {
  // let novaPalavra = palavra.split("").reverse().join("");
  // console.log(novaPalavra);
  // OU
  let newWord = "";
  let i = palavra.length - 1;
  for (; i >= 0; i--) {
    newWord += palavra[i];
  }
  console.log(
    `A palavra normal é: ${palavra}, e ela ao contrário fica: ${newWord}`
  );
}
reverterPalavra("carteira");
