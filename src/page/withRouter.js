import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class WithRouterS extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />;
      </View>
    );
  }
}

export const WithRouterSecene = withNavigation(WithRouterS);
