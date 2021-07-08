import { selectedPokemonDetailsInitialState } from "../state/pokemon/pokemonInitialState";
import { GET_POKEMON_TYPES } from "../constants/pokemon-constants";

export default function pokemonDetailsReducer(
  state = selectedPokemonDetailsInitialState,
  action
) {
  switch (action.type) {
    case GET_POKEMON_TYPES.GET_SELECTED_POKEMON:
      return { ...state };
    case GET_POKEMON_TYPES.ADD_SELECTED_POKEMON:
      return { ...action, isSuccess: true, isError: false };
    case GET_POKEMON_TYPES.ERROR_SELECTED_POKEMON:
      return { ...action, isSuccess: false, isError: true };
    case GET_POKEMON_TYPES.CLEAR_POKEMON_DETAILS:
      return { ...state };
    case GET_POKEMON_TYPES.SUCCESS_CLEAR_DETAILS:
      return { ...action, isSuccess: false, isError: false };
    case GET_POKEMON_TYPES.ERROR_CLEAR_DETAILS:
      return { ...action, isSuccess: false, isError: false };
    default:
      return state;
  }
}
