function Entrar() {
    let user = document.querySelector('#usuario').value;
    let senha = document.querySelector('#password').value;

    if (user == 'rodrigo.santos' && senha == 'qwe123') {
        alert('Senha bem vindo');
       open('file:///C:/Repositorio/Registro-de-Ponto/Html/Controle_de_Ponto.html');
    }


    else {
        alert('Senha Invalida')
    }
}
