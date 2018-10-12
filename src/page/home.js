import React from 'react';
import { Text, View, Button } from 'react-native';
export class Home extends React.Component {
  render() {
    console.log('hf');
    let a = 1;
    let b = 2;
    let c
    c = a + b;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="首页??!!"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}