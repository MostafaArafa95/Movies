/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Root from "./app/index"



AppRegistry.registerComponent(appName, () => Root);
