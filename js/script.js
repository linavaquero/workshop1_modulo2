// función pintar pokemon principal 
// capturar el contenedor 
const getAllInfoPokemons = async (url) => {
    const allInfoPokemons = [];
    try {
      const { data } = await axios.get(url); //desestructuración de objetos
  
      for (const pokemon of data.results) {
        const urlPokemon = pokemon.url;
        const response = await axios.get(urlPokemon);
        const poke = {
          id: response.data.id,
          name: response.data.name,
          height: response.data.height,
          image: response.data.sprites.front_default,
          abilities: response.data.abilities.map(item=> item.ability.name)
          // falta el tipo 
        }; 
        allInfoPokemons.push(poke);
      }
      return allInfoPokemons;
    } catch (error) {
      console.log(error);
      return []
    }
  }


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
  const pokemonNum= document.querySelector(".pokemonNum");
  const pokemonLev=document.querySelector(".pokemonLev");
  const pokemonTyp=document.querySelector(".pokemonTyp");
  const pokemonHab=document.querySelector(".pokemonHab");
  const pokemonHei=document.querySelector(".pokemonHei");
  const pokemonWei=document.querySelector(".pokemonWei");
  
  const printDetails = (pokemonList, container) => {
    container.innerHTML = "";
    pokemonList.forEach((poke) => {
        // let pokemonNumText= document.createTextNode();
        // pokemonNum.appendChild(pokemonNumText);
    // encontrar en el array el id
        const pokemonId =allInfoPokemons.find(item => item.id);
    //insertar la información en el contenedor
        pokemonNum.innerText= pokemonId;
        const pokemonLevel= 
        pokemonLev.innerText=pokemonLevel
        const pokemonType=
        pokemonTyp.innerText=pokemonType
        const pokemonHeight= 
        pokemonHei.innerText=pokemonHeight;
        const pokemonWeight=
        pokemonWei.innerText=pokemonWeight;
    });
   
  };




  document.addEventListener("click", async (e) => {
    const urlPokemon = e.target.getAttribute("data-url");
    if (urlPokemon) {
      const pokemon = await getPokeFromApi(urlPokemon);
      printPokemonPower(pokemon, containerPokemon);
    }
});