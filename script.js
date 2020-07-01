var getAll = document.getElementById("get-all");
var container = document.getElementById("container");
var inputFromUser = document.getElementById("input-user");
var search = document.getElementById("search");

function displayAll() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      let myPokemons = response.data.results;
      myPokemons.forEach((pokemon) => {
        displayOnePokemon(pokemon.url);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayOnePokemon(url) {
  axios
    .get(url)
    .then((result) => {
      console.log(result.data);
      container.innerHTML += `<div class="pokemon">
                                <h1>${result.data.name}</h1>
                                <img src=${result.data.sprites.front_default} />
                              </div>`;
    })
    .catch((error) => console.log(error));
}

function searchOnePokemon(inputPokemon) {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + inputPokemon)
    .then((result) => {
      console.log(result.data);
    })
    .catch((error) => console.log(error));
}

search.onclick = () => searchOnePokemon(inputFromUser.value);

getAll.onclick = displayAll;
