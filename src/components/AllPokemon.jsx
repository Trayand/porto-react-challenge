import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import fetchPokemonList from '../store/actions/pokemonAction';
import { Button } from 'react-bootstrap';
import "../style/Card.css";
import { Link } from "react-router-dom";

export default function AllPokemon(props) {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemon.data)

    useEffect(() => {
        dispatch(fetchPokemonList())
    }, [])

    useEffect(() => {
        console.log(pokemons);
    })

    const scroller = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    } 

    return (
        <>
            <ul>
                {
                    pokemons.results
                        ? pokemons.results.map(pokemon => {
                            return <Link
                                to={"/" + pokemon.name} key={pokemon.url}>
                                <Button
                                    onClick={scroller}
                                    variant="outline-light" className="kartu timbul"
                                >{pokemon.name}</Button></Link>
                        })
                        : <p>kosong borr</p>
                }
            </ul>
        </>
    )
}