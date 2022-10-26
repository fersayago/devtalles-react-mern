import { render, screen } from "@testing-library/react";
import GifExpertApp from "./../src/GifExpertApp";

describe('Pruebas en componente <GifExpertApp />', () => {

  test('debe agregar categoria correctamente', () => {

    const newCategory = 'Horror';

    render( <GifExpertApp />)

    screen.debug()

  })
})