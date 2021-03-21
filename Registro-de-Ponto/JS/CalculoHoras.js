function somaHora() {

	let numero01 = document.querySelector('#num1').value;
	let numero02 = document.querySelector('#num2').value;
	let numero03 = document.querySelector('#num3').value;
	
	console.log(`Numero01 ${numero01}`)

	let jornada = moment('08:00')

		let horas01 =(moment(numero01,'hh:mm'));
		let horas02 =(moment(numero02,'hh:mm'));
		let horas03 =(moment(numero03,'hh:mm'));
		let soma01 =(horas02.diff(horas01, 'minute'));
		//let soma02 = (horas03.diff(, 'minute'))


		//console.log(horas02.diff(horas01, 'hour'))
		console.log(horas02.diff(horas01, 'minute'))
		console.log(jornada)


		console.log(`as horas01 ${soma01}`);


	

	//console.log(moment());








}
/** * Soma duas horas. * Exemplo: 12:35 + 07:20 = 19:55. */
/*function somaHora(horaInicio, horaSomada)
{
	horaIni = horaInicio.split('10:30');
	horaSom = horaSomada.split('11:30');
	horasTotal = parseInt(horaIni[0], 10) + parseInt(horaSom[0], 10);
	minutosTotal = parseInt(horaIni[1], 10) + parseInt(horaSom[1], 10);

	console.log(`O calculo das horas são ${horasTotal}`);
	console.log(`O calculo das horas são ${minutosTotal}`);

	if(minutosTotal >= 60){
		minutosTotal -= 60; horasTotal += 1;
	}
	horaFinal = completaZeroEsquerda(horasTotal) + ":" + completaZeroEsquerda(minutosTotal);
	return horaFinal;
} */