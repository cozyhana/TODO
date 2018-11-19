import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import Gobackto from './../static/svg/Gobackto';
export class Chat extends React.Component {
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
          onPress={() => navigation.navigate('Drawer')}
        />
        <Text> navigation.state.params.name: {navigation.state.params ? navigation.state.params.name : null}  </Text>
      </View>
    );
  }
}



