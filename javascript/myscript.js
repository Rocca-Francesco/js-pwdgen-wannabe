// qual'è il tuo nome?
let your_name = prompt("Qual'è il tuo nome?");

// qual'è il tuo cognome?
let your_surname = prompt("Qual'è il tuo cognome?");

// qual'è il tuo colore preferito?
let favorite_color = prompt("Qual'è il tuo colore preferito?");

// scrivo in html il mio nome e cognome
document.getElementById("welcome_msg").innerHTML = "Benvenuto " + your_name + " " + your_surname + "!";

// scrivo in html il mio colore preferito
document.getElementById("best_color").innerHTML = "Il tuo colore preferito é " + favorite_color + " fantastico!";

console.log(favorite_color);