
// //CALCULO
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
