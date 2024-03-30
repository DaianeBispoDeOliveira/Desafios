/**Verificação de Palíndromo: Escreva um algoritmo para verificar se uma string é um palíndromo.
Input: "arara"
Output: True */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarPalindromo(string) {
    let size = string.length;
    if (size === 0) {

    return false;
}
    for (let i = 0; i < size / 2; i++) {
        if (string[i] !== string[size - i - 1]) {
            
    return false;
        }
}
    
    return true;
}

rl.question("Digite uma string para verificar se é um palíndromo: ", function(string) {
    
    let output = verificarPalindromo(string);
    console.log(output);

    rl.close();
});


