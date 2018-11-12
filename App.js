import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppNavigator from './router'
import { Login, Home, Chat, Content, About, WebScene } from './src/page/index';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
