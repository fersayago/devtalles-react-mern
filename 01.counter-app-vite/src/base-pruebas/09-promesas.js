import { getHeroeById } from './../base-pruebas/08-imp-exp'

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe ' +  id);
            }
        }, 100 )
    
    });
}

export default getHeroeByIdAsync;