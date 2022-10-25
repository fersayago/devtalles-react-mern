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
})