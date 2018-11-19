import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class HomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.props.navigation;
    console.log(this.props)
    return (
      <Button title="Chat" onPress={() => {
        this.props.navigation.navigate('Chat', {
          'name': 'hf'
        })
      }} />
    );
  }
}

// export const HomeButton = withNavigation(HomeButtonSecene);
