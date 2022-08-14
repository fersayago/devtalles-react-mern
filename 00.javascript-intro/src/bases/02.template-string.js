const nombre = 'Fernando';
const apellido = 'Sayago';


// const nombreCompleto = nombre + ' ' + apellido;
// Template String
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombreRecibido, apellidoRecibido) {
  return `Hola ${nombreRecibido} ${apellidoRecibido}`;
}

console.log(getSaludo(nombre, apellido));