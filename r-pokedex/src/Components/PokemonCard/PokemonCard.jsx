import PropTypes from "prop-types";
import PokemonCardMovesList from "./PokemonCardMovesList";
import PokemonCardStats from "./PokemonCardStats";
import Loading from "../Common/Loading";
import { useState } from "react";
const PokemonCard = ({ pkmn }) => {
  const [rotated, setRotate] = useState(false);

  return (
    <div
      className={`pkmnCard pkmnCard--${pkmn.types ? pkmn.types[0] : "fire"} ${rotated ? "pkmnCard--rotated" : ""}`}
    >
      <div className="pkmnCard__side pkmnCard__side--front">
        {pkmn.name != undefined ? (
          <>
            <div className="pkmnCard__name-container">
              <h1 className="pkmnCard__name">{pkmn.name}</h1>
            </div>
            <div className="pkmnCard__types">
              {pkmn.types.map((type) => (
                <div key={type} className={`type-chip type-chip--${type}`}>
                  {type}
                </div>
              ))}
            </div>

            <div className="pkmnCard__image-container">
              <img
                alt="pokemon image"
                src={
                  pkmn.sprites == undefined
                    ? undefined
                    : pkmn.sprites.front_default
                }
                className="pkmnCard__image"
              ></img>
            </div>

            <div className="pkmnCard__stats">
              <PokemonCardStats stats={pkmn.stats}></PokemonCardStats>
            </div>
          </>
        ) : (
          <Loading />
        )}

        {/* <div
          className="pkmnCard__flip-trigger"
          onClick={() => setRotate(!rotated)}
        >
          <input type="checkbox" id="flip-checkbox"></input>
          <label htmlFor="flip-checkbox"></label>
        </div> */}
        <button
          className="pkmnCard__rotateBtn"
          onClick={() => setRotate(!rotated)}
        >
          &rarr;
        </button>
      </div>

      <div className="pkmnCard__side pkmnCard__side--back">
        <PokemonCardMovesList moves={pkmn.moves} />
        <h1>Estoy aqui</h1>
        <button
          className="pkmnCard__rotateBtn"
          onClick={() => setRotate(!rotated)}
        >
          &larr;
        </button>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pkmn: PropTypes.object,
};

PokemonCard.defaultProps = {
  pkmn: {
    sprites: { front_default: undefined },
    types: [],
  },
};

export default PokemonCard;
