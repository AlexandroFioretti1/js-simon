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

// seleziono gli elementi della DOM tramite querySelector
const formEl = document.querySelector("form");

// generiamo 5 numeri casuali tra 1 e 100 e li mostriamo nella pagina
const numeriCasuali = [];
console.log(numeriCasuali, "numeri gererati casualmente");

// rimuovo la classe d none dal container alla fine del timeout per farlo tornare visibile

// creo un ciclo for per la creazione di 5 numeri random da 1 a 100
for (let i = 0; i < 5; i++) {
  console.log(i);
  numeriCasuali.push(Math.floor(Math.random() * 100) + 1);
}
// definisco in dom i numeri generati casualmente che l'utente dovrà ricordare
numeriEl.textContent = `Questi sono i 5 numeri che dovete ricordare. In 30 secondi spariranno. Numeri: ${numeriCasuali.join()}`;

// avvio un timeout di 30 secondi prima che la scritta dei 5 numeri casualmente generati sparisca.
setTimeout(() => {
  numeriEl.textContent = "";
}, 30000);

