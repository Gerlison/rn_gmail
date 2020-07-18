import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import tron from 'reactotron-react-native';

import App from './App';

if (__DEV__) {
  console.tron = tron;
}

AppRegistry.registerComponent('rn_gmail', () => App);
