import { POKEDEX_TYPES, POKEDEX_REGION_TYPES, SELECTED_POKEMON_TYPES } from "../constants/pokemon-constants";

export const getPokedexListRequest = () => ({
    type: POKEDEX_TYPES.GET_POKEDEX_LIST
});

export const getPokedexRegionDetails = (payload) => ({
    type: POKEDEX_REGION_TYPES.GET_REGION_DETAILS,
    payload
});

export const setSelectedPokemon = (payload) => ({
    type: SELECTED_POKEMON_TYPES.ADD_SELECTED_POKEMON,
    payload
});