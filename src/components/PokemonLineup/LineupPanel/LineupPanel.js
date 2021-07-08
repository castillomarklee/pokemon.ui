import './LineupPanel.scss';
import { formatDisplayName } from '../../../utilities/pokedex-utilities';

const PanelContent = ({ pokemonDetails }) => {
    if (pokemonDetails && pokemonDetails.details) {
        const {
            name,
            sprites
        } = pokemonDetails.details;
        return (
            <div className="details-container">
               <img src={sprites.front_default} alt={`IMAGE_${pokemonDetails.id}`} />
               <p>{formatDisplayName(name)}</p>
            </div>
        );
    }
    return (
        <p className="pokemon-empty">Empty Slot</p>
    );
}

const panelFunc = (pokemonDetails, setSelectedSlot, clearPokemonDetailsFunc) => {
    const isClearPokemonDetailsFunc = clearPokemonDetailsFunc && typeof clearPokemonDetailsFunc === 'function';
    const isSetSelectedSlotFunc = setSelectedSlot && typeof setSelectedSlot === 'function';

    if (isClearPokemonDetailsFunc && isSetSelectedSlotFunc) {
        setSelectedSlot(pokemonDetails);
        clearPokemonDetailsFunc();
    }
}

const LineupPanel = ({ pokemonDetails, setSelectedSlot, clearPokemonDetailsFunc }) => {
    return (
        <div className="lineup-panel" onClick={() => panelFunc(pokemonDetails, setSelectedSlot, clearPokemonDetailsFunc)}>
            <PanelContent pokemonDetails={pokemonDetails} />
        </div>
    );
};

export default LineupPanel;