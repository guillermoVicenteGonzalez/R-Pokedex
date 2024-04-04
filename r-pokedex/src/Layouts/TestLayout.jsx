import React from "react";
import TestBtn from "../Components/TestBtn";
import SearchBar from "../Components/SearchBar";
import Test from "../Components/TestDisplay";
import { useState } from "react";
import { get } from "../services/baseServices";
import ApiConf from "../config/apiConf.json"



const TestLayout = () => {
    const endpoint = "pokemon/"
    const [pokemon, setPokemon] = useState({})
    const [currentSearch, setCurrentSearch] = useState("")

    async function getPokemon(name){
        if(name == undefined){
            return undefined
        }

        console.log("get pokemon");
        let url = new URL(ApiConf.API_URL + endpoint + currentSearch)
        let pkmn = await fetch(url,{
            mode:'cors',
            method:'GET',
            headers:{
                "content-type":"application/json"
            }
        })
        let result = await pkmn.json();
        setPokemon(result);
    }

  return (
    <div className="testLayout">
        <h1 className="title">Pokedex</h1>
        <input 
        value={currentSearch}
        onChange={e => setCurrentSearch(e.target.value)}
        type="text" 
        className="searchBar"></input>
        <p>{currentSearch}</p>
      <Test pkmn={pokemon}/>
        <button 
        onClick={currentSearch => getPokemon(currentSearch)}
        type="button" 
        className="btn">fetch</button>
    </div>
  );
};

export default TestLayout;