/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var valorImporte;
    var valorResultado;
    /*nombre="lalala";
    
    alert("valorImporte");*/
    valorImporte=document.getElementById("importe").value;
    console.info("el valor",valorImporte);
    //alert(valorImporte);
    valorResultado=valorImporte+100;
    //alert(valorResultado);
    var datoUno;
    var datoDos;
    datoUno="2";
    datoDos="3";
    datoUno=parseInt(datoUno);
    datoDos=parseInt(datoDos);
    suma=datoUno+datoDos;
    alert(suma);
    document.getElementById("resultado").value=valorResultado;
}
