// Scope global
// Les variables et fonctions sont accessibles dans tout le script

let toto = true;// Booléen (boolean, alias bool)

let titi = 'Coucou';// Chaine (string)

let tata = 45;// nombre entier (integer alias int);

let tutu = 12.6; // Nombre flottant (float)

const PI = 3.14; // Une constante

titi = 'Hello';// Changer valeur variable

//PI = 78;// Impossible de changer valeur d'une constante

// Concaténation de la valeur contenue dans la variable titi avec la chaine ' Fabrice'
let hello = titi + ' Fabrice';

// Les variables dans un scope {}
// sont accessibles uniquement dans celui-ci
function isPi() {
    let momo = 'chat';
}

if (hello === '') {
    let mumu = 'chien';
}

// Portée des variables
// Deux variables avec le meme nom,
// celle du scope le plus proche est privilégiée
if (true) {
    let tata = 78;
    console.log(tata);
}
