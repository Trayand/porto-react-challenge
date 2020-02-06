import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import BarChart from './BarChart';
import load from '../spinner.gif'
import '../style/Card.css'

function MainData({ pokeData, setPokeData }) {
    const [barData, setBarData] = useState({
        labels: ['Speed', 'Special-defence', 'Special-attack', 'Defence', 'Attack', 'HP'],
        datasets: [
            {
                label: 'params.name',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    })
    const params = useParams()

    // console.log(barData, 'ini console');


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                setPokeData(myJson)
                setBarData(barData => ({
                    ...barData,
                    datasets: [{
                        ...barData.datasets[0],
                        label: params.name,
                        data: myJson.stats
                            ? myJson.stats.map(status => status.base_stat)
                            : barData.datasets[0].data
                    }]
                }))
            });
    }, [setPokeData, params.name])

    return (
        <div style={{
            width: '100vw',
            height: '100vh'
        }}>
            <p style={{
                color: 'black',
                WebkitTextFillColor: 'black',
                WebkitTextStrokeColor: 'white',
                WebkitTextStrokeWidth: 2,
                fontSize: 58,
                textDecoration: 'underline',
                margin: 70
            }} >{pokeData.name}</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexFlow: 'row wrap' }}>
                <ul style={{ width: '30vw' }} className="halft">Abilities :{
                    pokeData.abilities
                        ? pokeData.abilities.map(({ ability }) => {
                            return <li key={ability.name} style={{ listStylePosition: 'inside' }}>{ability.name}</li>
                        })
                        : <li></li>
                }</ul>
                <div style={{ width: '30vw' }} className="halft">
                    <img src={
                        pokeData.sprites
                            ? pokeData.sprites.front_default
                            : load
                    } style={{ height: 300}} alt="not_avaible" />

                </div>
                <div style={{ height: 250, width: '30vw' }} className={"bar-style"}>
                    <BarChart barData={barData} />
                </div>
            </div>
            <h2 className={"panah"} style={{marginTop: 150, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontSize: 100 }}>&#8681;</span>
                    All Pokemon Below
                <span style={{ fontSize: 100 }}>&#8681;</span>
            </h2>
        </div>
    )
}

export default MainData