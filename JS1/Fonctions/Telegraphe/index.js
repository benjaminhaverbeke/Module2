/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif est de créer un télégraphe.
Cela consiste à convertir un texte alphanumérique en code morse.
Les espaces seront gardés tel quels.

TODO
- Demander à l'utilisateur de saisir un texte à télégraphier
- Convertir le texte en code morse
- Afficher le code morse dans la console

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...


let input = prompt('Ecrire un texte');
let split = [];
let result = [];
for(const char in input){
  
  const value = input[char];
  
  split.push(value);
}


for(const replace in split){
  
  const index = alphabet.indexOf(split[replace]);
  
  split[replace] = codeMorse[index];
 
  result.push(split[replace]);
}

console.log(result.join(' '));