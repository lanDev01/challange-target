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

const faturamentoDiario = [
  1200, 1800, 100, 3000, 2600, 6430, 3100, 321, 3200, 4000, 9014, 4500, 843, 4800, 6000,
  5000, 250, 6000, 7000, 4567, 7500, 8000, 9040, 9000, 9500, 1520, 10000, 1648, 11000
];

const faturamentoComUmZero = faturamentoDiario.filter((valor, index, array) => 
  valor === 0 ? array.indexOf(0) === index : true
);

// Filtra valores positivos para análise
const valoresFiltrados = faturamentoComUmZero.filter(valor => valor > 0);

// Calcula soma e média mensal dos valores filtrados
const somaFaturamento = valoresFiltrados.reduce((acc, valor) => acc + valor, 0);
const mediaMensal = somaFaturamento / valoresFiltrados.length;

// Calcula o menor e maior faturamento
const menorFaturamento = Math.min(...faturamentoComUmZero);
const maiorFaturamento = Math.max(...faturamentoComUmZero);

// Calcula o número de dias com faturamento acima da média mensal
const diasAcimaDaMedia = faturamentoComUmZero.reduce((acc, valor) => valor > mediaMensal ? acc + 1 : acc, 0);

console.log("Menor faturamento do mês: R$", menorFaturamento);
console.log("Maior faturamento do mês: R$", maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);

