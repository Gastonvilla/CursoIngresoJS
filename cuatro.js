function mostrar()
{
	var numeroUno;

	var numeroDos;

	var resultado;

	numeroUno=prompt("numeroUno");

	numeroDos=prompt("numeroDos");

	if (numeroUno==numeroDos)
	 {
	 	resultado=numeroUno+numeroDos;
	 }else
	 {
	 	numeroUno=parseInt(numeroUno);
	 	numeroDos=parseInt(numeroDos);
	 	if (numeroUno>numeroDos)
	 	 {
	 	 	resultado=numeroUno-numeroDos;
	 	 }else
	 	 {
	 	 	resultado=numeroUno+numeroDos;
	 	 }if (resultado>10)
	 	  {
	 	  	resultado="la suma es"+ resultado +" y supero el 10";
	 	  }
	 }
	

		alert(resultado);
}
