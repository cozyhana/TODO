import React from 'react';
import { Text, View, Button } from 'react-native';
export class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111' }}>
        {/* other code from before here */}
        <Button
          title="About"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}