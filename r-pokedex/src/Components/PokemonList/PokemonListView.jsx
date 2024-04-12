import propTypes from "prop-types";

const PokemonListView = ({ pokemonList, component }) => {
  return (
    <div className="pkmnList__view">
      {pokemonList.map(
        (pokemon) => component(pokemon),
        // <PokemonEntry
        // key={pokemon.name}
        // pokemon={pokemon}
        // />
      )}
    </div>
  );
};

PokemonListView.propTypes = {
  pokemonList: propTypes.array,
  component: propTypes.func,
};

PokemonListView.defaultProps = {
  pokemonList: [],
};

export default PokemonListView;
