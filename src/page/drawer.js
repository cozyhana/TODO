import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
import Gobackto from './../static/svg/Gobackto';

class ChatHome extends React.Component {
  static navigationOptions = () => ({
    headerTitle: '返回',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'red'
    }
  })
  render() {
    let navigation = this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="打开"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    );
  }
}

class ChatSecen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: '返回',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'red'
    }
  })
  render() {
    let navigation = this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="drawer"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
    );
  }
}


export const Drawer = createDrawerNavigator({
  ChatHome: ChatHome,
  ChatSecen: ChatSecen,
}, {
    drawerPosition: 'right'
  })


