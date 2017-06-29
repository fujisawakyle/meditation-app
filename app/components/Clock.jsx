const React = require('react');
import Countdown from './Countdown';
const PropTypes = require('prop-types');

const style = {
    clockDisplay : {
        width: '40px',
        height: '30px',
        fontSize: '1.5em'
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { seconds: '' };
        this.timer = 0;

        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        this.setState({
            seconds: event.target.value * 60
        });
    }

    render () {
        return (
            <form> 
                <div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                     minutes
                </div>
                state 
                {this.state.seconds}
                <button onClick={this.startTimer}>Start</button>
                m: {this.state.time.m} s: {this.state.time.s}
                
            </form>
        )
    }
}

export default Clock;
