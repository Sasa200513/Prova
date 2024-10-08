
var n = 200;

 function procurarNumeroPrimos(n) {

  var numerosPrimos = [];

  for (var i = 2; i < n; i++){  quantidadeDeDivisores = 0; 

     for(var b = 2; b < i; b++) { 
        if (i % b == 0) {
           quantidadeDeDivisores ++;
        }
     }

     if (quantidadeDeDivisores % i == 0) {
        numerosPrimos.push(i);
     }

  }

return numerosPrimos;
}
console.log(procurarNumeroPrimos(n))
