import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default (props) => {
    return (
        <Bar
            data={props.barData}
            options={{
                maintainAspectRatio: false, scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 10
                        }
                    }]
                }
            }}
        />
    )
}