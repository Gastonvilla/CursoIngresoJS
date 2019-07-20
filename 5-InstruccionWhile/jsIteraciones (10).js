function mostrar()
{

	var contador=0;
	var numero;
	var acumuladorNegativo=0;
	var acumuladorPositivo=0;
	var contadorNegativo=0;
	var contadorPositivo=0;
	var contadorCero;
	var contadorPares=0;

	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		if (numero<0) 
			{
				acumuladorNegativo+=numero; //es igual acumuladorPositivo=acumuladorPositivo+numero
				contadorNegativo++;

			}
		else
		{
			if (numero>0) 
				{
					acumuladorPositivo+=numero;
					contadorPositivo++;
				}
				else
				{
					contadorCero++;
				}	
		}
		if (numero%2==0) 
			{
				contadorPares++;
			};		



		respuesta=confirm("Desea ingresar otro numero?")	
	
	}

	document.write("Suma de negativos:" +acumuladorNegativo+ "<br>");
	document.write("Suma de positivos:" +acumuladorPositivo+ "<br>");
	document.write("Cantidad de negativos:" +contadorNegativo+ "<br>");
	document.write("Cantidad de positivos:" +contadorPositivo+ "<br>");
	document.write("Cantidadde ceros:" +contadorCero+ "<br>");
	document.write("Cantidad de Pres:" +contadorPares+ "br");
}//FIN DE LA FUNCIÓN