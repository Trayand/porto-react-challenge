import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import BarChart from './BarChart';

function MainData({pokeData, setPokeData}) {
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
        <>
            <p>{pokeData.name}</p>
            {
                pokeData.abilities
                    ? pokeData.abilities.map(({ ability }) => {
                        return <p key={ability.name}>{ability.name}</p>
                    })
                    : <p></p>
            }
            <img src={
                pokeData.sprites
                    ? pokeData.sprites.front_default
                    : null
            } style={{ height: 300, width: 300 }} />
            <div style={{ height: 250 }}>
                <BarChart barData={barData} />
            </div>
        </>
    )
}

export default MainData