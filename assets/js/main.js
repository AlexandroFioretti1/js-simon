/* 
DESCRIZIONE :
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono.
l'utente deve inserire uno alla volta, i numeri che ha visto precedentemente.
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
*/

/* 
STRUMENTI UTILIZZATI
Const/let
cicle FOR
QuerySelector
getElementById
math.random
math.floor
.push
.join
timeout 
*/

// seleziono gli elementi della DOM tramite iD
const numeriEl = document.getElementById("numeri");
const risultatoEl = document.getElementById("risultato");

/* seleziono il container con d-none  */
let dNone = document.getElementById("dNone");

// seleziono gli elementi della DOM tramite querySelector
const formEl = document.querySelector("form");

// generiamo 5 numeri casuali tra 1 e 100 e li mostriamo nella pagina
const numeriCasuali = [];
console.log(numeriCasuali, "numeri gererati casualmente");

// creo un ciclo for per la creazione di 5 numeri random da 1 a 100
for (let i = 0; i < 5; i++) {
  console.log(i);
  numeriCasuali.push(Math.floor(Math.random() * 100) + 1);
}
// definisco in dom i numeri generati casualmente che l'utente dovrà ricordare
numeriEl.textContent = `Questi sono i 5 numeri che dovete ricordare. In 30 secondi spariranno. Numeri: ${numeriCasuali.join()}`;

// avvio un timeout di 30 secondi prima che la scritta dei 5 numeri casualmente generati sparisca.
setTimeout(() => {
  /* rimuovo dal container la classe d-none per rendere visibile il gioco */
  dNone.classList.remove("d-none");
  numeriEl.textContent = "";
}, 5000); /* il gioco dice 30 secondi ma per svariate prove ho preferito lasciare a 5 sec */

// creo un FormEL per chiedere all'utente il valore all'interno delle caselle
formEl.addEventListener("submit", (event) => {
    
  // evitiamo il comportamento di default del form
  event.preventDefault();
  const numeriIndovinati = [];
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  const numero3 = parseInt(document.getElementById("numero3").value);
  const numero4 = parseInt(document.getElementById("numero4").value);
  const numero5 = parseInt(document.getElementById("numero5").value);
  console.log(numeriIndovinati, "numeri indovinati dall'utente");

  // controllo quanti numeri ha indovinato l'utente
  if (numeriCasuali.includes(numero1)) {
    numeriIndovinati.push(numero1);
  }
  if (numeriCasuali.includes(numero2)) {
    numeriIndovinati.push(numero2);
  }
  if (numeriCasuali.includes(numero3)) {
    numeriIndovinati.push(numero3);
  }
  if (numeriCasuali.includes(numero4)) {
    numeriIndovinati.push(numero4);
  }
  if (numeriCasuali.includes(numero5)) {
    numeriIndovinati.push(numero5);
  }

  // seleziono l'elemento della dom e comunico il risultato di quanti numeri sono stati indovinati.
  risultatoEl.innerHTML = `Hai indovinato ${
    numeriIndovinati.length
  } numeri su 5, ricordando la posizione e il valore del numero : ${numeriIndovinati.join()}`;
});
