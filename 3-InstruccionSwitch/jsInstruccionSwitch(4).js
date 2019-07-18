function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

	case"Febrero":
	mensaje="Tiene 28 dias";
	break;

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":

	mensaje="Tiene 31 dias";
	break;

	default:
	mensaje="Tiene 30 dias";
	break;



}
alert (mensaje);
	
	



}//FIN DE LA FUNCIÓN