/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un filtre anti-spam.

On a en entrée du programme :
- un tableau d'email reçus, comportant des emails frauduleux et des emails valides
- une liste blanche d'email, comportant les adresses email considérées comme valides

Le programme doit retourner un tableau "boite_reception" contenant uniquement les email valides,
c'est à dire les emails qui sont dans la liste blanche.

Le tableau de retour "boite_reception" pourra par exemple être envoyé à un serveur.
Pour notre exercice, on se contentera de l'afficher dans la console.


// TODO
- Créer le programme de filtrage qui stocke dans le tableau "boite_reception"
les emails présents dans email_recus qui ont une adresse email dans liste_blanche
- Afficher le tableau de retour "boite_reception" dans la console.

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let liste_blanche = [
  'larissa@gmail.com',
  'hacker44@gmail.com'
];

let email_recus = [{
  from: 'toto@gmail.com',
  content: 'Bonjour toi !',
},{
  from: 'larissa@gmail.com',
  content: 'Hé Salut !',
},{
  from: 'hacker44@gmail.com',
  content: 'Je suis un hacker !',
},{
  from: 'hacker@gmail.com',
  content: 'Piratage en cours...',
}];

let boite_reception = [];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code a écrire ici...

for(const key in email_recus){
  const value = email_recus[key];
  console.log(value.from);
  for(let i = 0; i < liste_blanche.length; i++){
    
    if(liste_blanche[i] === value.from){
      console.log(liste_blanche[i]);
      boite_reception.push(value);
    }
    
    
  }
  
  
}

console.log(boite_reception);