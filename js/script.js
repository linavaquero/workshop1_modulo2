let pokedex = []; //creamos un array vacio
const ShowIconType = [
  {
    "type": "normal",
    "image": "../img/normal.PNG"
  },
  {
    "type": "fire",
    "image": "../img/fuego.PNG"
  },
  {
    "type": "water",
    "image": "../img/agua.PNG"
  },
  {
    "type": "electric",
    "image": "../img/electrico.PNG"
  },
  {
    "type": "grass",
    "image": "../img/Cesped.PNG"
  },
  {
    "type": "ice",
    "image": "../img/hielo.PNG"
  },
  {
    "type": "fighting",
    "image": "../img/Lucha.PNG"
  },
  {
    "type": "poison",
    "image": "../img/veneno.PNG"
  },
  {
    "type": "ground",
    "image": "../img/suelo.PNG"
  },
  {
    "type": "flying",
    "image": "../img/volador.PNG"
  },
  {
    "type": "psychic",
    "image": "../img/psiquico.PNG"
  },
  {
    "type": "bug",
    "image": "../img/bicho.PNG"
  },
  {
    "type": "rock",
    "image": "../img/roca.PNG"
  },
  {
    "type": "ghost",
    "image": "../img/fastama.PNG"
  },
  {
    "type": "dragon",
    "image": "../img/dragon.PNG"
  },
  {
    "type": "dark",
    "image": "../img/oscura.PNG"
  },
  {
    "type": "steel",
    "image": "../img/acero.PNG"
  },
  {
    "type": "fairy",
    "image": "../img/hada.PNG"
  },

]

const URL_API = "https://pokeapi.co/api/v2/pokemon"; //API

const allInfoPokemons = [];

const containerDetails = document.querySelector(".descripcion"); //Captura la sección de los detalles
const otrosPokemones = document.getElementById("otrospokemones");


//capturar el contenedor 
const URL_APIDetails = "https://pokeapi.co/api/v2/pokemon";
const getAllInfoPokemons = async (url) => {

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
        type: response.data.types[0].type.name,
        weight: response.data.weight,
        level: response.data.base_experience,
        abilities: response.data.abilities[0].ability.name,
      };
      allInfoPokemons.push(poke);
    }
    return allInfoPokemons;
  } catch (error) {
    console.log(error);
    return []
  }
}

// const getPokemonId = async (id) => { 
//     //METODO GET
//     const response = await axios(`${URL}/${id}`);
//     const PokemonId= response.data.id;
//     console.log("datos del get post by ID", PokemonId);
// };

const printPokemonOtros = (pokemonList, container) => {
  let contador = 0
  container.innerHTML = `<article>
                          <h2>others</h2>
                      </article>`;
  pokemonList.forEach((pokemon) => {
    if (contador == 0) {

      printDetallePokemon(pokemon);
    } else {
      if (contador > 6) return
      container.innerHTML += `   
                          <article>
                              <img src=${pokemon.image} data-pokemon=${pokemon.name} >
                          </article> `

    }
    contador += 1;
  });
};

const printDetallePokemon = (pokemon) => {

  const containerPoke = document.getElementById("lado1"); //captura del contenedor
  const containerDescripcion = document.getElementById("lado2")

  const tipo = ShowIconType.find(logotipo => logotipo.type === pokemon.type)

  containerPoke.innerHTML = `
<article id="contenedorpokemonName">
 <figure class="contenedorpokemon__figurelogo">
  <img src=${tipo.image} alt=${tipo.type}>
  </figure>
  <h1>${pokemon.name}</h1>
</article>
<article id="contenedorpokemon">
<figure class="contenedorpokemon__figure">
<img src=${pokemon.image} alt=${pokemon.name} id=${pokemon.id} >
</figure> 
</article> `
  containerDescripcion.innerHTML = `
            <article class="descripcion">
            <ul class="inf" id="inf1">
                <li class= "inf__li">No</li>
                <li class="pokemonNum">${pokemon.id}</li>
            </ul>
            <ul class="inf" id="inf2">
                <li class= "inf__li">LEVEL</li>
                <li class="pokemonLev">${pokemon.level}</li>
            </ul>
            </article>
            <article class="descripcion1">
            <ul class="inf">
                <li class= "inf__li">TYPE</li>
                <li class="pokemonTyp">${pokemon.type}</li>
            </ul>
            <ul class="inf">
                <li class= "inf__li">HABILITY</li>
                <li class="pokemonHab">${pokemon.abilities}</li>
            </ul>
            </article>
            <article class="descripcion2">
            <ul class="inf">
                <li class= "inf__li">HEIGHT</li>
                <li class="pokemonHei">${pokemon.height}</li>
            </ul>
            <ul class="inf">
                <li class= "inf__li" >WEIGHT</li>
                <li class="pokemonWei">${pokemon.weight}</li>
            </ul>
            </article>
            `
}

const otrospokemones = document.getElementById('otrospokemones')
otrospokemones.addEventListener("click", async (e) => {
  const getAtribute = e.target.getAttribute("data-pokemon");

  if (getAtribute != null) {
    const pokemon = allInfoPokemons.find(poke => poke.name === getAtribute);
    printDetallePokemon(pokemon)

  }
});
document.addEventListener("DOMContentLoaded", async () => {
  const allInfo = await getAllInfoPokemons(URL_APIDetails);
  printPokemonOtros(allInfo, otrosPokemones)
});

