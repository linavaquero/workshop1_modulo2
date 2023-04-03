// función pintar pokemon principal 
// capturar el contenedor 
const printPokemonPower = (pokemonList, container) => {
    container.innerHTML = "";
    pokemonList.forEach((poke) => {
        // que la imagen que pinte sea la del poder 
      container.innerHTML += `
      <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
      <h1>${pokemon.name}</h1>
      `;
    });
  };

  const printPokemon = (pokemonList, container) => {
    container.innerHTML = "";
    pokemonList.forEach((poke) => {
      container.innerHTML += `
      <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
      `;
    });
  };
// función pintar los detalles 
  const pokemonNum= document.querySelector(".pokemonNum")
  const printDetails = (pokemonList, container) => {
    container.innerHTML = "";
    pokemonList.forEach((poke) => {
        // let pokemonNumText= document.createTextNode();
        // pokemonNum.appendChild(pokemonNumText);
        pokemonNum.innerText= 
    });
   
  };
  document.addEventListener("click", async (e) => {
    const urlPokemon = e.target.getAttribute("data-url");
    if (urlPokemon) {
      const pokemon = await getPokeFromApi(urlPokemon);
      printPokemonPower(pokemon, containerPokemon);
    }
});