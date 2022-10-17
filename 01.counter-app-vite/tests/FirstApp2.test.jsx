import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Mas pruebas en <FirstApp />', () => {

  const testTitle = 'Hola, soy un titulo';
  const testSubtitle = 'Hola, soy un subtitulo';

  test('Debe hacer match con el snapshot', () => {

    const testTitle = 'Titulo para tests con Jest'

    const { container } = render(
      <FirstApp title={ testTitle } />
    )

    //prueba con snapshop
    expect( container ).toMatchSnapshot();
  })

  test('Debe de mostrar el mensaje "Hola, soy un titulo', () => {

    render(
      <FirstApp title={ testTitle } />
    )

    // podemos mostrar por consola lo que renderice el componente
    // screen.debug()

    expect( screen.getByText(testTitle) ).toBeTruthy();
  })

  test('Debe de mostrar el titulo en un h1', () => {
    render(
      <FirstApp title={ testTitle } />
    )

    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(testTitle);
  })

  test('Debe de mostrar el subtitulo enviado por props', () => {
    render(
      <FirstApp title={ testTitle } subTitle={ testSubtitle} />
    )

    expect( screen.getAllByText(testSubtitle).length ).toBe(2)
  })
})