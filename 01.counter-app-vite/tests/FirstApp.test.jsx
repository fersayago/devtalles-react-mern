import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

  test('debe de hacer match con el snapshot', () => {
    // nos referimos a que le tomamos una fotografia al componente y si
    // algo llega a cambiar, la comparación falla

    // renderiza el componente en memoria
    const title = 'Titulo desde test'

    const { container } = render( <FirstApp title={ title } /> )
    expect( container ).toMatchSnapshot();
    
  })

  test('title en h1', () => {
    // se debe mostrar el titulo en h1 en el snapshot

    // primer revisamos que renderice el titulo
    const title= 'Titulo a evaluar'
    const { container, getByText, getByTestId } = render (<FirstApp title={ title }/>)
    expect( getByText(title) ).toBeTruthy()

    // // buscamos el elemento con querySelector y nos fijamos que contenga el titulo a buscar
    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)

    // buscamos el titulo mediante el testId en caso de que no este en H1
    expect( getByTestId('test-title').innerHTML ).toContain(title);
  })

  test('Debe mostrar el subtitulo pasado por props', () => {
    const title = 'Titulo por test'
    const testSubtitle = 'Subtitulo por test'
    const { getAllByText } = render (
      <FirstApp title={ title } subTitle={ testSubtitle }/>
    )
    
    // nos fijamos que renderice el subtitulo
    expect( getAllByText(testSubtitle).length ).toBe(2);
  })
})