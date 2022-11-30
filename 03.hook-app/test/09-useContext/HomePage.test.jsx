import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import HomePage from "../../src/09-useContext/HomePage"


describe('Pruebas en <HomePage />', () => {

  const user = {
    id: 1,
    hola: 'Saludo desde componente de test',
    nombre: 'Fernando'
  }

  test('debe de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{ hola: 'texto de saludo', user: null }}>
        <HomePage/>
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    expect( preTag.innerHTML ).toBe( 'null' )
  })

  test('debe de mostrar el componente con el usuario', () => {

    render(
      <UserContext.Provider value={{user}}>
        <HomePage/>
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    console.log(preTag.innerHTML)
    expect( preTag.innerHTML ).toContain( user.nombre )
    expect( preTag.innerHTML ).toContain( user.hola )
  })
})