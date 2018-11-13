import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import Gobackto from './../static/svg/Gobackto'

export class WebScene extends React.Component {
  static navigationOptions = {
    headerTitle: '',
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
          onPress={() => navigation.navigate('Home')}
          title="Go to notifications"
        />
        <Button
          onPress={() => navigation.goBack()}
          title="Go back"
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
