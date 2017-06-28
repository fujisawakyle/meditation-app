const React = require('react');
const Timer = require('./Timer.js');
const Journal = require('./Journal.js');


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

module.exports = Day;