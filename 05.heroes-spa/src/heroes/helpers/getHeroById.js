import { heroes } from "../data/heroes"


export const getHeroById = ( id ) => {

  // si existe regresa el heroe sino devuelve undefined
  return heroes.find( hero => hero.id === id);
}