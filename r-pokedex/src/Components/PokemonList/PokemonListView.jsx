import React from "react";
import propTypes from "prop-types";

const PokemonListView = ({ pokemonList, component }) => {
  return (
    <div className="pkmnList card">
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
};

PokemonListView.defaultProps = {
  pokemonList: [],
};

export default PokemonListView;
