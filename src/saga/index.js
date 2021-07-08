import { fork,all } from 'redux-saga/effects';
import rootPokedexWatcher from './watcher/pokedex';
import rootPokemonWatcher from './watcher/pokemon';

export default function* startForman() {
  yield all([
    fork(rootPokedexWatcher),
    fork(rootPokemonWatcher)
  ]);
}
