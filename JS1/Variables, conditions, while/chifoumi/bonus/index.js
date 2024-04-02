/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le célèbre jeu de chifoumi en trois manches.

Ajouter au code de la partie 1, la gestion des 3 manches.
Lors de chaque manche :
- Calculer le score de l'ordinateur et du joueur
- Afficher le score final

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/

// Les variables à mettre ici...

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code du programme à écrire ici...
let randomChoice = Math.ceil(Math.random() * 3); // Retourne un nombre aléatoire entre 1 et 3

// Les variables à mettre ici...

let UserChoice = "";
let pierre = 1;
let feuille = 2;
let ciseaux = 3;

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
function VerifSaisie() {
    if (UserChoice === 'feuille' || UserChoice === 'pierre' || UserChoice === 'ciseaux') {
        return true;
    }
    else {
        return false
    }
}


function chifumi(UserChoice, randomChoice) {
    
    UserChoice = prompt('pierre, feuille, ciseaux ?');
    

    if (UserChoice === 'pierre') {

        if (randomChoice === 'pierre') {
            alert('Lordinateur a aussi pierre, égalite !');

        }
        else if (randomChoice === feuille) {
            alert('Lordinateur a feuille, vous avez perdu !');
            ComputerScore = ComputerScore + 1;
        }
        else {
            alert('Lordinateur a ciseaux, vous avez gagné !');
            UserScore = UserScore + 1;
        }

    }

    else if (UserChoice === 'feuille') {
        if (randomChoice === pierre) {
            alert('Lordinateur a pierre, vous avez gagné !');
            UserScore = UserScore + 1;
        }
        else if (randomChoice === feuille) {
            alert('Lordinateur a aussi feuille, égalite !');
        }
        else {
            alert('Lordinateur a ciseaux, vous avez perdu !');
            ComputerScore = ComputerScore + 1;
        }
    }
    else {
        if (randomChoice === pierre) {
            alert('Lordinateur a pierre, vous avez perdu !');
            ComputerScore = ComputerScore + 1;
        }
        else if (randomChoice === feuille) {
            alert('Lordinateur a aussi feuille, gagné !');
            UserScore = UserScore + 1;
        }
        else {
            alert('Lordinateur a ciseaux, égalité !');
        }
    }


}









let UserScore = 0;
let ComputerScore = 0;
let manche = 0;

for (let i = 0; i < 3; i++) {
    manche = manche + 1;
    
    chifumi(UserChoice, randomChoice);
    alert('fin de la ' + manche + 'ere manche');
}

if (UserScore > ComputerScore) {
    alert('Vous avez gagné la partie' + UserScore + ' points pour vous et ' + ComputerScore + ' pour lordinateur');
}
else if (UserScore < ComputerScore) {
    alert('Vous avez perdu la partie' + UserScore + ' points pour vous et ' + ComputerScore + ' pour lordinateur');
}

else {
    alert('Egalité Joueur : ' + UserScore + 'Ordinateur : ' + ComputerScore);
}
