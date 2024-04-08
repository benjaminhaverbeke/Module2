// Sélectionner un seul élement (ou le premier qu'il trouve)

let element = document.querySelector('p'); // Sélectionne le 1er <p> sur la page
console.log(element);

element = document.querySelector('li:nth-child(2)'); // Sélectionne la 2ème <li>
console.log(element.innerText);

// Sélectionne la <li> précédée d'un élement ayant la classe test
element = document.querySelector('.test + li');
console.log(element.innerText);

element = document.querySelector('ul');
let li = element.querySelector('li:first-child');
console.log(li);

// Sélectionner une liste d'éléments

let paragraphes = document.querySelectorAll('p');// Sélectionne tous les <p> de la page
console.log(paragraphes);

// Sélectionner un seul élément précis

let a = document.querySelector('ul > li:first-child a');// Retourne null si pas de résultat
console.log(a);

a = document.querySelector('ul > li:first-child img');// Retourne null si pas de résultat
console.log(a.style);// Attention appeler une prop sur un élément null crash le code
// Pour éviter cela, utiliser une condition
if (a !== null) {
    console.log(a.style);
}

// Sélectionner un élément par son identifiant
element = document.getElementById('app');
// ou avec document.querySelector('#app');
