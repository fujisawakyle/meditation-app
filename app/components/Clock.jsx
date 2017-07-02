import React, { Component } from 'react';
import Countdown from './Countdown';

const style = {
    clockDisplay : {
        width: '40px',
        height: '30px',
        fontSize: '1.5em'
    }
}

//create a function for the rendered 'input' form
//create a state with a toggle
//call the input form when the toggle is true
//turn off the input form when the button is clicked.

/*class ClockBox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            seconds: this.props.seconds
        }

        
    }
    
    
    render() {
        return (
           
        )
    }
}
*/

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            startToggle: true, 
            seconds: '' 
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

    getSeconds() {

    }

    render () {
        return (
            <div> 
                <div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                        minutes
                </div>
                <Countdown seconds={this.state.seconds} logTime={60} getSeconds={this.getSeconds}/>
                
            </div>
        )
    }
}

export default Clock;
