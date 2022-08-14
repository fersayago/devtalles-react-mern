// NO MAS uso de var

// Variables y constantes

const nombre = 'Fernando';

let valorDado = 5;
valorDado = 4;

console.log( nombre, valorDado);

if ( true ) {
  let valorDado = 6;

  console.log( 'valor dado scope local let: ', valorDado );
}

console.log(valorDado);