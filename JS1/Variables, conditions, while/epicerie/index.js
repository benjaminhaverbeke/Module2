/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/* 
Epicerie

Je suis un épicier, je possède une liste d'articles à vendre.
Un client vient consulter ma liste d'articles.
Il peut ou non en acheter un.
Lorsqu'il décide d'en acheter un, celui-ci disparait de ma liste.

// TODO
- Un tableau contient la liste d'articles à vendre (dans Data).
- Afficher la liste d'articles au client.
- Demander au client quel article il veut acheter
- Le client choisi un article à acheter :
  - si l'article est dans la liste : afficher 'ok' et le supprimer de la liste d'articles
  - sinon afficher 'Article indisponible...'

NOTE : Pour des raisons de simplicité,
on simulera la suppression d'un article de la liste
en le remplaçant par une chaine vide '' dans le tableau.

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
const articleVitrine = [];
let acheteurChoix = "";
let compteurArt = 0;



 for (let i = 0; i < articles.length; i++) {
  articleVitrine.push(articles[i]);
}

acheteurChoix = prompt('Quel article vouslez-vous acheter ?');


for (let i = 0; i < articles.length; i++) {
    
    
    if(acheteurChoix === articleVitrine[i]){
      
      alert('ok'+articleVitrine[i]+'supprimé');
      delete articleVitrine[i];
      
    }
    else {
      compteurArt++;
    }
    

}
if(compteurArt === articles.length){
      alert('article indisponible');
    }
 

// Le code sera implémenté ici...
