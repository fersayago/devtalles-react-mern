import getHeroeByIdAsync from './../../src/base-pruebas/09-promesas'

describe('pruebas en 09-promesas', () => {
  
  test('Obtener heroe con promesa', (done) => {

    const id = 1;

    getHeroeByIdAsync( id )
      .then( hero => {
        expect( hero.name ).toBe( 'Batman' );
        done()
      })
  })

  test('Obtener un error si heroe no existe', (done) => {

    const id = 9876;
    
    getHeroeByIdAsync( id )
      .then( hero => { // esto no se deberia de evaluar ya que no deberia suceer
        expect( hero ).toBeFalsy();
        done()
      })
      .catch( error => {
        expect( error ).toBe (`No se pudo encontrar el héroe ${ id }`)
        done()
      })
  })
})