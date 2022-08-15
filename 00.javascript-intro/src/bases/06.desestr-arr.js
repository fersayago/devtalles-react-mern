// Desestructuración
// asignación desestructurante

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  clave: 'Ironman',
}

// destructuración
// const { nombre, apellido, edad, clave } = persona;

// console.log(nombre)
// console.log(apellido)
// console.log(edad)
// console.log(clave)

const createHero = ({ nombre, apellido, edad, clave, rango = 'Soldado' }) => {
  // console.log(nombre, apellido, edad, clave)

  return {
    nombreClave: clave,
    anios: edad,
    rango: rango,
    coord: {
      lat: 14.65,
      lng: -90.51,
    },
  }
}


// destructuración de objetos
// extraer objetos anidados y asignarlos a constantes
const { nombreClave, anios, coord:{ lat, lng } } = createHero( persona );

console.log(nombreClave, anios);
console.log(lat, lng);