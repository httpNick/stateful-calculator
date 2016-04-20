import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app/components/app';

class StatefulCalculator extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('StatefulCalculator', () => StatefulCalculator);
