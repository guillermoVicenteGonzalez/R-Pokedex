import ApiConf from "../config/apiConf.json";

const endpoint = "pokemon/";

export async function getPokemon(name) {
  let url = new URL(ApiConf.API_URL + endpoint + name);
  let pkmn = await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return await pkmn.json();
}

export async function getPokemonList(limit = 151) {
  let url = new URL(ApiConf.API_URL + endpoint + "?limit=" + limit);
  let list = await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  list = await list.json();
  return list.results;
}
