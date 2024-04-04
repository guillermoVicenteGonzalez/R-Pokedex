import React from "react";
import { get } from "../services/baseServices";

let pkmn;

async function test() {
  console.log("testing");
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
    let result = res.json();
    console.log(result);
    return result;
  });
}

const TestBtn = ({onResult}) => {
  return (
  <button 
    onClick={test}
    className="btn">fetch</button>
  );
};

export default TestBtn;
