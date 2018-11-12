import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Gobackto from './../static/svg/Gobackto'
export class Chat extends React.Component {
  static navigationOptions = () => ({
    headerTitle: '返回',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'red'
    }
  })
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="一起聊天吧"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <TextInput />
      </View>
    );
  }
}


