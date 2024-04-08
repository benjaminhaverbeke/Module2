// Tout script commence par écouter DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('ready');
    console.log(event);
    
    
    // Lorsque l'utilisateur appuie sur une touche
    document.addEventListener('keydown', function (event2) {
        console.log(event2);
        if (event2.code === 'KeyR') {
            console.log('Salut O');
        }
    });
    
    // Lorsque l'utilisateur clique sur un élément
    let button = document.querySelector('.js-button');
    button.addEventListener('click', function (event3) {
        console.log('click');
        console.log(event3);
    });
    
    // Un listener sur l'événement mousemove
    function onMouveMove (event4) {
        console.log('mouve');
        console.log(event4);
    }
    
    // On ajoute le listener pour qu'il s'exécute lorsque l'événement a lieu
    document.addEventListener('mousemove', onMouveMove);
    
    // Enlève le listener
    document.removeEventListener('mousemove', onMouveMove);
    
    // Lorsque l'utilisateur double clique
    document.addEventListener('dblclick', function(event5) {
        console.log('double click');
        console.log(event5);
    })
});
