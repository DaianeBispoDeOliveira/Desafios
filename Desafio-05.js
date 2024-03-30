/**Fibonacci: Escreva um algoritmo que receba um número e construa um array com a
sequência fibonacci do tamanho do numero informado:
Input : 6
Output : [1, 1, 2, 3, 5, 8] */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacciArray(n) {
  let fibArray = [];
  let t1 = 0, t2 = 1;

  fibArray.push(t2);

  for (let i = 2; i <= n; i++) {
    let nextTerm = t1 + t2;
    fibArray.push(nextTerm);
    t1 = t2;
    t2 = nextTerm;
  }

  return fibArray;
}

rl.question('Digite quantos termos da sequência Fibonacci você deseja: ', (answer) => {
  const n = parseInt(answer);
  const result = fibonacciArray(n);
  console.log(result);
  rl.close();
});
