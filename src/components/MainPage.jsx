import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from './Search';
import Imgur from './ImageRender';
import { Button } from 'react-bootstrap';
import useRandomPokemon from './hooks/RandomPokemon'
import "./style/Card.css";


function MainPage(props) {
    const [keyword, setKeyword] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [angkaRandom, setAngkaRandom] = useState(0)

    let poks = useRandomPokemon(angkaRandom)
    // console.log(poks);
    useEffect(() => {
        setPokemons(poks)
        // setPokemons(useRandomPokemon())
    }, [poks])

    return (
        <div className={'holdem'}>
            <img className={"main-image"} src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
            <Search keyword={keyword} setKeyword={setKeyword} />

            <Imgur keyword={keyword} />

            <ul className={"container"}>
                {pokemons.map((pokemon, index) => {
                    return <Card
                        key={index}
                        name={pokemon.name}
                        url={pokemon.url}
                        setKeyword={setKeyword} />;
                })}
            </ul>

            <Button variant="light" onClick={() => {
                setAngkaRandom(Math.random())
            }}> Gimme random pokemon </Button>
        </div>
    );
}

export default MainPage