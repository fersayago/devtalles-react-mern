import getHeroeById from './08.import-export'

// PROMESAS

// primero se ejecuta todo el codigo sincrono y luego se ejecuta el codigo asincrono

/* 
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 segundos despues')
    const heroe = getHeroeById(2);
    // el resolve pasa el valor de los arguemetos a la funcion then
    resolve( heroe );
  }, 2000)
})

// se ejecuta una vez terminada la promesa
promesa.then( (heroe) => {
  console.log('Then de la promesa')
  console.table( heroe );
})
.catch( err => console.warn( err ));

console.log('codigo sincrono')
 */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 segundos despues')
      const heroe = getHeroeById(id);
      heroe !== undefined ?
        resolve( heroe ) :
        reject( new Error('No se encontro el heroe') );
    }, 2000)
  })
}

getHeroeByIdAsync(4)
  // cuando se recibe el arguemento en el then manda el primer
  // argumento al console.log
  .then( console.table )
  //.catch( err => console.warn(err));
  .catch( console.warn )