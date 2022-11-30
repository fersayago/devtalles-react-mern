import { fireEvent, render, screen } from '@testing-library/react'
import {MultipleCustomHooks} from '../../src/03-examples'
import { useCounter, useFetch } from '../../src/hooks'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

  // se declara aca para el uso de la tercer prueba por que sino es necesario hacer un mock en todas las pruebas
  const mockIncrementar = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    incrementar: mockIncrementar
  })

  // para asegurarnos que las pruebas esten limpias
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe de mostrar el componente por defecto', () =>{

    // simulamos el estado del hook
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })
    
    render( <MultipleCustomHooks /> )
    
    expect( screen.getByText('Loading...') )
    expect( screen.getByText('Breaking Bad Quotes') )
    
    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    expect( nextButton.disabled ).toBeTruthy()
  })

  test('debe de mostrar una Quote', () => {

    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando',
        quote: 'Hola desde mock'
      }],
      isLoading: false,
      hasError: null
    })

    render( <MultipleCustomHooks /> )

    expect( screen.getByText('Hola desde mock') ).toBeTruthy();
    expect( screen.getByText('Fernando') ).toBeTruthy()
    
    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    expect( nextButton.disabled ).toBeFalsy();
  })

  test('debe de llamar a la función de incrementar', () => {

    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando',
        quote: 'Hola desde mock'
      }],
      isLoading: false,
      hasError: null
    })

    render( <MultipleCustomHooks /> )

    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    fireEvent.click( nextButton );

    // esperamos que la funcion para incrementar el contador de quote haya sido activada
    expect( mockIncrementar ).toHaveBeenCalled();
  })
})