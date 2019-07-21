function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;
	var numero;

	while(respuesta==true)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		contador++;

		acumulador +=numero;


		respuesta=confirm("Ingresa otro numero?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN