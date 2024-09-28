"use strict";
let texto = "Javascript es divertido!";
document.write("<h1>EJERCICIO 1</h1>");
document.write("Texto sin modificar: ", texto, "<br>");
document.write("Texto pasado a mayusculas: ", texto.toUpperCase(), "<br>");
document.write("Texto pasado a minusculas: ", texto.toLowerCase(), "<br>");
document.write("<h1>EJERCICIO 2</h1>");
let saludo = "¡Hola Mundo!";
document.write("Cadena: ", saludo, "<br>");
document.write("Primer caracter de la cadena: ", saludo.charAt(0), "<br>");
document.write("Posicion del caracte M: ", saludo.indexOf("M"), "<br>");
document.write("<h1>EJERCICIO 3</h1>");
let frase = "Aprendiendo Javascript es muy interesante";
document.write("Cadena: ", frase, "<br>");
document.write(
  "Extraemos la palabra Javascript: ",
  frase.slice(12, 21),
  "<br>"
);
document.write("Extraemos la palabra interesante: ", frase.slice(-11), "<br>");
document.write("<h1>EJERCICIO 4</h1>");
let palabras = "rojo,azul,verde,amarillo";
document.write("Cadena sin modificar: ", palabras, "<br>");
let arrayDeCadenas = palabras.split(",");
document.write("Despues de pasar por split: [");
for (let i = 0; i < arrayDeCadenas.length; i++) {
  document.write(arrayDeCadenas[i] + " / ");
}
document.write("]<br>");
palabras = arrayDeCadenas.join(" ");
document.write("Despues de pasar por join: [", palabras, "]<br>");
document.write("<h1>EJERCICIO 5</h1>");
let frase1 = "Javascript es increible, me encanta Javascript";
document.write("Frase sin modificar: ", frase1, "<br>");
let regex = /Javascript/gi;
document.write(
  "Frase modificada una vez: ",
  frase1.replace(regex, "Python"),
  "<br>"
);
document.write("<h1>EJERCICIO 5</h1>");
let parte1 = "Javasript";
let parte2 = " es";
let parte3 = " increible";
document.write(
  "parte 1: ",
  parte1,
  "<br>",
  "parte 2: ",
  parte2,
  "<br>Parte 3: ",
  parte3,
  "<br>",
  "Todo Junto: ",
  parte1.concat(parte2, parte3),
  "<br>"
);
document.write("<H1>EJERCICIO 7</H1>");
document.write("Mira la consola para ver la solucion de este ejercicio :)<br>");
let nombre = "      Alice   Es    Una Señora    Muy     Chula  ";
console.log("Cadena:", nombre);
console.log("Cadena pasada por trim: ", nombre.trim());
document.write("<h1>EJERCICIO 8</h1>");
let oracion =
  "Aprender Javascript es muy chulo, hacer cuatro baterias de ejercicios... ya no tanto";
document.write("Cadena sin modificar: ", oracion, "<br>");
document.write(
  "La cadena incluye Javascript? ",
  oracion.includes("Javascript"),
  "<br>"
);
document.write("Y Python? ", oracion.includes("Python"), "<br>");
document.write("<h1>EJERCICIO 9</h1>");
let mensaje = "Bienvenido a la clase de Javascript!";
document.write("Cadena: ", mensaje, "<br>");
document.write(
  "Empieza con Bienvenido? ",
  mensaje.startsWith("Bienvenido"),
  "<br>"
);
document.write(
  "Termina con Javascript? ",
  mensaje.endsWith("Javascript"),
  "<br> Realmente termina con Javascript!<br>"
);

document.write("<h1>EJERCICIO 10</h1>");
let conjuntoDeCaracteres = "Hola"; //Si a chatgpt se le ha acabado la imaginacion para las variables, imaginate a mi :(

document.write("Cadena: ", conjuntoDeCaracteres, "<br>");
document.write(
  "Cadena repetida 3 unidades de veces: ",
  conjuntoDeCaracteres.repeat(3),
  "<br>"
);
