// Array e Objeto são objetos

// array []:
let num = [5, 8, 4]; // posições: 0, 1, 2

// objeto (POO) {}:
let amigo = {
  nome: 'José',
  sexo: 'M',
  peso: 85.4,
  engordar(p) {
    console.log('Engordou');
    this.peso += p;
  },
};
// objetos podem guardar valores (atributos) e funções (métodos)

amigo.engordar(2);

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
