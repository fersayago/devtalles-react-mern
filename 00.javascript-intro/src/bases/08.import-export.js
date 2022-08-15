//import { heroes } from './data/heroes'
import heroes, { owners } from './../data/heroes'

// console.table(heroes);
// console.table(owners);

const getHeroeById = (id) => {
  /*
  return heroes.find( ( heroe ) => {
    if ( heroe.id === id ) {
      return true
    } else {
      return false
    }
  })
  */
  return heroes.find(heroe => heroe.id === id)
}

// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => {
  return heroes.filter( heroe => heroe.owner === owner);
}

// console.table(getHeroesByOwner('DC'));

export default getHeroeById;