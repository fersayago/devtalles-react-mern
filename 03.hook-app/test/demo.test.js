describe('Prueba Demo', () => {

  test('Prueba de demostración con toBe', () => {
    const message1 = 'Hola mundo'

    const message2 = message1.trim()

    expect ( message1 ).toBe( message2)
  })
})