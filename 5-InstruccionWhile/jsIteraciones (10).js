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
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaPosNeg;

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
			}		



		respuesta=confirm("Desea ingresar otro numero?");	
	
	}
	if (contadorPositivo!=0)
	{
	 promedioPositivo=acumuladorPositivo/contadorPositivo;	
	}
	else
	{
		promedioPositivo="no se ingresaron promedios positivos";
	}
	
	if (contadorNegativo!=0)
	{
		promedioNegativo=acumuladorNegativo/contadorNegativo;
	}
	else
	 {
	 	promedioNegativo="no se ingresaron promedios negativos";
	 }
	 
		diferenciaPosNeg=acumuladorPositivo+acumuladorNegativo;
	 	


	document.write("Suma de negativos:" +acumuladorNegativo+ "<br>");
	document.write("Suma de positivos:" +acumuladorPositivo+ "<br>");
	document.write("Cantidad de negativos:" +contadorNegativo+ "<br>");
	document.write("Cantidad de positivos:" +contadorPositivo+ "<br>");
	document.write("Cantidadde ceros:" +contadorCero+ "<br>");
	document.write("Cantidad de Pres:" +contadorPares+ "<br>");
	document.write("Promedios de positivos:" +promedioPositivo+ "<br>");
	document.write("promedios de negativos:" +promedioNegativo+ "<br>");
	document.write("diferencia entre positivos y negativos"+diferenciaPosNeg+ "<br>");
}//FIN DE LA FUNCIÓN