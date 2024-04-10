'use strict'

// L'objet du DOM représentant la balle
let ball;

// La direction initial de la balle (1 à droite, -1 à gauche)
let ballDirectionX = 1;

// Position initial de la balle sur l'axe X
let ballPosX = 100;

// Limite à droite de l'écran
let limitRightX;

document.addEventListener('DOMContentLoaded',function(){

    // On récupère la balle
    ball = document.querySelector('#ball');

    // On récupère la limite droite de l'écran (taille de l'écran moins la moitier de la largeur de la balle)
    limitRightX = window.innerWidth - (ball.clientWidth);

    requestAnimationFrame(animateBall);

});

function animateBall()
{
    // on demande que cette fonction soit executés au prochain rafraichissement
    requestAnimationFrame(animateBall);

    // on modifie la position de la balle en y ajoutant 1 ou soustrayant 1 selon la direction
    ballPosX += 6 * ballDirectionX;
    
    // on modifie le style de l'objet du DOM
    ball.style.left = `${ballPosX}px`;

    //si la balle atteind les limites droite ou gauche de l'écran  - On multiplie par -1 la direction pour l'inverser !
    if (ballPosX <= 0 || ballPosX >= limitRightX)  
        ballDirectionX*=-1;

}