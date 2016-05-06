import React, {
  View,
  ListView,
  Image,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'

import { TouchWithFeedback } from './touchWithFeedback';

var TouchButton = TouchWithFeedback();

var CalculatorOperations = React.createClass({
  
  render() {
    return (
      <View style={styles.list}>
        {this._singleOperationButton(require('../images/plus.png'), () => console.log('hi'))}
        {this._singleOperationButton(require('../images/minus.png'), () => {console.log('hi')})}
        {this._singleOperationButton(require('../images/multiply.png'), () => {console.log('hi')})}
        {this._singleOperationButton(require('../images/division.png'), () => {console.log('hi')})}
        {this._singleOperationButton(require('../images/equals.png'), () => {console.log('hi')})}
        {this._singleOperationButton(require('../images/clear.png'), () => this.props.clearScreen())}
      </View>
    )
  },

  _singleOperationButton(image, buttonOnClick) {
    return (
      <TouchButton onPress={buttonOnClick}>
        <View style={styles.row}>
          <Image
            source={image}
            style={styles.opButton}
          />
        </View>
      </TouchButton>
    )
  }

});

const styles = StyleSheet.create({

  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 64,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#CCC'
  },

  opButton : {
    height: 64,
    width: 64
  }

});

export default CalculatorOperations
