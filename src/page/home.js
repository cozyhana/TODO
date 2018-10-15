import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

export class Home extends React.Component {

  static navigationOptions = (navigation, navigationOptions) => {
    console.log(navigation)
    return ({
      headerTitle: '首页',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#f5f5f5'
      }
    })
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="首页"
          onPress={() => this.props.navigation.navigate('WebScene')}
        />
      </View>
    );
  }
}