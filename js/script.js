// Recibir Pokemones
const getPokemons = () =>{
    fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
    .then(function (response){
        const pokemon = response.json();
        console.log(pokemon);
        // then(function (pokemon){
        //     console.log(pokemon)
        // })
    })
}
getPokemons();

//Busqueda del Pokemon por nombre
const filtroNombre = (nombre, arrayPokemon) => {
    const pokemonFiltrado = arrayPokemon.filter(poke => poke.name.toLowerCase().LowerCase.
    includes(nombre.toLowerCase()))
}

