/*Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/

let numero1 = prompt("Escribe un número");
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
if (numero1 % 2 === 0) {
console.log(numero1+ "Es divisible por 2");
}
if (numero1 % 3 === 0) {
console.log(numero1+ "Es divisible por 3");
}
if (numero1 % 5 === 0) {
console.log(numero1+ "Es divisible por 5");
}
if (numero1 % 7 === 0) {
console.log(numero1+ "Es divisible por 7");
}
} else {
console.log(numero1+ "No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}