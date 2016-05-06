import React, {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

export function TouchWithFeedback() {
  if (Platform.OS == 'android') return TouchableNativeFeedback;
  return TouchableHighlight;
}
