
//CALCULO ***

export let sumaByScore = (data) => {
    const total = data.films.map(n => Number( n.rt_score ) ).reduce(function(a, b){ return a + b; }, 0);
    const promedio = total / data.films.length
    console.log("resultado suma " + total);
    console.log("resultado promedio " + promedio);
}
  // const sum = data.films.map(  n => Number( n ) )
  // .reduce( (curr, accum) => curr.rt_score + accum.rt_score, 0);
  // console.log( "Consola de suma " +sum );
  
  // const sum = data.films.reduce( (curr, accum) => curr.rt_score + accum.rt_score, 0);
  // console.log( "Consola de suma " +sum );

     //.reduce(function(a, b){ return a.rt_score + b.rt_score; });
 
// const arr = [1, 2, 3, 4];
  // const initialValue = 0;
  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue
  // );

  // console.log(sumWithInitial);



// export const promedio = (data) => {
//   // const result =  data.films.rt_score/20;
//   // console.log(result);

//   // const result =  data.films(movie => {
//   //   return (movie.rt_score <= 95 && movie.rt_score >= 91)
//   // });

//   const suma = data.films.rt_score.reduce((acumulador, valorActual) => acumulador + valorActual , 0);
//   console.log(suma)

//   return suma;
// } 

// export const calculeByScore = (data) => {
//   const suma = [...data.films].reduce((acumulador,valorActual) => acumulador.rt_score + valorActual.rt_score);
//   console.log(suma);
// }

// Links para revisar *******
//videos
// https://www.youtube.com/results?search_query=sumar+elementos+de+un+objeto+javascript
// https://www.youtube.com/watch?v=IyWwAxUNZ7c
// https://www.youtube.com/watch?v=vNldyoF7uLE
// https://www.youtube.com/shorts/E8V92o_6Fjo
// https://www.youtube.com/watch?v=U12dHUrPzgg
// https://www.youtube.com/watch?v=BGXwssmxGuY
// https://www.youtube.com/watch?v=rfm0lWiCk4k
// https://www.youtube.com/watch?v=r8Nu5R6PQtI
// https://www.youtube.com/watch?v=2UvMV-QK4jk&t=4s   https://byspel.com/calcular-promedio-en-javascript/
//documentacion
// https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L54
// https://es.stackoverflow.com/questions/490712/como-hago-para-sumar-los-string-que-est%C3%A1n-dentro-de-estos-array-1-4-1
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://www.freecodecamp.org/espanol/news/como-manipular-arreglos-en-javascript/


// DIRECTORES
export const filterByDirector = (string, data) => {
  // console.log (string, data.films)
  const result =  data.films.filter(movie => movie.director === string); // retorno implicito
  console.log(result);
  console.log("Resultado " + string);
  console.log("Total " + result.length);
  // contador.innerHTML = result.length;
  return result;
} 

// LANZAMIENTO
export const sortByA = (data) => {
  const result = [...data.films].sort((a,b) => {
    if (a.release_date === b.release_date) {
      return 0;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 1;
  });

    console.log(result);
    return result ;
} 

export const sortByD = (data) => {
  const result = [...data.films].sort((a,b) => {
    //Si a y b eran iguales, devolvemos 0.
    if (a.release_date === b.release_date) {
      return 0;
    }
    //Si a es menor que b, devolvemos -1, que es un valor por debajo de cero.
    if ( b.release_date < a.release_date ) {
      return -1;
    }
    //Al final devolvemos 1, porque querrá decir que no eran ni iguales ni a era menor que b.
    return 1;
  });
    console.log(result);
    return result ;
} 

// SCORE
export const filterByScore = (min, max, data) => {
  const result =  data.films.filter(movie => {
    return (movie.rt_score <= max && movie.rt_score >= min)
  }); 
  console.log(result);
  console.log("Resultado", min, max )
  console.log("Total " + result.length);
  // contador.innerHTML = result.length;
  return result;
} 



