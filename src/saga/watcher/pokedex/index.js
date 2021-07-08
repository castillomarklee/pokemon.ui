import { takeLatest, all } from "redux-saga/effects";
import { pokedexSaga, pokedexRegionSaga, selectedPokemonSaga } from "./pokedexWatcher";
import { POKEDEX_TYPES, POKEDEX_REGION_TYPES, SELECTED_POKEMON_TYPES } from "../../../constants/pokemon-constants";

export default function* rootPokedexWatcher() {
  yield all([
    takeLatest(POKEDEX_TYPES.GET_POKEDEX_LIST, pokedexSaga),
    takeLatest(POKEDEX_REGION_TYPES.GET_REGION_DETAILS, pokedexRegionSaga),
    takeLatest(SELECTED_POKEMON_TYPES.ADD_SELECTED_POKEMON, selectedPokemonSaga)
  ]);
}