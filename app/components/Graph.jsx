import React, { Component } from 'react';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        someKey: 'someValue' 
    };
  }

  render() {
    return (
        <div>
        
        </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Graph;
