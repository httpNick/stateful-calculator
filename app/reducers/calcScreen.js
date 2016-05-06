import * as types from '../actions/actionTypes';

const initialState = {

  screenObjects : []

};

export default function calcScreen(state = initialState, action) {

  switch(action.type){

    case types.NUMBER_PRESS:

      return Object.assign({}, state, {
        screenObjects: [
          ...state.screenObjects,
          action.number
        ]
      });

    case types.CLEAR_SCREEN:
      return Object.assign({}, state, {
        screenObjects: []
      });

    default:

      return state;

  }

}
