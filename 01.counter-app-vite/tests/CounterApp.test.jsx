import { getByTestId, render, screen } from "@testing-library/react"
import CounterApp from './../src/CounterApp'

describe('Pruebas en componente CounterApp', () => {

  test('Debe de hacer match con el snapshot', () => {
    
    const { container } = render(<CounterApp value={10} />)

    expect( container ).toMatchSnapshot();
  })

  test('Debe mostrar el valor inicial de 100', () => {

    const valorBuscado = 100;

    render(
      <CounterApp value = { valorBuscado } />
    )
    
    // nos fijamos que el valor buscado se encuentre en el renderizado
    expect( screen.getByText(valorBuscado) ).toBeTruthy();

    // nos fijamos que el segundo heading tenga el valor buscado
    expect( screen.getByRole('heading', { level: 2}).innerHTML ).toContain(valorBuscado.toString())
  })
})