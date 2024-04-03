/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Jeu : devine le nombre (entre 10 et 100)

Maintenant, le joueur a 10 essais
A chaque essai :
  - S'il trouve, on affiche le nombre de coups qu'il lui a fallu
  - Sinon, on lui affiche le nombre d'essais restants
  (en plus du message "plus grand" / "plus petit")

TODO
- Reprendre le code de la partie 1 et ajouter les éléments précisés ci-dessus.

*/

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
// Le code sera implémenté ici...
let choixJoueur = 0;
// Le code sera implémenté ici...


/*********************fonction Essai**********************/
function Essai() {
    while (choixJoueur !== nbreATrouver) {
        compteur--;
        compteurTours++;
        choixJoueur = Number(prompt('Sasir un nombre entre 10et 100'));
        if (choixJoueur < 10 || choixJoueur > 110 || typeof choixJoueur !== 'number') {
            alert('Nombre saisi invalide');
        }

        else {



            if (choixJoueur > nbreATrouver) {
                alert('plus petit');
            }
            else if (choixJoueur < nbreATrouver) {
                alert('plus grand');
            }


        }

        if (compteurTours === 10) {
            break;
        }
        else {
            alert('il vous reste' + compteur + ' tours');
        }

    }
}
/************************programme général************************/


alert('début du jeu, génération nombre aléatoire');

let compteur = 10;
let compteurTours = 0;


Essai();


if (choixJoueur === nbreATrouver) {
    alert('vous avez trouvé le nombre en ' + compteurTours + ' tours, reponse :' + nbreATrouver);
}
else {
    alert('vous avez perdu, reponse :' + nbreATrouver);
}
