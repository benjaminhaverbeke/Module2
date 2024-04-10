/* 
  Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis générer du HTML depuis Javascript pour afficher le nom et le prenom dans le navigateur

  NOTE : Utiliser document.createElement() pour se faire.
*/
const apiUrl = "https://randomuser.me/api";
function IDgenerate(){
  
  fetch(apiUrl)
  .then((response) => {

    console.log(response);
    if (response.ok) {

      response.json().then((data) => {

        let donnee = data.results
        console.log(donnee);
        let id = donnee[0].name;
        console.log(id)
        let prenom = id.first;
        console.log(prenom)
        let nom = id.last
        let main = document.querySelector('main');
       let para =  document.createElement('p');
      main.appendChild(para)
        
        para.textContent = `${prenom} ${nom}`;
        
      })
    }
    else {
      console.log('la requete a echoue');
      console.log(response);

    }

  })
  
}

  
  document.addEventListener('DOMContentLoaded', function(){
    
    
    document.querySelector('main button').addEventListener('click', IDgenerate);
    
    
    
    
  })