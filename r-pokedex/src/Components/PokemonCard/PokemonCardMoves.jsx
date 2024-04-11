import propTypes from "prop-types";

const PokemonCardMoves = ({ moves }) => {
  return (
    <>
      {moves.map((move) => (
        <span key={move.name}>{JSON.stringify(move)}</span>
      ))}
      {/* {JSON.stringify(moves[0])} */}
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
