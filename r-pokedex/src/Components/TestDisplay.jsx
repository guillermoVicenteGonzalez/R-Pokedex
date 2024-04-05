import React from "react";
import PropTypes from "prop-types";

const Test = ({ pkmn }) => {
  return (
    <div className="pkmnCard">
      <div className="pkmnCard__side pkmnCard__side--front">
        <h1 className="pkmnCard__name">{pkmn.name}</h1>
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

Test.propTypes = {
  pkmn: PropTypes.object,
};

Test.defaultProps = {
  pkmn: {
    sprites: { front_default: undefined },
  },
};

export default Test;
