/* 17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el
text “Estem fent bucles”.*/

let i = 1; 

while (i <= 10) { 
  console.log("Estem fent bucles");
  i++; 
}

/*17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els
nombres del 5 al 20.*/

let I = 5;

while (I<=20) {
    console.log(I);
    I++;
}

/*17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a
la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa
si N < 1*/

let N = parseInt(prompt("Introdueix un número: "));

while (N >= 1) {       
    console.log(N);     
    N--;                
}


/*17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número
P donat.
La seqüencià de Fibonnacci consisteix en la suma dels dos valors anteriors tenint en
compte que els dos primers són 1 i 1.
Així, els 7 primers números de Fibonnacci són:
1 1 2 3 5 8 13
Els dos primers són 1 i 1
El tercer és 1 + 1 → 2
El quart és 1 + 2 → 3
El cinquè és 2 + 3 → 5
El sisè és 3 + 5 → 8
El setè és 5 + 8 → 13*/

let P = parseInt(prompt("Introdueix un número: "));

let a = 1;   // primer número de Fibonacci
let b = 1;   // segon número de Fibonacci

console.log(a); // escrivim el primer
if (P > 1) {
    console.log(b); // escrivim el segon
}

let seguent = a + b; // següent número

while (seguent <= P) {
    console.log(seguent);
    a = b;            // el segon passa a ser el primer
    b = seguent;      // el nou número passa a ser el segon
    seguent = a + b;  // calculem el següent
}



/* 17.5.- Escriu un programa que, donats dos números K i L, escrigui en la consola la llista de
multiplicacions K*1, K*2, K*3, K*4,...,K*L Per evitar problemes per la mida del resultat (en
cas que K o L siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és
més gran que 999999 (faig servir l’espai com a separadors de milers per tal que quedi més
clar el nombre).
Per exemple, si els nombres introduits són 200000 i 5000 els resultat per consola hauria de
ser:
200000, 400000, 600000, 800000, 1000000
I ja no s’escriuria res més doncs 1000000 és més gran que 999999 */

let K = parseInt(prompt("Introdueix el número N: "));
let L = parseInt(prompt("Introdueix el número M: "));

let y = 1;

while (y <= L) {
    let resultat = K * y;

    // Comprovem si supera el límit
    if (resultat > 999999) {
        break; // sortim del bucle
    }

    // Mostrem el resultat amb separadors de milers
    console.log(resultat.toLocaleString('ca-ES'));

    y++;
}

