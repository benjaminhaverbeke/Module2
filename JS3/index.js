// Récupérer des données depuis une API JSON
// avec fetch

function funfact(){
    
    
      

 fetch('https://catfact.ninja/fact')
 .then((response) => {
     console.log(response);
     if (response.ok) {
         //response.json().then(console.log)
         response.json().then((data) => {
             
             
             let phrase = data.fact;
             
             let funFact = document.querySelector('body p');
  
  funFact.textContent = phrase;
  
         })
     } else {
         // La requete a echoué
         console.log('La requête a échoué');
         console.log(response);
     }
 });
    
}



 document.addEventListener('DOMContentLoaded', function(){
  

  document.querySelector('button').addEventListener('click', funfact)
  
 
 
  
  
  
 });