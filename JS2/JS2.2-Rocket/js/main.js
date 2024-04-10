'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let count = 10;
let timerId = null;
let cadran = document.querySelector('#billboard span');
console.log(cadran);
let rocket = document.querySelector('#rocket');
let gris = document.querySelector('#firing-button');

let ciel = document.querySelector('main');
const tabStar = ['tiny', 'big', 'normal'];
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function stockStar(){
    
    
    for(let i = 0; i <= 150; i++){
        let randomStar = Math.ceil(Math.random()*2);
        console.log(randomStar);
        let newStar = document.createElement('div');
        console.log(newStar);
        let randomX = Math.random()*2150;
        let randomY = Math.random()*1000;
        newStar.style.left = randomX+"px";
        newStar.style.top = randomY+"px";
        newStar.classList.add('star');
        newStar.classList.add(tabStar[randomStar]);
        ciel.appendChild(newStar);
        console.log(tabStar[randomStar]);
        console.log(ciel.appendChild(newStar));
        
        
    }
    
    
    
    
    
    
    
}
function minuteur() {

    cadran.innerText = count;
    

        count--;
        console.log(count);
        
        if (count < 0) {
        clearInterval(timerId);
        count = 0;
        
        gris.classList.add('disabled');
        
        rocket.src = './images/rocket3.gif';
        rocket.classList.add('tookOff');
    }

}
function start(){
    timerId = window.setInterval(minuteur, 1000);
    
    rocket.src = './images/rocket2.gif';
    minuteur();
    if(count < 0){
        console.log('ok')
        
    }
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener('DOMContentLoaded', function(){
    stockStar();
    let firing = document.querySelector('#firing-button').addEventListener('click', start);
    
    
    
    
    
});


