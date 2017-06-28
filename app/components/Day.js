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

export default Day;