/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un jeu de devine-lettre.

On demande à l'utilisateur de deviner une lettre
jusqu'à ce qu'il la trouve.

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// Sélectionne une lettre au hasard dans l'alphabet
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let lettreAtrouver = alphabet.charAt(
  Math.ceil(Math.random() * 26) - 1
);

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Tant que l'utilisateur n'a pas trouvé la lettre

let jouer = prompt('voulez-vous continuer de jouer au jeu, oui ou non');


while (jouer === 'oui') {
  console.log(lettreAtrouver);
  let saisie = prompt('Saisir une lettre');

  while (saisie !== lettreAtrouver) {
    saisie = prompt('Saisir une lettre');
    
  }
  alert('Bravo, vous avez trouvé la lettre');
  jouer = prompt('voulez-vous continuer de jouer au jeu, oui ou non');
  lettreAtrouver = alphabet.charAt(
    Math.ceil(Math.random() * 26) - 1
  );
}

alert('fin du jeu');





// On demande à l'utilisateur de deviner la lettre

// On affiche un message de bravo si l'utilisateur a trouvé la lettre
// BONUS : Proposer à l'utilisateur s'il veut continuer de jouer
