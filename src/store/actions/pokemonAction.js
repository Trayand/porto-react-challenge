

const fetchPokemonList = () => (dispatch, getState) => {
    dispatch({
        type: 'FETCH_START'
    })
    fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
        .then(response => {
            return response.json();
        })
        .then(pokemon => {
            // console.log(pokemon.results, "dari function");
            dispatch({
                type: 'FETCH_POKEMON_SUCCESS',
                pokemon
            })
        })
        .catch((err) => {
            dispatch({
                type: 'FETCH_POKEMON_FAILURE',
                error: err
            })

        })
}

export default fetchPokemonList