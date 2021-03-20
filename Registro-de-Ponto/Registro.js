function Registro() {

    const ConfirmacaoNum1 = confirm('Deseja Registrar o Ponto?');


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
    console.log(ConfirmacaoNum1);
    console.log(num1.value);
    console.log(`dia de hoje é ${DiaAtual}`);



    Hoje.innerHTML += `Registrando ponto do dia: ${DiaAtual}`
   

    if (ConfirmacaoNum1 == true) {
        document.getElementById('num1').value = (horas_minutos); // Limpa o campo   
function
    } else if (ConfirmacaoNum1 == true) {
     document.getElementById('num2').value = (horas_minutos);
    } 
       else if (ConfirmacaoNum1 == true) {
        document.getElementById('num3').value = (horas_minutos);
    } 

    
}
/* else {

        document.getElementById('num1').value = '';
    }
*/
    // Limpa o campo

/*
    if (ConfirmacaoNum1 = true) {
        document.getElementById('num1').value = (horas_minutos); // Limpa o campo
        console.log(ConfirmacaoNum1)
    } else {
        document.getElementById('num1').value = '';
    }
*/

/*
if(hora >= 0 && hora <= 12){
    img.src = 'foto-manha.jpg'
    document.body.style.background ='#green'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'foto-tarde.jpg'
    document.body.style.background ='yellow'
} else{
    img.src = 'foto-noite.jpg'
    document.body.style.background ='#A62A2A'
}


*/
