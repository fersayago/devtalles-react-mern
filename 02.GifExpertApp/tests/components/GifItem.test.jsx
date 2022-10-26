import { render, screen } from "@testing-library/react"
import GifItem from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {

  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'

  test('debe de hacer match con el snapshot', () => {
    
    const { container } = render(
      <GifItem title={ title } url={ url } />
    )

    expect( container ).toMatchSnapshot()
  })

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(
      <GifItem title={ title } url={ url } /> 
    )

    const renderedImage = screen.getByRole('img');

    expect( renderedImage.src ).toBe(url);
    expect( renderedImage.alt ).toBe(title);
  })

  test('debe mostrar el titulo indicado en el componente', () => {
    render(
      <GifItem title={ title } url={ url } /> 
    )

    expect( screen.getByText( title )).toBeTruthy();


  })
})