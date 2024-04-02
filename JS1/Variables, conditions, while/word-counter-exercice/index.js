/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de compter les mots commençant
par la lettre "s".

Exemple d'algorithme (pour t'aider) :
- Parcourir la liste de mots
  - Vérifier si la première lettre est égale à s
    - Si oui, incrémente le compteur

- Affiche le nombre de mots commençant par s
NOTE : En javascript, une chaine de caractères est considérée comme un tableau de caractères
Par exemple : "TODO" == ["T", "O", "T", "O"]

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
let compteur = 0;
// Le code sera implémenté ici...
for(let i = 0; i <liste_mots.length; i++){
    
    
    if(liste_mots[i].substr(0, 1) === 's'){
        compteur++;
    };
    
    
}

console.log(compteur);