import { useEffect } from "react";
import { useState } from "react";
import * as pkmnService from "../services/pokemonService";
import PokemonListView from "../Components/PokemonList/PokemonListView";
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import PokemonEntry from "../Components/PokemonList/PokemonEntry";
import SearchFilter from "../Components/SearchFilter";

const TestLayout = () => {
  const [pokemon, setPokemon] = useState({});
  const [pkmnList, setPkmnList] = useState([]);
  const [filteredPkmnList, setFilteredPkmnList] = useState([]);

  useEffect(() => {
    getPokemon("");
    return () => {};
  }, []);

  //cuidado, lista por un lado, visualizacion por el otro.
  //cuidado. Hay que hacer un DTO.
  async function getPokemon(name) {
    console.log(name);
    if (name == undefined || name == "") {
      console.log("entro en get muchos pokemon");
      let pkmnList = await pkmnService.getPokemonList();
      console.log(pkmnList);
      setPkmnList(pkmnList);
      setFilteredPkmnList(pkmnList);
    } else {
      console.log("entro en get 1 pokemon");
      let nPkmn = await pkmnService.getPokemon(name);
      setPokemon(nPkmn);
    }
  }

  async function setPokemonView(pokemonName) {
    let nPkmn = await pkmnService.getPokemon(pokemonName);
    console.log(nPkmn);
    setPokemon(nPkmn);
  }

  return (
    <div className="testLayout">
      <div className="testLayout__heading">
        <h1 className="heading-primary">Pokedex</h1>
        <SearchFilter
          list={pkmnList}
          listParam={"name"}
          onSearch={(filtered) => setFilteredPkmnList(filtered)}
        />
      </div>
      <div className="testLayout__body">
        <PokemonListView
          pokemonList={filteredPkmnList}
          component={(pokemon) => (
            <PokemonEntry
              onEntryClick={() => setPokemonView(pokemon.name)}
              key={pokemon.name}
              pokemon={pokemon}
            />
          )}
        />
        <PokemonCard pkmn={pokemon} />
      </div>
    </div>
  );
};

export default TestLayout;
