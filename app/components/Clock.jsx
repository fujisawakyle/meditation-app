import React, { Component } from 'react';
import Countdown from './Countdown';

const style = {
    clockDisplay : {
        width: '40px',
        height: '30px',
        fontSize: '1.5em'
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            showInput: true, 
            seconds: 0
        };
        this.timer = 0;

        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange(event) {
        event.preventDefault();
        this.setState({
            seconds: event.target.value * 60
        });
    
    }

    updater(dataToUpdate) {
        this.setState({
            seconds: dataToUpdate
        })
    }

    toggleInputShow() {
        this.setState({
            showInput: !this.state.showInput
        })
    }

    render () {
        let timeInput;
        if (this.state.showInput) {
            timeInput = (<div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                        minutes
                </div>)
        }
        else {
            timeInput = <div> </div>
        }
        return (
            <div> 
                {timeInput}
                <Countdown callback={this.toggleInputShow} seconds={this.state.seconds} logTime={60} />
                
            </div>
        )
    }
}

export default Clock;
