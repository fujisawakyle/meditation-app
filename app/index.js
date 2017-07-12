
import React from 'react';
import ReactDOM from 'react-dom';
import Day from './components/Day'
import Timer from './components/Timer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
require('./index.css');

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Day />
  </Provider>
  , document.getElementById('app')
);