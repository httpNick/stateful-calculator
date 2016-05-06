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
  
  getInitialState() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(operations)
    };
  },
  
  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    )
  },

  _renderRow(rowData, sectionID, rowID) {
    return (
      <TouchButton>
        <View style={styles.row}>
          <Image
            source={operations[rowID]}
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

var operations = [
  require('../images/plus.png'),
  require('../images/minus.png'),
  require('../images/multiply.png'),
  require('../images/division.png'),
  require('../images/equals.png'),
  require('../images/clear.png')
];

export default CalculatorOperations
