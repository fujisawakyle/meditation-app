import React, { Component } from 'react';
import Graph from './Graph';

class WeekDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        
    };
  }

  render() {
    return (
        <div>
            <h3> This week's meditation </h3>
            <Graph />
        </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default WeekDisplay;

