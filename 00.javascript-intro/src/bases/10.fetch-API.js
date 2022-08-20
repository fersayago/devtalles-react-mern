// Fetch API

const apiKey = 'tTrQ4qzA22imSY8dAn4Nyz04ods7KRVt';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
peticion.then( response => {
  response.json()
    .then( data => {
      console.log(data);
    })
})
.catch(console.warn);
*/

// ! LAS PROMESAS PUEDEN ENCADENARSE
// por lo que queda esteticamente mejor poner las promesas en cadena

peticion
  .then( response => response.json())
  // desestructuramos el objeto directamente para extrer la data
  .then( ({data}) => {
    //const url = data.images.original.url
    const { url } = data.images.original;
    console.log(url);

    // creamos una imagen con la url
    const img = document.createElement('img')
    img.src = url;

    // agregamos la imagen al body
    document.body.append(img);

  })
  .catch(console.warn);
