/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

document.addEventListener('DOMContentLoaded', function(){
   
   let moveSquare = document.querySelector('#moveDiv');
   let positionSquare = document.querySelector('.red');
   let modal = document.querySelector('.modal');
   let hideModal = document.querySelector('#hideModal');
   console.log(hideModal);
   console.log(modal);
   console.log(positionSquare);
   console.log(moveSquare);
    let clickCount = 0;
    moveSquare.addEventListener('click', function(){
        clickCount++;
        modal.style.display = 'none';
        console.log(clickCount);
        
        if(clickCount === 1){
            positionSquare.style.left = '820px';
        }
        else if(clickCount === 2){
            positionSquare.style.top = '212px';
        }
        else if(clickCount === 3){
            positionSquare.style.left = '0px';
        }
        else 
        {
            positionSquare.style.top = '0px';
            modal.style.display = 'block';
            clickCount = 0;
            
            
            
            
        }
    });
    hideModal.addEventListener('click', function(){
        
        modal.style.display = 'none';
        
    });
    
});