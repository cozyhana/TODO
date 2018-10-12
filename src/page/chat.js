import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
export class Chat extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="一起聊天吧"
          onPress={() => this.props.navigation.navigate('About')}
        />
        <TextInput />
      </View>
    );
  }
}