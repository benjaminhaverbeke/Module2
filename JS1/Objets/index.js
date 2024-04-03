
let nom1 = "Toto";
let age1 = 22;
let ville1 = "Nantes";


let nom2 = "Tata";
let age2 = 22;
let ville2 = "Paris";


let personne1 = {
  nom: "Toto",
  age: 22,
  ville: "Nantes"
};

let personne2 = {
  nom: "Tata",
  age: 22,
  ville: "Paris"
};

// On crée un objet toto
// qui contient 3 propriétés :
// nom, age et ville
/*
console.log(personne1);
*/
// Lire la propriété d'un objet
/*
console.log(personne1['nom']); // Affiche Toto
console.log(personne1.nom); // Affiche Toto
*/
// Modifier la propriété d'un objet
/*
personne1.nom = 'Tutu';
console.log(personne1.nom);// Affiche Tutu
*/
/*
for(const key in personne1) {
    const value = personne1[key];
    
    console.log(`Key: ${key}, value: ${value}`);
}
*/
const keys = Object.keys(personne1);
console.log(keys);// Tableau contenant la liste des propriétés

for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = personne1[key];
    
    console.log(`Key: ${key}, value: ${value}`);
}
