import ApiConf from "../config/apiConf.json";

const endpoint = "pokemon/";
const typeEndpoint = "type/";

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

function parsePokemon(pokemon) {
  let types = pokemon.types.map((t) => {
    return t.type.name;
  });

  let moves = pokemon.moves.map((m) => {
    return m.move;
  });

  let parsed = {
    name: pokemon.name,
    stats: pokemon.stats,
    sprites: pokemon.sprites,
    moves: moves,
    types: types,
  };

  return parsed;
}

export async function getFullPokemon(name) {
  let rawPokemon = await getPokemon(name);
  let parsedPokemon = parsePokemon(rawPokemon);
  return parsedPokemon;
}

export async function getMove(url) {
  let rawMove = await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  rawMove = await rawMove.json();
  let rawEffect =
    rawMove.effect_entries.length > 0 ? rawMove.effect_entries[0].effect : "";

  let move = {
    name: rawMove.name,
    accuracy: rawMove.accuracy,
    damage_class: rawMove.damage_class.name,
    power: rawMove.power,
    pp: rawMove.pp,
    type: rawMove.type.name,
    effect: rawEffect,
  };
  return move;
}

export async function getPokemonTypes() {
  let url = new URL(ApiConf.API_URL + typeEndpoint);
  let rawTypes = await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  rawTypes = await rawTypes.json();
  let types = rawTypes.results.map((type) => {
    return type.name;
  });

  return types;
}

export async function getPokemonList(limit = 151, offset = 0) {
  let url = new URL(
    ApiConf.API_URL + endpoint + "?limit=" + limit + "&offset=" + offset,
  );
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
