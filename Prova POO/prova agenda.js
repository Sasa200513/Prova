class Agenda{
    constructor(nome, contato) {
        this.nome = nome
        this.contato = contato
    }
    exibirInformacoes(){
        console.log(`nome da pessoa: ${this.nome}, numero de contato: ${this.contato}`)
    }
}

const agenda1 = new Agenda("Joao",  "988652108");
    agenda1.exibirInformacoes(); // 
    
    const agenda2 = new Agenda("Juninho" , "126509370");
    agenda2.exibirInformacoes(); // 
    
  
  