import { usContext } from './../../src/base-pruebas/06-deses-obj'

describe('pruebas en 06-deses-obj', () => {
  test('desestructuración correcta del objeto', () => {

    const expectedReturnObject = {
      nombreClave: 'Hulk',
      nombreCompleto: 'Bruce Banner',
      anios: 36,
      range: 'Caporal',
      latlng:{
        lat: 14.1232,
        lng: -12.3232
      }
    }

    const testObject = {
      clave: 'Hulk',
      nombre: 'Bruce Banner',
      edad: 36,
      rango: 'Caporal'
    }
    const testUser = usContext(testObject)

    expect( expectedReturnObject ).toStrictEqual( testUser );
  })
})