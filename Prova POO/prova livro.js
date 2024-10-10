class Emprestimo {
    constructor( livro, pessoa) {
        this.livro = livro
        this.pessoa = pessoa
    };

    exibirInformacoes() {
        console.log(`nome do livro: ${this.livro}, nome da pessoa: ${this.pessoa}`);
      }
    }
    
    // Exemplo de uso
    const emprestimo1 = new Emprestimo("Todas as suas imperfeicoes",  "Lisa");
    emprestimo1.exibirInformacoes(); // 
    
    const emprestimo2 = new Emprestimo("36 coisas que fizeram eu me apaixonar por voce" , "Pedro");
    emprestimo2.exibirInformacoes(); // 
    
  
  
    