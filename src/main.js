import data from './data/ghibli/ghibli.js';
import { promByScore, filterByDirector, sortByAntigua, sortByReciente, filterByScore  } from './data.js';

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
    // document.getElementById('contador').innerHTML = ("Total " + tarjeta.length);
    // console.log(tarjeta)
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
    document.getElementById('resultado').innerHTML = "Resultado Todas";
    document.getElementById('contador').innerHTML = sum;
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
    document.getElementById('resultado').innerHTML = "Resultado " + event.target.id;
    document.getElementById('contador').innerHTML = "Total " + director.length;
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
    document.getElementById('resultado').innerHTML = "Resultado Más Antiguas";
    document.getElementById('contador').innerHTML = "Total " + data.films.length;
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
    document.getElementById('resultado').innerHTML = "Resultado Más Recientes";
    document.getElementById('contador').innerHTML = "Total " + data.films.length;
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
    document.getElementById('resultado').innerHTML = "Resultado 0 a 69";
    document.getElementById('contador').innerHTML = "Total " + score.length;
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
    document.getElementById('resultado').innerHTML = "Resultado 70 a 80";
    document.getElementById('contador').innerHTML = "Total " + score.length;
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
    document.getElementById('resultado').innerHTML = "Resultado 81 a 85";
    document.getElementById('contador').innerHTML = "Total " + score.length;
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
    document.getElementById('resultado').innerHTML = "Resultado 86 a 90";
    document.getElementById('contador').innerHTML = "Total " + score.length;
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
    document.getElementById('resultado').innerHTML = "Resultado 91 a 95";
    document.getElementById('contador').innerHTML = "Total " + score.length;
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
    document.getElementById('resultado').innerHTML = "Resultado 96 a 100";
    document.getElementById('contador').innerHTML = "Total " + score.length;
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});

