// Données utilisées par les exercices
let stockVoitures = [{
  modele: 'Opel Astra',
  couleur: 'noir',
  stock: 2,
  prixUnitaire: 26000
}, {
  modele: 'Jaguar',
  couleur: 'noir',
  stock: 120,
  prixUnitaire: 1200000
}, {
  modele: 'Peugeot 205',
  couleur: 'bleu',
  stock: 4500,
  prixUnitaire: 2500
}, {
  modele: 'Ferrari',
  couleur: 'rouge',
  stock: 56,
  prixUnitaire: 250000
}];



/*
  Exercice 1 : Afficher les couleurs des voitures
    noir
    noir
    bleu
    rouge
*/
/*
for (const key in stockVoitures) {
  const value = stockVoitures[key];

  for (const key2 in stockVoitures[key]) {
    const value2 = stockVoitures[key][key2];

    if (key2 === 'couleur') {
      console.log(value2);
    }


  }


}*/
/*
  Exercice 2 : Afficher les modèles de voitures
    Opel Astra
    Jaguar
    Peugeot 205
    Ferrari
*/
/*
for (const key in stockVoitures) {
  const value = stockVoitures[key];

  for (const key2 in stockVoitures[key]) {
    const value2 = stockVoitures[key][key2];

    if (key2 === 'modele') {
      console.log(value2);
    }


  }


}
*/
/*
  Exercice 3 : Afficher modèle, couleur et prix de chaque voiture
    Opel Astra, noir, 26000
    Jaguar, noir, 1200000
    Peugeot 205, bleu, 2500
    Ferrari, rouge, 250000
*/

/*
for (const key in stockVoitures) {
  const voiture = stockVoitures[key];

  const voitureTab = Object.values(voiture);
  
  //console.log(Object.values(voiture))
  
  //console.log(voitureTab);
  
  
  voitureTab.splice(2, 1);
  console.log(voitureTab.join(', '));

}
*/
/*
  Exercice 4 : Calculer et afficher la valeur du stock de chaque modèle
    Opel Astra, 52000
    Jaguar, 144000000
    Peugeot 205, 11250000
    Ferrari, 14000000
*/
/*
for (const key in stockVoitures) {
  const voiture = stockVoitures[key];

  const voitureTab = [];

  let stock = Object.values(voiture)[2];
  let prix = Object.values(voiture)[3];
  let nom = Object.values(voiture)[0]
  let result = stock * prix;
  //console.log(voitureTab);

  voitureTab.push(nom, result);
  console.log(voitureTab.join(', '));

}
*/
/*
  Exercice 5 : Calculer et afficher la valeur totale du stock, tout modèle confondu
    Valeur stock : 169302000
*/
/*
let stock = [];
let prix = [];
let result = [];
for (const key in stockVoitures) {
  const voiture = stockVoitures[key];

  const voitureTab = [];

  stock.push(Object.values(voiture)[2]);
  prix.push(Object.values(voiture)[3]);
 
  result.push(Object.values(voiture)[2]*Object.values(voiture)[3]);
  //console.log(voitureTab);

 
}
const initialValue = 0;
let SommeStock = result.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
console.log('Valeur stock: '+SommeStock);
*/
/*
  Exercice 6 : Ajouter la voiture suivante à la collection
*/
/*
let nouvelleVoiture = {
  modele: 'Mercedes Benz',
  couleur: 'gris',
  stock: 42,
  prixUnitaire: 56230
};

stockVoitures.push(nouvelleVoiture);
console.log(stockVoitures);
*/
/*
  Exercice 7 : Modifier la couleur de la 205, mettre vert à la place de bleu
*/
/*
for (const key in stockVoitures) {
  const value = stockVoitures[key];
  if (value.modele === 'Peugeot 205') {
    value.couleur = 'vert';
    console.log(value);
  }


}
*/
/*
  Exercice 8 : Ajouter la propriété suivante à chaque voiture de la collection
  - estUneVoiture: true
*/
/*
for(const key in stockVoitures){
  const value = stockVoitures[key];
  Object.defineProperty(value, 'estUneVoiture', {
  value: true,
  
});

}
console.log(stockVoitures);
*/
/*
  Exercice 9 : Modifier le stock de Peugeot 205 pour le mettre à 1500
*/
/*
for(const key in stockVoitures){
  const value = stockVoitures[key];
  if(value.modele === 'Peugeot 205'){
    value.stock = 1500;
    console.log(value);
  }
}
*/
/*
  Exercice 10 : Rechercher les voitures de couleur noir
*/
/*
for(const key in stockVoitures){
  const value = stockVoitures[key];
  if(value.couleur ==="noir"){
    console.log(value.modele);
  }
}
*/
/*
  Exercice 11 : Supprimer la Peugeot 205 (sachant que sa position dans le tableau peut changer)
*/

for(const key in stockVoitures){
  const value = stockVoitures[key];
  console.log(value);
  console.log(value.modele)
  if(value.modele === 'Peugeot 205'){
    
  Reflect.deleteProperty(stockVoitures, key);
  console.log(stockVoitures);
  }
}
