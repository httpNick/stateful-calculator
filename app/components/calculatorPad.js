import React, {
  View,
  Text,
  TouchableHighlight,
  Component,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native'

class CalculatorPad extends Component {

  render() {
    return(
      <View>
        {this.generateAllButtons()}
      </View>
    )
  }

  numPadButton = (number) => {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
    <TouchableElement key={number}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {number}
        </Text>
      </View>
    </TouchableElement>
    )
  };

  generateAllButtons = () => {
    let i;
    let buttons = [];
    for (i = 0; i < 10; i++) {
      buttons.push(this.numPadButton(i));
    }
    return buttons;
  };

}

const styles = StyleSheet.create({

  button : {
    marginBottom: 7,
    backgroundColor: 'blue',
  },

  buttonText : {
    textAlign : 'center'
  }
});

export default CalculatorPad
