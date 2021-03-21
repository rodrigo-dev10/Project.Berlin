function Registro03() {

    const ConfirmacaoNum03 = confirm('Deseja Registrar o Ponto?');


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
    console.log(ConfirmacaoNum03);
    console.log(num3.value);
    console.log(`dia de hoje é ${DiaAtual}`);



    if (ConfirmacaoNum03 == true) {
        document.getElementById('num3').value = (horas_minutos);   
    }

}


/* resetar formulario
  <form>
                <input type="reset" value="Limpar" id="reset">
            </form>
*/