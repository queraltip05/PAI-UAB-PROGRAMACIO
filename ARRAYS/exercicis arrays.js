/*21.1.- Fes un programa que faci el següent:
● Defineix una variable de tipus taula, buida.
● Afegeixi el valor “Hola” a la posició 0.
● Afegeixi el valor “Adeu” a la posició 1.
● Escrigui a la consola el contingut de la taula.*/

let array = [];

array [0]= "Hola";
array [1]= "Adeu";

console.log(array);
alert(array);

document.getElementById("resultado211").innerHTML="El primer valor és" + array[0] + "i el segon valor és" + array [1];

/*21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
per a fer el següent:
● Afegeixi el valor “Nom” a la posició 2 de la taula.
● Escrigui a la consola el contingut de la taula.
● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
● Escrigui a la consola el contingut de la taula.*/

let array = [];

array[0] = "Hola";
array[1] = "Adeu";

console.log(array); 

array[2] = "Nom";
console.log(array);

array[1] = ", ";
console.log(array);

