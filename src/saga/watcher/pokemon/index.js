import { takeLatest, all } from "redux-saga/effects";
import { POKEMON_LINEUP_TYPES, GET_POKEMON_TYPES } from "../../../constants/pokemon-constants";
import { setPokemonSaga, getPokemonSaga, clearPokemonSaga } from "./pokemonWatcher";

export default function* rootPokedexWatcher() {
  yield all([
    takeLatest(POKEMON_LINEUP_TYPES.ADD_POKEMON_LINEUP, setPokemonSaga),
    takeLatest(GET_POKEMON_TYPES.GET_SELECTED_POKEMON, getPokemonSaga),
    takeLatest(GET_POKEMON_TYPES.CLEAR_POKEMON_DETAILS, clearPokemonSaga)
  ]);
}