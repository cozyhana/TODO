import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import Gobackto from './../static/svg/Gobackto'

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: '返回',
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Gobackto />
    ),
  };

  render() {
    let { navigation } = this.props
    console.log(navigation)
    return (
      <View>
        <Button
          onPress={() => navigation.openDrawer()}
          title="Go to notifications"
        />

      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Gobackto />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.closeDrawer()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const WebScene = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
