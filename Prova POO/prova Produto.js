class Produto {
    constructor(nome, preco,categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria
    }
    exibirInformacoes() {
        console.log(`nome ${this.nome}, preco: ${this.preco}, categoria: ${this.categoria}`);
      }
    }
    
    // Exemplo de uso
    const produto1 = new Produto("uva", "R$4,87" , "fruta");
    produto1.exibirInformacoes(); // 

    