const apiUrl = 'https://api.github.com/users/'


let testUserName = 'benjaminhaverbeke';

function dateCreation(DateDebut){
    
    const today = new Date();
    const year = today.getFullYear();
    console.log(year);
  const month = today.getMonth() + 1; // Months are zero-indexed in JavaScript
  console.log(month)
  const day = today.getDate();
  console.log(day)  
    
    
}
function gitUser() {
    let userName = document.querySelector('.UserName').value;


    event.preventDefault()
    console.log(apiUrl + userName)
    fetch(apiUrl + userName)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                //response.json().then(console.log)
                response.json().then((data) => {

                    console.log(data);
                    let loginUser = data.login;
                    console.log(loginUser)
                    let loginDisplay = document.querySelector('.loginDisplay')
                    loginDisplay.textContent = loginUser;
                    let repoUser = data.public_repos;
                    let repoDisplay = document.querySelector('.repo');
                    repoDisplay.textContent = `Nombre de repo : ${repoUser}`;
                    
                    let avatarDisplay = document.querySelector('.avatar');
                    avatarDisplay.src = data.avatar_url;
                    let dateDisplay = document.querySelector('.date');
                    
                    let DateDebut = data.created_at;
                    dateCreation(DateDebut);
                    

                })


            }
            else {
                // La requete a echoué
                console.log('La requête a échoué');
                console.log(response);
            }
        });

}


document.addEventListener('DOMContentLoaded', function() {


    let submit = document.querySelector('.submit');

    submit.addEventListener('click', gitUser);

})
