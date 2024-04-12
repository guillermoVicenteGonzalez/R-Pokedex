import { useState, useEffect } from "react";
import PokemonListView from "./PokemonListView";
import PokemonEntry from "./PokemonEntry";
import SearchFilter from "../Common/SearchFilter";
import propTypes from "prop-types";

const PokemonListWidget = ({ pkmnList, onPkmnSelected }) => {
  const [filteredPkmnList, setFilteredPkmnList] = useState([]);
  useEffect(() => {
    setFilteredPkmnList(pkmnList);
  }, [pkmnList]);

  return (
    <div className="pkmnList">
      <div className="pkmnList__searchbar">
        <SearchFilter
          list={pkmnList}
          listParam={"name"}
          onSearch={(filtered) => setFilteredPkmnList(filtered)}
        />
      </div>
      <PokemonListView
        pokemonList={filteredPkmnList}
        component={(pokemon) => (
          <PokemonEntry
            onEntryClick={() => onPkmnSelected(pokemon.name)}
            key={pokemon.name}
            pokemon={pokemon}
          />
        )}
      />
    </div>
  );
};

PokemonListWidget.propTypes = {
  pkmnList: propTypes.array,
  onPkmnSelected: propTypes.func,
};

PokemonListWidget.defaultProps = {
  pkmnList: [],
  onPkmnSelected: () => "",
};

export default PokemonListWidget;
