function somaHora() {
var d1 = Date.parse("2:00", "hh:mm");
var d2 = Date.parse("10:00", "hh:mm").add({hour: d1.getHours(), minute: d1.getMinutes()});
var resultado = d2.toString("hh:mm");

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