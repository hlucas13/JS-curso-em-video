/*
5! = 5 * 4 * 3 * 2 * 1 = 120
5! = 5 * 4!

n! = n x (n-1)!
1! = 1
*/

// Maneira recursiva
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(5));
