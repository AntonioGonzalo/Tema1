"use strict";
let variable = "Las variables se declaran con let";
let variasPalabras = "camelCase";
//las constantes en mayusculas
const CONSTANTE = "las constantes con const";
//alert(`hola ${1}`);
//pide al usuario en una alerta que meta datos
//prompt("MENSAJE",[ValorPorDefecto]);
/*let age = prompt("¿Cuántos años tienes?", 100);
document.write("Tienes " + age + " años");
document.write("<br>");*/

/*La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

El resultado es true si se pulsa OK y false en caso contrario.

Por ejemplo:*/

/*let isBoss = confirm("¿Eres el jefe?");

document.write("Es el jefe? " + isBoss); // true si se pulsa OK
document.write("<br>");*/



let nombre = prompt("Dime tu nombre");
document.write("Tu nombre es "+nombre);
document.write("<br>");
document.write("El tipo de la variable nombre es: "+typeof(nombre));

//document.write("Hola mundo. Bienvenidos otra vez"); //simplemente escribe en el html
//alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

//CONVERSION DE TIPOS
let value = true;
alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
alert(typeof value); // string
