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

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Dados de faturamento por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Dados de faturamento diário
const faturamentoDiarioTotal = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 }
];

// Calcula o faturamento total mensal
const faturamentoTotal = faturamentoDiarioTotal.reduce((acc, item) => acc + item.valor, 0);

// Calcula a porcentagem de cada estado em relação ao faturamento total
const porcentagensEstados = {};
for (const estado in faturamentoEstados) {
  porcentagensEstados[estado] = ((faturamentoEstados[estado] / faturamentoTotal) * 100).toFixed(2) + '%';
}

// Exibe o faturamento total e a porcentagem de cada estado
console.log("Faturamento Total Mensal: R$", faturamentoTotal.toFixed(2));
for (const estado in porcentagensEstados) {
  console.log(`Porcentagem do faturamento de ${estado}: ${porcentagensEstados[estado]}`);
}

function inverterString(str) {
  let resultado = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  
  return resultado;
}

const entrada = "String";
console.log(inverterString(entrada)); // "gnirtS"
