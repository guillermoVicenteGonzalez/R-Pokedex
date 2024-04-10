import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pkmn }) => {
  function getPkmnType(p) {
    if (Object.keys(p).includes("types")) {
      return p.types[0].type.name;
    } else {
      return "";
    }
  }

  return (
    <div className={`pkmnCard pkmnCard--${getPkmnType(pkmn)}`}>
      <div className="pkmnCard__side pkmnCard__side--front">
        <h1 className="pkmnCard__name">{pkmn.name}</h1>

        {Object.keys(pkmn).includes("types") ? (
          <div className="pkmnCard__types">
            {pkmn.types.map((type) => (
              <div
                key={type.type.name}
                className={`type-chip type-chip--${type.type.name}`}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        <div className="pkmnCard__image-container">
          <img
            src={
              pkmn.sprites == undefined ? undefined : pkmn.sprites.front_default
            }
            className="pkmnCard__image"
          ></img>
        </div>

        <div className="movesContainer"></div>
      </div>

      <div className="pkmnCard__side pkmnCard__side--back">
        <p>ahoasloa</p>
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
  },
};

export default PokemonCard;
