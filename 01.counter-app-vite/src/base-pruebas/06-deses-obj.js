export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    
    return {
        nombreClave: clave,
        nombreCompleto: nombre,
        anios: edad,
        range: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}


