/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById("numeroUno").value;
	numeroDos=document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	sumar=numeroUno+numeroDos;

	alert(sumar);

}

