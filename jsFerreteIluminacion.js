/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var Cantidad;
 	var Marca;
 	var precioDescuento;

 	var mensaje;
 	var IIBB;

 	Cantidad=document.getElementById("Cantidad").value;
 	Marca=document.getElementById("Marca").value;
 	precioDescuento=document.getElementById("precioDescuento").value;

 	Cantidad=parseInt(Cantidad);
 	precioDescuento=parseInt(precioDescuento);

 	cuenta=Cantidad*35;
 	if (Cantidad>5);
 		{
 			mensaje=cuenta-cuenta*50/100;

 		}if ((Cantidad==5) && (Marca=="ArgentinaLuz"))
 		{
 			mensaje=cuenta-cuenta*40/100;
 		}else
 		
 		{
 			mensaje=cuenta-cuenta*30/100;

 		}
 		if ((Cantidad==4)&&(Marca=="ArgentinaLuz"||"FelipeLamparas")) 
 			{
 				mensaje=cuenta-cuenta*25/100;
 			}else
 			{
 				mensaje=cuenta-cuenta*20/100;

 			}if ((Cantidad==3)&&(Marca=="ArgentinaLuz"))
 			{
 				mensaje=cuenta-cuenta*15/100;

 			}if ((Cantidad==3)&&(Marca=="FelipeLamparas"))
 			{
 				mensaje=cuenta-cuenta*15/100;
 			}else
 			{
 				mensaje=cuenta-cuenta*5/100;

 			}if (mensaje>120)
 			 {
 			 	IIBB=mensaje*10/100;
 			 }
 			 alert("Usted pago "+mensaje+" siendo "+IIBB+" de IIBB");			
}
