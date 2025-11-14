/*18.1.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10
cops el text “Estem fent bucles”.*/

let comptador = 1;

do {
    console.log("Estem fent bucles");
    comptador++;
} while (comptador <= 10);

/*18.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
nombres del 5 al 20.*/

for (let i = 5; i <= 20; i++) {
    console.log(i);
}

/*18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N,
escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el
que passa si N < 1.*/

let N = parseInt(prompt("Introdueix un número: "));

do {
    console.log(N);
    N--;
} while (N >= 1);



/*18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és
primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha
algun número entre 1 i N que sigui divisor de N).*/

let num = parseInt(prompt("Introdueix un número: "));
let ésPrimer = true;

if (num <= 1) {
    ésPrimer = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            ésPrimer = false;
            break;
        }
    }
}

if (ésPrimer) {
    console.log(num + " és primer");
} else {
    console.log(num + " no és primer");
}


/*18.5.- Escriu, fent servir la instrucció do-while, un programa que demani (fent servir la
instrucció prompt), 10 números, i ens digui quin és el més gran. */

let comptador2 = 1;
let max = Number.NEGATIVE_INFINITY;

do {
    let num = parseInt(prompt("Introdueix un número (" + comptador2 + "/10): "));
    if (num > max) {
        max = num;
    }
    comptador2++;
} while (comptador2 <= 10);

console.log("El número més gran és: " + max);
