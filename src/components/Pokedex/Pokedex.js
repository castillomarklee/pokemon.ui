import "./Pokedex.scss";
import {
  getPokedexListRequest,
  getPokedexRegionDetails,
} from "../../actions/pokedexActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import PokedexRegionPanel from "./PokedexRegionPanel/PokedexRegionPanel";
import PokemonList from "./PokemonListPanel/PokemonList";
import { getSelectedPokemon } from "../../actions/pokemonActions";

const getRegionDetails = (getPokedexRegionDetails, url) => {
  const getPokedexRegionDetailsFunc =
    getPokedexRegionDetails && typeof getPokedexRegionDetails === "function";
  if (url && getPokedexRegionDetailsFunc) {
    getPokedexRegionDetails(url);
  }
};

const Pokedex = ({
  pokedexReducer,
  pokedexRegionReducer,
  getPokedexDetails,
  getPokedexRegionDetails,
  // pokemonDetailsReducer,
  getSelectedPokemon,
}) => {
  const getRegionalDetailsByURL = (url) =>
    getRegionDetails(getPokedexRegionDetails, url);
  useEffect(() => {
    getPokedexDetails();
  }, [getPokedexDetails]);
  return (
    <div className="pokedex">
      <h5 className="pokedex-title">Pokedex</h5>
      <div className="table-panel">
        <PokedexRegionPanel
          regionList={pokedexReducer}
          getRegionalDetailsFunc={getRegionalDetailsByURL}
        />
      </div>
      <PokemonList pokemonList={pokedexRegionReducer} getSelectedPokemon={getSelectedPokemon} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pokedexReducer, pokedexRegionReducer, pokemonDetailsReducer } = state;

  return {
    pokedexReducer,
    pokedexRegionReducer,
    pokemonDetailsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokedexDetails: () => dispatch(getPokedexListRequest()),
    getPokedexRegionDetails: (url) => dispatch(getPokedexRegionDetails(url)),
    getSelectedPokemon: (id) => dispatch(getSelectedPokemon(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
