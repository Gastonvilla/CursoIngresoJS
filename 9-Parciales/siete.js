function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notabaja;
	var varonesnota;
	var contador=0;
	var notabajasexo;
	var acumulador=0;
	var varonescantidad=0;

	while(contador <2) 
	{
		
		
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		while(isNaN(nota)||(nota<= 0 || nota > 11))
		{
			nota=prompt("Reingrese nota");
			nota=parseInt(nota);
			}		
		sexo=prompt("Ingrese sexo");
		while((sexo != "F") && (sexo != "M"))
		{
			sexo=prompt("Reingrese sexo");
		}
		if (contador==0) 
		{
			notabaja=nota;
			notabajasexo=sexo;
			varonesnota=nota;
		}else
		{
			if (nota<notabaja)
			 {
			 	notabaja=nota;
				notabajasexo=sexo;
			 }
		}
		if (nota>5  &&  sexo=="M")
		{					
			varonesnota=nota;
			varonescantidad++;
		
		}

		contador++;
		acumulador=acumulador+nota;
		promedio=acumulador/contador;
		


		
		
		//estadoCivil=prompt("Ingrese estadoCivil");
		//while((estadoCivil != "soltero") && (estadoCivil != "casado"))
		//{
		//	estadoCivil=prompt("Ingrese estadoCivil");
		//}	
		


	}//fin del while principal
	alert("El promedio le las notas totales es " + promedio);
	alert("La nota mas baja es " + notabaja + " y el sexo es " + notabajasexo);
	alert("La cantidad de varones con nota mayor a cinco es " + varonescantidad);
}