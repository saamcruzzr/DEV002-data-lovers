import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log (data.films[0].poster);

const prueba = document.getElementById("prueba")
prueba.innerHTML = ` <h1 class= "prueba"> ${data.films[0].title} ${data.films[0].director} </h1> `