/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*
L'objectif est d'implémenter le célèbre jeu du morpion.

Chaque joueur joue à tour de rôle :
 - Le joueur X joue
 - Le joueur O joue
 - Le jeu continue jusqu'à ce qu'un joueur gagne ou qu'il n'y a plus de case vide


Exemple d'algorithme (pour t'aider) :
-------------------------------------

- Création du tableau de jeu, tel qu'il s'affichera dans la console
let jeu = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

- Création du tableau de symboles : X et O
let symboles = [
  "X",
  "O"
];

- Définition de la variable qui contiendra le symbole du joueur
- Définition de la variable qui contiendra le numéro de la ligne
- Définition de la variable qui contiendra le numéro de la colonne

- Début de la boucle
while (true) {
  - Affichage du tableau de jeu dans la console
  - Demande au joueur de choisir une ligne
  - Demande au joueur de choisir une colonne
  - Vérification de la validité de la ligne : entre 0 et 2
  - Si non valide, afficher un message d'erreur et refaire la demande

  - Vérification de la validité de la colonne : entre 0 et 2
  - Si non valide, afficher un message d'erreur et refaire la demande

  - Vérification que la case est vide
  - Si non valide, afficher un message d'erreur et refaire la demande

  - Attribution du symbole du joueur à la case dans le tableau de jeu
  - Vérification de la victoire du joueur
  - S'il gagne, afficher un message de fin de partie

  - Vérification s'il reste des cases vides
  - Si toutes les cases sont remplies, le jeu est terminé par un nul

  - Changement de joueur
  - Changement du symbole du joueur : X ou O
}

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/

// Les variables seront définies ici...
let jeu = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


let symboles = ['O', 'X'];

let joueur1 = '';
let joueur2 = '';
let NumberRow = 0;
let NumberColumn = 0;
let JoueurTour = "";
let tour = 0

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

/**************************morpion*****************************/
function morpion(JoueurTour) {
  

  NumberRow = prompt('choisir une ligne');

  while (NumberRow < 0 || NumberRow > 2) {
    alert('erreur de saisie, recommencez');
    NumberRow = prompt('choisir une ligne');
  }

  NumberColumn = prompt('choisir une colonne');
  while (NumberColumn < 0 || NumberColumn > 2) {
    alert('erreur de saisie, recommencez');
    NumberColumn = prompt('choisir une colonne');
  }

  while (jeu[NumberRow][NumberColumn] !== null) {
    alert('la case est déjà pleine');
    NumberRow = prompt('choisir une ligne');
    while (NumberRow < 0 || NumberRow > 2) {
      alert('erreur de saisie, recommencez');
      NumberRow = prompt('choisir une ligne');
    }

    NumberColumn = prompt('choisir une colonne');
    while (NumberColumn < 0 || NumberColumn > 2) {
      alert('erreur de saisie, recommencez');
      NumberColumn = prompt('choisir une colonne');
    }

  }
  jeu[NumberRow][NumberColumn] = JoueurTour;


}

/**************vérification victoire******************/

function victoire() {
  let CheckRow = 0
  let CheckColumn = 0;
  let result = 0;

  for (CheckRow = 0; CheckRow <= 2; CheckRow++) {
    console.log(jeu[CheckRow]);

    for (CheckColumn = 0; CheckColumn <= 2; CheckColumn++) {
      if (jeu[CheckRow][CheckColumn] === JoueurTour) {
        console.log
        result++;
      }
      else {
        break;
      }

    }

  }
  if (result === 3) {
    alert('ligne');
    return true;

  }




  for (CheckColumn = 0; CheckColumn <= 2; CheckColumn++) {

    if (jeu[0][CheckColumn] === JoueurTour && jeu[1][CheckColumn] === JoueurTour && jeu[2][CheckColumn] === JoueurTour) {

      alert('colonne');
      return true;

    }
  }

  if (jeu[0][0] === JoueurTour && jeu[1][1] === JoueurTour && jeu[2][2] === JoueurTour) {

    console.log('diago1');
    return true;

  }
  else if (jeu[0][2] === JoueurTour && jeu[1][1] === JoueurTour && jeu[2][0] === JoueurTour) {

    console.log('diago2');
    return true;

  }
  else {
    console.log('else');
    return false;

  }

alert(`victoire de ${JoueurTour}`);
}


/************************Choix Symbole*********************************/

function choixSymbole() {

  joueur1 = prompt('veuillez choisir votre symbole X ou O');
  while (joueur1 !== 'X' && joueur1 !== 'O') {
    alert('erreur de saisie, tapez X ou O');
    joueur1 = prompt('veuillez choisir votre symbole X ou O');
    console.log(joueur1)
  }
  if (joueur1 === 'X') {
    joueur2 = 'O';
  }
  else {
    joueur2 = 'X';
  }
}



/************ tours********************/


choixSymbole();

for (let i = 0; i < 9; i++) {

  if (tour % 2 === 0) {
    alert('tour de joueur1');
    JoueurTour = joueur1;
    morpion(JoueurTour);
    if(victoire() === true){
      alert(JoueurTour+'a gagné la partie');
      break;
    }

  }
  else {
    JoueurTour = joueur2;
    alert('tour de joueur2');
    morpion(JoueurTour);
    if(victoire() === true){
      alert(JoueurTour+'a gagné la partie');
      break;
    }
    
    
  }
  tour++;
  


}
if(tour === 8){
  alert('Egalité, fin de la partie');
}






/*****************programme général********************/


/*
tourDeJeu(tour);

if (JoueurTour === joueur1) {
  alert('joueur1 a gagné la partie');
}
else {
  alert('joueur2 a gagné la partie');
}
*/






/*  
  if (jeu[0][0] === 'X' && jeu[0][1] === 'X' && jeu[0][2] === 'X') {
    return true;
  }
  else if (jeu[1][0] === 'X' && jeu[1][1] === 'X' && jeu[1][2] === 'X') {

    return true;
  }
  else if (jeu[2][0] === 'X' && jeu[2][1] === 'X' && jeu[2][2] === 'X') {
    return true;
  }
}
*/
