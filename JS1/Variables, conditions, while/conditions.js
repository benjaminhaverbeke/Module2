// === Operateur de comparaison pour tester une égalité
// Une operation de comparaison retourne un booleen
/*
console.log('a' === 'b');

if ('a' === 'b') {
    console.log('Egalite est true')
}

console.log('Dans tout les cas, continue le processus');
*/
// Condition si, sinon
/*
if ('a' === 'b') {
    console.log('Egalite est true')
} else {
    console.log('Egalite est false')
}

console.log('Dans tout les cas, continue le processus');
*/
// Chainer les si, sinon si, sinon
/*
if ('a' === 'b') {
    console.log('Egalite a === b est true')
    
} else if('c' === 'c') {
    console.log('Egalite c === c est true')
    
} else {
    console.log('Aucune egalite');
}

console.log('Dans tout les cas, continue le processus');
*/

let state = 'started';
/*
if (state === 'started') {
    console.log('Démarré');
} else if (state === 'stopped') {
    console.log('Arrêté');
} else if (state === 'inprogress') {
    console.log('En cours');
} else {
    console.log('Etat ' + state + ' inconnu');
}
*/
// Peut s'écrire

switch(state) {
    case 'started':
        console.log('Démarré');
        break;
    case 'stopped':
        console.log('Arrêté');
        break;
    case 'inprogress':
        console.log('En cours');
        break;
    default:
        console.log('Etat ' + state + ' inconnu');
}
