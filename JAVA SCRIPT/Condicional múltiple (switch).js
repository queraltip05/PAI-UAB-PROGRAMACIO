/*15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número
de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.*/

let mes = parseInt(prompt("Introdueix un número de mes (1-12): "));

switch(mes) {
    case 1: console.log("Gener"); break;
    case 2: console.log("Febrer"); break;
    case 3: console.log("Març"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Maig"); break;
    case 6: console.log("Juny"); break;
    case 7: console.log("Juliol"); break;
    case 8: console.log("Agost"); break;
    case 9: console.log("Setembre"); break;
    case 10: console.log("Octubre"); break;
    case 11: console.log("Novembre"); break;
    case 12: console.log("Desembre"); break;
    default: console.log("Número de mes incorrecte"); 
}


/*15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
posa dues dades:
1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
3.95
2. Quin d’aquests sabors vol:
1. Vainilla o Xocolata. No cal afegir res
2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
dades mal introduïdes”.
Si totes les dades són correctes, escriurà el preu final.*/

let tipus = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();
let sabor = prompt("Quin sabor vols?").toLowerCase();

let preu;

if (tipus === "c") preu = 3.45;
else if (tipus === "t") preu = 3.95;
else {
    console.log("Error dades mal introduïdes");
    preu = null;
}

if (preu !== null) {
    switch(sabor) {
        case "vainilla":
        case "xocolata":
            preu += 0; break;
        case "turró":
        case "menta":
        case "oreo":
            preu += 0.5; break;
        case "crema":
        case "gerds":
        case "ametlles":
            preu += 1; break;
        default:
            console.log("Error dades mal introduïdes");
            preu = null;
    }
}

if (preu !== null) {
    console.log("Preu final: " + preu.toFixed(2) + " €");
}

/*15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l -
dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o
festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.*/

let dia = prompt("Introdueix una lletra per al dia de la setmana (l, m, x, j, v, s, d):").toLowerCase();

switch(dia) {
    case "l":
    case "m":
    case "x":
    case "j":
    case "v":
        console.log("Laborable"); break;
    case "s":
    case "d":
        console.log("Festiu"); break;
    default:
        console.log("Dia desconegut");
}
