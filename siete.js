function mostrar()
{
	var nota=0;
	var sexo;
	var promedio;
	var notabaja;
	var varonesnota;
	var contador=0;
	var notabajasexo;


	while(contador <2) 
	{
		
		
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		while(isNaN(nota)||(nota<= 0 || nota > 11))
		{
			nota=parseInt(nota);
		}
		sexo=prompt("Ingrese sexo");
		while((sexo != "F") && (sexo != "M"))
		{
			sexo=prompt("Ingrese sexo");
		}
		if (contador==0) 
		{
			notabaja=nota;
			notabajasexo=sexo;
		}else
		{
			if (nota<notabaja)
			 {
			 	notabaja=nota;
				notabajasexo=sexo;
			 }
		}
			if (nota>5=varonesnota)
			{
				
			}

			contador++;
			acumulador=+nota;
			promedio=acumulador/contador;


		
		
		//estadoCivil=prompt("Ingrese estadoCivil");
		//while((estadoCivil != "soltero") && (estadoCivil != "casado"))
		//{
		//	estadoCivil=prompt("Ingrese estadoCivil");
		//}	
		


	}//fin del while principal
	alert("El promedio le las notas totales es" + promedio);
}
