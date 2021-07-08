import "./MainPage.scss";
// import pokemonLogo from "../../images/icon.png";
import { Container, Col, Row } from "react-bootstrap";
import PokemonLineup from "../PokemonLineup/PokemonLineup";
import PokemonData from "../PokemonData/PokemonData";
import Pokedex from "../Pokedex/Pokedex";
import { connect } from "react-redux";
import { useState } from "react";

const MainPage = ({ pokemonLineupReducer }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  return (
    <div className="main-page-container">
      <div className="game-panel">
        {/* <div className="image-logo-container">
          <img src={pokemonLogo} alt="POKEMON_LOGO" />
        </div> */}
        <div className="content-container">
          <Container>
            <Row>
              <Col md={7}>
                <PokemonLineup lineupList={pokemonLineupReducer.pokemonLineup} setSelectedSlot={setSelectedSlot} />
                <PokemonData selectedSlotDetails={selectedSlot} setSelectedSlot={setSelectedSlot} />
              </Col>
              <Col md={5}>
                <Pokedex />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pokemonLineupReducer } = state;

  return {
    pokemonLineupReducer
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPokemonLineup: (payload) => dispatch(setPokemonLineup(payload))
//   };
// };

export default connect(mapStateToProps)(MainPage);
