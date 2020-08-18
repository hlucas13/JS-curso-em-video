let valores = [8, 1, 7, 4, 2, 9];

console.log(valores);

// Percurso para exibição de vetores:
/*
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
*/

// pos < valores.length => valores.length = 6, mas as posições são de 0 a 5
// valores[0] = valores[pos] (iniciando em 0 no for) = 8
// valores[2] = valores[pos] (pos++ no for) = 7

// Simplificando no JS moderno:
for (let pos in valores) {
  // "for in" só funciona em arrays
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
