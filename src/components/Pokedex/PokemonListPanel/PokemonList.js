import "./PokemonList.scss";
import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { formatDisplayName } from "../../../utilities/pokedex-utilities";
import icon from "../../../images/pokeball-icon.png";

const PokemonListContainer = ({ pokemonList, isLoading, getSelectedPokemon }) => {
  const isPokemonList = pokemonList && pokemonList.length;
  if (isPokemonList) {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={3}>
            <Spinner
              animation="border"
              className="spinner-container"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </td>
        </tr>
      );
    }
    return pokemonList.map((data) => {
      return (
        <tr key={data.id} onClick={() => getSelectedPokemon(data.name)}>
          <td colSpan={3}>{data.displayName}</td>
        </tr>
      );
    });
  }
  return (
    <tr>
      <td colSpan={3}>No data</td>
    </tr>
  );
};

const setPokemonDetailsList = (
  pokemonList,
  setPokemonEntries,
  setRegionName
) => {
  const setPokemonEntriesFunc =
    setPokemonEntries && typeof setPokemonEntries === "function";
  const setRegionNameFunc =
    setRegionName && typeof setRegionName === "function";
  const isPokemonList = pokemonList && pokemonList.regionDetailsData;
  if (isPokemonList && setPokemonEntriesFunc && setRegionNameFunc) {
    const newRegionName = formatDisplayName(
      pokemonList.regionDetailsData.data.name
    );
    setRegionName(newRegionName);
    const newPokemonDetailsList = pokemonList.regionDetailsData.data.pokemon_entries.map(
      (details) => {
        const displayName = formatDisplayName(details.pokemon_species.name);
        return {
          id: details.entry_number,
          displayName,
          name: details.pokemon_species.name,
          url: details.pokemon_species.url,
        };
      }
    );
    setPokemonEntries(newPokemonDetailsList);
  }
};

const PokemonList = ({ pokemonList, isLoading, getSelectedPokemon }) => {
  const [pokemonEntries, setPokemonEntries] = useState(null);
  const [regionName, setRegionName] = useState(null);
  useEffect(() => {
    setPokemonDetailsList(pokemonList, setPokemonEntries, setRegionName);
  }, [pokemonList]);
  if (pokemonEntries && pokemonEntries.length) {
    return (
      <div className="pokemon-list-table">
        <div className="title-container">
          <h5 className="region-title">Pokémon List - {regionName}</h5>
          <img src={icon} alt="POKE_BALL" />
        </div>
        <Table responsive>
          <tbody>
            <PokemonListContainer
              pokemonList={pokemonEntries}
              isLoading={isLoading}
              getSelectedPokemon={getSelectedPokemon}
            />
          </tbody>
        </Table>
      </div>
    );
  }
  return <></>;
};

export default PokemonList;
