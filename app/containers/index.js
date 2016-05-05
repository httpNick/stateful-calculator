import React, { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calcScreen from '../reducers/calcScreen';
import CalculatorApp from './CalculatorApp';

const store = createStore(calcScreen);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CalculatorApp />
      </Provider>
    );
  }
}
