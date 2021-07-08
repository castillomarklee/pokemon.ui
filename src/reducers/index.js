import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';
import pokedexRegionReducer from './pokedexRegionReducer';
import pokemonLineupReducer from './pokemonLineupReducer';
import selectedPokemonReducer from './selectedPokemonReducer';
import pokemonDetailsReducer from './getPokemonDetailsReducer';

const rootReducer = combineReducers({
    pokedexReducer,
    pokedexRegionReducer,
    pokemonLineupReducer,
    selectedPokemonReducer,
    pokemonDetailsReducer
});

export default rootReducer;
