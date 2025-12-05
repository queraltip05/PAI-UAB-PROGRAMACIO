/*16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
text “Estem fent bucles”.*/

for (let i = 0; i < 10; i++) {
  console.log("Estem fent bucles");
}

/*16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
nombres del 5 al 20.*/

for (let i = 5; i <= 20; i++) {
  console.log(i);
}

/*16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els
nombres entre 1 i N.*/

let N = 10; 
let suma = 0;

for (let i = 1; i <= N; i++) {
  suma = suma + i; 
}

console.log("La suma dels nombres entre 1 i " + N + " és: " + suma);

/*16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial
d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.*/

let n = parseInt(prompt("Introdueix un nombre:"));
let factorial = 1

for (let i = 1; i <= N; i++) {
  factorial = factorial * i
}

console.log("El factorial de " + N + " és: " + factorial);


/*16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M)
calculi la suma de tots els números entre N i M (ambdós inclosos).*/

let P = parseInt(prompt("Introdueix un nombre:"));
let M = parseInt(prompt("Ara introdueix un nombre més gran:"));
let sum = 0

for (let i = P; i <= M; i++) {
  sum = sum + i

}
console.log("La suma de tots els numeros entre" + M + "i" + P + " és: " + sum);


/*16.6.- Escriu un programa que, donat un número Q, calculi la suma de tots els números
parells entre 2 i Q.*/

let Q = parseInt(prompt("Introdueix un nombre:"));
let sumaa = 0;

for (let i = 2; i <= Q; i += 2) { 
  sumaa += i;  
}

console.log("La suma de tots els números parells entre 2 i " + Q + " és: " + sumaa);


/*16.7.- Escriu un programa que, donat un número U, escrigui a la consola la taula de
multiplicar de U.*/

let U = parseInt(prompt("Introdueix un nombre per veure la seva taula de multiplicar:"));

for (let i = 1; i <= 10; i++) {
  console.log(U + " x " + i + " = " + (U * i));
}


/*16.8.- Escriu un programa que, donat un número S, escrigui a la consola tots els números
de S a 1 (per tant, en ordre descendent). Observa el que passa si S < 1*/

let S = parseInt(prompt("Introdueix un nombre:"));

for (let i = 1; i <= S; i--){
    console.log (i);
}

/*16.9.- Escriu un programa que donat un número D, escrigui D asteriscos (*)*/

let D = parseInt(prompt("Introdueix un nombre:"));
let asterisc = ("*")
for (let i = 1 ; i <= D; i++){
    console.log (asterisc);
}

/*16.10.- Escriu un programa que donat un número O, escrigui el següent dibuix (cas que el
número introduït sigui 5).
*
**
***
****
***** */
let O = parseInt(prompt("Introdueix un nombre:"));

for (let i = 1; i <= O; i++) {
    console.log("*".repeat(i));
}


/*16.11.- Escriu un programa que donat dos números G i H, crei i sumi una sèrie com la
següent:
Si G ← 2 i H ← 5
Sortida per consola:
2 22 222 2222 22222
La suma de la sèrie és:24690 */

let G = parseInt(prompt("Introdueix el primer nombre (G):"));
let H = parseInt(prompt("Introdueix el segon nombre (H):"));

let serie = "";
let sumaaa = 0;
let terme = "";

for (let i = 1; i <= H; i++) {
  terme += G;          
  serie += terme + "";
  sumaaa += parseInt(terme); 
}

console.log(serie);
console.log("La suma de la sèrie és: " + suma);