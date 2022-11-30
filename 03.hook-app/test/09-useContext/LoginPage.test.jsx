import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext"
import LoginPage from "../../src/09-useContext/LoginPage";


describe('pruebas en <LoginPage/>', () => {

  test('debe de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{ user:null}}>
        <LoginPage/>
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    console.log(preTag.innerHTML)
    expect( preTag.innerHTML ).toBe( 'null' )
  })

  test('debe de llamar el setUser cuando se hace click en el botón', () => {
    
    const setUserMock = jest.fn()
    
    render(
      <UserContext.Provider value={{ user:null, setUser: setUserMock}}>
        <LoginPage/>
      </UserContext.Provider>
    )

    const setUserButton = screen.getByRole('button', { name: 'Establecer usuario'})
    fireEvent.click(setUserButton)

    expect( setUserMock ).toHaveBeenCalledWith(
      {
        id: 123,
        name: 'Fernando Sayago',
        email: 'sayago.fernando@userProvider.com'
      }
    )

  })
})