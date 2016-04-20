import React, {
  View,
  Component
} from 'react-native';
import CalculatorPad from './calculatorPad';

class App extends Component {
  render() {
    return (
      <View>
        <CalculatorPad />
      </View>
    )
  }
}

export default App
