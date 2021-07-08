
import { POKEMON_LINEUP_TYPES } from '../constants/pokemon-constants';
import { pokemonLineupInitialState } from '../state/pokemon/pokemonInitialState';

export default function pokemonLineupReducer(state = pokemonLineupInitialState, action) {
    switch (action.type) {
      case POKEMON_LINEUP_TYPES.ADD_POKEMON_LINEUP: 
        return { ...state };
      case POKEMON_LINEUP_TYPES.SUCCESS_ADDING_LINEUP:
        return { ...action, isSuccess: true, isError: false };
      case POKEMON_LINEUP_TYPES.ERROR_ADDING_LINEUP:
        return { ...action, isSuccess: false, isError: true };
      default:
        return state;
    }
}