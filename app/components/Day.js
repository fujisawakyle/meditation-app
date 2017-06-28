const React = require('react');
const Timer = require('./Timer.js');
const Journal = require('./Journal.js');


class App extends React.Component {
  render() {
    return (
      <div>
        <Timer />
        <Journal />
      </div>  
    )
  }
}

module.exports = App;