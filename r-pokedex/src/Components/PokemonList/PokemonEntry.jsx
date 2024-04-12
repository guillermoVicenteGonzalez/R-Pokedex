import React from "react";
import propTypes from "prop-types";

const pokemonEntry = ({ pokemon, onEntryClick }) => {
  return (
    <div onClick={onEntryClick} className="pkmnList__Entry">
      <span>{pokemon.name}</span>
    </div>
  );
};

pokemonEntry.propTypes = {
  pokemon: propTypes.object,
};

pokemonEntry.defaultProps = {
  pokemon: {},
};

export default pokemonEntry;
