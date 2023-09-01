import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
          // al utilizar toolkit no es necesario devolver el estado entero con spread
          // basta con seleccionar el campo que se quiere modificar
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
          state.isLoading = false
          state.page = action.payload.page
          state.pokemons = action.payload.pokemons
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;