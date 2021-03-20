function Registro01() {

    const ConfirmacaoNum01 = confirm('Deseja Registrar o Ponto?');



    dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();
    let horas = ('0' + dataAtual.getHours()).substr(-2);
    let minutos = ('0' + dataAtual.getMinutes()).substr(-2);
    let horas_minutos = (`${horas}:${minutos}`);
    let DiaAtual = (`${dia}/${mes}/${ano}`);
    console.log(`${dia}        ${mes}               ${ano}`);




    console.log(horas_minutos);
    console.log(ConfirmacaoNum01);
    console.log(num1.value);
    console.log(`dia de hoje é ${DiaAtual}`);


    Hoje.innerHTML += `Registrando ponto: ${DiaAtual}`
    if (ConfirmacaoNum01 == true) {
        document.getElementById('num1').value = (horas_minutos);   
    }

}
