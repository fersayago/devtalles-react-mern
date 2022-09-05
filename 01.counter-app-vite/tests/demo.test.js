test('Esta prueba no debe de fallar', () => {

  // ! Si no se lanza un error, es considerado que la prueba se pasa

  if (1 === 0){
    throw new Error('Uno no es igual a cero')
  }
})