/*let numeros = [];

while(true) {
    let numero = parseFloat(prompt('Digite um número'));
        break}
        
    if (isNaN(numero)){
        
    }
        
    if (!numeros.includes(numero)){ //includes: determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
        numeros.push(numero);
        console.log(`Lista atualizada: ${numero}`);
    } else {
        console.log(`O número ${numero} já está na lista!`);
    }

console.log(numeros)*/


let numeros = [];

while(true) {
    let numero = parseFloat(prompt('Digite um número'));

    if (isNaN(numero)){
        break
    }

    if (!numeros.includes(numero)){ //includes: determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
        numeros.push(numero);
        console.log(`Lista atualizada: ${numeros}`);
    } else {
        console.log(`O número ${numero} já está na lista!`);
    }
}
console.log(numeros)