/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	sumar=PrecioUno+PrecioDos+PrecioTres;

	alert(sumar);

	
}
function Promedio () 
{

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var sumar;
	var promedio;

	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	sumar=PrecioUno+PrecioDos+PrecioTres;
	sumar=parseInt(sumar);

	promedio=sumar/3;
	
	alert(promedio);
	
}
function PrecioFinal () 
{
	
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var sumar;
	var PrecioFinal

	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;


	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);


	sumar=PrecioUno+PrecioDos+PrecioTres;
	sumar=parseInt(sumar);
	PrecioFinal=sumar+sumar*21/100;

	alert(PrecioFinal);


}
