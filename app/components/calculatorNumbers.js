import React, {
  View,
  ListView,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  Component
} from 'react-native'
import { TouchWithFeedback } from './touchWithFeedback';

var TouchButton = TouchWithFeedback();

var CalculatorNumbers = React.createClass({

  getInitialState() {
    console.log(this.props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(numbers)
    }
  },

  render() {
    return(
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    )
  },

  _renderRow(rowData, sectionID, rowID) {

    return (
      <TouchButton
        onPress={() => this.props.onNumberPress(rowID)}
      >
          <View
            style={styles.row}>
            <Image
              source={numbers[rowID]}
              style={styles.calcButton}
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

  calcButton : {
    height: 64,
    width: 64
  }
});

const numbers = [
  require('../images/number-0.png'),
  require('../images/number-1.png'),
  require('../images/number-2.png'),
  require('../images/number-3.png'),
  require('../images/number-4.png'),
  require('../images/number-5.png'),
  require('../images/number-6.png'),
  require('../images/number-7.png'),
  require('../images/number-8.png'),
  require('../images/number-9.png')
];

export default CalculatorNumbers
