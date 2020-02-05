import { useEffect, useState } from 'react'

function useRandomPokemon(props) {
    const [ayam, setAyam] = useState([])
    useEffect(() => {
        const randomSkip = Math.floor(Math.random() * 949);
        fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=" + randomSkip)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                // console.log(myJson.results, "dari function");
                setAyam(myJson.results)
            });
    }, [props])
    return ayam
}

export default useRandomPokemon