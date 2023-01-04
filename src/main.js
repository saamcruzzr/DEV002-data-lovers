import data from './data/ghibli/ghibli.js';
import { filterByDirector, sortByA, sortByD, filterByScore } from './data.js';

//


// TODAS LAS TARJETAS 

const tarjetas = document.getElementById("tarjetas");
data.films.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta
});

// BOTÓN TODAS 

  document.getElementById("todas").addEventListener("click",function() {
  const tarjetas = document.getElementById("tarjetas");
  tarjetas.innerHTML = "";
  console.log (tarjetas);
data.films.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    console.log ("Mostrar Todas");
  });

// BOTONES DIRECTORES
document.getElementById("directores").addEventListener("click",function(event) { 
  console.log (event.target.id);
  let director = filterByDirector(event.target.id, data); //enviar dos argumentos
  //enlazar función filter de data.js
  tarjetas.innerHTML = "";
  director.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});

// BOTONES LANZAMIENTO

document.getElementById("ordenAsc").addEventListener("click",function() { 
  console.log ("Muestra Más recientes");
  let ordenar = sortByD(data);
  tarjetas.innerHTML = "";
  ordenar.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
}); 
document.getElementById("ordenDes").addEventListener("click",function() { 
  console.log ("Muestra Más antiguas");
  let ordenar = sortByA(data);
  tarjetas.innerHTML = "";
  ordenar.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
}); 

//BOTONES SCORES

document.getElementById("0-69").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByScore(0, 69, data); //enviar 3 argumentos
  tarjetas.innerHTML = "";
  score.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});
document.getElementById("70-80").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByScore(70, 80, data); //enviar 3 argumentos
  tarjetas.innerHTML = "";
  score.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});
document.getElementById("81-85").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByScore(81, 85, data); //enviar 3 argumentos
  tarjetas.innerHTML = "";
  score.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});
document.getElementById("86-90").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByScore(86, 90, data); //enviar 3 argumentos
  tarjetas.innerHTML = "";
  score.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});
document.getElementById("91-95").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByScore(91, 95, data); //enviar 3 argumentos
  tarjetas.innerHTML = "";
  score.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});
document.getElementById("96-100").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByScore(96, 100, data); //enviar 3 argumentos
  tarjetas.innerHTML = "";
  score.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});