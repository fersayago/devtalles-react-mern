import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemon: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
          // al utilizar toolkit no es necesario devolver el estado entero con spread
          // basta con seleccionar el campo que se quiere modificar
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
          console.log(action) 
        }
    }
});


// Action creators are generated for each case reducer function
export const { increment } = pokemonSlice.actions;