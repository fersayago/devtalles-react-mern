import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {

  const initialForm = {
    name: 'Fernando',
    email: 'fernando@mail.com'
  }

  test('debe regresar los valores por defecto', () => {

    const { result } = renderHook(() => useForm(initialForm));

    expect( result.current ).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    })
  })

  test('debe de cambiar el nombre del formulario', () => {

    const newName = 'Juan'
    // montar el hook
    const { result } = renderHook(() => useForm(initialForm))
    // onInputChange // act, event...

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: {
        name: 'name',
        value: newName
      }})
    })
    // expect
    expect( result.current.name ).toBe( newName )
  })

  test ('debe de realizar el reset del formulario', () => {

    const newName = 'Juan'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: {
        name: 'name',
        value: newName
      }})

      onResetForm();
    })

    expect( result.current.name ).toBe( initialForm.name);
    expect( result.current.formState.name ).toBe( initialForm.name )
  })
});