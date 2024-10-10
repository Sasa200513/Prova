class Endereco {
    constructor(rua, numero) {
      this.rua = rua;
      this.numero = numero;
    }
  }
  
  class Pessoa {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco; 
    }
  
    
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Endereço: ${this.endereco.rua}, Número: ${this.endereco.numero}`);
    }
  }
  
  // Exemplo de uso
  const meuEndereco = new Endereco("Vila Rica", 1307);
  const pessoa = new Pessoa("Felipe", meuEndereco);
  pessoa.exibirInformacoes();
  