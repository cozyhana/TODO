import React from 'react';
import { Text, View, Button } from 'react-native';

export class Login extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: 'black',
    headerTitle: '登录1'
  })
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          登录
        </Text>
        <Button
          title="登录成功"
          onPress={() => this.props.navigation.navigate('TabNavigator')}
        />
      </View>
    );
  }
}