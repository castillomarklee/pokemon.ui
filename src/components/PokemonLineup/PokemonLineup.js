import "./PokemonLineup.scss";
import LineupPanel from "./LineupPanel/LineupPanel";
import { connect } from "react-redux";
import { clearSelectedPokemon } from "../../actions/pokemonActions";

const clearPokemonDetails = (pokemonDetailsReducer, clearSelectedPokemon) => {
  const isPokemonDetails =
    pokemonDetailsReducer && pokemonDetailsReducer.pokemonDetails;
  const clearSelectedPokemonFunc =
    clearSelectedPokemon && typeof clearSelectedPokemon === "function";
  if (isPokemonDetails && clearSelectedPokemonFunc) {
    clearSelectedPokemon();
  }
};

const PanelsList = ({
  lineupList,
  setSelectedSlot,
  pokemonDetailsReducer,
  clearSelectedPokemon,
}) => {
  const clearPokemonDetailsFunc = () =>
    clearPokemonDetails(pokemonDetailsReducer, clearSelectedPokemon);
  if (lineupList && lineupList.length) {
    const sortedLineup = lineupList.sort((dataOne, dataTwo) => dataOne.id - dataTwo.id);
    return sortedLineup.map((data) => {
      return (
        <LineupPanel
          key={data.id}
          pokemonDetails={data}
          setSelectedSlot={setSelectedSlot}
          clearPokemonDetailsFunc={clearPokemonDetailsFunc}
        />
      );
    });
  }
  return <></>;
};

const PokemonLineup = ({
  lineupList,
  setSelectedSlot,
  pokemonDetailsReducer,
  clearSelectedPokemon,
}) => {
  return (
    <div className="pokemon-lineup">
      <h5 className="lineup-title">Pokémon Lineup</h5>
      <div className="lineup-list">
        <PanelsList
          lineupList={lineupList}
          setSelectedSlot={setSelectedSlot}
          pokemonDetailsReducer={pokemonDetailsReducer}
          clearSelectedPokemon={clearSelectedPokemon}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pokemonDetailsReducer } = state;

  return {
    pokemonDetailsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSelectedPokemon: () => dispatch(clearSelectedPokemon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLineup);
