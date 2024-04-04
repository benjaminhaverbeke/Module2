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


/**************************************************************/
/*                        Main Program                        */
/**************************************************************/


document.addEventListener('DOMContentLoaded', function() {

  let caseJeu = document.querySelectorAll('.grid div');
  console.log(caseJeu);
  event.preventDefault();

  caseJeu.forEach((element) => element.addEventListener('click', function() {

      console.log(element);



  }));


});
