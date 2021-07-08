import { pokedexRegionInitialState } from '../state/pokedex/pokedexInitialState';
import { POKEDEX_REGION_TYPES } from '../constants/pokemon-constants';

export default function pokedexRegionReducer(state = pokedexRegionInitialState, action) {
    switch (action.type) {
      case POKEDEX_REGION_TYPES.GET_REGION_DETAILS: 
        return { ...state };
      case POKEDEX_REGION_TYPES.ADD_REGION_DETAILS:
        return { ...action, isSuccess: true, isError: false };
      case POKEDEX_REGION_TYPES.ERROR_REGION_DETAILS:
        return { ...action, isSuccess: false, isError: true };
      default:
        return state;
    }
}