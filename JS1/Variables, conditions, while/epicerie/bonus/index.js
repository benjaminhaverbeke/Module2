/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/* 
Epicerie - BONUS 1

On propose au client d'acheter un article tant qu'il y en a de disponibles

// TODO
Tant qu'il reste des articles différent de '',
exécuter le programme de la partie 1

Epicerie - BONUS 2

Proposer au client d'ajouter des articles dans la liste

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

const articles = [
  'Chips',
  'Saucisson',
  'Glace',
  'Fraises',
  'Vin',
  'Sucre',
  'Bière',
  'Mouchoirs'
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...
const articleVitrine = [];
let acheteurChoix = "";
let compteurArt = 0;
let emptyVitrine = 0;

for (let i = 0; i < articles.length; i++) {
  articleVitrine.push(articles[i]);
}

function Achat() {


  acheteurChoix = prompt('Quel article voulez-vous acheter ?');

  let verifOk = false;
  for (let i = 0; i < articles.length; i++) {


    if (acheteurChoix === articleVitrine[i]) {

      alert('ok ' + articleVitrine[i] + ' supprimé');
      delete articleVitrine[i];
      verifOk = true;
    }
    
  }
  if (verifOk === false) {
    alert('article indisponible');
  }

}
/*****************fonction verif ********************/


function verifEmptyVitrine() {
  
  for (let i = 0; i < articleVitrine.length; i++) {
    

    if (articleVitrine[i] !== undefined) {
      return false;
    }

  }
  
}
/****************choix achat vente***********************/


  
  let UserChoice = prompt('voulez-vous vendre ou acheter des articles ? vendre ou acheter');
  
  if(UserChoice === 'vendre'){
    
  }
  
  






/****************programme général********************/


Achat();

while (verifEmptyVitrine() === false) {
  Achat();
}

alert('vous avez tout acheté !');