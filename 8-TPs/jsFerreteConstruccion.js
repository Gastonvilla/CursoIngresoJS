/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var Largo;
	var Ancho;

	Largo=document.getElementById("Largo").value;
	Ancho=document.getElementById("Ancho").value;

	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);

	sumar=Largo*2+Ancho*2;

	Multiplicar=sumar*3;

	alert(Multiplicar);
}

function Circulo () 
{
	
	var Radio;

	Radio=document.getElementById("Radio").value;

	Radio=parseInt(Radio);

	Multiplicar=Radio*Radio*3.14*3;

	alert(Multiplicar);


}
function Materiales () 
{
	
	var Largo;
	var Ancho;

	Largo=document.getElementById("Largo").value;
	Ancho=document.getElementById("Ancho").value;

	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);

	sumar=Largo*Ancho;

	cemento=sumar*3;

	cal=sumar*2;

	alert("Bolsas de cemento "+cemento+" bolsas de cal "+cal);


}