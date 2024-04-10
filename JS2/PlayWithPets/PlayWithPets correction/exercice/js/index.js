/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener('DOMContentLoaded', function() {

    console.log('Play with pets');

    // TODO : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe js-close-button)
    // Fermer la modale
    let helpButton = document.querySelector('#help-button');
    console.log(helpButton);
    let popUpHelp = document.querySelector('#popup-help');
    console.log(popUpHelp);
    helpButton.addEventListener('click', function() {
        popUpHelp.classList.add('visible');
    });
    
    let closeModaleButton = document.querySelector('.js-close-button');
    console.log(closeModaleButton);
    closeModaleButton.addEventListener('click', function() {
        popUpHelp.classList.remove('visible');
    });

    // TODO : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .js-main-cover
    document.addEventListener('keydown', function(event) {
        console.log(event);
        let cover = document.querySelector('.js-main-cover');

        if (event.code === 'ArrowLeft') {
            cover.style.transform = "translate(-200px)";
            cover.style.transition = '3s';
        } else if (event.code === 'ArrowRight') {
            cover.style.transform = "translate(200px)";
            cover.style.transition = '3s';
        }
    });

    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .js-race-chat-cover::after
    const btn = document.querySelector('.js-race-chat-cover button');

    btn.addEventListener('click', function() {
        let element = document.querySelector('.js-race-chat-cover');
        
        element.classList.add('visible');
    })
    
    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .js-race-chat-cover
    let raceChatImg = document.querySelector('.js-race-chat-cover img');
    raceChatImg.addEventListener('click', function() {
        raceChatImg.src = 'images/chat-mignon.png';
    });

    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .js-race-chat-list
    document.querySelector('.js-race-chat-list li:nth-child(6)').style.fontWeight = 'bold';
    document.querySelector('.js-race-chat-list li:nth-child(10)').style.fontWeight = 'bold';
});
