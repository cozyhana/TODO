import React from 'react';
import { Text, View, Button } from 'react-native';
export class Content extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Content"
          onPress={() => this.props.navigation.navigate('SetParamSecen', {
            name: 'Brent'
          })}
        />
      </View>
    );
  }
}