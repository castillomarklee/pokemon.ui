import { POKEMON_LINEUP_TYPES } from "../constants/pokemon-constants";

export const setPokemonLineup = (payload) => ({
    type: POKEMON_LINEUP_TYPES.ADD_POKEMON_LINEUP,
    payload
});