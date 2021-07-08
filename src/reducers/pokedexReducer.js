
import { pokedexInitialState } from '../state/pokedex/pokedexInitialState';
import { POKEDEX_TYPES } from '../constants/pokemon-constants';

export default function pokedexReducer(state = pokedexInitialState, action) {
    switch (action.type) {
      case POKEDEX_TYPES.GET_POKEDEX_LIST: 
        return { ...state };
      case POKEDEX_TYPES.ADD_POKEDEX_LIST:
        return { ...action, isSuccess: true, isError: false };
      case POKEDEX_TYPES.ERROR_POKEDEX_LIST:
        return { ...action, isSuccess: false, isError: true };
      default:
        return state;
    }
}