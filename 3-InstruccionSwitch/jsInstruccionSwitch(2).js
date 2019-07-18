function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

	case "Julio":
	case "Agosto":

	mensaje=("Abrigate que hace frio");
	break;

	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":

	mensaje=("Falta para el invierno");
	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Enero":
	case "Febrero":

	mensaje=("Ya pasamos el frio, ahora el calor");

}



alert (mensaje);




}//FIN DE LA FUNCIÓN