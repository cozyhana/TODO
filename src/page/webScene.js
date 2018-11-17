import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation';
import Gobackto from './../static/svg/Gobackto'

class WebSceneHome extends React.Component {
  static navigationOptions = {
    title: 'Right',
  };

  render() {
    let { navigation } = this.props
    return (
      <View>
        <Button
          onPress={() => navigation.navigate('About')}
          title="go to about"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

class Left extends React.Component {
  static navigationOptions = {
    title: 'Left',
  };

  render() {
    let { navigation } = this.props
    return (
      <View>
        <Button
          onPress={() => navigation.navigate('WebSceneHome')}
          title="left"
        />
      </View>
    );
  }
}

export const WebScene = createMaterialTopTabNavigator({
  Left: Left,
  WebSceneHome: WebSceneHome
}, {
    navigationOptions: () => {
      headerTitle: 'da'
    }
  })