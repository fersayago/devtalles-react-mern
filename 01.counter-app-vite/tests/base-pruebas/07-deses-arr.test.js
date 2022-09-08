import {retornaArreglo} from './../../src/base-pruebas/07-deses-arr'

describe('pruebas en 07-deses-arr', () => {
  
  test('debe retornar un string y un numero', () => {

    const [ letters, numbers ] = retornaArreglo();

    // podemos esperar que el tipo de la variable sea string
    expect( typeof letters ).toBe('string')
    // o podemos esperar que la variable devuelva un numero cualquiera
    expect( numbers ).toStrictEqual( expect.any(Number) )

  })
})