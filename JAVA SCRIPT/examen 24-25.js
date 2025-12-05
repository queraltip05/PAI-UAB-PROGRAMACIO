/*1.- (2 punts) Escriu un programa que, donat un número llegit amb prompt
escrigui el missatge "El número és positiu" si el número és més gran que /zero, "El número és negatiu" si és més petit que zero, o "El número és zero" si és igual a zero. Utilitza if-else.*/

let numero = parseInt(prompt("Dóna'm un número enter"));

    //console.log(numero);

if (numero > 0) {
    
    //Acció si la condició es true
    console.log("El número és positiu");

} else if (numero < 0) {
    
    //Acció si la condició else if es true
    console.log("El número és negatiu");

} else {

    //Acció si la condició es false
    console.log("El número és zero");

}


/*2.- (2 punts) Escriu un programa que, donat un número entre 1 i 7, escrigui a la consola el dia de la setmana corresponent (1 = dilluns, 2 = dimarts, etc.). Utilitza switch.*/

const diasetmana = 3;

switch (diasetmana) {
    case 1:
        console.log("dilluns");
        break;
    case 2:
        console.log("dimarts");
        break;
    case 3:
        console.log("dimecres");
        break;
    case 4:
        console.log("dijous");
        break;
    case 5:
        console.log("divendres");
        break;
    case 6:
        console.log("dissabte");
        break;
    case 7: 
        console.log("diumenge");
        break;
}


/*3.- (2 punts) Escriu un programa que demani a l'usuari un número N i mostri a la consola tots els números de l'1 fins a N. Pots fer-ho utilitzant tant un bucle for com un bucle while.*/

//Bucle (while)
let N = parseInt(prompt("Introdueix un número N:"));
let i = 1; //Variable per al bucle 
while (N >= 1) {
    console.log("Números:"+i);
    i++;
    N--;

}

//Bucle (for)
let D = parseInt(prompt("Introdueix un número: "));

for (let i = 1; i <= D; i++) {
    console.log(i);
}
