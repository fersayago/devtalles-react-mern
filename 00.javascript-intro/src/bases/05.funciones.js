// FUNCIONES

// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

const saludar = function(nombre) {
  return `Hola ${nombre}`;
}

const saludarArrow = (nombre) => {
  return `Hola ${nombre} desde arrow function`;
}

const saludarArrowReturn = (nombre) => `Hola ${nombre} desde arrow return`;

console.log(saludar('Fernando'));
console.log(saludarArrow('Fernando'));
console.log(saludarArrowReturn('Fernando'));

// Para poder retornar un objeto en una arrow sin return, se debe usar parentesis:
const getUser = () => ({
  uid: 'ABC123',
  user: 'Fernando',
  age: 36,
});

console.table(getUser());

// TODO: TAREA
// 1. transformar a una funcion de flecha
// 2. debe retornar un objeto implicito (sin return)
// 3. pruebas

function getUsuarioActivo ( nombre ) {
  return {
    uid: 'ABC567',
    nombre: nombre,
  }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.table(usuarioActivo);

// RESPUESTA

const getUsuarioActivoArrow = (nombre) => ({
  uid: 'ABC567',
  nombre: nombre,
});

console.table(getUsuarioActivoArrow('Fernando'));