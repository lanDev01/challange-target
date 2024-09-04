// 1) Observe o trecho de código abaixo: 
// int INDICE = 13, SOMA = 0, K = 0;

// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }

// Imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // Resultado é 91

////////////////

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
// sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
// pertence ou não a sequência.

function isFibonacci(num) {
  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  let a = 0, b = 1;
  let fib = a + b;

  while (fib <= num) {
    if (fib === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    a = b;
    b = fib;
    fib = a + b;
  }

  return `O número ${num} não pertence à sequência de Fibonacci.`;
}

const resultado = isFibonacci(21); // pertence a sequência de Fibonacci
// const resultado = isFibonacci(96); // não pertence a sequência de Fibonacci
console.log(resultado);

//////////