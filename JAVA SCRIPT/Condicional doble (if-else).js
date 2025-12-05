/*14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
número llegit és positiu” en cas contrari.*/

 let numero = parseInt(prompt("Introdueix un número"));
 if (numero<0){
    console.log("el número llegit és negatiu");
}
else {
    console.log("el número llegit és positiu");
}

/*14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.*/

let num = parseInt (prompt("Introdueix un número:"));
if (num % 2 == 0) {
    console.log("el número llegit és parell");
}
else {
    console.log ("el número llegit és senar");
}

/*14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
quin és el més gran. Només pots fer servir una instrucció if-else.*/
let num1 = parseInt(prompt("Introdueix un número:"));
let num2 = parseInt(prompt("introdueix un altre número:"));
if (num1>num2){
    console.log ("El primer número és el més gran");
}
else {
    console.log ("El segon numero és el més gran");
}


/*14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola
quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així,
comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el
tercer.*/
let numero1 = parseInt(prompt("Introdueix el primer número:"));
let numero2 = parseInt (prompt ("Introdueix el segon numero:"));
let numero3 = parseInt (prompt("Introdueix el tercer numero:"));

if (numero1>numero2 && numero1>numero3){
    console.log("El primer numero es el mes gran");
}
else if (numero1<numero2 && numero3<numero2){
    console.log ("el segon numero es el mes gran");
}
else {
    console.log("el tercer numero es el mes gran");
}
/*14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la
consola els tres números ordenats. */
let numer1 = parseInt(prompt("Introdueix el primer número:"));
let numer2 = parseInt (prompt ("Introdueix el segon numero:"));
let numer3 = parseInt (prompt("Introdueix el tercer numero:"));

if (numer1>numer2 && numer1>numer3) {
    if (numer2>numer3){
        console.log (numer1, numer2, numer3);
    }
    else {
        console.log(numer1, numer3, numer2);
    }
}
else if (numer2>numer1 && numer2>numer3) {
    if(numer1>numer3) {
        console.log(numer2,numer1,numer3);
    }
    else {
        console.log (numer2, numer3, numer1);
    }
}
else {
    if (numer1>numer2){
        console.log (numer3, numer1,numer2);
    }
    else {
        console.log(numer3, numer2, numer1);
    }
}

/*14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25*/
let te_carnet = (prompt("Tens carnet de conduir?(si o no)"));
let prova = parseFloat(prompt("Introdueix el resultat de la prova d’alcoholèmia:"));

if (te_carnet.toLowerCase() == si){
    console.log ("Sí que te carnet de conduir");
    
}
else {
    console.log ("No té carnet de conduir")
}

if (prova<0,25) {
    console.log("la prova d’alcoholèmia ha donat un valor inferior a 0.25")
}
else {
    console.log ("la prova d’alcoholèmia NO ha donat un valor inferior a 0.25")
}

/*14.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
el resultat de restar al nombre més gran el nombre més petit.*/
let nume1 = (prompt("Introdueix un numero:"));
let nume2 = (prompt("Introdueix un numero:"));

if (nume1>nume2){
    console.log (nume1 - nume2);
}
else {
    console.log(nume2 - nume1);
}


/*14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
el cost total és de 30€ donat que el transport és gratis.
En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.*/
let preu = (prompt("Introdueix la quantitat que cal pagar:"));
if (preu >= 30){
    console.log ("El cost total és de 30€ donat que el transport és gratis");
}
else {
    console.log ("El preu total consisteix en l'introduït més 4.95€ en concepte de cost d'enviament");
}

/*14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
posa dues dades:
1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
3.95
2. Quin d’aquests sabors vol:
1. Vainilla o Xocolata. No cal afegir res
2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
dades mal introduïdes”
Si totes les dades són correctes, escriurà el preu final.*/

let C_o_T = prompt("Conus o terrina?:").toLowerCase();
let sabor = prompt("Introdueix el sabor del gelat:").toLowerCase();
let precio; 

if (C_o_T == "conus") {
    precio  = 3.45;
} 
else if (C_o_T == "terrina") {
    precio = 3.95;
} 
else {
    console.log("Error dades mal introduïdes");
    precio = null;
}

if (precio !== null) { 
    if (sabor == "xocolata" || sabor == "vainilla") {

    } 
    else if (sabor == "turró" || sabor == "menta" || sabor == "oreo") {
        precio += 0.5;
    } 
    else if (sabor == "crema" || sabor == "gerds" || sabor == "ametlles") {
        precio += 1;
    } 
    else {
        console.log("Error dades mal introduïdes");
        precio = null;
    }
}

if (precio !== null) {
    console.log("El preu final és: " + precio.toFixed(2) + "€");
}
