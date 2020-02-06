import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import fetchPokemonList from '../store/actions/pokemonAction';
import { Button } from 'react-bootstrap';
import "../style/Card.css";
import { Link } from "react-router-dom";

export default function AllPokemon(props) {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemon.data)
    const [totalLoad, setTotalLoad] = useState(32)
    // console.log(totalLoad)
    useEffect(() => {
        dispatch(fetchPokemonList())
        const scrollHandler = () => {
            // console.log(document.documentElement.scrollHeight +' '+ document.documentElement.scrollTop + ', ' + document.documentElement.clientHeight)
            if (document.documentElement.scrollHeight === document.documentElement.scrollTop + document.documentElement.clientHeight) {
                setTotalLoad(totalLoad => totalLoad + 32)
            }
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    // useEffect(() => {
    //     alert(window.pageYOffset);
    // },[document.documentElement.scrollTop])

    const scroller = (name) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        console.log(name);
        // console.log(document.documentElement.scrollHeight +' '+ document.documentElement.scrollTop + ', ' + document.documentElement.clientHeight)
        // alert(document.documentElement.scrollTop - (document.documentElement.scrollHeight -  document.documentElement.clientHeight) )
    }

    return (
        <>
            <ul style={{ marginBottom: 30 }}>
                {
                    pokemons.results
                        ? pokemons.results.slice(0, totalLoad).map(pokemon => {
                            return <Link
                                to={"/" + pokemon.name} key={pokemon.url}>
                                <Button
                                    onClick={() => scroller(pokemon.name)}
                                    variant="outline-light" className="kartu timbul"
                                >{pokemon.name}</Button></Link>
                        })
                        : <p>kosong borr</p>
                }
            </ul>

            <p style={{ marginBottom: 100 }}>{
                totalLoad > 966
                ? ''
                : 'scroll more to find more'
            }</p>
        </>
    )
}