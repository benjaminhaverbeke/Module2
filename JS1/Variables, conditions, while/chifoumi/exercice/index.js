/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le code du célèbre jeu de chifoumi.

Règles :
- Feuille gagne contre Pierre : La feuille enveloppe la pierre
- Pierre gagne contre Ciseaux : La pierre détruit les ciseaux
- Ciseaux gagne contre Feuille : Les ciseaux coupent la feuille

Algorithme à implémenter :
- Choix aléatoire de l'ordinateur entre : feuille / pierre / ciseaux
- Demander à l'utilisateur son choix entre : feuille / pierre / ciseaux
- Déterminer le vainqueur (égalité si l'ordinateur et le joueur ont choisi la même chose)
- Afficher le vainqueur

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/

let randomChoice = Math.ceil(Math.random() * 3); // Retourne un nombre aléatoire entre 1 et 3

// Les variables à mettre ici...

let UserChoice = prompt('pierre, feuille, ciseaux ?');
let pierre = 1;
let feuille = 2;
let ciseaux = 3;

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
if (UserChoice === 'pierre') {

    if (randomChoice === 'pierre') {
        alert('Lordinateur a aussi pierre, égalite !');
    }
    else if (randomChoice === feuille) {
        alert('Lordinateur a feuille, vous avez perdu !');
    }
    else {
        alert('Lordinateur a ciseaux, vous avez gagné !');
    }

}

else if (UserChoice === 'feuille') {
    if (randomChoice === pierre) {
        alert('Lordinateur a pierre, vous avez gagné !');
    }
    else if (randomChoice === feuille) {
        alert('Lordinateur a aussi feuille, égalite !');
    }
    else {
        alert('Lordinateur a ciseaux, vous avez perdu !');
    }
}
else if (UserChoice === 'ciseaux') {
    if (randomChoice === pierre) {
        alert('Lordinateur a pierre, vous avez perdu !');
    }
    else if (randomChoice === feuille) {
        alert('Lordinateur a aussi feuille, gagné !');
    }
    else {
        alert('Lordinateur a ciseaux, égalité !');
    }
}
