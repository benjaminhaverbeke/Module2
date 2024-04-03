/* Exercice 1
   - Soit l'adresse suivante : 12 rue des lilas 44100 Nantes
   - Ecrire l'adresse dans un objet en la découpant dans les propriétés suivantes :
   numero, rue, codePostal, ville
*/
let adresse = {
  // Ton code ici
  numero: 12,
  rue: 'des Lilas',
  codePostal: 44100,
  ville: 'Nantes'

};

/* Exercice 2
   - Parcourir l'objet précédent et afficher chaque propriété et sa valeur, sous la forme suivante
   Résultat attendu dans la console :
   "numero : 12"
   "rue: rue des lilas"
   ...
*/
for (const key in adresse) {
  const value = adresse[key];
  console.log(`${key}: ${value}`)


}

/* Exercice 3
   - Soit la personne suivante : Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants
   - Ecrire la personne dans un objet avec les propriétés suivantes :
   nom, prenom, dateNaissance, situation, nbreEnfants
*/
let personne = {

  nom: 'Dupont',
  prenom: 'Marcel',
  dateNaissance: '23/05/2021',
  situation: 'celibataire',
  nbreEnfants: '2 enfants'
  // Ton code ici
};

/* Exercice 4
   - Afficher l'objet précédent dans la console, de la forme suivante :
   "Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants"
*/
console.log(`${personne.prenom} ${personne.nom}, né le ${personne.dateNaissance}, ${personne.situation}, ${personne.nbreEnfants}`);


/* Exercice 5
   - Calculer le prix total = prix * quantite
   - Afficher le résultat dans la console
*/
let produitCommande = {
  prix: 12,
  quantite: 52
};
produitCommande.prix = 56;
produitCommande.quantite = 89;
const prixtotal = produitCommande.prix * produitCommande.quantite;
console.log(prixtotal)

/* Exercice 6
   - Sans réécrire le code, modifier l'objet produitCommande comme demandé ci-dessous :
   le prix est 56 et la quantite 89
   - Afficher le résultat dans la console
*/


/* Exercice 7
   - Effectuer la somme des prix des 2 produitCommande ci-dessus
   - Afficher le résultat dans la console
*/
let produitCommande1 = {
  prix: 45,
  quantite: 102
};
let produitCommande2 = {
  prix: 78,
  quantite: 123
};

let prixTotaux = produitCommande1.prix + produitCommande2.prix;
console.log(prixTotaux);

/* Exercice 8
   - Appliquer la remise sur la commande : Soustraire la remise au prix dans la commande suivante
   - Afficher le résultat dans la console
*/
let remise = 10;
let commande = {
  prix: 120
};
let result = commande.prix = commande.prix - remise;
console.log(result);
/* Exercice 9
   - Réorganiser le code suivant en mettant les variables dans des objets
   - Bien choisir le nom des objets pour rendre le code compréhensible
*/

let voiture = {

  nbRoues: 2,
  typeVehicule: '',
  couleur: 'rouge',
  modele: 'Jaguar'
};

let personne3 = {

  nom: 'Roger',
  age: 25,
  prenom: 'Georges'
}



if (voiture.nbRoues === 4) {
  voiture.typeVehicule = 'voiture';
}
else if (voiture.nbRoues === 2) {
  voiture.typeVehicule = 'cycle';
}
else if (voiture.nbRoues % 2 === 0) {
  voiture.typeVehicule = 'camion';
}
else if (voiture.nbRoues === 1) {
  voiture.typeVehicule = 'monocycle';
}
else if (voiture.nbRoues === 3) {
  voiture.typeVehicule = 'tricycle';
}
else {
  voiture.typeVehicule = 'inconnu';
}

let activite = {
  hobbies: ['football', 'amis', 'boite de nuit'],
  profession: 'menuisier'
}


console.log(`Je m'appelle ${personne3.prenom} ${personne3.nom}, ${activite.profession}, j'ai ${personne3.age} ans.`);
console.log(`J'ai un véhicule de type ${voiture.typeVehicule}, modèle ${voiture.modele} de couleur ${voiture.couleur}`);
console.log(`Mes hobbies sont ${activite.hobbies.join(',')}`);

/* Exercice 10
   - Pour chaque élément de la collection, afficher dans la console le modele et le stock.
   INFO : Une collection est un tableau d'objets
*/

let stockVoitures = [{
  modele: 'Opel Astra',
  couleur: 'noir',
  stock: 2
}, {
  modele: 'Jaguar',
  couleur: 'noir',
  stock: 120
}, {
  modele: 'Peugeot 205',
  couleur: 'bleu',
  stock: 4500
}, {
  modele: 'Ferrari',
  couleur: 'rouge',
  stock: 56
}];

for (const key in stockVoitures) {
    
    const value = stockVoitures[key];

    for(const modele in value){
      const type = value[modele];
      
      if(modele !== 'couleur' ){
      console.log(type);
      }
    }
    
   


}
