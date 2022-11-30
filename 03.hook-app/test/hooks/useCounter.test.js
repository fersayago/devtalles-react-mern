import { act, renderHook } from "@testing-library/react"
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

  test('debe de incrementar el contador', () => {

    const { result } = renderHook( () => useCounter(100))

    const { incrementar } = result.current;

    act(() => {
      incrementar();
      incrementar(2);
    })

    expect( result.current.counter ).toBe(103);

  })

  test('debe de decrementar el contador', () => {
    const { result } = renderHook( () => useCounter(20))

    const { decrementar } = result.current;

    act(() => {
      decrementar(2);
      decrementar(3);
    })

    expect( result.current.counter ).toBe(15);
  })

  test('debe de resetear el contador', () => {

    const { result } = renderHook( () => useCounter(50))

    const { incrementar, reiniciar } = result.current;

    act(() => {
      incrementar(5);
      reiniciar();
    })

    expect( result.current.counter ).toBe(50);
  })
})