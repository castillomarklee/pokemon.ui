import { put, call } from "redux-saga/effects";
import { POKEDEX_TYPES, POKEDEX_REGION_TYPES, SELECTED_POKEMON_TYPES } from "../../../constants/pokemon-constants";
import { getPokeDex, getPokedexRegionDetails } from "../../../services/pokedexService";

export function* pokedexSaga() {
  try {
    const response = yield call(getPokeDex);
    yield put({ type: POKEDEX_TYPES.ADD_POKEDEX_LIST, pokedexData: response });
  } catch (error) {
    yield put({ type: POKEDEX_TYPES.ERROR_POKEDEX_LIST });
  }
}

export function* pokedexRegionSaga({ payload }) {
  try {
    if (!payload) {
      yield put({ type: POKEDEX_REGION_TYPES.ERROR_REGION_DETAILS });
      return;
    }
    const response = yield call(getPokedexRegionDetails, payload);
    yield put({ type: POKEDEX_REGION_TYPES.ADD_REGION_DETAILS, regionDetailsData: response });
  } catch(error) {
    yield put({ type: POKEDEX_REGION_TYPES.ERROR_REGION_DETAILS });
  }
}

export function* selectedPokemonSaga({ payload }) {
  try {
    yield put({ type: SELECTED_POKEMON_TYPES.SUCESS_SELECTING_POKEMON, pokemonDetails: payload });
  } catch(error) {
    yield put({ type: SELECTED_POKEMON_TYPES.ERROR_SELECTING_POKEMON });
  }
}

