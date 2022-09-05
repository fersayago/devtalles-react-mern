import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {

    const expectedUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser()

    expect( user ).toEqual( expectedUser );
  })

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const name = 'Fernando';
    const usuarioActivo = getUsuarioActivo(name)
    
    expect( usuarioActivo ).toStrictEqual({
      uid: 'ABC567',
      username: name,
    });
  })
})