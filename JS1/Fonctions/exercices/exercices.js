/* Exercice 1
    - Ecrire la fonction maxValeur qui prend trois paramètres x, y et z
    - Et retourne la plus grande valeur entre les 3.
*/
function maxValeur(a, b, c) {
   return c;
}


const max = maxValeur(5, 8, 9);
console.log(max); // Doit afficher 9

/* Exercice 2
    - Ecrire la fonction avgValeur qui prend trois paramètres x, y et z
    - Et retourne la valeur moyenne des 3
*/

function avgValeur(x, y, z) {

   let result = (x + y + z) / 3;

   return result;

}

const avg = avgValeur(2, 4, 6);
console.log(avg); // Doit afficher 4

/* Exercice 3
    - Ecrire la fonction sayHello qui prend deux paramètres prenom et nom
    - Et retourne la concaténation de la chaine 'Hello ' suivie du prenom, un espace et enfin le nom
*/
function sayHello(prenom, nom) {

   let result = 'Hello ' + prenom + ' ' + nom;


   return result;
}


const message = sayHello('Fabrice', 'Montagne');
console.log(message); // Doit afficher 'Hello Fabrice Montagne'

/*
  Exercice 4
   - Ecrire la fonction division qui prend deux paramètres : denominateur et numerateur
   - Et retourne le resultat de la division
*/
function division(denominateur, numerateur) {

   let result = denominateur / numerateur;

   return result;

}

const div = division(10, 2);
console.log(div);


/* Exercice 5
   - Ecrire la fonction divisionEucledienne qui prend deux paramètres : denominateur et numerateur
   - Et retourne un tableau avec deux valeurs : [resultat, reste]
   ASTUCE : reste = denominateur % numerateur
*/
function divisionEucledienne(denominateur, numerateur) {

   let result = denominateur / numerateur;
   let reste = denominateur % numerateur;

   let tabDiv = [result, reste];


   return tabDiv;

}

const divEu = divisionEucledienne(10, 4);
console.log(divEu);
/* Exercice 6
   Partie 1
   - Ecrire la function miaou qui prend un paramètre nombreMiaou
   - Et retourne une chaine contenant autant de miaou que demandé par le param nombreMiaou
*/
function miaou(nombreMiaou) {

   let resultTab;
   let miaouTab = [];
   for (let i = 0; i < nombreMiaou; i++) {
      let miaou = 'miaou';
      miaouTab.push(miaou)
      let result = miaouTab.join(' ') + '\n';




      console.log(result);
   }




}

let chat = miaou(5);



/*
   Partie 2
   - Utiliser la fonction précédente pour afficher des miaous comme suit
      miaou
      miaou miaou
      miaou miaou miaou
      miaou miaou miaou
      ...
      miaou ... x 50
   - Et ce jusqu'à 50 miaou
*/

/* Exercice 7
   Partie 1
   - Ecrire une fonction de conversion eurToNeveflouz qui prend en paramètre euros
   - Et retourne sa valeur en neveflouz, calculé comme suit : 1 NEZ = 150 EUR + 1000

   Partie 2
   - Convertir le tableau suivant (contenant des montants en euros) en neveflouz
   en utilisant la fonction précédente
   - Afficher le résultat dans la console
*/
let montantsEuros = [150, 45.23, 890.45, 12000000, 45, 1, 1.5, 5, 10, 20, 50, 100, 500, 5000, 999, 1000];

function eurToNeveflouz(euros) {

   let nez = euros / 150000;
   return nez;

}
/*
let result = eurToNeveflouz(5000)
console.log(result);
*/
let sommeTotal = 0;
for (let i = 0; i < montantsEuros.length; i++) {

   let convNez = eurToNeveflouz(montantsEuros[i]);

   sommeTotal = sommeTotal + convNez;



}
console.log(sommeTotal);
/* Exercice 8
   - Ecrire une fonction zip qui prend deux paramètres : tableau1 et tableau2
   - Et retourne la concaténation des deux tableaux

   Résultat attendu :
   si tableau1 = ['toto', 'titi', 'tata', 'tutu']
   et tableau2 = ['bobo', 'bibi', 'baba', 'bubu']
   alors résultat = [['toto', 'bobo'], ['titi', 'bibi'], ...]
*/


function zip(tableau1, tableau2) {

   let tabConcaFin = [];
   for (let i = 0; i < tableau1.length; i++) {


      let tabConca = [];
      tabConca.push(tableau1[i]);
      tabConca.push(tableau2[i]);

      tabConcaFin.push(tabConca);
   }

   return tabConcaFin;
}


let tab1 = ['toto', 'titi', 'tata', 'tutu'];
let tab2 = ['bobo', 'bibi', 'baba', 'bubu'];

let tabTest = zip(tab1, tab2);
console.log(tabTest);


/* Exercice 9
   - Ecrire une fonction add qui prend deux paramètres : tableau et offset
   - Et retourne un tableau où chaque valeur est ajouté de offset

   Résultat attendu :
   si tableau = [1, 10, 23, 56, 89]
   et offset = 15
   alors résultat = [16, 25, 38 ...]
*/

function add(tableau, offset) {
   let tabSortie = [];
   for (let i = 0; i < tableau.length; i++) {

      let result = offset + tableau[i];

      tabSortie.push(result);
   }

   return tabSortie;

}
let tabNombre = [1, 10, 23, 56, 89];
let tabTestadd = add(tabNombre, 15);
console.log(tabTestadd);


/* Exercice 10
   - Ecrire une fonction extract qui prend deux paramètres : collection et key
   - Et retourne un tableau contenant la valeur correspondant à la propriété de chaque objet de la collection

   Résultat attendu :
   si collection = [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   et key = "productName"
   alors résultat = ["Papier", "Stylo", "Agrafeuse" ...]
*/

function extract(collection, key) {
   let TabProduct = [];
   for (let index in collection) {

      const value = collection[index];
      TabProduct.push(value.productName);


   }
   return TabProduct;

}
let ma_key = 'productName';
let ma_collection = [{
   productName: "Papier",
   stock: 10,
   prix: 8
}, {
   productName: "Stylo",
   stock: 10,
   prix: 6
}, {
   productName: "Agrafeuse",
   stock: 10,
   prix: 12
}]

let TabTestProduct = extract(ma_collection, ma_key);
console.log(TabTestProduct);


/* Exercice 11
   - Ecrire une fonction clean qui prend deux paramètres : collection et keysList
   - Et retourne la collection avec seulement les propriétés demandés par keysList

   Résultat attendu :
   si collection = [{
      productName: "Papier", stock: 10, prix: 8, toto: "fdmlgjdfg"
   }, {
      productName: "Stylo", stock: 10, prix: 6, titi: "sdofgj", cheval: "blanc"
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   et keysList = ["productName", "prix", "stock"]
   alors résultat = [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
*/


function clean(collection, keysList) {
         let TabCollec = [];
   for (let index = 0; index < collection.length; index++) {
      const value = collection[index];
      console.log(value);
         
      for (const indexValue in value) {
         
         if(keysList.indexOf(indexValue) === -1){
            
            delete value[indexValue];
            
            
            
         };
         console.log(value[indexValue]);
      }
      
      TabCollec.push(value);
   }
  return TabCollec;
   
}



let my_new_collection = [{
   productName: "Papier",
   stock: 10,
   prix: 8,
   toto: "fdmlgjdfg"
}, {
   productName: "Stylo",
   stock: 10,
   prix: 6,
   titi: "sdofgj",
   cheval: "blanc"
}, {
   productName: "Agrafeuse",
   stock: 10,
   prix: 12
}];


let my_keysList = ["productName", "prix", "stock"];



my_new_collection = clean(my_new_collection, my_keysList);
console.log(my_new_collection);