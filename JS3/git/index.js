const apiUrl = 'https://api.github.com/users/'


function dateCreation(DateDebut) {

    const today = new Date().getTime();
    const Creation = Date.parse(DateDebut);
    const nbjours = Math.floor((today - Creation) / (1000 * 60 * 60 * 24));

    return nbjours;

}

function gitRepo(URLrepo) {


    fetch(URLrepo)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                //response.json().then(console.log)
                response.json().then((data) => {

                    console.log(data);
                    let RepoCollection = [];
                    let tableRepo = document.querySelector('.js-repo');
                    for (let i = 0; i < data.length; i++) {

                        const repo = data[i];
                        let RepoDate = repo.created_at.substring(0, 10);
                        
                        RepoCollection.push(
                            `<article class="repoElement" data-id="${repo.id}">
                            <p><span class="gras">Nom :</span> ${repo.name}</p>
                            <p><span class="gras">File path:</span> ${repo.full_name}</p>
                            <p><span class="gras">Créé le :</span> ${RepoDate}</p>
                            </article>`
                        );


                    }

                   
                    tableRepo.innerHTML = RepoCollection.join('');

                })

            }
            else {
                // La requete a echoué
                console.log('La requête a échoué');
                console.log(response);
            }
        });


}


function gitUser() {
    let userName = document.querySelector('.UserName').value;


    event.preventDefault()

    fetch(apiUrl + userName)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                //response.json().then(console.log)
                response.json().then((data) => {

                    console.log(data);
                    let dataUser = document.querySelector('.js-user');
                    let dataTable = [];

                    let DateDebut = data.created_at;

                    let words = DateDebut.split('-')

                    let day = new Date(DateDebut).getDate();

                    let dataJours = dateCreation(DateDebut);


                    let URLrepo = data.repos_url;
                    let RepoList = gitRepo(URLrepo);
                    let RepoDisplay = RepoList;
                    console.log(RepoList)
                    


                    dataTable.push(

                        `<article class="userArticle" data-id="${data.id}">
                        <img class="avatar" src="${data.avatar_url}"/>
                        <h2 class="login">${data.login}</h2>
                        <p class="repo">Nombre de repo : ${data.public_repos}</p>
                        <p class="nbjours">Utilisateur créé le ${day}/${words[1]}/${words[0]}, il y a ${dataJours} jours</p>
                        
                        
                        </article>`

                    );

                    dataUser.innerHTML = dataTable.join('');

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
