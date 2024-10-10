class Funcionario {
    constructor(id, nome, alocacao){
    this.id = id;
    this.nome = nome;
    this.alocacao = alocacao;
    }
    
    info(){
        console.log(`${this.id} ${this.nome} ${this.alocacao}`)
    }
    calcularSalario(){
        return `2000`
    }
}

class Gerente extends Funcionario {
      constructor( quantidadeDeSubordinados){
        this.quantidadeDeSubordinados = quantidadeDeSubordinados
    
    info() 
       console.log(`subordinados: ${quantidadeDeSubordinados}`)
    }
    calcularSalario(){
        return `2000 + 40%`};
}
const funcionario1 = new Funcionario ("nome: Luiz", "alocacao: Barrinha", "id: 1234");
funcionario1.info();
funcionario1.calcularSalario()

const gerente1 = new Gerente ("nome: Roberto", "alocacao: Vila rica", "subordinados: 6");
gerente1.info();
gerente1.calcularSalario()


