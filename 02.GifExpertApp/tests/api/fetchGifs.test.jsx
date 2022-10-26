import fetchGifs from './../../src/api/fetchGifs'

describe('Pruebas en función getGifs', () => {

  test('debe de retornar un arreglo de gifs', async() => {

    const gifs = await fetchGifs('Dragon Ball')

    expect( gifs.length ).toBeGreaterThan(0);

    expect ( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    })
  })
})