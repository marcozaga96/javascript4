/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}
const result = area(5, 3);
console.log(result);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(l1, l2) {
  if (l1 === l2) {
    return (l1 + l2) * 3;
  } else return l1 + l2;
}
let sum = crazySum(5, 5);
console.log(sum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n) {
  if (n > 19) {
    return (n - 19) * 3;
  } else return n - 19;
};
console.log(Math.abs(crazyDiff(17)));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return "il numero non e bla bal bal";
  }
};
console.log(boundary(10));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else return "EPICODE " + string;
};
console.log(epify("EPICODE ciao"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return n + " e multiplo di 3 o 7";
  } else return n + " non è multiplo di 3 o 7";
};
console.log(check3and7(5));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
  let result = "";
  for (let index = string.length - 1; index >= 0; index--) {
    result += string[index];
  }
  return result;
};
console.log(reverseString("Epicode"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
  const newArray = [];
  const newString = string.split(" ");
  for (let index = 0; index < newString.length; index++) {
    const element = newString[index].charAt(0);
    const carattereMaiuscolo = element.toUpperCase();
    const taglio = newString[index].slice(1);
    const finale = carattereMaiuscolo + taglio;
    newArray.push(finale);
  }
  console.log(newArray.join(" "));
};
upperFirst("ciao sono marco zagaria");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
  return string.slice(1, -1);
};
console.log(cutString("ciao"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let result = [];
  for (let index = 0; index < n; index++) {
    result.push(Math.floor(Math.random() * 10) + 1);
  }
  return result;
};
console.log(giveMeRandom(5));
