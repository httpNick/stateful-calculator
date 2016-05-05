import React, {
  View,
  StyleSheet,
  Text
} from 'react-native'

var CalculatorScreen = React.createClass({
  render() {
    return (
      <View>
        <Text style={styles.screenLabel}>
          Hello, Calculator
        </Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({

  screenLabel : {
    height: 50,
    fontSize : 30
  }

});

export default CalculatorScreen