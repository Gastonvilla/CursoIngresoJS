/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var Temperatura;

	Temperatura=document.getElementById("Temperatura").value;

	Temperatura=parseInt(Temperatura);

	conversion=Temperatura-32;
	conversion1=conversion*5/9;

	alert(Temperatura+" Fahrenheit son  "+conversion1+" centígrados");
}

function CentigradosFahrenheit () 
{

	var Temperatura;
	
	Temperatura=document.getElementById("Temperatura").value;

	Temperatura=parseInt(Temperatura);

	conversion=Temperatura*9/5;

	conversion1=conversion+32;

	alert(Temperatura+" Centígrados son  "+conversion1+" fahrenheit");		


}
