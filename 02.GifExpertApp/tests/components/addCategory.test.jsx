import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe ('Pruebas en <AddCategory />', () => {

  test('debe de cambiar el valor de la caja de texto', () => {

    // tenemos que mandar una función
    render( <AddCategory onNewCategory={ () => {} } /> )

    const input = screen.getByRole('textbox');

    // disparamos el evento input como si la persona agregara valores
    fireEvent.input( input, { target: { value: 'Saitama' } })

    expect( input.value ).toBe('Saitama');
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); // jest function: simula función

    render( <AddCategory onNewCategory={ onNewCategory } /> )
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); // lo busca mediante el aria-label

    fireEvent.input( input, { target: { value: inputValue } })
    fireEvent.submit( form )
    
    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalledTimes(1);

    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  })

  test('no debe llamar el onNewCategory si el input esta vacío', () => {

    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> )

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    // expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();
  })
})