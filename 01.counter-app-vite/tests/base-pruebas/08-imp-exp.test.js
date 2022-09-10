import { getHeroeById, getHeroesByOwner } from './../../src/base-pruebas/08-imp-exp'
import heroes from './../../src/data/heroes'

describe('pruebas en 08-imp-exp', () => {

  test('obtener heroe por id', () => {

    const expectedHero = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    const id = 1;
    const hero = getHeroeById( id );
    

    expect( hero ).toStrictEqual( expectedHero )
  })

  test('Obtener undefined si no existe el Id del heroe', () => {

    const unexistantHero = getHeroeById(9999)

    //expect( unexistantHero ).toBe( undefined );
    // para abarcar mas casos por si develve null en vez de undefined podemos usar @falsy
    expect( unexistantHero ).toBeFalsy();
    // hay que tener cuidado por que si develve false el test pasa.
  })

  test('Obtener heroes por franquicia Marvel con comparacion hardcodeada', () => {
    
    const expectedMarvelHeroes = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]

    const Franchise = 'Marvel'
    const MarvelHeroes = getHeroesByOwner(Franchise);

    expect( MarvelHeroes ).toStrictEqual( expectedMarvelHeroes );
  })

  test('Obtener heroes por franquicia DC con pruebas flexibles(comparación llamando arreglo)', () => {
    const expectedDCHeroes = heroes.filter((heroe) => heroe.owner === 'DC')

    const Franchise = 'DC';
    const DCHeroes = getHeroesByOwner(Franchise);

    expect( DCHeroes ).toStrictEqual( expectedDCHeroes );
  })

  test('Obtener arreglo vacio cuando la franquicia no existe', () => {

    const expectedResult = [];

    const DarkHorseHeroes = getHeroesByOwner('Dark Horse');

    expect( DarkHorseHeroes).toStrictEqual( expectedResult );
  })

  test('Comparar el largo del arreglo de heroes con los heroes de DC', () => {

    const Franchise = 'DC'
    const DCHeroes = getHeroesByOwner(Franchise)

    //expect(DCHeroes.length).toBe(3);
    expect(DCHeroes).toHaveLength(3);
  })
})