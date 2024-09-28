"use strict";
document.write("<h1 style='color: red;'>MIRA LA CONSOLAAAAA!!!!!</h1>");
console.log("EJERCICIO 1");
let num1 = 8.465498161;
let num2 = 7.66546156518;
console.log(num1.toFixed(2));
console.log(num2.toFixed(2));
console.log("EJERCICIO 2");
let ej2 = 255;
console.log(ej2.toString(2));
console.log(ej2.toString(8));
console.log(ej2.toString(16));
console.log("EJERCICIO 3");
let numeroConPrecision = 3.14159;

console.log("Precisión de 4 dígitos:", numeroConPrecision.toPrecision(4));

console.log("Precisión de 6 dígitos:", numeroConPrecision.toPrecision(6));
console.log("EJERCICIO 4");
let numObj1 = new Number(10);
let numObj2 = new Number(10);
console.log("Son iguales??? 🤔", numObj1.valueOf() === numObj2.valueOf());
console.log("EJERCICIO 5");
let arrayNumeros = [1, 2.5, 3, 4.1, 5];
arrayNumeros.forEach((element) => {
  console.log(
    "Es el numero ",
    element,
    "entero??: ",
    Number.isInteger(element)
  );
});
console.log("EJERCICIO 6");
let arrayStrings = ["10", "20.5", "30"];
arrayStrings.forEach((element) => {
  console.log("El elemento ", element, "es un: ", typeof element);
});
console.log("PASAMOS A NUMEROS");
arrayStrings.forEach((element) => {
  element = Number(element);
  console.log("El elemento", element, "es un: ", typeof element);
});
console.log("EJERCICIO 7");
let valores = [10, "hola", NaN, "123", true];
valores.forEach((element) => {
  if (typeof element !== "number") {
    console.log("El elemento: ", element, " No es un numero.");
  } else {
    console.log("El elemento: ", element, " SI es un numero.");
  }
});
