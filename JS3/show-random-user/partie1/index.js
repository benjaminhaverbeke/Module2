/* 
  Récupérer depuis l'API un utilisateur généré aléatoirement
  Puis afficher les informations récupérées dans la console
*/
const apiUrl = "https://randomuser.me/api";



fetch(apiUrl)
  .then((response) => {

    console.log(response);
    if (response.ok) {

      response.json().then((data) => {

        let personn = data.results;
        console.log(data)
        console.log(personn[0]);
        let donnee = Object.values(personn[0])
        console.log(donnee)
      })
    }
    else {
      console.log('la requete a echoue');
      console.log(response);

    }

  })
