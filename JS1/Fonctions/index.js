// Fonction paramétrée
// a et b sont des paramètres
function toto (a, b) {
    let c = a + b;
    
    return c;
}

// Appel sans passer de paramètres
// ils seront undefined
console.log(
  toto()
);// Affiche NaN

console.log(
  toto(5, 6)
);// Affiche 11

console.log(
  toto(778, 456465.3)
);// Affiche 457243.3
