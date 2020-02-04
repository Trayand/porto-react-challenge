import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./style/Card.css";

export default function Main() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const randomSkip = Math.floor(Math.random() * 939) + 1;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=" + randomSkip)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        // console.log(myJson.results, "dari function");
        setPokemons(myJson.results);
      });
  }, []);

  return (
    <>
      <ul className={"container"}>
        {pokemons.map((pokemon, index) => {
          return <Card key={index} name={pokemon.name} url={pokemon.url} />;
        })}
      </ul>
    </>
  );
}
