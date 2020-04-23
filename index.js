/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {reactNavigaion} from './src/app'
import {name as appName} from './app.json';
console.ignoredYellowBox = [
    "Warning: Each",
    "Warning: Failed",
    "Require cycle:"
  ];
  console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => reactNavigaion);
