import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

//make API call to update state.

const style = {
    graph : {
        
    }
}

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        chartData: {
            labels: [
                'A', 'B'
            ],
            datasets: [
                {
                    label: 'minutes',
                    data: [
                        10,
                        15
                    ],
                    backgroundColor: 'blue'
                }
            ]
        }, 
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false,
            }
        }
    };
  }

  render() {
    return (
        <div style={style.graph}>
            <Bar
                data = {this.state.chartData}
                options = {this.state.options}
                width = {100}
                height = {50} />
        </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Graph;
