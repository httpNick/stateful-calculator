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
          {this.props.screenValues}
        </Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({

  screenLabel : {
    marginTop: 15,
    height: 50,
    fontSize : 30
  }

});

export default CalculatorScreen