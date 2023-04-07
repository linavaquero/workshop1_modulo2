//alert("estoy enlazada")

let pokedex = []; //creamos un array vacio
const ShowIconType = [
  {
    "name": "normal",
    "image": ""
  },
  {
    "name": "fire",
    "image": ""
  },
  {
    "name": "water",
    "image": ""
  },
  {
    "name": "electric",
    "image": ""
  },
  {
    "name": "grass",
    "image": ""
  },
  {
    "name": "ice",
    "image": ""
  },
  {
    "name": "fighting",
    "image": ""
  },
  {
    "name": "poison",
    "image": ""
  },
  {
    "name": "ground",
    "image": ""
  },
  {
    "name": "flying",
    "image": ""
  },
  {
    "name": "psychic",
    "image": ""
  },
  {
    "name": "bug",
    "image": ""
  },
  {
    "name": "rock",
    "image": ""
  },
  {
    "name": "ghost",
    "image": ""
  },
  {
    "name": "dragon",
    "image": ""
  },
  {
    "name": "dark",
    "image": ""
  },
  {
    "name": "steel",
    "image": ""
  },
  {
    "name": "fairy",
    "image": ""
  },

]

const URL_API = "https://pokeapi.co/api/v2/pokemon"; //API
//const boxButtons = document.getElementById("lado1");//
const containerPoke = document.getElementById("contenedorpokemon"); //captura del contenedor

const containerDetails = document.querySelector(".descripcion"); //Captura la sección de los detalles

//Nos obtiene los pokemones de la API
const getPokeFromApi = async (url) => { 
    try {
      const { data } = await axios.get(url); //desestructuración de objetos
      return data.results;
    } catch (error) {
      console.log(error);
      alert("Usuario, ocurrio un error");
      return [];
    }
  };
//función pintar pokemon principal 
//capturar el contenedor 
const URL_APIDetails = "https://pokeapi.co/api/v2/pokemon";
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
          // type:response.data.types,
          type:response.data.types[0].type.name,
          weight:response.data.weight,
          level:response.data.base_experience,
          // level:response.data.growth-rate.map(item=> item.growth-rate.levels.level),
          // type:response.data.type.map(item=> item.type.name),
          // level:response.data.levels.map(item=> item.levels.level),
          // abilities: response.data.abilities.map(item=> item.ability.name),
          abilities: response.data.abilities[0].ability.name,
        }; 
        allInfoPokemons.push(poke);
      }
      return allInfoPokemons;
    } catch (error) {
      // console.log(error);
      return []
    }
  }

// const getPokemonId = async (id) => { 
//     //METODO GET
//     const response = await axios(`${URL}/${id}`);
//     const PokemonId= response.data.id;
//     console.log("datos del get post by ID", PokemonId);
// };

// const printPokemonPower = (pokemonList, container) => {
//     container.innerHTML = "";
//     pokemonList.forEach((pokemon) => {
//         // que la imagen que pinte sea la del poder 
//       container.innerHTML += `
//       <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
//       <h1>${pokemon.name}</h1>
//       `;
//     });
//   };

//   const printPokemon = (pokemonList, container) => {
//     container.innerHTML = "";
//     pokemonList.forEach((poke) => {
//       container.innerHTML += `
//       <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
//       `;
//     });
//   };
// // función pintar los detalles 
//   const pokemonNum= document.querySelector(".pokemonNum");
//   const pokemonLev=document.querySelector(".pokemonLev");
//   const pokemonTyp=document.querySelector(".pokemonTyp");
//   const pokemonHab=document.querySelector(".pokemonHab");
//   const pokemonHei=document.querySelector(".pokemonHei");
//   const pokemonWei=document.querySelector(".pokemonWei");
  
//   const printDetails = (pokemonList, container) => {
//     container.innerHTML = "";
//     pokemonList.forEach((pokemon) => {
//         let pokemonNumText= document.createTextNode();
//         // pokemonNum.appendChild(pokemonNumText);
//         const getInfoOnePokemon = async (url) => { 
//           try {
//             const { data } = await axios.get(url); //desestructuración de objetos
//             return data.id;
//           } catch (error) {
//             console.log(error);
//             alert("Usuario, ocurrio un error");
//             return [];
//           }
//         };
//       console.log(pokemonId);
//     // insertar la información en el contenedor
//         pokemonNum.innerText= pokemonId;
//         const pokemonLevel= 
//         pokemonLev.innerText=pokemonLevel
//         const pokemonType=
//         pokemonTyp.innerText=pokemonType
//         const pokemonHeight= 
//         pokemonHei.innerText=pokemonHeight;
//         const pokemonWeight=
//         pokemonWei.innerText=pokemonWeight;
//     });
   
//   };

  document.addEventListener("click", async (e) => {
    const getAtribute = e.target.getAttribute("data-pokemon");
    console.log(getAtribute);
    if (getAtribute ==="pokemon1") {
      const pokemon = await getAllInfoPokemons(URL_APIDetails);
      console.log(pokemon);
    }
});
document.addEventListener("DOMContentLoaded", async () => {
  //Ejecutamos la funcion que nos obtiene los pokemones
  // pokemons = await getPokemonsFromApi(URL_API);
  // printPokemonsButtons(pokemons, boxButtons);

  const allInfo = await getAllInfoPokemons(URL_APIDetails);
  // const pokeiId = await getPokemonId(URL_APIDetails);
  console.log(allInfo);
  // console.log(pokeiId);

});
  



