import React, {
  View,
  ListView,
  Text,
  Image,
  TouchableHighlight,
  Component,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native'


var CalculatorPad = React.createClass({

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(numbers),
    };
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
      <TouchableNativeFeedback>
          <View style={styles.row}>
            <Image source={numbers[rowID]} style={styles.calcButton} />
          </View>
      </TouchableNativeFeedback>
    )
  },

  numPadButton(number) {
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
  },

  generateAllButtons() {
    let i;
    let buttons = [];
    for (i = 0; i < 10; i++) {
      buttons.push(this.numPadButton(i));
    }
    return buttons;
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
    height: 100,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#CCC'
  },

  calcButton : {
    height: 64,
    width: 64
  }
});

var numbers = [
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

export default CalculatorPad
