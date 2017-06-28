const React = require('react');
import Timer from './Timer';
import Journal from './Journal'

require('babel-polyfill');

class Day extends React.Component {
  render() {
    return (
      <div>
        <Timer />
        <Journal />
      </div>  
    )
  }
}

<<<<<<< HEAD
module.exports = Day;
=======
export default Day;
>>>>>>> c6227de84c7609ff95cd808f1337c9d8728643d3
