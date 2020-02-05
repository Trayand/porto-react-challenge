import React, { useEffect, useState } from "react";
import "../style/Card.css";
import { Button } from 'react-bootstrap';
import notfound from '../notfound.png'
import load from '../spinner.gif'
import { Link } from "react-router-dom";

export default function Imgur(props) {
    const [find, setFind] = useState("")
    const [tulisan, setTulisan] = useState('')
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        setFind(load)
        if (props.keyword) {
            if (!props.keyword === '') return { sprites: { front_default: notfound } }
            fetch("https://pokeapi.co/api/v2/pokemon/" + props.keyword)
                .then(response => {
                    if (response.status !== 404) return response.json();
                    return { sprites: { front_default: notfound } }
                })
                .then(myJson => {
                    if (myJson.sprites) {
                        setFind(myJson.sprites.front_default)
                        setTulisan(props.keyword)
                        setShowButton(true)
                        if (!myJson.sprites.front_default) setFind('https://i.imgur.com/gyPVeDC.gif')
                        if (myJson.sprites.front_default === notfound) setShowButton(false)
                    } else {
                        // console.log(myJson.sprites.front_default === null);
                        setTulisan('')
                        setFind('')
                    }
                })
        } else {
            setTulisan('')
            setFind('https://66.media.tumblr.com/610353183d90957ed0932fa9d96fcac9/tumblr_mf9xatSxBw1rp4ck4o1_500.gifv')
        }
    }, [props.keyword])

    return (
        <>
            <h3>{tulisan}</h3>
            <img src={find} alt='' className={"image-renderer"} />
            {
                showButton
                    ? <Link to={"/" + props.keyword}><Button>Show Detail</Button></Link>
                    : <p></p>
            }

        </>
    )
}