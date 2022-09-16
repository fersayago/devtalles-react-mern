import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

  test('debe de hacer match con el snapshot', () => {
    // nos referimos a que le tomamos una fotografia al componente y si
    // algo llega a cambiar, la comparación falla

    // renderiza el componente en memoria

    const title = 'Titulo desde test'
    render( <FirstApp title={ title} /> )

    
  })
})