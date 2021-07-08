
import { selectedPokemonInitialState } from '../state/pokedex/pokedexInitialState';
import { SELECTED_POKEMON_TYPES } from '../constants/pokemon-constants';

export default function selectedPokemonReducer(state = selectedPokemonInitialState, action) {
    switch (action.type) {
      case SELECTED_POKEMON_TYPES.ADD_SELECTED_POKEMON: 
        return { ...state };
      case SELECTED_POKEMON_TYPES.SUCESS_SELECTING_POKEMON:
        return { ...action, isSuccess: true, isError: false };
      case SELECTED_POKEMON_TYPES.ERROR_SELECTING_POKEMON:
        return { ...action, isSuccess: false, isError: true };
      default:
        return state;
    }
}