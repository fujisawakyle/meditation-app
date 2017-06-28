const React = require('react');
import Countdown from './Countdown';
const PropTypes = require('prop-types');
<<<<<<< HEAD
const Countdown = require('./Countdown.js');

const style = {
    clockDisplay : {
        width: '40px',
        height: '30px',
        fontSize: '1.5em'
    }
}
=======
>>>>>>> c6227de84c7609ff95cd808f1337c9d8728643d3

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
                <Countdown seconds={this.state.seconds}/>
            </form>
        )
    }
}

<<<<<<< HEAD
Clock.propTypes = {
    seconds: PropTypes.number.isRequired,

}
module.exports = Clock;
=======
export default Clock;
>>>>>>> c6227de84c7609ff95cd808f1337c9d8728643d3
