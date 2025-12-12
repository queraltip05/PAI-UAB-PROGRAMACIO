
function inici() {
  let resultat = "";

/*Exercici 6.1 i Exercici 6.2:
Escriu el codi HTML per a obtenir quatre formularis com els següents (en un sol fitxer html). Fes-los de
forma que estiguin inicialitzats per defecte amb els valors que es mostren.
El codi dels botons ha de ser aquest:
<button type = "button" onclick="executarF1()">Enviar formulari</button>
(la funció executarF1() haurà de tenir diferents noms per a cada formulari)

Afegeix JavaScript al codi HTML de l'exercici anterior de manera que quan es cliqui el botó:
a) Del formulari i mostri a la consola els continguts dels dos camps del formulari.
b) Del formulari ii mostri a la consola quin valor hi ha seleccionat (recorda que els radiobuttons són
excloents).
c) Del formulari iii mostri a la consola quins valors estan seleccionats.
d) Del formulari iv mostri a la consola el valor del tercer element de la llista desplegable. */

/*Apartat A*/

  resultat +=
    "<strong>Formulari 1</strong>:<br>" +
    document.formulari_i.firstname.value +
    "<br>";
  resultat += document.formulari_i.lastname.value + "<br>";



/*Apartat B*/

  let elements = document.formulari_ii.quest;
  let i = 0;
  while (i < elements.length && !elements[i].checked) {
    i++;
  }
  if (elements[i].checked) {
    resultat +=
      "<strong>Formulari 2</strong>:<br>" + elements[i].value + "<br>";
  }

/* Apartat C */

  elements = document.formulari_iii;
  resultat += "<strong>Formulari 3</strong>:<br>";
  for (i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      resultat += elements[i].value + "<br>";
    }
  }

  /*Apartat D*/
  resultat += "<strong>Formulari 4</strong>:<br>";
  resultat += document.getElementById("opcions").options[2].value;

  document.getElementById("resultats").innerHTML = resultat;
}


/* Exercici 6.3:
a) Modifica el formulari i del primer exercici de manera que al carregar-se no presenti valors per
defecte, tingui un nou camp de text per el correu electrònic i que el focus estigui en aquest tercer
element.
b) Afegeix codi JavaScript per tal que, al clicar el botó comprovi si el correu electrònic és correcte. Si no
ho és, ha de mostrar un missatge per pantalla avisant que el correu no és vàlid i ha d’esborrar el text
proporcionat. Assumint que el domini serà correcte, només caldrà comprovar si existeix el caràcter
@ (feu servir el métode indexOf() dels strings).
c) Afegeix codi JavaScript per tal que, al fer click sobre el botó, mostri sota el formulari el missatge
“Processant la seva petició” i desactivi el botó per evitar peticions repetides. */

function comprovaEmail(){ 									
	let email= document.getElementsByName("email");
	//crea una llista
	let error= false; 			
	//determinem la posició del caràcter @ 			
	let primera = email[0].value.indexOf("@"); 			
	let ultima = email[0].value.lastIndexOf("@"); 						
	if (primera==-1) { 				
		error = true; 			
	} 			
				
	if (primera!=ultima) { 				
		error = true; 			
	} 						
		} 						 			
		if (error){ 			   
			alert("ERROR: el correu electrònic és incorrecte"); 			}
		else{ 
			alert("El correu electrònic és correcte") 		
		}



/*Exercici 6.4:
A partir de la pàgina web que teniu a la pàgina següent, poseu JavaScript per a què:
a) Quan es faci clic sobre l’enllaç, s'oculti el paràgraf. (pista: propietat style)
b) Quan es torni a fer clic sobre l’enllaç, es mostri una altra vegada el text ocultat.
c) Quan s'oculta el text, ha de canviar el missatge de l'enllaç associat (pista: propietat innerHTML )
(per exemple si al començament posa JavaScript, quan es cliqui es pot canviar per Prem per veure i,
de nou, al clicar es torna a canviar i es torna a posar JavaScript) */

  function mostraOculta() {
    let element = document.getElementById('paragraf');
    let enllac = document.getElementById('enllaç');
    if(element.style.display == "" || element.style.display == "block") {
		element.style.display = "none";
		enllaç.innerHTML = 'Prem per veure';
    }
    else {
		element.style.display = "block";
		enllaç.innerHTML = 'JavaScript';
    }
  }

