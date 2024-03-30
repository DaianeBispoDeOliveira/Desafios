/** Encontrar número não repetido: Escreva um algoritmo para encontrar um único número de um array onde cada número repete três vezes, exceto um:
Input: [5,3,4,3,5,5,3]
Output: 4 */

function localizar(nums) {
  
let count = {};
    
for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
    }

for (let num in count) {
    if (count[num] === 1) {
        return num;
        }
    }
}

let nums = [5, 3, 4, 3, 5, 5, 3];

console.log("Array de entrada:", nums);
console.log("Output:", localizar(nums));
