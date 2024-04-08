// Ajoute la classe de la liste
let element = document.querySelector('p');
element.classList.add('toto');

// Supprime la classe de la liste
let element2 = document.querySelector('p:nth-child(3)');
element2.classList.remove('pioupiou');

// Alterne entre ajouter / supprimer la classe de la liste
let li = document.querySelector('li');
li.classList.toggle('active');
