import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

const WebsiteActivity = () => {

    return(
        <div className='website-activity'>
            <h3 className='flag'>Website Activity</h3>
            <div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default WebsiteActivity;