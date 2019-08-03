function mostrar()
{

	var numero=0;
	var letra;
	var contador=0;
	var numerospares=0;
	var numerosimpares=0;
	var ceros;
	var promedio;
	var numerosnegativos;
	var maximo;
	var minimo;
	var respuesta="si";

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
			{
				numerospares++;				
			}else
			//{
			//	if (numero%2==1 || numero%2==-1)
				 {
				 	numerosimpares++;
				 }	

			respuesta=prompt("Ingrese si para continuar, no para terminar.");

			}	










		




		

	document.write("La cantidad de numeros pares es " + numerospares + "<br>");
	document.write("La cantidad de numeros impares es " + numerosimpares + "<br>");
}
