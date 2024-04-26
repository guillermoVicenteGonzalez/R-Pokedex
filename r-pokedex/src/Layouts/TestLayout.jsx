import { useEffect } from "react";
import { useState } from "react";
import * as pkmnService from "../services/pokemonService";
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import SideMenu from "../Components/Common/sideMenu";
import AppBar from "../Components/Common/AppBar";
import PokemonListWidget from "../Components/PokemonList/PokemonListWidget";

const TestLayout = () => {
  const [pokemon, setPokemon] = useState({});
  const [pkmnList, setPkmnList] = useState([]);
  // const [filteredPkmnList, setFilteredPkmnList] = useState([]);
  const [sideMenuTrigger, setSideMenuTrigger] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [limits, setLimits] = useState({ limit: 151, offset: 0 });

  useEffect(() => {
    getPokemon("");
    // let testPkmn = test("bulbasaur");
    return () => {};
  }, []);

  useEffect(() => {
    pkmnService.getPokemonList(limits.limit, limits.offset).then((result) => {
      setPkmnList(result);
    });
    return () => {};
  }, [limits]);

  //cuidado, lista por un lado, visualizacion por el otro.
  //cuidado. Hay que hacer un DTO.
  async function getPokemon(name) {
    console.log(name);
    if (name == undefined || name == "") {
      console.log("entro en get muchos pokemon");
      let pkmnList = await pkmnService.getPokemonList();
      setPkmnList(pkmnList);
      setPokemonView(pkmnList[0].name);
    } else {
      console.log("entro en get 1 pokemon");
      // let nPkmn = await pkmnService.getPokemon(name);
      let nPkmn = await pkmnService.getFullPokemon(name);
      setPokemon(nPkmn);
    }
  }

  async function setPokemonView(pokemonName) {
    // let nPkmn = await pkmnService.getPokemon(pokemonName);
    let nPkmn = await pkmnService.getFullPokemon(pokemonName);
    console.log(nPkmn);
    setPokemon(nPkmn);
  }

  return (
    <div className="testLayout">
      <div className="testLayout__heading">
        <AppBar
          actions={
            <button
              className={`sideMenu__trigger ${sideMenuTrigger ? `sideMenu__trigger--open` : ""}`}
              onClick={() => {
                setSideMenuTrigger(!sideMenuTrigger);
              }}
            >
              <span className="sideMenu__trigger__icon">&nbsp;</span>
            </button>
          }
          header={<h1 className="heading-primary">Pokedex</h1>}
          settings={<h2>settings</h2>}
        ></AppBar>
      </div>

      <div className="testLayout__body">
        <SideMenu
          visible={sideMenuTrigger}
          onClose={() => setSideMenuTrigger(false)}
          sidebar={
            <>
              <div onClick={() => setLimits({ limit: 151, offset: 0 })}>
                gen <br></br>1
              </div>
              <div onClick={() => setLimits({ limit: 100, offset: 151 })}>
                gen <br></br>2
              </div>
              <div onClick={() => setLimits({ limit: 135, offset: 251 })}>
                gen <br></br>3
              </div>
              <div onClick={() => setLimits({ limit: 107, offset: 386 })}>
                gen <br></br>4
              </div>
              <div onClick={() => setLimits({ limit: 156, offset: 493 })}>
                gen <br></br>5
              </div>
              <div onClick={() => setLimits({ limit: 72, offset: 649 })}>
                gen <br></br>6
              </div>
              <div onClick={() => setLimits({ limit: 88, offset: 721 })}>
                gen <br></br>7
              </div>
              <div onClick={() => setLimits({ limit: 96, offset: 809 })}>
                gen <br></br>8
              </div>
              <div onClick={() => setLimits({ limit: 120, offset: 905 })}>
                gen <br></br>9
              </div>
              <div onClick={() => setLimits({ limit: 1025, offset: 0 })}>
                All
              </div>
              <div onClick={() => setTabIndex(1)}>type table</div>
            </>
          }
        >
          {tabIndex == 0 ? (
            <div className="testLayout__list">
              <PokemonListWidget
                pkmnList={pkmnList}
                onPkmnSelected={(name) => setPokemonView(name)}
              ></PokemonListWidget>
            </div>
          ) : null}
        </SideMenu>
        {/* <div className={sideMenuTrigger ? "slideToRight" : "slideFromRight"}>
          <PokemonCard pkmn={pokemon} />
        </div> */}
        <div
          className={
            sideMenuTrigger ? "slideContainer" : "slideContainer--hidden"
          }
        >
          <PokemonCard pkmn={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default TestLayout;
