function controle() {
  //  window.alert("testando java script")



  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');
  let num3 = document.getElementById('num3');
  let num4 = document.getElementById('num4');
  dataAtual = new Date();

  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth() + 1;
  let ano = dataAtual.getFullYear();
  let horas = dataAtual.getHours();
  let minutos = dataAtual.getMinutes();
  let horas_minutos = `${horas}:${minutos}`
  let DiaAtual = (`0${dia}/0${mes}/${ano}`);



  //let horario = (`Sua primeira entrada foi as ${num1.value} sua Saida foi as ${num2.value} sua entrada do almoço foi ${num3.value}`)

  //  var horario = document.querySelector('div#horario')

  console.log(num1.value, num2.value, num3.value)


  if (num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 00) {
    window.alert("Informe um Horario Valido");
  }



  console.log(` dia atual ${DiaAtual}`);



  /*
    horario.innerHTML += (`<p>${DiaAtual}  Horario Entrada <b><u>${num1.value}</u></p></b>
    <p> ${DiaAtual} Horario Saida <b><u>${num2.value}</b></u> </p>
    <p> ${DiaAtual} Horario Entrada <b><u> ${num3.value}</b></u></p>
    <p> ${DiaAtual} Horario Saida <b><u>${num4.value}</b></u></p>`); 
  if (num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0) {
    continue;
  } else {*/
  DtHoje.innerHTML = (`${DiaAtual}`);
  TbNum1.innerHTML = (`${num1.value}`);
  TbNum2.innerHTML = (`${num2.value}`);
  TbNum3.innerHTML = (`${num3.value}`);

  if (num1.value.length > 1 && num2.value.length > 1 && num3.value.length > 1) {
  }




}







