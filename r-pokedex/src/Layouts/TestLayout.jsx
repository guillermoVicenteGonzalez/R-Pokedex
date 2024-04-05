import React, { useEffect } from "react";
import TestBtn from "../Components/TestBtn";
import SearchBar from "../Components/SearchBar";
import TestView from "../Components/TestDisplay";
import { useState } from "react";
import { get } from "../services/baseServices";
import ApiConf from "../config/apiConf.json";
import * as pkmnService from "../services/pokemonService";
import PokemonListView from "../Components/PokemonListView";
import PokemonEntry from "../Components/PokemonEntry";

const TestLayout = () => {
  const endpoint = "pokemon/";
  const [pokemon, setPokemon] = useState({});
  const [pkmnList, setPkmnList] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");

  useEffect(() => {
    getPokemon(currentSearch);
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

  function test() {
    alert("this is a test");
  }

  return (
    <div className="testLayout">
      <h1 className="title">Pokedex</h1>

      <input
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
        type="text"
        className="searchBar"
      ></input>
      <p>{currentSearch}</p>
      <div className="testLayout__body">
        <PokemonListView
          pokemonList={pkmnList}
          component={(pokemon) => (
            <PokemonEntry
              onEntryClick={() => setPokemonView(pokemon.name)}
              key={pokemon.name}
              pokemon={pokemon}
            />
          )}
        />
        <TestView pkmn={pokemon} />
      </div>
      <button
        onClick={() => getPokemon(currentSearch)}
        type="button"
        className="btn"
      >
        fetch
      </button>
    </div>
  );
};

export default TestLayout;
