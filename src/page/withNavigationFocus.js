import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

class WithNavFocusSecene extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text> {this.props.isFocused ? 'Focused' : 'Not focused'} </Text>
      </View>
    );
  }
}

export const WithNavFocus = withNavigationFocus(WithNavFocusSecene);
