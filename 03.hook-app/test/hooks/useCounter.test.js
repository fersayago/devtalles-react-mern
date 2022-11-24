import { renderHook } from "@testing-library/react"
import useCounter from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => {

  test('debe de retornar los valores por defecto', () => {

    const { result } = renderHook( () => useCounter() )

    const { counter, decrementar, incrementar } = result.current;

    expect( counter ).toBe(10);

    expect( decrementar ).toEqual( expect.any(Function) )

    expect( typeof incrementar ).toBe('function');
  })

  test('debe de generar el counter con el valor de 100', () => {

    const { result } = renderHook( () => useCounter(100) )

    expect( result.current.counter ).toBe(100);
  })
})