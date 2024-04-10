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
  for(let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('black');
    elements[i].classList.remove('disco-color1');
    elements[i].classList.remove('disco-color2');
    elements[i].classList.remove('disco-color3');
    elements[i].classList.remove('disco-color4');
    elements[i].classList.remove('disco-color5');
  }
}

function createDamier() {
  for(let row = 1; row <= 8; row++) {
    for(let col = 1; col <= 8; col++) {
      const cell = document.querySelector(
        '.js-row' + row + '.js-col' + col // Exemple : .js-row1.js-col1
      );
      if ((row + col) % 2 === 0) {
        cell.classList.add('black');
      }
    }
  }
}

function createDiscoDanceFloor() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      let random = Math.ceil(Math.random() * 5);
      document.querySelector('.js-row' + i + '.js-col' + j)
        .classList.add('disco-color' + random);
    }
  }  
}

function createLabyrinth() {
  const grid = [
    [1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];
  
  clearCheckboard();
  
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      const cell = document.querySelector('.js-row' + (i + 1) + '.js-col' + (j + 1));
      if(grid[i][j] === 1){
        cell.classList.add('black');
      }
    }
  }
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
  createDiscoDanceFloor();
}

function onLabyrinth() {
  clearCheckboard();
  createLabyrinth();
}

function onCellMouseDown(event) {
  event.target.classList.remove('boom');
  event.target.classList.remove('pull');
  event.target.classList.add('push');
}

function onCellMouseUp(event) {
  event.target.classList.remove('boom');
  event.target.classList.remove('push');
  event.target.classList.add('pull');
}

function onCellDblClick(event) {
  event.target.classList.remove('push');
  event.target.classList.remove('pull');
  event.target.classList.add('boom');
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

  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement
  document
    .querySelector('.js-disco')
    .addEventListener('click', onDiscoClick);


  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées
  document
    .querySelector('.js-labyrinth')
    .addEventListener('click', onLabyrinth);


  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")
  document.querySelectorAll('.js-cell').forEach(function (cellElement) {
    cellElement.addEventListener('mousedown', onCellMouseDown);
    cellElement.addEventListener('mouseup', onCellMouseUp);
    cellElement.addEventListener('dblclick', onCellDblClick);
  });


  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée
  const bobby = document.querySelector('#bobby');
  let positionX = 0;
  let positionY = 0;
  document.addEventListener('keydown', function(event) {
    // On gère la logique
    console.log(event);
    switch(event.code) {
      case 'ArrowRight':
        positionX++;
        if (positionX > 7) {
          positionX = 7;
        }
        break;
      case 'ArrowDown':
        positionY++;
        if (positionY > 7) {
          positionY = 7;
        }
        break;
      case 'ArrowUp':
        positionY--;
        if (positionY < 0) {
          positionY = 0;
        }
        break;
      case 'ArrowLeft':
        positionX--;
        if (positionX < 0) {
          positionX = 0;
        }
    }
    console.log(positionX, positionY);
    
    // On gère l'affichage
    bobby.classList.add('visible');
    bobby.style.marginLeft = String(positionX * 3) + 'rem';
    bobby.style.marginTop = String(positionY * 3) + 'rem';
  });


  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
