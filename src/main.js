import data from './data/ghibli/ghibli.js';
import { promByScore, filterByDirector, sortByAntigua, sortByReciente, filterByScore  } from './data.js';
// , sumaByScore

// CÁLCULO
// function resultados() {
//     document.getElementsByClassName("contador").innerHTML = "Total " + promByScore;
//   }

const sum = "Score promedio " + promByScore(data.films);
document.getElementById('contador').innerHTML = sum;

// ejemplo. probar ****
// function incluir_alumno() {
//   var nombre = document.getElementById("nombre").value;
//   var apellido = document.getElementById("apellido").value;
//   var ciclo = document.getElementById("ciclo").value;

//   // Crea el nuevo alumno
//   var nuevo_alumno = alumno(nombre, apellido, ciclo);

//   // Escribe el nuevo alumno
//   document.getElementById("resultado").innerHTML = nuevo_alumno.nombre + " " + nuevo_alumno.apellido + " " + nuevo_alumno.ciclo;
// }

// const total = sumaByScore(data).innerHTML;
// document.getElementsByClassName("contador");
// const total = suma (){
//   let sum = sumaByScore(data)
// }

// // const resultado = total + suma;
// console.log(total)
// total.innerHTML = sum;
// console.log(suma)
// console.log(resultado)
//  document.getElementById("menu-principal").addEventListener("click", function(){
//   const calculoSuma = document.getElementsByClassName("contador");
//   console.log(calculoSuma)
//   // calculoSuma.innerHTML ="";
//   // let suma = 0;
//   // data.films.for(let n of suma){
//   //   suma += n;
//   // }
// })
// ******const contador = document.getElementById("contador");
// document.getElementById("menu-principal").addEventListener("click",function() { 
//   let sumas = sumaByScore(data); 
//   // let suma = sumas/20 ;
//   //enlazar función filter de data.js
//     // let menu = document.getElementById("menu-principal");
//     // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja

// return contador + sumas
// });


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
  let director = filterByDirector(event.target.id, data.films); //enviar dos argumentos
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

document.getElementById("ordenDes").addEventListener("click",function() { 
  console.log ("Muestra Más antiguas");
  let ordenar = sortByAntigua(data.films);
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
document.getElementById("ordenAsc").addEventListener("click",function() { 
  console.log ("Muestra Más recientes");
  let ordenar = sortByReciente(data.films);
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
  let score = filterByScore(0, 69, data.films); //enviar 3 argumentos
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
  let score = filterByScore(70, 80, data.films); //enviar 3 argumentos
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
  let score = filterByScore(81, 85, data.films); //enviar 3 argumentos
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
  let score = filterByScore(86, 90, data.films); //enviar 3 argumentos
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
  let score = filterByScore(91, 95, data.films); //enviar 3 argumentos
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
  let score = filterByScore(96, 100, data.films); //enviar 3 argumentos
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

