import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'


export default function allPokemon(props) {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemon.data)

    useEffect(() => {
        dispatch(fetchPokemonList())
        console.log(pokemons)
    }, [dispatch])

    return (<p>AYAM</p>)
}
