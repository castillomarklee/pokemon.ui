import { GET_POKEMON_TYPES } from "../constants/pokemon-constants";

export const getSelectedPokemon = (payload) => ({
    type: GET_POKEMON_TYPES.GET_SELECTED_POKEMON,
    payload
});

export const clearSelectedPokemon = () => ({
    type: GET_POKEMON_TYPES.CLEAR_POKEMON_DETAILS
});