import { put, select, call } from "redux-saga/effects";
import { POKEMON_LINEUP_TYPES, GET_POKEMON_TYPES } from "../../../constants/pokemon-constants";
import { getPokemonDetails } from '../../../services/pokedexService';

export const getPokemonLineup = state => state.pokemonLineupReducer;

export function* setPokemonSaga({ payload }) {
    try {
        const currentLineup = yield select(getPokemonLineup);
        const filterSlots = currentLineup.pokemonLineup.filter(data => data.id !== payload.id);
        yield put({ type:POKEMON_LINEUP_TYPES.SUCCESS_ADDING_LINEUP, pokemonLineup: [...filterSlots, payload] });
    } catch (error) {
        console.error(error);
        yield put({ type: POKEMON_LINEUP_TYPES.ERROR_ADDING_LINEUP });
    }
}

export function* getPokemonSaga({ payload }) {
    try {
        if (!payload) {
            yield put({ type: GET_POKEMON_TYPES.ERROR_SELECTED_POKEMON });
            return;
        }
        const response = yield call(getPokemonDetails, payload);
        yield put({ type: GET_POKEMON_TYPES.ADD_SELECTED_POKEMON, pokemonDetails: response.data })
    } catch (error) {
        console.error(error);
        yield put({ type: GET_POKEMON_TYPES.ERROR_SELECTED_POKEMON });
    }
}

export function* clearPokemonSaga() {
    try {
        yield put({ type: GET_POKEMON_TYPES.SUCCESS_CLEAR_DETAILS, pokemonDetails: null });
    } catch (error) {
        yield put({ type: GET_POKEMON_TYPES.ERROR_CLEAR_DETAILS });
    } 
}