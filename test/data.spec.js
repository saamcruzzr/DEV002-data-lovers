 
import { promByScore, filterByDirector, filterByScore, sortByReciente  } from '../src/data.js';
//sortByAntigua, 

//TEST PROMEDIO
describe("Pruebas para la funcion promByScore",() => {
  it('Debe retornar el promedio', ()=> {

    const arr = [
        {
          "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "rt_score": "95",
        },
        {
          "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "rt_score": "92",
        },
        {
          "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "rt_score": "89"
        },
      ]
    
    const resultado = promByScore(arr)

    expect(resultado).toEqual(92)
  })
});
//TEST FILTRO DIRECTOR
describe("Pruebas para la funcion filterByDirector",() => {
  it('Debe retornar la data filtrada por director', ()=> {

    const arr = [
        {
          "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
          "release_date": "1986",
          "rt_score": "95",
          
        },
        {
          "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "director": "Hayao Miyazaki",
          "release_date": "1997",
          "rt_score": "92",
        },
        {
          "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "director": "Hiroyuki Morita",
          "release_date": "2002",
          "rt_score": "89",
        },
      ]
    const arrEsperado = [
        {
          "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
          "release_date": "1986",
          "rt_score": "95",
          
        },
        {
          "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "director": "Hayao Miyazaki",
          "release_date": "1997",
          "rt_score": "92",
        }
      ]

    const resultado = filterByDirector("Hayao Miyazaki", arr)

    expect(resultado).toEqual(arrEsperado)
  })
});
//TEST ORDEN ANTIGUAS
describe("Pruebas para la funcion sortByAntigua",() => {
  it('Debe retornar la data ordenada por fecha de lanzamiento más antigua', ()=> {
    const arr = [
        { "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
          "title": "The Tale of the Princess Kaguya",
          "release_date": "2013" },
        { "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "release_date": "1986" },
        { "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "release_date": "1997" },
        { "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "release_date": "2002" }
      ]
   const arrEsperado = [      
        {"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "release_date": "1986" },
        { "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "release_date": "1997" }, 
        { "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "release_date": "2002" },
        { "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
          "title": "The Tale of the Princess Kaguya",
          "release_date": "2013" }
      ]

    const resultado = sortByReciente(arr)

    expect(resultado).toEqual(arrEsperado)    
  })
});
//TEST ORDEN RECIENTES
describe("Pruebas para la funcion sortByReciente",() => {
  it('Debe retornar la data ordenada por fecha de lanzamiento más reciente', ()=> {

    const arr = [
        { "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
          "title": "The Tale of the Princess Kaguya",
          "release_date": "2013" },
        { "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "release_date": "1986" },
        { "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "release_date": "1997" },
        { "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "release_date": "2002" }
      ]
    const arrEsperado = [
        { "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
          "title": "The Tale of the Princess Kaguya",
          "release_date": "2013" },
        { "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "release_date": "2002" },       
        { "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "release_date": "1997" },
        {"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "release_date": "1986" }
      ]

    const resultado = sortByReciente (arr)

    expect(resultado).toBe(arrEsperado)
  })
});

//TEST FILTRO SCORE
describe("Pruebas para la funcion filterByScore",() => {
  it('Debe retornar la data filtrada por score', ()=> {

    const arr = [
        {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
        "rt_score": "95",
        
        },
        {
          "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
          "title": "Princess Mononoke",
          "director": "Hayao Miyazaki",
          "release_date": "1997",
          "rt_score": "92",
        },
        {
          "id": "90b72513-afd4-4570-84de-a56c312fdf81",
          "title": "The Cat Returns",
          "director": "Hiroyuki Morita",
          "release_date": "2002",
          "rt_score": "89",
        },
      ]
    const arrEsperado = [
        {
          "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
          "release_date": "1986",
          "rt_score": "95",
          
          },
          {
            "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
            "title": "Princess Mononoke",
            "director": "Hayao Miyazaki",
            "release_date": "1997",
            "rt_score": "92",
          }
      ]

    const resultado = filterByScore(91, 95, arr)

    expect(resultado).toEqual(arrEsperado)
  })
});