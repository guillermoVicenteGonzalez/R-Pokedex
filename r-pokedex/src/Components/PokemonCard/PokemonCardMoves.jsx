import propTypes from "prop-types";

const PokemonCardMoves = ({ moves }) => {
  return (
    <>
      {moves.map((move) => (
        <span key={move.move.name}>{JSON.stringify(move)}</span>
      ))}
    </>
  );
};

PokemonCardMoves.propTypes = {
  moves: propTypes.array,
};

PokemonCardMoves.defaultProps = {
  moves: [],
};

export default PokemonCardMoves;
