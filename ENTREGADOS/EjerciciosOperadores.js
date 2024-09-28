"use strict";
console.log("Ejercicio 1");
let a = 5;
let b = 6;

console.log("Suma", a + b);
console.log("resta", a - b);
console.log("Multiplicacion", a * b);
console.log("Division", a / b);
a = a + 10;
console.log("El nuevo valor de a es:", a);
console.log("Ejercicio 2");
let nombre = "Antonio";
nombre = "hola " + nombre;
console.log(nombre);
let edad = 25;
if (edad > 18) {
  console.log("Es mayor de edad");
  if (edad < 65) {
    console.log("Y es menor de 65");
  } else {
    console.log("Y es mayor de 65");
  }
} else {
  console.log("No es mayor de edad");
}
console.log("Ejercicio 3");
let x = 5;
let y = "5";
console.log("x == y", x == y);
console.log("x === y", x === y);
console.log("x & y", x & 1);
console.log("x | y", x | 1);
console.log("Tipo de x", typeof x);
console.log("Tipo de y", typeof y);
