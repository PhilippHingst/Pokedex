let currentPokemon;
let currentOrder = 9;

async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/${currentOrder}`;
  let response = await fetch(url);
  currentPokemon = await response.json();

  console.log('Loaded pokemon', currentPokemon);
  loadSpeciesInfo();
}

async function loadSpeciesInfo() {
  let url = `https://pokeapi.co/api/v2/pokemon-species/${currentOrder}/`;
  let responseStat = await fetch(url);
  currentStatInfo = await responseStat.json();

  console.log('Loaded info', currentStatInfo);
  loadElementInfo()
}

async function loadElementInfo() {
  let url = currentStatInfo['egg_groups']['0']['url'];
  let responseColor = await fetch(url);
  currentElementInfo = await responseColor.json();

  console.log('Loaded info', currentElementInfo);
  renderPokemonInfo();
  renderPokeStats();
}

function renderPokemonInfo() {
  document.getElementById('element').innerHTML = currentElementInfo['names']['6']['name'];
  document.getElementById('order').innerHTML = currentStatInfo['id'];
  document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
  let pokemonFrontSprite = currentPokemon['sprites']['other']['official-artwork']['front_default'];
  document.getElementById('pokemonFrontSprite').src = pokemonFrontSprite;
  let currentColor = currentStatInfo['color']['name'];
  document.getElementById('pokedex').classList.add(currentColor);

}

function renderPokeStats() {
  statOfHP = currentPokemon['stats']['0']['base_stat'];
  statOfAttack = currentPokemon['stats']['1']['base_stat'];
  statOfDef = currentPokemon['stats']['2']['base_stat'];
  statOfSpecAttack = currentPokemon['stats']['3']['base_stat'];
  statOfSpecDef = currentPokemon['stats']['4']['base_stat'];
  statOfSpeed = currentPokemon['stats']['5']['base_stat'];

  let statContent = document.getElementById('statContent');
  statContent.innerHTML = ``;
  statContent.innerHTML += generateStatsContent();
}
