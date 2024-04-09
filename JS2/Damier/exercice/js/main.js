/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.

/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.


function clearCheckboard() {
  const elements = document.querySelectorAll('.js-cell');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('black');
    elements[i].classList.remove('disco-color1');
    elements[i].classList.remove('disco-color2');
    elements[i].classList.remove('disco-color3');
    elements[i].classList.remove('disco-color4');
    elements[i].classList.remove('disco-color5');
  }
}

function createDamier() {
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      const cell = document.querySelector(
        '.js-row' + row + '.js-col' + col // Exemple : .js-row1.js-col1
      );
      if ((row + col) % 2 === 0) {
        cell.classList.add('black');
      }
    }
  }
}


function disco() {

  const cell = document.querySelectorAll('.js-cell');
  for (let i = 0; i < cell.length; i++) {
    let random = Math.floor(Math.random() * (5 - 1) + 1);

    cell[i].classList.add('disco-color' + random);

  }




}

function createLab() {
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      console.log(col)
      const cell = document.querySelector(
        '.js-row' + row + '.js-col' + col // Exemple : .js-row1.js-col1
      );
      if (col === 1) {

        cell.classList.add('black');
      }
      if (col === 8) {

        cell.classList.add('black');
      }
      if (row === 8) {

        cell.classList.add('black');
      }
      if (row === 1 && col !== 2) {

        cell.classList.add('black');
      }
      if (col === 6 && row !== 7) {

        cell.classList.add('black');
      }
      if (col === 4 && row === 2) {

        cell.classList.add('black');
      }
      if (row === 6 && (col === 3 || col === 4 || col === 5)) {

        cell.classList.add('black');
      }
      if (row === 4 && (col === 2 || col === 3 || col === 4)) {

        cell.classList.add('black');
      }

    }
  }
}

function boom() {





}
/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/

// Les Event Listener sont déclarés ici.
function onDamierClick() {
  clearCheckboard();
  createDamier();
}


function onDiscoClick() {
  clearCheckboard();
  disco();
}

function onLabClick() {
  clearCheckboard();
  createLab();
}
/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener('DOMContentLoaded', () => {

  console.log('Damier');

  // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
  // Afficher un damier dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées
  document
    .querySelector('.js-damier')
    .addEventListener('click', onDamierClick);

  // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
  // Afficher un dancefloor de lumières dans la grille
  document
    .querySelector('.js-disco')
    .addEventListener('click', onDiscoClick);
  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement


  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille
  document
    .querySelector('.js-labyrinth')
    .addEventListener('click', onLabClick);
  // TIP : Ajouter la classe .black sur les cases concernées


  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")
  let grid = document.querySelectorAll('.js-cell');
  grid.forEach((element) => element.addEventListener('mousedown', function() {

    element.classList.add('push');
    element.addEventListener('mouseup', function() {
      element.classList.remove('push');
      element.classList.add('pull');

    });

  }));

  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)


  grid.forEach((element) => element.addEventListener('dblclick', function() {

    element.classList.add('boom');


  }));
  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée
let count = 0;
let left = ''

 let bobby = document
    .querySelector('.bobby')
    .classList.add('visible');
    
    document.addEventListener('keydown', function() {
console.log(event.code)
   
        bobby.style.marginLeft = "0rem";
        
        

         left = String(count);
       
       
        if (event.code === "ArrowRight") {

             count = count + 3; 
            
             console.log(left)
            bobby.style.marginLeft = String(count)+'rem';
            
        }
        else if(event.code === "ArrowLeft"){
            count = count - 3;
            
            bobby.style.marginLeft = String(count)+"rem";
            
        }



    });
  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
