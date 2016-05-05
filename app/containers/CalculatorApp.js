import React, {
  View,
  Component
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as calcActions from '../actions/calcActions';

import CalculatorScreen from './../components/calculatorScreen';
import CalculatorNumbers from './../components/calculatorNumbers';
import CalculatorOperations from './../components/calculatorOperations';

class CalculatorApp extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View>

        <CalculatorScreen
          screenValues = { state.screenObjects }
        />
        <CalculatorOperations />
        <CalculatorNumbers
          onNumberPress = { actions.userNumberInput }
        />

      </View>
    )
  }

}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(calcActions, dispatch)
  })
)(CalculatorApp);

