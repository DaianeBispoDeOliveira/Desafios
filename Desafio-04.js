/**Escreva um algoritmo para calcular o fatorial de um número.
Input: 5
Output: 120 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFatorial(numero) {
    let resultado = 1;
    for (let fatorial = 1; fatorial <= numero; fatorial++) {
        resultado *= fatorial;
    }
    return resultado;
}

rl.question('Insira um número a ser fatorado: ', (input) => {
    const numero = parseInt(input);
    const fatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
    rl.close();
});
