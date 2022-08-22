// Async -await

/* 
const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('https://wasd.com')
  })

  return promesa
}

getImagenPromesa()
  .then( console.log )
 */

// PARA SIMPLIFICAR
// recrear el ejercicio anterior pero con async await
const renderImageOnDocument = async() => {

  try{
    const apiKey = 'tTrQ4qzA22imSY8dAn4Nyz04ods7KRVt';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await response.json();
  
    const { url } = data.images.original;
    
    const img = document.createElement('img')
    img.src = url;
    img.alt = 'Gif random cargado con async await';
  
    // agregamos la imagen al body
    document.body.append(img);
  }
  catch(err){
    console.error(err);
  }

}

renderImageOnDocument()

