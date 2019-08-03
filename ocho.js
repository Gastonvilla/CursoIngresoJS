function mostrar()
{
	var numero=0;
	var letra;
	var contador=0;
	var numerospares=0;
	var numerosimpares=0;
	var ceros;
	var promedioPares=0;
	var numerosNegativos=0;
	var maximo;
	var minimo;
	var respuesta="si";
	var numeroCero=0;
	var numerosPositivos=0;
	var promedioPositivos=0;
	var acumuladorPositivo=0;

	while(respuesta=="si")
	{

		letra=prompt("Ingrese Letra");

		while((letra <"A" || letra>"Z")&&(letra<"a" || letra>"z"))
		{
			letra=prompt("Reingrese letra");			
		}

		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(isNaN (numero)||numero<=-100 || numero>100)
		{
			numero=prompt("Reingrese numero");
			numero=parseInt(numero);
		}	

		if (numero%2==0)
		//	if (numero%2==1 || numero%2==-1)
		{
		 	numerosimpares++;
		}	

			//alert(numero%2); es una manera de verificar una variable

		if (numero==0) 
		{
				numeroCero++;
		}

		if (numero>0)
		{
			numerosPositivos++;
			acumuladorPositivo+=numero;
		}

		if (numero<0)
		{
			numerosNegativos+=numero;
		}


		respuesta=prompt("Ingrese si para continuar, no para terminar.");

	}

	promedioPositivos=acumuladorPositivo/numerosPositivos;	

	document.write("La cantidad de numeros pares es " + numerospares + "<br>");
	document.write("La cantidad de numeros impares es " + numerosimpares + "<br>");
	document.write("La cantidad de numeros cero es " + numeroCero + "<br>");
	document.write("El promedio de los numeros positivos es " + promedioPositivos + "<br>");
	document.write("La suma de los numeros negativos es " + numerosNegativos + "<br>");
}


