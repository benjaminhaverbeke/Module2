/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Jeu : devine le nombre (entre 10 et 100)

- Un nombre entre 10 et 100 est choisi aléatoirement

- Tant que le joueur n'a pas trouvé le nombre
  - Demander au joueur de saisir un nombre :
    - S'il est plus petit que le nbre à trouver
    afficher "Plus grand"
    - S'il est plus grand que le nbre à trouver
    afficher "Plus petit"
    - S'il a trouvé, afficher "Gagné" et arrêter le jeu

IMPORTANT : Gérer le cas où l'utilisateur saisi autre chose qu'un nombre

*/

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Génération d'un nombre aléatoire entre 10 et 100
let nbreATrouver = Math.ceil(Math.random() * 100) + 9;
let choixJoueur = 0;
// Le code sera implémenté ici...

while (choixJoueur !== nbreATrouver) {
    choixJoueur = parseInt(prompt('Sasir un nombre entre 10et 100'));
    if (choixJoueur < 10 ||  choixJoueur > 100) {
        alert('Nombre saisi invalide');
    }
    else if (typeof choixJoueur === 'string') {
        alert('Erreur de sasie, seulement des nombres');
    }
    else {



        if (choixJoueur > nbreATrouver) {
            alert('plus petit');
        }
        else if (choixJoueur < nbreATrouver) {
            alert('plus grand');
        }






    }
}
alert('vous avez trouvé le nombre, reponse :'+nbreATrouver);
