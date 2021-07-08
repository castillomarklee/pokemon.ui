import "./PokemonData.scss";
import { Row, Col, Alert, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setPokemonLineup } from "../../actions/pokemonLineupActions";
import { formatDisplayName } from "../../utilities/pokedex-utilities";
import { clearSelectedPokemon } from "../../actions/pokemonActions";

const StatsList = ({ statsList }) => {
  if (statsList && statsList.length) {
    const columns = statsList.map((data, id) => {
      const { stat, base_stat } = data;
      return (
        <Col md={5} key={id}>
          <p>
            <b>{formatDisplayName(stat.name)}:</b> {base_stat}
          </p>
        </Col>
      );
    });
    return <Row>{columns}</Row>;
  }
  return <></>;
};

const SkillOptionsList = ({ skillsList }) => {
  if (skillsList && skillsList.length) {
    return skillsList.map((data, id) => {
      return (
        <option key={id} value={data.value}>
          {data.displayName}
        </option>
      );
    });
  }
  return <></>;
};

const addPokemonFunc = (data, pokemonDetails, slotId, setPokemonLineupFunc, clearSelectedPokemonFunc, setSelectedSlot) => {
  const isClearSelectedPokemonFunc = clearSelectedPokemonFunc && typeof clearSelectedPokemonFunc === 'function';
  const isSetPokemonLineupFunc = setPokemonLineupFunc && typeof setPokemonLineupFunc === 'function';
  const isSetSelectedSlotFunc = setSelectedSlot && typeof setSelectedSlot === 'function';
  if (isSetPokemonLineupFunc && isClearSelectedPokemonFunc && isSetSelectedSlotFunc) {
    const payload = {
      id: slotId,
      details: {
        ...pokemonDetails,
        editable: data
      }
    };
    setPokemonLineupFunc(payload);
    setSelectedSlot();
    clearSelectedPokemonFunc();
  }
};

const setFormData = (setValue, editableValues) => {
  const isSetValueFunc = setValue && typeof setValue === 'function';
  if (isSetValueFunc && editableValues) {
    
    const {
      nickname,
      skill1,
      skill2,
      skill3
    } = editableValues;
    setValue("nickname", nickname);
    setValue("skill1", skill1);
    setValue("skill2", skill2);
    setValue("skill3", skill3);
  }
};

const DetailsContent = ({ selectedSlotDetails, pokemonDetailsReducer, slotId, setPokemonLineupFunc, clearSelectedPokemonFunc, setSelectedSlot }) => {
  const { register, formState, handleSubmit, setValue } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  
  const isFormReady = !formState.isValid ? "is-disabled": "";
  const replaceSlotValue = {
    ...selectedSlotDetails,
    details:
      pokemonDetailsReducer && pokemonDetailsReducer.pokemonDetails
        ? pokemonDetailsReducer.pokemonDetails
        : null,
  };
  const slotDetails =
    selectedSlotDetails && selectedSlotDetails.details
      ? selectedSlotDetails
      : replaceSlotValue

  if (slotDetails && slotDetails.details) {
    const isSlotReplace = (selectedSlotDetails && selectedSlotDetails.details) && (pokemonDetailsReducer && pokemonDetailsReducer.pokemonDetails) ? replaceSlotValue : slotDetails;
    const {
      name,
      height,
      weight,
      stats,
      sprites,
      base_experience,
      moves,
    } = isSlotReplace.details;
    const pokeDetails = {
      name,
      height,
      weight,
      stats,
      base_experience,
      sprites,
      moves
    };
    setFormData(setValue, isSlotReplace.details.editable);
    const movesList = moves.map((data) => {
      return {
        displayName: formatDisplayName(data.move.name),
        value: data.move.name,
      };
    });
    return (
      <Form onSubmit={handleSubmit(data => addPokemonFunc(data, pokeDetails, slotId, setPokemonLineupFunc, clearSelectedPokemonFunc, setSelectedSlot))}>
        <Row>
          <Col md={4}>
            <img
              src={sprites.front_default}
              alt="SAMPLE"
              className="pokemon-icon"
            />
          </Col>
          <Col md={8}>
            <div className="pokemon-details">
              <Row>
                <Col md={5}>
                  <p>
                    <b>Name:</b> {formatDisplayName(name)}
                  </p>
                </Col>
                <Col md={5}>
                  <p>
                    <b>Height:</b> {height}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <p>
                    <b>Weight:</b> {weight}
                  </p>
                </Col>
                <Col md={5}>
                  <p>
                    <b>Base Experience:</b> {base_experience}
                  </p>
                </Col>
              </Row>
              <StatsList statsList={stats} />
              <Row>
                <Col md={5}>
                  <Form.Group
                    controlId="minUnitsToOrderId"
                    className="text-box"
                  >
                    <Form.Label>
                      <b>Nickname:</b>
                    </Form.Label>
                    <Form.Control
                      size="sm"
                      sm="5"
                      autoComplete="off"
                      type="text"
                      name="nickname"
                      {...register("nickname", {
                        required: true,
                      })}
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group
                    controlId="minUnitsToOrderId"
                    className="text-box"
                  >
                    <Form.Label>
                      <b>Skill 1:</b>
                    </Form.Label>
                    <Form.Control
                      size="sm"
                      sm="5"
                      as="select"
                      autoComplete="off"
                      type="text"
                      name="skill1"
                      {...register("skill1", {
                        required: true,
                      })}
                    >
                      <SkillOptionsList skillsList={movesList} />
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <Form.Group
                    controlId="minUnitsToOrderId"
                    className="text-box"
                  >
                    <Form.Label>
                      <b>Skill 2:</b>
                    </Form.Label>
                    <Form.Control
                      size="sm"
                      sm="5"
                      as="select"
                      autoComplete="off"
                      type="text"
                      name="skill2"
                      {...register("skill2", {
                        required: true,
                      })}
                    >
                      <SkillOptionsList skillsList={movesList} />
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group
                    controlId="minUnitsToOrderId"
                    className="text-box"
                  >
                    <Form.Label>
                      <b>Skill 3:</b>
                    </Form.Label>
                    <Form.Control
                      size="sm"
                      sm="5"
                      as="select"
                      autoComplete="off"
                      type="text"
                      name="skill3"
                      {...register("skill3", {
                        required: true,
                      })}
                    >
                      <SkillOptionsList skillsList={movesList} />
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={5}></Col>
                <Col md={5} className="submit-button-container">
                  <Button type="submit" variant="success" className={`${isFormReady}`}>
                    Add
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
  return (
    <div className="add-pokemon-container">
      <Alert variant="info">Add pokemon by selecting one on the pokedex</Alert>
    </div>
  );
};

const PokemonData = ({
  selectedSlotDetails,
  pokemonDetailsReducer,
  setPokemonLineup,
  clearSelectedPokemon,
  setSelectedSlot
}) => {
  const slotNumber = selectedSlotDetails
    ? `- Slot ${selectedSlotDetails.id}`
    : "";
  return (
    <div className="pokemon-data">
      <h5 className="lineup-title">Pokémon Details {slotNumber}</h5>
      <div className="details-container">
        {selectedSlotDetails && selectedSlotDetails.id && (
          <DetailsContent
            selectedSlotDetails={selectedSlotDetails}
            pokemonDetailsReducer={pokemonDetailsReducer}
            slotId={selectedSlotDetails.id}
            setPokemonLineupFunc={setPokemonLineup}
            clearSelectedPokemonFunc={clearSelectedPokemon}
            setSelectedSlot={setSelectedSlot}
          />
        )}
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
    setPokemonLineup: (payload) => dispatch(setPokemonLineup(payload)),
    clearSelectedPokemon: () => dispatch(clearSelectedPokemon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonData);
