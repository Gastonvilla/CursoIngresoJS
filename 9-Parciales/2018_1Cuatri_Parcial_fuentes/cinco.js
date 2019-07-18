function mostrar()
{
var planeta;

planeta=prompt("planeta");

switch(planeta){
	case "tierra":

	mensaje="aca vivimos";
	break;

	case "mercurio":
	case "venus":

	mensaje="aca hace mas calor";
	break;

	case "marte":
	case "jupiter":
	case "saturno":
	case "urano":
	case "neptuno":

	mensaje="aca hace frio";
	break;

	default:
	mensaje="no es planeta valido";
	break;



}
	alert(mensaje);
}
