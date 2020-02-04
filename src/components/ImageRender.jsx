import React, { useEffect, useState } from "react";

export default function Imgur(props) {
    const [find, setFind] = useState('')
    useEffect(() => {
        if (props.keyword) {
            fetch("https://pokeapi.co/api/v2/pokemon/" + props.keyword)
                .then(response => {
                    return response.json();
                })
                .then(myJson => {
                    console.log(myJson, 'string')
                    if (myJson.sprites) {
                        setFind(myJson.sprites.front_default)
                    } else {
                        console.log('ayam');
                    }
                })
        }
    }, [props.keyword])

    return (
        <img src={find} alt="" />
    )
}