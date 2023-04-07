//alert("estoy enlazada")

let pokedex = []; //creamos un array vacio

const URL_API = "https://pokeapi.co/api/v2/pokemon"; //API
//const boxButtons = document.getElementById("lado1");//
const containerPoke = document.getElementById("contenedorpokemon"); //captura del contenedor

const containerDetails = document.querySelector(".descripcion"); //Captura la sección de los detalles

//Nos obtiene los pokemones de la API
const getPokeFromApi = async (url) => { 
    try {
      const { data } = await axios.get(url); //desestructuración de objetos
    console.log(data.results);
      return data.results;
    } catch (error) {   
      console.log(error);
      alert("Usuario, ocurrio un error");
      return [];
    }
  };
  document.addEventListener("DOMContentLoaded", async () => {
    //Ejecutamos la funcion que nos obtiene los pokemones
 pokedex= await getPokeFromApi(URL_API)
 console.log("pokedex", pokedex);
  });

