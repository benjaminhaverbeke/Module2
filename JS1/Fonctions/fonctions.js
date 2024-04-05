// Des fonctions connnues
/*
console.log('chaine');

prompt('Saisir un nombre');

alert('Bouh !');

let tableau = [];
tableau.push();
tableau.splice();
// filter, indexOf, ...

*/

// Fonction simple
function toto() {
    let a = 1;
    let b = 2;
    let c = a + b;
    
    console.log(c);
}
/*
toto();

toto();

for (var i = 0; i < 5; i++) {
    toto();
}
*/
// Fonction retournant quelque chose
function titi() {
    let a = 5;
    let b = 10;
    
    let c = a + b;
    
    return c;
}
/*
titi();// Ne se passe rien car on ne fait rien de ce qui est retourné

let d = titi();
console.log(d);// Affiche 15
console.log(
  titi()
);// Affiche 15
*/
/*
function tata() {
    let a = 5;
    let b = 10;
    
    let c = a + b;
}

let e = tata();
console.log(e);// Affiche undefined
*/

// Retourner plusieurs choses
function tata() {
    let a = 5;
    let b = 10;
    
    let c = a + b;
    
    // Methode 1 : utiliser un objet
    return {
        a: a,
        b: b,
        c: c
    };
    
    // Méthode 2 : utiliser un tableau
    //return [a, b, c];
}
