// Async -await

const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('https://wasd.com')
  })

  return promesa
}

getImagenPromesa()
  .then( console.log )