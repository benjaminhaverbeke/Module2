/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    console.log('Play with pets');

    // TODO : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    let helpButton = document.querySelector('.help-button');
    let helpPopup = document.querySelector('#popup-help');
    let helpClose = document.querySelector('.js-close-button');


    helpButton.addEventListener('click', function() {

        helpPopup.style.display = 'block';

    });

    helpClose.addEventListener('click', function() {

        helpPopup.style.display = 'none';

    });


    let MainCover = document.querySelector('.js-main-cover img');

           
        
        let count = 0;
    document.addEventListener('keydown', function() {
        
        MainCover.style.position = 'relative';
        count.toString();
        let left = count.toString();
        

        
        
       
        if (event.code === "ArrowRight") {

                
            MainCover.style.left = left+"px";
            count = count + 20;
        }
        else if(event.code === "ArrowLeft"){
            
            MainCover.style.left = left+"px";
            count = count - 20;
        }

    })


    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe js-close-button)
    // Fermer la modale


    // TODO : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .js-main-cover


    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .js-race-chat-cover::after
let ChatRaceToggle = document.querySelector(".js-race-chat-cover");
let ChatRace = document.querySelector(".race-chat-cover");
let ChatRaceButton = document.querySelector(".js-race-chat-cover button");
console.log(ChatRaceButton);
console.log(ChatRace.classList);


ChatRaceButton.addEventListener('click', function(){
    
    ChatRace.classList.toggle('visible');
    
});
    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .js-race-chat-cover
        let ChatCount = 0;
ChatRace.addEventListener('click', function(){
    
    if(ChatCount%2 === 0)
    
    
    
});
    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .js-race-chat-list

});
