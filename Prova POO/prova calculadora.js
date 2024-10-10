var numero1=parseFloat(prompt('Inserir um número'))
var numero2=parseFloat(prompt('Inserir um número'))
var operador=(prompt('Inserir um operador matemático (adição, subtração, multiplicação ou divisão)'))
var resultado=0;

if (operador=='+'){
    resultado=numero1+numero2
} else if (operador=='-'){
    resultado=numero1-numero2
} else if (operador=='*'){
    resultado=numero1*numero2
} else if (operador=='/'){
    resultado=numero1/numero2
}; 

document.write(`O resultado é: ${numero1} ${operador} ${numero2} = ${resultado}`)
if ((operador) = isNaN `*`) {
    console.log("operador invalido, tente novamente")
};
if((operador) = isNaN `/`) {
    console.log("operador invalido, tente novamente")
};
if((operador) = isNaN `-`) {
    console.log("operador invalido, tente novamente")
};
if((operador) = isNaN `+`) {
    console.log("operador invalido, tente novamente") 
}