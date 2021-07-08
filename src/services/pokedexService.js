import http from "../http-common";
import { POKEDEX_API, POKEMON_API } from "../constants/pokemon-api";
import axios from "axios";

export const getPokeDex = () => {
  return http.get(POKEDEX_API.POKEDEX_REFERENCE);
};

export const getPokedexRegionDetails = (payload) => {
    return axios.get(payload);
};

export const getPokemonDetails = (id) => {
  return http.get(`${POKEMON_API.POKEMON_DETAILS}${id}`);
};
