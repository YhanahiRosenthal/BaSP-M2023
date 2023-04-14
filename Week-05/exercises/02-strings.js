console.log("--EXERCISE 2: STRINGS");

// a - Crear una variable de tipo string con al menos 10 caracteres y
//     convertir todo el texto en mayúscula (utilizar toUpperCase).

var wordOfTenCharacters = "independencia";

console.log("Exercise 2.a: " + wordOfTenCharacters.toUpperCase());

// b - Crear una variable de tipo string con al menos 10 caracteres y generar un
//     nuevo string con los primeros 5 caracteres guardando el resultado en una
//     nueva variable (utilizar substring).

var FirstNewString = wordOfTenCharacters.substring(0, 5)

console.log("Exercise 2.b: " + FirstNewString);

// c - Crear una variable de tipo string con al menos 10 caracteres y generar
//     un nuevo string con los últimos 3 caracteres guardando el resultado en
//     una nueva variable (utilizar substring).

var SecondNewString = wordOfTenCharacters.substring(10)

console.log("Exercise 2.c: " + SecondNewString);

// d - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//     con la primera letra en mayúscula y las demás en minúscula.
//     Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var OneLetter = wordOfTenCharacters.substring(0, 1);
var RestOfWord = wordOfTenCharacters.substring(1, 13);

console.log("Exercise 2.d: " + OneLetter.toUpperCase() + RestOfWord);

// e - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//     Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var whiteSpace = "Hola Mundo";

console.log(whiteSpace.indexOf(" "));

// f - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//     Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
//     la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
//     (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var twoWordsLongs = "contrarrevolucionario anticonstitucionalidad";

console.log(twoWordsLongs[0].toUpperCase() + twoWordsLongs.substring(1, 22) + 
            " " + 
            twoWordsLongs[22].toUpperCase() + twoWordsLongs.substring(23)
            );

