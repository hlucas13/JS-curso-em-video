function contar() {
  let ini = document.getElementById('txt-i');
  let fim = document.getElementById('txt-f');
  let passo = document.getElementById('txt-p');
  let res = document.getElementById('res');

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    // window.alert('[ERRO] Faltam dados!');
    res.innerHTML = 'Impossível contar!';
  } else {
    res.innerHTML = 'Contando: <br />';

    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      window.alert('Passo inválido! Considerando "Passo: 1"');
      p = 1;
    }

    if (i < f) {
      // contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      // contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }

    res.innerHTML += `\u{1F3C1}`; // emoji só entre ` `
  }
}
