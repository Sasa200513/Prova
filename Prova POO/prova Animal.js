class Animal {
    emitirSom() {
      console.log("Som de animal");
    }
  }
  
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Au Au");
    }
  }
  
  const meuCachorro = new Cachorro();
  meuCachorro.emitirSom(); // Saída: Latido
  

