/**Ordenação de Números Pares e Ímpares: Escreva um algoritmo para ordenar os números de uma lista, colocando os números pares primeiro e os ímpares depois.
Input: [3, 1, 2, 4, 6, 5]
Output: [2, 4, 6, 3, 1, 5] */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ordenarParesImpares(lista) {
    const pares = [];
    const impares = [];
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            pares.push(lista[i]);
        } else {
            impares.push(lista[i]);
        }
    }
    
    return pares.concat(impares);
}

rl.question('Digite os números: ', (input) => {
    const lista = input.trim().split(' ').map(Number);
    const resultado = ordenarParesImpares(lista);
    console.log('Lista ordenada:', resultado);
    rl.close();
});
