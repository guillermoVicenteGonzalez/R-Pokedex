import { useEffect } from "react";
import { useState } from "react";
import * as pkmnService from "../services/pokemonService";
import PokemonListView from "../Components/PokemonList/PokemonListView";
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import PokemonEntry from "../Components/PokemonList/PokemonEntry";
import SearchFilter from "../Components/Common/SearchFilter";
import SideMenu from "../Components/Common/sideMenu";
import AppBar from "../Components/Common/AppBar";

const TestLayout = () => {
  const [pokemon, setPokemon] = useState({});
  const [pkmnList, setPkmnList] = useState([]);
  const [filteredPkmnList, setFilteredPkmnList] = useState([]);
  const [sideMenuTrigger, setSideMenuTrigger] = useState(false);

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
      setPkmnList(pkmnList);
      setFilteredPkmnList(pkmnList);
      setPokemonView(pkmnList[0].name);
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
        <AppBar
          actions={
            <button
              className="sideMenu__trigger"
              onClick={() => {
                setSideMenuTrigger(!sideMenuTrigger);
              }}
            >
              show
            </button>
          }
          header={<h1 className="heading-primary">Pokedex</h1>}
          settings={<h2>settings</h2>}
          sideMenu={<span>&nbsp;</span>}
        ></AppBar>
      </div>

      <div className="testLayout__body">
        <SideMenu visible={sideMenuTrigger} onClose={()=>setSideMenuTrigger(false)}>
          <div className="menuControls">
            <SearchFilter
              list={pkmnList}
              listParam={"name"}
              onSearch={(filtered) => setFilteredPkmnList(filtered)}
            />
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
          </div>
        </SideMenu>
        <PokemonCard pkmn={pokemon} />
      </div>
    </div>
  );
};

export default TestLayout;
