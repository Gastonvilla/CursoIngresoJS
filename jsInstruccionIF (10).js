function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var resultado;

	numeroRandom=Math.floor(Math.random()*(11-1))+1;

	if (numeroRandom>8)
	{
		resultado="Exelente";
	}else
	{
		if (numeroRandom>4 || numeroRandom<9)
		 {
		 	resultado="Aprobo";
		 }if (numeroRandom<4) 
		 {
		 	resultado="Vamos, la proxima se puede";
		 }
		 alert(numeroRandom + resultado);
	}

}//FIN DE LA FUNCIÓN