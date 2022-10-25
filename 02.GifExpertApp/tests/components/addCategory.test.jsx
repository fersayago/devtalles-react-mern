import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe ('Pruebas en <AddCategory />', () => {

  const newCategory = 'Dragon Ball';

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

    render( <AddCategory onNewCategory={ () => {} } /> )
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); // lo busca mediante el aria-label

    fireEvent.input( input, { target: { value: 'Saitama' } })
    fireEvent.submit( form )
    
    expect( input.value ).toBe('');
  })
})