
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App.js')
var Timer = require('./components/Timer.js')

ReactDOM.render(
  <App />,
  document.getElementById('app')
);