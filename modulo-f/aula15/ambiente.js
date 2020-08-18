let num = [5, 8, 2, 9, 3];

num.sort(); // ordena de forma crescente
num.push(1); // adiciona no final
console.log(num);
console.log(`O vetor tem ${num.length} posições`); // comprimento do vetor
console.log(`O quarto valor do vetor é ${num[3]}`); // [] posição começa em 0

// let pos = num.indexOf(8);
// console.log(`O valor 8 está na posição ${pos}`);

let pos = num.indexOf(4); // quando não existe o valor, retorna "-1"

// para corrigir retornando uma mensagem de inexistência:
if (pos == -1) {
  console.log('O valor não foi encontrado!');
} else {
  console.log(`O valor 8 está na posição ${pos}`);
}
