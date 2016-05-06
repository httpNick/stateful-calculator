import * as types from './actionTypes';

export function userNumberInput(numberPressed) {
  return {
    number: numberPressed,
    type: types.NUMBER_PRESS
  };
}

export function clearScreen() {
  return {
    type: types.CLEAR_SCREEN
  }
}
