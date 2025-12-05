//Condicional simple: if//

//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero.
  let numero = parseInt(prompt("Introdueix un número"));
  if (numero<0){
      console.log("el número llegit és negatiu");
}

//13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
//número llegit és parell” si el número es parell.
let numer = parseInt(prompt("Introdueix un número"));
if (numer % 2 === 0){
    console.log("el número llegit és parell");
}

//13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
//és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
//per cada cas.
let number = parseInt(prompt("Introdueix un número"));
if (number %2 !== 0 ){
    console.log("El número llegit és negatiu");
}
if (numero % 2 === 0){
    console.log("El número llegit és parell");
}


//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
//el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
//gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.
let num1 = parseInt(prompt("Introdueix primer número"));
let num2 = parseInt(prompt("Introdueix segon número"));
if (num1>num2) {
    console.log("El primer número és més gran")
}
if (num2>num1) {
    console.log("El segon número és més gran")
}


//13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
//el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
//números és el més gran.
let numero1 = parseInt(prompt("Introdueix primer número"));
let numero2 = parseInt(prompt("Introdueix segon número"));
let numero3 = parseInt(prompt("Introdueix tercer número"));
if (numero1>numero2 && numero1>numero3) {
    console.log("El primer número és més gran")
}
if (numero2>numero1 && numero2>numero3) {
    console.log("El segon número és més gran")
}
if (numero3>numero2 && numero3>numero1) {
    console.log("El tercer número és més gran")
}

//13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
//entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
let mes = parseInt(prompt("Introdueix un número de mes (1-12):"));

if (mes === 1) {
  console.log("Gener");
}
if (mes === 2) {
  console.log("Febrer");
}
if (mes === 3) {
  console.log("Març");
}
if (mes === 4) {
  console.log("Abril");
}
if (mes === 5) {
  console.log("Maig");
}
if (mes === 6) {
  console.log("Juny");
}
if (mes === 7) {
  console.log("Juliol");
}
if (mes === 8) {
  console.log("Agost");
}
if (mes === 9) {
  console.log("Setembre");
}
if (mes === 10) {
  console.log("Octubre");
}
if (mes === 11) {
  console.log("Novembre");
}
if (mes === 12) {
  console.log("Desembre");
}
if (mes < 1 || mes > 12) {
  console.log("El número introduït no correspon a cap mes");
}
