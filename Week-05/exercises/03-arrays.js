console.log("--EXCERCISE 3: ARRAYS");

// a - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
//     "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11
//     (utilizar console.log).

var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

console.log("Exercise 3.a: " + months[4], months[10]);

// b - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("Exercise 3.b: " + months.sort());

// c - Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("Exercise 3.c: " + months.unshift('el señor cara de papa'));

console.log("Exercise 3.c: " + months.push('pepino'));

// d - Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("Exercise 3.d: " + months.shift());

console.log("Exercise 3.d: " + months.pop());

// e - Invertir el orden del array (utilizar reverse).

console.log("Exercise 3.e: " + months.reverse());

// f-Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log("Exercise 3.f: " + months.join("-"));

//  g - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthsTwo = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

console.log("Exercise 3.g: " + monthsTwo.slice(4, 11));

