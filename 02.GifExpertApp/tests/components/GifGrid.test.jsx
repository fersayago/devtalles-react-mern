import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid />', () => {

  const testCategory = 'jest'

  test('debe de mostrar el loading inicialmente', () => {

    render( <GifGrid  category={ testCategory }/> );

    expect( screen.getByText('Cargando...') ).toBeTruthy();
    expect( screen.getByText( testCategory ) ).toBeTruthy();
  })

  test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {
    
  })

})