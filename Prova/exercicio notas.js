n1 = parseInt(prompt("Digite a primeira nota (de 0 a 10)")); /* parseInt - significa que tudo que esta dentro do prompt em número inteiro */
n2 = parseInt(prompt("Digite a segunda nota (de 0 a 10)"));
n3 = parseInt(prompt("Digite a terceira nota (de 0 a 10)"));

media = (n1 + n2 + n3) / 3



if (media >= 7) {
    console.log("O aluno foi aprovado!!")}
else{
    console.log("O aluno foi reprovado!!")
}
