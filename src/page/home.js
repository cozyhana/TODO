import React from 'react';
import { Text, View, Button } from 'react-native';
export class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="HOME"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}