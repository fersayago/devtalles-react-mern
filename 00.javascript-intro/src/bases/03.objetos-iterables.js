// OBJETOS ITERABLES

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    pais: 'Estados Unidos',
    zip: '12345',
  },
}

//console.table(persona);
console.group('Heroes');
console.log(persona);


// ! ASIGNACION INCORRECTA YA QUE CAMBIA REFERENCIA
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona2);

// PARA CLONAR CORRECTAMENTE USAMOS EL OPERADOR SPREAD
const persona3 = { ...persona, nombre: 'Bruce', apellido: 'Banner' };
console.log(persona3);

console.groupEnd('Heroes');