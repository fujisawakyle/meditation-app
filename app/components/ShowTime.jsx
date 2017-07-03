import React, { Component } from 'react';

class ShowTime extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            seconds: undefined
        };

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        event.preventDefault();
        this.setState({
            seconds: event.target.value * 60
        });
        this.props.callback(this.state.seconds);
    };

    render () {
        return (
               <div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                        minutes
                </div>
        )
    }
};

export default ShowTime;