console.log("--EXERCISE 06: FUNCTIONS");

// a - Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//     Ejecutar la función y guardar el resultado en una variable, mostrando el valor
//     de dicha variable en la consola del navegador.

function suma(a, b){
    return a + b;
};

console.log("Exercise 6.a: " + suma(4, 9));

// b - Copiar la función suma anterior y agregarle una validación para controlar si alguno
//     de los parámetros no es un número; de no ser un número, mostrar un alert aclarando
//     que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function sumaUno(a, b){
    if(isNaN(a) || isNaN(b)){
        // alert('Uno de los valores no es un numero');
        return NaN;
    };
    
    return a + b;
};

console.log("Exercise 6.b: " + sumaUno(45, 'D'));

// c - Crear una función “validateInteger” que reciba un número como
//     parámetro y devuelva verdadero si es un número entero.

function validateInteger(x){

    return Number.isInteger(x);
};

console.log("Exercise 6.c: " + validateInteger(23.2));

// d - Copiar y renombrar la función suma del ejercicio 6b) y agregarle una
//     llamada a la función del ejercicio 6c. y que valide que los números sean enteros.
//     En caso que haya decimales mostrar un alert con el error y
//     retornar el número convertido a entero (redondeado).


function sumaDos(a, b){
    if(!isNaN(a) && !isNaN(b)){
        if(!validateInteger(a) || !validateInteger(b)){
            alert("ERROR: Uno o ambos valores (" + a + " y " + b + ") son decimales y tienen que ser enteros.");
            if(!validateInteger(a)){
                alert("ERROR: El primer valor es " + a + " y tiene que ser: " + Math.round(a));
                if(!validateInteger(b)){
                    alert("ERROR: El segundo valor es " + b + " y tiene que ser: " + Math.round(b));
            }}};
    }else{
        alert('Uno de los valores no es un numero');
        return NaN;
    };

        return Math.round(a + b);
    };


console.log("Exercise 6.d: " + sumaDos(6, 1.7));

// e - Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
//     probando que todo siga funcionando igual que en el apartado anterior.

function validateCount(a, b){
    if(!isNaN(a) && !isNaN(b)){
        if(!validateInteger(a) || !validateInteger(b)){
            alert("ERROR: Uno o ambos valores (" + a + " y " + b + ") son decimales y tienen que ser enteros.");
            if(!validateInteger(a)){
                alert("ERROR: El primer valor es " + a + " y tiene que ser: " + Math.round(a));
                if(!validateInteger(b)){
                    alert("ERROR: El segundo valor es " + b + " y tiene que ser: " + Math.round(b));
            }}};
    }else{
        alert('Uno de los valores no es un numero');
        return NaN;
    };
};

function sumaTres(a, b){
    validateCount(a, b);
        return Math.round(a + b);
    };

console.log("Exercise 6.e: " + sumaTres(4.6, 45));
