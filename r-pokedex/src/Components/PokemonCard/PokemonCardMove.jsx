import { getMove } from "../../services/pokemonService";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

const PokemonCardMove = ({ name, url }) => {
  function evaluatePower(num) {
    if (num == "" || num == undefined) {
      return "undefined";
    }

    if (num < 20) {
      return "bad";
    } else if (num < 80) {
      return "average";
    } else {
      return "good";
    }
  }

  useEffect(() => {
    getMove(url).then((m) => {
      setMove(m);
    });
    return () => {
      /*cleanup*/
    };
  }, [url]);
  const [move, setMove] = useState({});

  return (
    <div className="pkmnCard__move">
      <div className="pkmnCard__move__header">
        <h1 className="pkmnCard__move__name">{name}</h1>
        <div className="pkmnCard__move__typing">
          <span
            className={`pkmnCard__move__type type-chip type-chip--${move.type}`}
          >
            {move.type}
          </span>
          <span className={`type-chip type-chip--${move.damage_class}`}>
            {move.damage_class}
          </span>
        </div>
      </div>

      <div className="pkmnCard__move__data">
        <span>power:</span>
        <span className={`statChip statChip--${evaluatePower(move.power)}`}>
          {move.power}&nbsp;
        </span>
        <span>pp: {move.pp}</span>
        <span>accuracy: {move.accuracy}</span>
      </div>

      <div className="pkmnCard__move__effect">
        <span>{move.effect}</span>
      </div>
    </div>
  );
};

PokemonCardMove.propTypes = {
  name: propTypes.string,
  url: propTypes.string,
};

PokemonCardMove.defaultProps = {
  name: "",
  url: "",
};

export default PokemonCardMove;
