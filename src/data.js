// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
// DIRECTORES
export const filterBy = (string, data) => {
  // console.log (string, data.films)
  const result =  data.films.filter(movie => movie.director === string); // retorno implicito
  console.log(result);
  console.log("Resultado " + string);
  console.log("Total " + result.length);
  // contador.innerHTML = result.length;
  return result;
} 
// LANZAMIENTO
export const sortByA = (x, data) => {
  const result = data.films.sort((a,b) => {
    if (a.release_date === b.release_date) {
      return 0;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 1;
  });
    // .slice()
    // .sort((a,b) => b.release_date - a.release_date);
    console.log(x);
    console.log(result);
    return result ;
} 

export const sortByD = (x, data) => {
  const result = data.films.sort((a,b) => {
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
    console.log(x);
    console.log(result);
    return result ;
} 
 // const result = cloneData.films.release_date.sort()
  // //  => {
  // //   return x.release_date.localeCompare(y.release_date);
  // // });
  // console.log(cloneData);
  // console.log(result);
  // return result; 

// // .filter(movie => movie.rt_score === string); // retorno implicito
  // cloneDataOriginal.sort((itemA, itemB) => {
  //   // return itemA.localeCompare(itemB);
  //   console.log(itemA);
  //   console.log(itemB);
  //   console.log(itemA - itemB);
  //   return itemA - itemB;
  // });
  // return cloneDataOriginal;
//   const years = data.films.sort(year => year.release_date === string);;
//   years.sort((a,b)=>a-b);  
//   console.log(years);
// data.films.sort(function (a, b) {
//   if (a.release_date > b.release_date) {
//     return 1;
//   }
//   if (a.release_date < b.release_date) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// }

// SCORE     ***CHECAR!!!!
