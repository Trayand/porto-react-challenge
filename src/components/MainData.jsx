import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

function MainData(props) {
    // const [pokeData, setPokeData] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                props.setPokeData(myJson)
                // console.log(myJson.results, "dari function");
                // console.log(myJson);    
            });
    }, [params.name])

    useEffect(() => {
        if (props.pokeData.abilities) console.log(props.pokeData);
        if(props.pokeData.sprites) console.log(props.pokeData.sprites.front_default);
    }, [props.pokeData])

    return (
        <>
            <p>{props.pokeData.name}</p>
            {
                props.pokeData.abilities
                    ? props.pokeData.abilities.map(({ ability }) => {
                        return <p>{ability.name}</p>
                    })
                    : <p></p>
            }
            {
                props.pokeData.sprites
                ?<img src={props.pokeData.sprites.front_default}></img>
                : <img src=""/>
            }
        </>
    )
}

export default MainData