import Admin from './Admin.js'


const Ben = new Admin();

Ben.name = "benjamin";
Ben.firstName = "haverbeke";


console.log(Ben);
console.log(Ben.canEditArticles());

console.log(new Admin());