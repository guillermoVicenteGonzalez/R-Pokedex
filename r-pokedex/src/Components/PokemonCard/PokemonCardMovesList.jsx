import propTypes from "prop-types";
import Loading from "../Common/Loading";
import PokemonCardMove from "../PokemonCard/PokemonCardMove";

const PokemonCardMovesList = ({ moves }) => {
  if (moves.length == 0) {
    return <Loading />;
  } else {
    return (
      <div className="pkmnCard__moves">
        {moves.map((move) => (
          <PokemonCardMove name={move.name} url={move.url} key={move.name} />
        ))}
      </div>
    );
  }
};

PokemonCardMovesList.propTypes = {
  moves: propTypes.array,
};

PokemonCardMovesList.defaultProps = {
  moves: [],
};

export default PokemonCardMovesList;
