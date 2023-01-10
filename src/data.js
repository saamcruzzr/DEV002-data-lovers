

//CALCULO ***

export const promByScore = (data) => {
    const total = data.map(n => Number( n.rt_score ) ).reduce(function(a, b){ return a + b; }, 0);
    const promedio = total / data.length
    console.log("resultado suma " + total);
    console.log("resultado promedio " + promedio);
    return promedio;
}
 
// DIRECTORES
export const filterByDirector = (string, data) => {
  // console.log (string, data.films)
  const result =  data.filter(movie => movie.director === string); // retorno implicito
  console.log(result);
  console.log("Resultado " + string);
  console.log("Total " + result.length);
  // contador.innerHTML = result.length;

  return result;
  
} 

// LANZAMIENTO
export const sortByAntigua = (data) => {
  const result = [...data].sort((a,b) => {
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

export const sortByReciente = (data) => {
  const result = [...data].sort((a,b) => {
    //Si a y b eran iguales, devolvemos 0.

    if (a.release_date === b.release_date) {
      return 0;
    }
    if ( b.release_date < a.release_date ) {
      return -1;
    }
    return 1;
  });
    return result ;
} 

// SCORE
export const filterByScore = (min, max, data) => {
  const result =  data.filter(movie => {

    return (movie.rt_score <= max && movie.rt_score >= min)
  }); 
  return result;
} 
