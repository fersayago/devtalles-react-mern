describe('Pruebas en <DemoComponent>', () => {
  
  test('Esta prueba no debe de fallar', () => {
    
    // ! 3 PASOS PARA LAS PRUEBAS
    
    // 1. Inicialización
    const message1 = 'Hola Mundo';
    
    // 2. Estimulo
    const message2 = message1.trim();
    
    // 3. Observar el comportamiento... esperado (aserciones)
    expect ( message1 ).toBe( message2 );
  })
})