function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById('txt-ano');
  var res = document.querySelector('div#res');

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fSex = document.getElementsByName('rad-sex');
    var idade = ano - Number(formAno.value);
    var gen = '';
    var img = document.createElement('img'); // cria um elemento img, mesmo sem ter no HTML

    img.setAttribute('id', 'foto'); // define um ID para o elemento img

    if (fSex[0].checked) {
      gen = 'Homem';
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'foto-bebe-m.png');
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'foto-jovem-m.png');
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-m.png');
      } else {
        // Idoso
        img.setAttribute('src', 'foto-idoso-m.png');
      }
    } else if (fSex[1].checked) {
      gen = 'Mulher';
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'foto-bebe-f.png');
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'foto-jovem-f.png');
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-f.png');
      } else {
        // Idoso
        img.setAttribute('src', 'foto-idoso-f.png');
      }
    }

    res.style.textAlign = 'center';
    /* centraliza o texto pelo JS ao invés do CSS,
    mas neste caso somente quando clica no botão */
    res.innerHTML = `Detetamos ${gen} com ${idade} anos.`;
    res.appendChild(img);
  }
}
