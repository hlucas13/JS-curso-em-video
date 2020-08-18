let num = document.querySelector('input#f-num');
let lista = document.querySelector('select#f-lista');
let res = document.querySelector('div#res');
let valores = [];

// Número entre 1 e 100
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

// Número na lista
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = '';
  } else {
    window.alert('Valor inválido ou já encontrado na lista.');
  }
  num.value = '';
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!');
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = (soma / total).toFixed(2);
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
  }
}
