// components/PositionGraph.js

import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function PositionGraph({ spriteId }) {
    const sprite = useSelector((state) =>
        state.sprites.sprites.find((sprite) => sprite.id === spriteId)
    );

    if (!sprite || sprite.positions.length < 2) {
        return null;
    }

    const data = {
        labels: sprite.positions.map((_, index) => index),
        datasets: [
            {
                label: "X Position",
                data: sprite.positions.map(pos => pos.x),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",
            },
            {
                label: "Y Position",
                data: sprite.positions.map(pos => pos.y),
                fill: false,
                backgroundColor: "rgba(153, 102, 255, 1)",
                borderColor: "rgba(153, 102, 255, 1)",
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    };

    return <Line data={data} options={options} />;
}
