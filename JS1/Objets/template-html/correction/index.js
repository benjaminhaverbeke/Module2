/**************************************************************/
/*                            Data                            */
/**************************************************************/

let template = '\
  <html>\n\
    <head>\n\
      <title>{{title}}</title>\n\
    </head>\n\
    <body>\n\
      <h1>{{title}}</h1>\n\
      <p>{{text}}</p>\n\
    </body>\n\
  </html>'
;

let data = {
  title: 'My page',
  text: 'This is my page'
};

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Dans template, remplacer les tags {{...}} par le contenu de data :
// - {{title}} par le champ title de data
// - {{text}} par le champ text de data
let html = template
  .replaceAll('{{title}}', data.title)
  .replaceAll('{{text}}', data.text);

// Afficher le résultat
console.log(html);

/* Méthode 2

  for(let key in data) {
    template = template.replaceAll(
      '{{' + key + '}}',
      data[key]
    )
  }

*/
