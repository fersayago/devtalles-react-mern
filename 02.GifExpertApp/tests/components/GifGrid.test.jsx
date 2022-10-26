import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "./../../src/hooks/useFetchGifs"

// no solo sirve para hacer mock de mi libreria sino también de librerias de terceros
jest.mock('./../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

  const testCategory = 'jest'

  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading:  true
    })

    render( <GifGrid  category={ testCategory }/> );

    expect( screen.getByText('Cargando...') ).toBeTruthy();
    expect( screen.getByText( testCategory ) ).toBeTruthy();
  })

  test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: 'BCD',
        title: 'Goku',
        url: 'https://localhost/Goku.jpg'
      },
      {
        id: 'CDE',
        title: 'Luffy',
        url: 'https://localhost/Luffy.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

  render( <GifGrid category={ testCategory } />)

  expect( screen.getAllByRole('img').length ).toBe(3);

  })

})