let currentPokemon;
let currentOrder = 9;

async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/${currentOrder}`;
  let response = await fetch(url);
  currentPokemon = await response.json();

  console.log('Loaded pokemon', currentPokemon);
  loadSpeciesInfo();
}

async function loadPokemonNames() {
  let url = 'https://pokeapi.co/api/v2/pokemon?limit=1010';
  let response = await fetch(url);
  let data = await response.json();
  let pokemonIds = data.results.map(pokemon => pokemon.url.split('/')[6]);
  
  let datalist = document.getElementById('pokemonNames');
  datalist.innerHTML = '';

  pokemonIds.forEach(id => {
    loadPokemonNameInLanguage(id, currentLanguage);
  });
}

async function loadPokemonNameInLanguage(id, language) {
  let url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  let response = await fetch(url);
  let data = await response.json();

  let nameInDesiredLanguage = data.names.find(name => name.language.name === language).name;

  let datalist = document.getElementById('pokemonNames');
  let option = document.createElement('option');
  option.value = nameInDesiredLanguage;
  datalist.appendChild(option);
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
  let elementNameInGerman = currentElementInfo['names'].find(name => name.language.name === 'de');
  document.getElementById('element').innerHTML = elementNameInGerman ? elementNameInGerman.name : '';
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

let currentLanguage = 'de'; // Set the default language to German

function changeLanguage() {
  let languageSelect = document.getElementById('languageSelect');
  currentLanguage = languageSelect.value;
  loadPokemonNames();
}

async function searchPokemon() {
  let input = document.getElementById('search-input');
  let inputValue = input.value.toLowerCase();
  
  // Verify if input is a number or a name
  if (isNaN(inputValue)) {
    // Find the Pokemon by name
    let url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data) {
      currentPokemon = data;
      currentOrder = data.id;
      loadSpeciesInfo();
    } else {
      alert("Pokemon not found");
    }
  } else {
    // Find the Pokemon by number
    let url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data) {
      currentPokemon = data;
      currentOrder = data.id;
      loadSpeciesInfo();
    } else {
      alert("Pokemon not found");
    }
  }
}

