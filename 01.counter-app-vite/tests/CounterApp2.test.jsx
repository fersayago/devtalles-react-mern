import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from './../src/CounterApp'

describe('Pruebas en componente CounterApp', () => {

  test('Debe de incrementar con el boton +1', () => {

    render(<CounterApp value={10} />)

    // para disparar eventos react testing library nos ofrece
    // en este caso simulamos hacer click al boton '+1'
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText('11') ).toBeTruthy();
  })

  test('Debe de decrementar con el boton +1', () => {

    render(<CounterApp value={10} />)

    // para disparar eventos react testing library nos ofrece
    // en este caso simulamos hacer click al boton '+1'
    fireEvent.click( screen.getByText('-1') )
    expect( screen.getByText('9') ).toBeTruthy();
  })

  test('Debe de reiniciar al apretar el boton "reset"', () => {

    render(<CounterApp value={320} />)
    
    // aumentamos el valor para luego reiniciarlo y comparar que vuelva a su valor inicial
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('Reset') );
    expect( screen.getByText('320') ).toBeTruthy()
  })

})